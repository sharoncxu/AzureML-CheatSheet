---
title: Distributed GPU Training
id: distributed-training
---

## Basic Concepts

We assume readers already understand the basic concept of distributed GPU training such as _data parallelism, distributed data parallelism, and model parallelism_. This guide aims at helping readers running existing distributed training code on AzureML. 

:::info 
Most of this guide is based on __PyTorch__ and packages on top of it. For __TensorFlow__, see [TensorFlow](#tensorflow).

If you don't know which type of parallelism to use, for >90% of the time you should use __Distributed Data Parallelism__.
:::


### Process Group and Communication Backend
The backbone of any distributed training is based on a group of processes that knows each other and 
can communicate with each other using a backend. For PyTorch, the process group is created by calling `torch.distributed.init_process_group` in __all distributed processes__ to collectively form a process group. 
```
torch.distributed.init_process_group(backend='nccl', init_method='env://', ...)
```
The most common backend used are __mpi__, __nccl__ and __gloo__. For GPU based training __nccl__ is strongly preferred and should be used whenever possible. `Init_method` specifies how each processes can discover each other and initialize as well as verify the process group using the communication backend. By default PyTorch will look for environment variables. The following is a list of key environment variables, documented [here](https://pytorch.org/docs/stable/distributed.html#torch.distributed.init_process_group). 

- MASTER_PORT - required; has to be a free port on machine with rank 0
- MASTER_ADDR - required (except for rank 0); address of rank 0 node
- WORLD_SIZE - required; can be set either here, or in a call to init function. The total number of processes. This should be equal to the number of devices (GPU) used for distributed training. 
- RANK - required; can be set either here, or in a call to init function. The rank (0 to world_size - 1) of the current process in the process group. 

Beyond these, many application will need the following 

- LOCAL_RANK - the relative rank within the node. This information is useful because many operations such as data preparation only should be performed once per node --- usually on local_rank = 0.
- NODE_RANK - the relative rank for the node among all the nodes. 

:::info
RANK can be inferred by NODE_RANK and LOCAL_RANK. NODE_RANK is often used by utility launcher script (such as [torch.distributed.launch](https://github.com/pytorch/pytorch/blob/master/torch/distributed/launch.py)) that can created multiple processes on the same node. See [Launch Processes in Distributed Nodes](#launch-processes-in-distributed-nodes). 
:::

### AML Environment Variables 

```python 
import os
def set_environment_variables_for_nccl_backend(single_node=False, master_port=6105):
    os.environ['RANK'] = os.environ['OMPI_COMM_WORLD_RANK']
    os.environ['WORLD_SIZE'] = os.environ['OMPI_COMM_WORLD_SIZE']

    if not single_node: 
        master_node_params = os.environ['AZ_BATCH_MASTER_NODE'].split(':')
        os.environ['MASTER_ADDR'] = master_node_params[0]

        # Do not overwrite master port with that defined in AZ_BATCH_MASTER_NODE
        if 'MASTER_PORT' not in os.environ:
            os.environ['MASTER_PORT'] = str(master_port)
    else:
        os.environ['MASTER_ADDR'] = os.environ['AZ_BATCHAI_MPI_MASTER_NODE']
        os.environ['MASTER_PORT'] = '54965'
    print('NCCL_SOCKET_IFNAME original value = {}'.format(os.environ['NCCL_SOCKET_IFNAME']))
    # TODO make this parameterizable
    os.environ['NCCL_SOCKET_IFNAME'] = '^docker0,lo'

    print('RANK = {}'.format(os.environ['RANK']))
    print('WORLD_SIZE = {}'.format(os.environ['WORLD_SIZE']))
    print('MASTER_ADDR = {}'.format(os.environ['MASTER_ADDR']))
    print('MASTER_PORT = {}'.format(os.environ['MASTER_PORT']))
    # print('MASTER_NODE = {}'.format(os.environ['MASTER_NODE']))
    print('NCCL_SOCKET_IFNAME new value = {}'.format(os.environ['NCCL_SOCKET_IFNAME']))

def get_rank():
    return int(os.environ['OMPI_COMM_WORLD_RANK'])

def get_local_rank():
    return int(os.environ['OMPI_COMM_WORLD_LOCAL_RANK'])

def get_global_size():
    return int(os.environ['OMPI_COMM_WORLD_SIZE'])

def get_local_size():
    return int(os.environ['OMPI_COMM_WORLD_LOCAL_SIZE'])	

def get_world_size():
    return int(os.environ['OMPI_COMM_WORLD_SIZE'])
	 
```


### Launch Processes in Distributed Nodes







## Examples

### Pytorch Distributed Data Parallel

### Hugging Face Transformer

### Pytorch Lightning

## TensorFlow

When a `TensorflowConfiguration` is set to be the distributed_job_config parameter of the ScriptRunConfig constructor, AzureML sets up environment variable `TF_CONFIG` in all nodes for [native distributed TensorFlow](https://www.tensorflow.org/guide/distributed_training) API `tf.distribute.Strategy`. If you are using `tf.distribute.experimental.MultiWorkerMirroredStrategy`, specify the worker_count in the `TensorflowConfiguration` corresponding to the number of nodes for your training job.

```python
from azureml.core import ScriptRunConfig
from azureml.core.runconfig import TensorflowConfiguration

distr_config = TensorflowConfiguration(worker_count=2, parameter_server_count=0)

src = ScriptRunConfig(source_directory=source_dir,
                      script='train.py',
                      arguments= ... ,
                      compute_target= ... ,
                      environment= ... ,
                      distributed_job_config=distr_config)
```
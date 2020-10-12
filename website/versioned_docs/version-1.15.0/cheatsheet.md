---
title: Cheat Sheet
id: cheatsheet
---

### Basic setup

**Connect to workspace.**

```python
from azureml.core import Workspace
ws = Workspace.from_config()
```

For more details: [Workspaces](workspace)

**Connect to compute target.**

```python
from azureml.core import ComputeTarget
target = ComputeTarget(ws, '<compute-target-name>')
```

For more details: [Compute Target](compute-targets)

**Prepare Python environment.**  
You can use a `requirements.txt` file to define a Python environment on your compute.

```python
from azureml.core import Environment
env = Environment.from_pip_requirements('<environment-name>', '<path/to/requirements.txt>')
```

You can also use conda environments and docker images to prepare your environments.  

For more details: [Environment](environment)


### Submit code

To run code in AML you need to:

1. **Configure**: Configuration includes specifying the code to run, the compute
target to run on and the Python environment to run in.
2. **Submit**: Create or reuse an AML Experiment and submit the run.

#### ScriptRunConfig (Configure)

A typical directory may have the following structure:

```bash
source_directory/
    script.py    # entry point to your code
    module1.py   # modules called by script.py     
    ...
```

To run `$ python script.py` on a remote compute cluster `target: ComputeTarget` with an
environment `env: Environment` we use the `ScriptRunConfig` class.

```python
from azureml.core import ScriptRunConfig

config = ScriptRunConfig(
    source_directory='<path/to/source_directory>',  # relative paths okay
    script='script.py',
    compute_target=target,
    environment=env,
)
```

:::info
- `compute_target`: If not provided the script will run on your local machine **TODO: does this require docker?**
- `environment`: If not provided, uses a default Python environment managed by Azure ML (azureml.core.runconfig.DEFAULT_CPU_IMAGE) **TODO: provide details on this image**.
:::

#### Experiment (Submit)

To submit this code we create an `Experiment`: a light-weight container that helps to
oraganize our submissions and keep track of code (See [Run History](run-history)).

```python
exp = Experiment(ws, '<experiment-name>')
run = exp.submit(config)
print(run.get_portal_url())
```

This link will take you to the Azure ML Studio where you can monitor your run.

For more details: [ScriptRunConfig](script-run-config)

### Datastore

Each workspace comes with a default datastore.

```python
ds = ws.get_default_datastore()
```

Any datastore that is registered to workspace can be accessed by name.

```python
from azureml.core import Datastore
ds = Datastore.get(ws, "<name-of-registered-datastore>")
```

To register a store via a SAS token:

```python
ds = Datastore.register_azure_blob_container(
    workspace=ws,
    datastore_name="<datastore-name>",
    container_name="<container-name>",
    account_name="<account-name>",
    sas_token="<sas-token>",
)
```

For more ways authentication options and for different underlying storage see
the AML documentation on
[Datastores](https://docs.microsoft.com/en-us/python/api/azureml-core/azureml.core.datastore(class)?view=azure-ml-py).


### Logging

#### Logging metrics

To log metrics in your running script add the following:

```python
from azureml.core import Run
run = Run.get_context()
run.log("metric-name", metric_value)
```

#### Viewing metrics with the Python SDK

Viewing metrics in a run

```python
metrics = run.get_metrics()
# metrics is of type Dict[str, List[float]] mapping mertic names
# to a list of the values for that metric in the given run.

metrics.get("metric-name")
# list of metrics in the order they were recorded
```

To view all recorded values for a given metric `my-metric` in a
given experiment `my-experiment`:

```python
experiments = ws.experiments
# of type Dict[str, Experiment] mapping experiment names the
# corresponding Experiment

exp = experiments['my-experiment']
for run in exp.get_runs():
    metrics = run.get_metrics()
    
    my_metric = metrics.get('my-metric')
    if my_metric:
        print(my_metric)
```
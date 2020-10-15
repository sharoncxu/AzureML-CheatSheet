---
title: Environment
---

## Create Environments

Easily create, maintain and share Python environments with pip and Conda, or directly from the Python SDK.

### From pip

Create Environment from pip `requirements.txt` file

```python
from azureml.core import Environment
env = Environment.from_pip_requirements('<environment-name>', '<path/to/requirements.txt>')
```

### From Conda

Create Environment from Conda `env.yml` file

```python
from azureml.core import Environment
env = Environment.from_conda_specifications('<environment-name>', '<path/to/env.yml>')
```

### From SDK

Use the `CondaDependencies` class to create a Python environment in code:

```python
from azureml.core.conda_dependencies import CondaDependencies

conda = CondaDependencies()

# add channels
conda.add_channel('pytorch')

# add conda packages
conda.add_conda_package('python=3.7')
conda.add_conda_package('pytorch')
conda.add_conda_package('torchvision')

# add pip packages
conda.add_pip_package('pyyaml')
```

Which can be consumed by an environment as follows.

```python
from azureml.core import Environment
env = Environment('pytorch')
env.python.conda_dependencies = conda
```

Converting the conda_dependencies to an `env.yml` file later is easy:

```python
conda.save('env.yml')
```

This example will generate the following file:

```yml title="env.yml"
# Conda environment specification. The dependencies defined in this file will
# be automatically provisioned for runs with userManagedDependencies=False.

# Details about the Conda environment file format:
# https://conda.io/docs/user-guide/tasks/manage-environments.html#create-env-file-manually

name: project_environment
dependencies:
  # The python interpreter version.
  # Currently Azure ML only supports 3.5.2 and later.
- python=3.7

- pip:
    # Required packages for AzureML execution, history, and data preparation.
  - azureml-defaults

  - pyyaml
- pytorch
- torchvision
channels:
- anaconda
- conda-forge
- pytorch
```

## Registered Environments

Register an environment `env: Environment` to your workspace to reuse/share with your team.

```python
env.register(ws)
```

To see the registerd Environments already available:

```python
from azureml.core import Environment
envs: Dict[str, Environment] = Environment.list(ws)

for name, env in envs.items():
    print(name)
# AzureML-Chainer-5.1.0-GPU
# AzureML-Scikit-learn-0.20.3
# AzureML-PyTorch-1.1-GPU
# ...
```

This list contains custom environments that have been registered to the workspace as well as a
collection of _curated environments_ maintained by the Azure ML team.

List the conda dependencies for a given environment, for example in 'AzureML-Chainer-5.1.0-GPU':

```python
env = envs['AzureML-PyTorch-1.1-GPU']
print(env.python.conda_dependencies.serialize_to_string())
```

Which returns the following.

```yaml title="AzureML-PyTorch-1.1-GPU Conda Dependencies"
channels:
- conda-forge
dependencies:
- python=3.6.2
- pip:
  - azureml-core==1.15.0
  - azureml-defaults==1.15.0
  - azureml-telemetry==1.15.0
  - azureml-train-restclients-hyperdrive==1.15.0
  - azureml-train-core==1.15.0
  - torch==1.1
  - torchvision==0.2.1
  - mkl==2018.0.3
  - horovod==0.16.1
  - tensorboard==1.14.0
  - future==0.17.1
name: azureml_eb61e39e20e87ad998ae2c88df1dd0af
```

## Save / Load Environments

Save an environment to a local directory

```python
env.save_to_directory('<path/to/local/directory>', overwrite=True)
```

This will generate a directory with two (human-understandable and editable) files:

- `azureml_environment.json` : Metadata including name, version, environment variables and Python and Docker configuration
- `conda_dependencies.yml` : Standard conda dependencies YAML e.g. `$ conda create -f conda_dependencies.yml`

Load this environment later with

```python
env = Environment.load_from_directory('<path/to/local/directory>')
```

## (Advanced) Custom Docker Images

By default, Azure ML will create your Python environment inside a Docker image it maintains.

:::info No secrets
This default image is not a secret. For example, you can see the Dockerfile used to create
it with the following:

```python
env = Environment('no-secrets')             # create new Environment
env.regester(ws)                            # register to the workspace
details = env.get_image_details(ws)
print(details['ingredients']['dockerfile'])
```
:::



You may chose to use your own Docker image. In this case there are two options:

### Provide Python packages to the custom image

In this case we will use pip, Conda or the SDK to manage our Python packages as above, resulting
in `env: Environment`. For example,

```python
env = Environment.from_pip_requirements('nlp', 'requirements.txt')
```

Assuming you have a Dockerfile to hand you can specify the following:

```python
  # just as an example
env.docker.base_image = None                    # translation: do not use your default base image
env.docker.base_dockerfile = "./Dockerfile"     # translation: use my Dockerfile as base instead
```

When you use this environment in a compute target it will build a Docker image as follows:

```docker
###
Contents of your base dockerfile
###

###
Build the Python dependencies as specified in env object
###
```

:::info
Again, you can see the exact contents of this Dockerfile used by running

```python
details = env.get_image_details(ws)
print(details['ingredients']['dockerfile'])
```
:::

### Use Python interpreter from the custom image

Usually your custom Docker image has its own Python environment already set up.

```docker title="Dockerfile"
FROM mcr.microsoft.com/azureml/base:intelmpi2018.3-ubuntu16.04
RUN conda update -n base -c defaults conda
RUN [ "/bin/bash", "-c", "conda create -n pytorch Python=3.6.2 && source activate amlbert && conda install pip"]
RUN /opt/miniconda/envs/pytorch/bin/pip install pytorch
```
In this case you need to:

- Indicate that you are managing your own Python dependencies: `user_managed_dependencies=True`
- Specify the path to your Python interpreter: `interpreter_path=<path>`

```python
env = Environment('pytorch')    # create an Environment called 'pytorch'

# set up custom docker image
env.docker.base_image = None
env.docker.base_dockerfile = "./Dockerfile"

# indicate how to run Python
env.python.user_managed_dependencies=True
env.python.interpreter_path = "/opt/miniconda/bin/python"
```

## (Advanced) Environment Variables

To set environment variables use the `environment_variables: Dict[str, str]` attribute. Environment variables
are set on the process where the user script is executed.

```python
env = Environment('example')
env.environment_variables['EXAMPLE_ENV_VAR'] = 'EXAMPLE_VALUE'
```
# Azure ML Cheat Sheet

## Basics

#### [Workspace](more/workspace.md)

Instantiate workspace.

```python
from azureml.core import Workspace
ws =  Workspace.from_config()
```

_[VS Code snippet](vs-code-snippets/snippets#create-aml-workspace-from-config)_

Workspaces are a foundational object used throughout AML and are used in the constructors of many other classes. In the following examples we frequently omit the workspace object instantiation and simply refer to `ws`.

See the [workspaces](more/workspace.md) page for more ways to instantiate a workspace.

#### [Datastore](more/datastore.md)

Each workspace comes with a default datastore.

```python
ds = ws.get_default_datastore()
```

Any datastore that is registered to workspace can be accessed by name

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
_[VS Code snippet](vs-code-snippets/snippets#register-azure-blob-container-from-sas)_

For more ways authentication options and for different underlying storage see the AML documentation on [Datastores](https://docs.microsoft.com/en-us/python/api/azureml-core/azureml.core.datastore(class)?view=azure-ml-py).

#### [Compute Targets](more/compute-targets.md)

Compute targets are an AML abstraction around the concept of a compute resource ranging from your local machine to an (auto-scaling) cluster of Azure VMs.

To use an existing compute target:

```python
from azureml.core import ComputeTarget
compute_target = ComputeTarget(workspace=ws, name="<compute-name>")
```

To create a new cluster of, e.g., "Standard_NC24rs_v3" VMs,

```python
from azureml.core import ComputeTarget
from azureml.core.compute import AmlCompute
compute_target = ComputeTarget.create(ws, "<compute-name>", compute_config)
compute_target.wait_for_completion(show_output=True)
```

See the [Compute Targets](more/compute-targets.md) page for more examples.

## Running Scripts in AML

This section shows how to run a script on AML. Suppose you are in possession of a script `primes.py`.

```python
# primes.py
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--upper', type=int, help="Find all primes below this.")
args = parser.parse_args()

numbers = list(range(0, args.upper))
for prime in numbers:
    if prime < 2:
        continue
    elif prime > args.upper ** 0.5:
        break
    for i in range(prime ** 2, args.upper, prime):
        numbers[i] = 0

print([x for x in numbers if x > 1])
```

#### Experiments

An experiment is used as an organizational principle, storing run history and tracking metrics.

Get or create an experiment:

```python
from azureml.core import Experiment
exp = Experiment(ws, "<experiment-name>")
```

Use experiments to submit run configurations (see [ScriptRunConfig](#scriptrunconfig) section):

```python
run = exp.submit(config)
```

#### ScriptRunConfig

A typical directory may have the following structure:


```python
# run.py
from azureml.core import Workspace, Experiment, ScriptRunConfig

# get workspace
ws = Workspace.from_config()

#  get/create experiment
exp = Experiment(ws, 'Primes')

# set up script run configuration
config = ScriptRunConfig(
    source_directory='.',
    script='primes.py',
    arguments=['--upper', 100],
)

# submit script to AML
run = exp.submit(config)
print(run.get_portal_url()) # link to ml.azure.com
```

This example assumes that `primes.py` is in the current working directory.

In this example since no compute target was specified the script is running on local compute i.e., it runs on
the machine that kicked off the job. We can get this code to run remotely in Azure by giving it a compute
target.

```python
# set up script run configuration
config = ScriptRunConfig(
    source_directory='.',
    script='primes.py',
    arguments=['--upper', 100],
)

config.run_config.target = "<name-of-compute-target>"

exp.submit(config)
```

#### Environments (Running Scripts)

In the scenario that your script requires certain python libraries to run you can provide an AML environment object
(see [Environments](#environments) section) to the `ScriptRunConfig`

```python
env = Environment(ws, '<environment-name>')
config.run_config.environment = env
```

## Environments

#### [Environment](more/environment.md)

We can use a Conda environment YAML file like this:

```yml
# env.yml
name: my-env
channels:
    - defaults
    - conda-forge
dependencies:
    - numpy
    - pandas
    - scipy
    - scikit-learn
    - pip
    - python=3.6
    - jupyter
    - ipykernel
    - pip:
        - azureml-sdk==1.8.0
        - torch
        - transformers==2.11.0
```

to create and register an AML environment that can be cached, versioned and reused between different experiments, runs and compute targets.

Create the AML environment

```python
from azureml.core import Environment

my_env = Environment.from_conda_specification(
    name='<environment-name>',
    file_path='<path-to-env.yml>',
)
```

To register this environment with the workspace

```python
my_env.register(ws)
```

To view all environments registered to a workspace

```python
from azureml.core import Environment
registered_environments = Environment.list(ws)
```

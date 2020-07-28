# Compute Targets

The following will first attempt to retrieve an existing compute target by its name.
If the compute does not exist it will create the cluster.

```python
from azureml.core import ComputeTarget
from azureml.core.compute import AmlCompute
from azureml.core.compute_target import ComputeTargetException

compute_name = "<compute-name>"

try:
    compute_target = ComputeTarget(workspace=ws, name=compute_name)
    print(f'Found existing compute target: {compute_name}.')
except ComputeTargetException:
    print('Creating a new compute target...')
    compute_target = ComputeTarget.create(ws, compute_name, compute_config)
    compute_target.wait_for_completion(show_output=True)
```
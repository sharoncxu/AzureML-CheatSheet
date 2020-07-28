# Workspace

Instantiate workspace.

```python
from azureml.core import Workspace
ws =  Workspace.from_config()
```

This examples reads the workspace from a `config.json` file, the contents of which are of the form

```json
{
    "subscription_id": <subscription-id>,
    "resource_group": <resource-group>,
    "workspace_name": <workspace-name>
}
```

Alternatively you can provide these values directly:

```python
from azureml.core import Workspace
ws = Workspace.get(
    name="<workspace-name>",
    subscription_id="<subscription-id>",
    resource_group="<resource-group>",
)
```
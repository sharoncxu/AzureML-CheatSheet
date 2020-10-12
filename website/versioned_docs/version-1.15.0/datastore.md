---
title: Datastore
---

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

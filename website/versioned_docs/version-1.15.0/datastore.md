---
title: Datastore
---

### Default datastore

Each workspace comes with a default datastore.

```python
datastore = ws.get_default_datastore()
```

### Registered datastores

Connect to, or create, a datastore backed by one of the multiple data-storage options
that Azure provides.

#### Register a new datastore

To register a store via a SAS token:

```python
ddatastores = Datastore.register_azure_blob_container(
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

#### Connect to registered datastore

Any datastore that is registered to workspace can be accessed by name.

```python
from azureml.core import Datastore
datastore = Datastore.get(ws, "<name-of-registered-datastore>")
```

### Uploading data to datastore

The datastore provides APIs for data upload:

```python
datastore.upload(src_dir='./data', target_path='<path/on/datastore>', overwrite=True)
```
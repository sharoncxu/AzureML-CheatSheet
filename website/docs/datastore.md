---
title: Datastore
---

## Get Datastore

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
datastores = Datastore.register_azure_blob_container(
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

## Uploading Data

### Via SDK

The datastore provides APIs for data upload:

```python
datastore.upload(src_dir='./data', target_path='<path/on/datastore>', overwrite=True)
```

### Via Storage Explorer

Azure Storage Explorer is free tool to easily manage your Azure cloud storage
resources from Windows, macOS, or Linux. Download it from [here](https://azure.microsoft.com/features/storage-explorer/).

Azure Storage Explorer gives you a (graphical) file exporer, so you can literally drag and drop
files into your Datastores.

#### Working with the default datastore

Each workspace comes with its own datastore (e.g. `ws.get_default_datastore`). Visit https://portal.azure.com
and locate your workspace's resource group and find the storage account.

## Reading Data

### DataPath

The `DataPath` class represents a path to data in a datastore.

```python
datastore = ws.get_default_datastore()  # for example
data_path: DataPath = datastore.path('<path/on/datastore>')
```

This can either be a path to a directory, or to a specific file.


### DataReference

Use `.as_mount` or `.as_download()` methods to reference a DataPath in a script.

```python
datastore = ws.get_default_datastore()  # for example
data_path = datastore.path.('<path/on/datastore>')
data_reference = data_path.as_mount()

arguments = ['--data', data_reference]
```
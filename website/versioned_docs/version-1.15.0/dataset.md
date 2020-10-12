---
title: Dataset
---

## From local data

### Upload to datastore

To upload a local directory `./data/`:

```python
datastore = ws.get_default_datastore()
datastore.upload(src_dir='./data', target_path='<path/on/datastore>', overwrite=True)
```

This will upload the entire directory `./data` from local to the default datastore associated
to your workspace `ws`.

### Create dataset from files in datastore

To create a dataset from a directory on a datastore at `<path/on/datastore>`:

```python
datastore = ws.get_default_datastore()
dataset = Dataset.File.from_files(path=(datastore, '<path/on/datastore>'))
```

### Use dataset in a remote run

To reference data from a dataset in a ScriptRunConfig you can either mount or download the
dataset using:

- `dataset.as_mount()` : mount dataset to a remote run
- `dataset.as_download()` : download the dataset to a remote run

Reference this data in a remote run, for example in mount-mode:


```python title="run.py"
arguments=[dataset.as_mount()]
config = ScriptRunConfig(source_directory='.', script='train.py', arguments=arguments)
experiment.submit(config)
```

and consumed in `train.py`:

```python title="train.py"
import sys
data_dir = sys.argv[1]

print("===== DATA =====")
print("DATA PATH: " + data_dir)
print("LIST FILES IN DATA DIR...")
print(os.listdir(data_dir))
print("================")
```

For more details: [ScriptRunConfig](script-run-config)
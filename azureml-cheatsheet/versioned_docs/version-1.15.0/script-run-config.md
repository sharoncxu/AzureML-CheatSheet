---
title: Running code in the cloud
---

## ScriptRunConfig

A common way to run code in the cloud is via the `ScriptRunConfig`.

Assuming the following directory structure.

```bash
source_directory/
    script.py    # entry point to your code
    module1.py   # modules called by script.py     
    ...
```

To run `script.py` in the cloud via the `ScriptRunConfig`

```python
config = ScriptRunConfig(
    source_directory='<path/to/source_directory>',
    script='script.py',
    compute_target=target,
    environment=env,
    arguments = [
        '--learning_rate', 0.001,
        '--momentum', 0.9,
    ]
)
```

where:

- `source_directory='source_directory'` : Local directory with your code.
- `script='script.py'` : Script to run.
- `compute_taget=target` : See [Compute Target](copute-target)
- `environment` : See [Environment](environment)
- `arguments` : List of arguments e.g. `['--learning_rate', 0.001, '--momentum', 0.9]`
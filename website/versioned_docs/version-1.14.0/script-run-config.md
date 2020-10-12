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
- `arguments` : See [Arguments](#command-line-arguments)

### Command Line Arguments

To pass command line arguments to your script use the `arguments` parameter in `ScriptRunConfig`.
Arguments are passed as a list

```python
arguments=[first, second, third, ...]
```

which are then passed to the script as command-line arguments as follows:

```console
$ python script.py first second third ...
```

This also supports using named arguments:

```python
arguments=['--first_arg', first_val, '--second_arg', second_val, ...]
```

Arguments can be of type `int`, `float` `str` and can also be used to reference data.

For more details on referencing data via the command line: [Use dataset in a remote run](dataset#use-dataset-in-a-remote-run)

#### Example: `sys.argv`

In this example we pass two arguments to our script. If we were running this from the
console:

```console title="console"
$ python script.py 0.001 0.9
```

To mimic this command using `argument` in `ScriptRunConfig`:

```python title="run.py"
arguments = [0.001, 0.9]

config = ScriptRunConfig(
    source_directory='.',
    script='script.py',
    arguments=arguments,
)
```

which can be consumed as usual in our script:

```python title="script.py"
import sys
learning_rate = sys.argv[1]     # gets 0.001
momentum = sys.argv[2]          # gets 0.9
```

#### Example: `argparse`

In this example we pass two named arguments to our script. If we were running this from the
console:

```console title="console"
$ python script.py --learning_rate 0.001 --momentum 0.9
```

To mimic this behavior in `ScriptRunConfig`:

```python title="run.py"
arguments = [
    '--learning_rate', 0.001, 
    '--momentum', 0.9,
    ]

config = ScriptRunConfig(
    source_directory='.',
    script='script.py',
    arguments=arguments,
)
```

which can be consumed as usual in our script:

```python title="script.py"
import argparse
parser = argparse.Argparser()
parser.add_argument('--learning_rate', type=float)
parser.add_argument('--momentum', type=float)
args = parser.parse_args()

learning_rate = args.learning_rate      # gets 0.001
momentum = args.momentum                # gets 0.9
```
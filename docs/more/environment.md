# Environment

#### From conda/pip files

We can use a Conda/pip to define AML environments.

=== "Conda (env.yml)"
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
=== "pip (requirements.txt)"
    ```yml
    # requirement.txt
    azureml-dataprep==1.8.3
    azureml-sdk==1.8.0
    flake8==3.7.9
    numpy==1.18.5
    pycodestyle==2.5.0
    torch==1.5.1
    tqdm==4.48.0
    transformers==2.11.0
    ```



to create and register an AML environment that can be cached, versioned and reused between different experiments, runs and compute targets.

Create the AML environment

=== "Conda"
    ```python
    from azureml.core import Environment
    
    my_env = Environment.from_conda_specification(
        name='<environment-name>',
        file_path='<path-to-env.yml>',
    )
    ```
=== "pip"
    ```python
    from azureml.core import Environment
    
    my_env = Environment.from_pip_specification(
        name='<environment-name>',
        file_path='<path-to-requirements.txt>',
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

#### Specifying dependencies

TODO
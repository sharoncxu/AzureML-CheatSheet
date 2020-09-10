# ScriptRunConfig

[Cookiecutter](https://cookiecutter.readthedocs.io/en/1.7.2/README.html) template for setting up an AML [ScriptRunConfig](https://docs.microsoft.com/en-us/python/api/azureml-core/azureml.core.scriptrunconfig?view=azure-ml-py) used to run your script in Azure.

## Usage

Navigate to the desired location for your template to be created.

```bash
cd ~/aml-examples
```

Run the cookiecutter command

```bash
cookiecutter <path/to/cookiecutter/templates>/ScriptRunConfig
```

Note: Install with `pip install cookiecutter` (see [cookiecutter docs](https://cookiecutter.readthedocs.io/en/1.7.2/installation.html) for more installation options)

You will be prompted for the following:

- directory_name: The desired name of the directory (default: "aml-src-script")
- script_name: The name of the python script to be run in Azure (default: "script")
- subscription_id: Your Azure Subscription ID (default: "48bbc269-ce89-4f6f-9a12-c6f91fcb772d")
- resource_group: Your Azure resource group name
- workspace_name: Your Azure ML workspace name
- compute_target_name: The name of the Azure ML compute target to run the script on (default: "local", will run on your box)

Cookiecutter creates a directory

```
{directory_name}/
    {script_name}.py      # the script you want to run in the cloud
    run.py                # wraps your script in ScriptRunConfig to send to Azure
    config.json           # your Azure ML metadata
    readme.md             # this readme file!
```

See the [docs](https://docs.microsoft.com/en-us/python/api/azureml-core/azureml.core.scriptrunconfig?view=azure-ml-py).
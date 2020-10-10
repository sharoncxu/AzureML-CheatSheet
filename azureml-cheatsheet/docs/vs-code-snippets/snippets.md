---
title: VS Code Snippets
---

We have compiled a collection of useful templates in the form of
[VS code snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets).

![VS Code Snippets](vs-code-snippets-demo.gif)

To add these snippets to your VS Code: `ctrl+shift+p` > Type "Configure user
snippets" > Select `python.json`. All of these snippets are available here:
[python.json](https://github.com/aminsaied/AzureML-CheatSheet/blob/master/vs-code-snippets/python.json)

## Basic core imports

```json
"Basic core imports": {
        "prefix": "workspace-imports-creation",
        "body": [
            "from azureml.core import Workspace, Experiment, Run, RunConfiguration, ComputeTarget$1",
            "$0"
        ],
        "description": "Import essential packages"
    }
```

## Pipeline imports

```json
"Pipeline Imports": {
        "prefix": "pipeline-imports",
        "body": [
            "from azureml.pipeline.core import Pipeline, PipelineData, PipelineParameter",
            "from azureml.pipeline.steps import PythonScriptStep$1",
            "$0"
        ],
        "description": "Basic imports for pipeline"
    }
```

## Create AML Workspace from config

```json
"Create AML Workspace from config": {
        "prefix": ["workspace-quick","fromconfig","from-config"],
        "body": [
            "ws = Workspace.from_config()",
            "$0"
        ],
        "description": "Default workspace creation"
    }
```

## Create AML Workspace from config and auth

```json
"Create AML Workspace from config and auth": {
        "prefix": "workspace-from-config-auth",
        "body": [
            "from azureml.core.authentication import InteractiveLoginAuthentication",
            "config = {'subscription_id':'$1',",
            "'resource_group':'$2',",
            "'workspace_name' :'$3'}",
            "auth = InteractiveLoginAuthentication()",
            "ws = Workspace(**config,auth = auth)",
            "$0"
        ],
        "description": "Create workspace from config and auth"
    }
```

## Register Azure Blob Container From SAS

```json
"Register Azure Blob Container From SAS": {
    "prefix": ["datastore-register-blob-sas","reg-blob-sas"],
    "body": [
        "ds = Datastore.register_azure_blob_container("
        "    workspace='$1',"
        "    datastore_name='$2',",
        "    container_name='$3',",
        "    account_name='$4',",
        "    sas_token='$5',",
        ")"
        "$0"
    ],
    "description": "Register Azure Blob container to workspace via SAS"
}
```

## Create Compute Cluster with SSH

```json
"Create Compute Cluster with SSH": {
        "prefix": ["create-compute-cluster-ssh"],
        "body": [
            "from azureml.core.compute import AmlCompute",
            "from azureml.core.compute_target import ComputeTargetException",
            "ssh_public_key = '$1'",
            "compute_config = AmlCompute.provisioning_configuration(vm_size='$4',min_nodes=$5, max_nodes=$6,admin_username='$7',admin_user_ssh_key=ssh_public_key,vm_priority='${8|lowpriority,dedicated|}',remote_login_port_public_access='Enabled')",
            "cluster$0 = ComputeTarget.create(workspace=$9, name='$10', compute_config)"
        ],
        "description": "Create compute cluster with SSH enabled"
    }
```

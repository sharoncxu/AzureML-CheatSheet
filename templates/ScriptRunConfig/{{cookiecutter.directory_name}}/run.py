from azureml.core import Workspace, Experiment, ScriptRunConfig
from azureml.core import ComputeTarget
from azureml.core.compute import AmlCompute
from azureml.core.compute_target import ComputeTargetException


def get_or_create_compute_target(ws, target_name):
    print(f'Run on {target_name}')
    try:
        target = ComputeTarget(workspace=ws, name=target_name)
        print(f'Found existing compute target: {target_name}.')
    except ComputeTargetException:
        print('Creating a new compute target...')
        compute_config = AmlCompute.provisioning_configuration(
            vm_size='Standard_NC24rs_v3',
            min_nodes=0,
            max_nodes=4,
            )

        # create the cluster
        target = ComputeTarget.create(ws, target_name, compute_config)
        target.wait_for_completion(show_output=True)
    return target

if __name__ == "__main__":
    # get workspace
    ws = Workspace.from_config()

    #  get/create experiment
    exp = Experiment(ws, 'script-run-config')

    # set up script run configuration
    config = ScriptRunConfig(
        source_directory='.',
        script='{{cookiecutter.script_name}}.py',
        arguments=['--meaning', 42],
    )

    # get/create aml compute target
    target_name = '{{cookiecutter.compute_target_name}}'
    if target_name == 'local':
        print('Run on local compute')
    else:
        target = get_or_create_compute_target(ws, target_name)
        config.run_config.target = target

    # submit script to AML
    run = exp.submit(config)
    print(run.get_portal_url()) # link to ml.azure.com

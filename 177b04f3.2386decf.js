(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{106:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),b=a,u=m["".concat(i,".").concat(b)]||m[b]||d[b]||o;return t?r.a.createElement(u,c(c({ref:n},s),{},{components:t})):r.a.createElement(u,c({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},60:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(6),o=(t(0),t(106)),i={title:"Environment"},c={unversionedId:"environment",id:"environment",isDocsHomePage:!1,title:"Environment",description:"Create Environments",source:"@site/docs/environment.md",slug:"/environment",permalink:"/azureml-cheatsheet/docs/next/environment",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/environment.md",version:"current",sidebar:"mainSidebar",previous:{title:"Compute Target",permalink:"/azureml-cheatsheet/docs/next/compute-targets"},next:{title:"Running Code in the Cloud",permalink:"/azureml-cheatsheet/docs/next/train-cloud"}},l=[{value:"Create Environments",id:"create-environments",children:[{value:"From pip",id:"from-pip",children:[]},{value:"From Conda",id:"from-conda",children:[]},{value:"Quick n&#39; Dirty (aka &quot;From SDK&quot;)",id:"quick-n-dirty-aka-from-sdk",children:[]}]},{value:"Registered Environments",id:"registered-environments",children:[]},{value:"(Advanced) Custom Docker Images",id:"advanced-custom-docker-images",children:[{value:"Provide Python packages to the custom image",id:"provide-python-packages-to-the-custom-image",children:[]},{value:"Use Python interpreter from the custom image",id:"use-python-interpreter-from-the-custom-image",children:[]}]}],s={rightToc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-environments"},"Create Environments"),Object(o.b)("p",null,"Easily create, maintain and share Python environments with pip and Conda, or directly from the Python SDK."),Object(o.b)("h3",{id:"from-pip"},"From pip"),Object(o.b)("p",null,"Create Environment from pip ",Object(o.b)("inlineCode",{parentName:"p"},"requirements.txt")," file"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import Environment\nenv = Environment.from_pip_requirements('<environment-name>', '<path/to/requirements.txt>')\n")),Object(o.b)("h3",{id:"from-conda"},"From Conda"),Object(o.b)("p",null,"Create Environment from Conda ",Object(o.b)("inlineCode",{parentName:"p"},"env.yml")," file"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import Environment\nenv = Environment.from_conda_specifications('<environment-name>', '<path/to/env.yml>')\n")),Object(o.b)("h3",{id:"quick-n-dirty-aka-from-sdk"},'Quick n\' Dirty (aka "From SDK")'),Object(o.b)("p",null,"Sometimes you want to get something up and running quickly without the need for ",Object(o.b)("inlineCode",{parentName:"p"},"env.yml"),"\nor ",Object(o.b)("inlineCode",{parentName:"p"},"requirement.txt")," files. In such cases you can make use of ",Object(o.b)("inlineCode",{parentName:"p"},"CondaDependencies"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core.conda_dependencies import CondaDependencies\n\nconda = CondaDependencies()\n\n# add channels\nconda.add_channel('pytorch')\n\n# add conda packages\nconda.add_conda_package('python=3.7')\nconda.add_conda_package('pytorch')\nconda.add_conda_package('torchvision')\n\n# add pip packages\nconda.add_pip_package('pyyaml')\n")),Object(o.b)("p",null,"Which can be consumed by an environment as follows."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import Environment\nenv = Environment('pytorch')\nenv.python.conda_dependencies = conda\n")),Object(o.b)("p",null,"Converting the conda_dependencies to an ",Object(o.b)("inlineCode",{parentName:"p"},"env.yml")," file later is easy:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"conda.save('env.yml')\n")),Object(o.b)("p",null,"This example will generate the following file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:'title="env.yml"',title:'"env.yml"'}),"# Conda environment specification. The dependencies defined in this file will\n# be automatically provisioned for runs with userManagedDependencies=False.\n\n# Details about the Conda environment file format:\n# https://conda.io/docs/user-guide/tasks/manage-environments.html#create-env-file-manually\n\nname: project_environment\ndependencies:\n  # The python interpreter version.\n  # Currently Azure ML only supports 3.5.2 and later.\n- python=3.7\n\n- pip:\n    # Required packages for AzureML execution, history, and data preparation.\n  - azureml-defaults\n\n  - pyyaml\n- pytorch\n- torchvision\nchannels:\n- anaconda\n- conda-forge\n- pytorch\n")),Object(o.b)("h2",{id:"registered-environments"},"Registered Environments"),Object(o.b)("p",null,"Register an environment ",Object(o.b)("inlineCode",{parentName:"p"},"env: Environment")," to your workspace to reuse/share with your team."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"env.register(ws)\n")),Object(o.b)("p",null,"To see the registerd Environments already available:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import Environment\nenvs: Dict[str, Environment] = Environment.list(ws)\n\nfor name, env in envs.items():\n    print(name)\n# AzureML-Chainer-5.1.0-GPU\n# AzureML-Scikit-learn-0.20.3\n# AzureML-PyTorch-1.1-GPU\n# ...\n")),Object(o.b)("p",null,"This list contains custom environments that have been registered to the workspace as well as a\ncollection of ",Object(o.b)("em",{parentName:"p"},"curated environments")," maintained by the Azure ML team."),Object(o.b)("p",null,"List the conda dependencies for a given environment, for example in 'AzureML-Chainer-5.1.0-GPU':"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"env = envs['AzureML-PyTorch-1.1-GPU']\nprint(env.python.conda_dependencies.serialize_to_string())\n")),Object(o.b)("p",null,"Which returns the following."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="AzureML-PyTorch-1.1-GPU Conda Dependencies"',title:'"AzureML-PyTorch-1.1-GPU',Conda:!0,'Dependencies"':!0}),"channels:\n- conda-forge\ndependencies:\n- python=3.6.2\n- pip:\n  - azureml-core==1.15.0\n  - azureml-defaults==1.15.0\n  - azureml-telemetry==1.15.0\n  - azureml-train-restclients-hyperdrive==1.15.0\n  - azureml-train-core==1.15.0\n  - torch==1.1\n  - torchvision==0.2.1\n  - mkl==2018.0.3\n  - horovod==0.16.1\n  - tensorboard==1.14.0\n  - future==0.17.1\nname: azureml_eb61e39e20e87ad998ae2c88df1dd0af\n")),Object(o.b)("h2",{id:"advanced-custom-docker-images"},"(Advanced) Custom Docker Images"),Object(o.b)("p",null,"By default, Azure ML will create your Python environment inside a Docker image it maintains."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"No secrets")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This default image is not a secret. For example, you can see the Dockerfile used to create\nit with the following:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"env = Environment('no-secrets')             # create new Environment\nenv.regester(ws)                            # register to the workspace\ndetails = env.get_image_details(ws)\nprint(details['ingredients']['dockerfile'])\n")))),Object(o.b)("p",null,"You may chose to use your own Docker image. In this case there are two options:"),Object(o.b)("h3",{id:"provide-python-packages-to-the-custom-image"},"Provide Python packages to the custom image"),Object(o.b)("p",null,"In this case we will use pip, Conda or the SDK to manage our Python packages as above, resulting\nin ",Object(o.b)("inlineCode",{parentName:"p"},"env: Environment"),". For example,"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"env = Environment.from_pip_requirements('nlp', 'requirements.txt')\n")),Object(o.b)("p",null,"Assuming you have a Dockerfile to hand you can specify the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'  # just as an example\nenv.docker.base_image = None                    # translation: do not use your default base image\nenv.docker.base_dockerfile = "./Dockerfile"     # translation: use my Dockerfile as base instead\n')),Object(o.b)("p",null,"When you use this environment in a compute target it will build a Docker image as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-docker"}),"###\nContents of your base dockerfile\n###\n\n###\nBuild the Python dependencies as specified in env object\n###\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Again, you can see the exact contents of this Dockerfile used by running"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"details = env.get_image_details(ws)\nprint(details['ingredients']['dockerfile'])\n")))),Object(o.b)("h3",{id:"use-python-interpreter-from-the-custom-image"},"Use Python interpreter from the custom image"),Object(o.b)("p",null,"Usually your custom Docker image has its own Python environment already set up."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-docker",metastring:'title="Dockerfile"',title:'"Dockerfile"'}),'FROM mcr.microsoft.com/azureml/base:intelmpi2018.3-ubuntu16.04\nRUN conda update -n base -c defaults conda\nRUN [ "/bin/bash", "-c", "conda create -n pytorch Python=3.6.2 && source activate amlbert && conda install pip"]\nRUN /opt/miniconda/envs/pytorch/bin/pip install pytorch\n')),Object(o.b)("p",null,"In this case you need to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Indicate that you are managing your own Python dependencies: ",Object(o.b)("inlineCode",{parentName:"li"},"user_managed_dependencies=True")),Object(o.b)("li",{parentName:"ul"},"Specify the path to your Python interpreter: ",Object(o.b)("inlineCode",{parentName:"li"},"interpreter_path=<path>"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'env = Environment(\'pytorch\')\n\n# set up custom docker image\nenv.docker.base_image = None\nenv.docker.base_dockerfile = "./Dockerfile"\n\n# indicate how to run Python\nenv.python.user_managed_dependencies=True\nenv.python.interpreter_path = "/opt/miniconda/bin/python"\n')))}p.isMDXComponent=!0}}]);
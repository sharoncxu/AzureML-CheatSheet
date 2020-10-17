(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{105:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),l=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(t),m=r,d=s["".concat(o,".").concat(m)]||s[m]||b[m]||a;return t?i.a.createElement(d,c(c({ref:n},p),{},{components:t})):i.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},178:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/run-ex-sine-a78600f095ae349a514b9d3e3e3dbcea.png"},94:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(2),i=t(6),a=(t(0),t(105)),o={title:"Experiment and Run"},c={unversionedId:"run",id:"run",isDocsHomePage:!1,title:"Experiment and Run",description:"Concepts",source:"@site/docs/run.md",slug:"/run",permalink:"/AzureML-CheatSheet/docs/run",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/run.md",version:"current",sidebar:"mainSidebar",previous:{title:"Data",permalink:"/AzureML-CheatSheet/docs/data"},next:{title:"Running Code in the Cloud",permalink:"/AzureML-CheatSheet/docs/script-run-config"}},u=[{value:"Concepts",id:"concepts",children:[{value:"Run",id:"run",children:[]},{value:"Experiments",id:"experiments",children:[]}]},{value:"Create Run",id:"create-run",children:[{value:"Via ScriptRunConfig",id:"via-scriptrunconfig",children:[]},{value:"Get Context",id:"get-context",children:[]},{value:"Interactive",id:"interactive",children:[]}]}],p={rightToc:u};function l(e){var n=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,o,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"concepts"},"Concepts"),Object(a.b)("h3",{id:"run"},"Run"),Object(a.b)("p",null,"A run represents a single execution of your code."),Object(a.b)("p",null,"Azure ML is a machine-learning service that facilitates running your code in\nthe cloud. A ",Object(a.b)("inlineCode",{parentName:"p"},"Run")," is an abstraction layer around each such submission, and is used to\nmonitor the job in real time as well as keep a history of your results."),Object(a.b)("h3",{id:"experiments"},"Experiments"),Object(a.b)("p",null,"An experiment is a light-weight container for ",Object(a.b)("inlineCode",{parentName:"p"},"Run"),". Use experiments to submit\nand track runs."),Object(a.b)("p",null,"Create an experiment in your workspace ",Object(a.b)("inlineCode",{parentName:"p"},"ws"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import Experiment\nexp = Experiment(ws, '<experiment-name>')\n")),Object(a.b)("h2",{id:"create-run"},"Create Run"),Object(a.b)("h3",{id:"via-scriptrunconfig"},"Via ScriptRunConfig"),Object(a.b)("p",null,"Usually a run is created by submitting a ScriptRunConfig."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import Workspace, Experiment, ScriptRunConfig\nws = Workspace.from_config()\nexp = Experiment(ws, '<experiment-name>')\n\nconfig = ScriptRunConfig(source_directory=<'<path/to/script>'>, script='train.py', ...)\nrun = exp.submit(config)\n")),Object(a.b)("p",null,"For more details: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"script-run-config"}),"ScriptRunConfig")),Object(a.b)("h3",{id:"get-context"},"Get Context"),Object(a.b)("p",null,"Code that is running within Azure ML is associated to a ",Object(a.b)("inlineCode",{parentName:"p"},"Run"),". The submitted code\ncan access its own run."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from azureml.core import Run\nrun = Run.get_context()\n")),Object(a.b)("h4",{id:"example-logging-metrics-to-current-run-context"},"Example: Logging metrics to current run context"),Object(a.b)("p",null,"A common use-case is logging metrics in a training script."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py",metastring:'title="train.py"',title:'"train.py"'}),"from azureml.core import Run\n\nrun = Run.get_context()\n\n# training code\nfor epoch in range(n_epochs):\n    model.train()\n    ...\n    val = model.evaluate()\n    run.log('validation', val)\n")),Object(a.b)("p",null,"When this code is submitted to Azure ML (e.g. via ScriptRunConfig) it will log metrics to its assocaited run."),Object(a.b)("p",null,"For more details: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"logging"}),"Logging Metrics")),Object(a.b)("h3",{id:"interactive"},"Interactive"),Object(a.b)("p",null,"In an interactive setting e.g. a Jupyter notebook"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"run = exp.start_logging()\n")),Object(a.b)("h4",{id:"example-jupyter-notebook"},"Example: Jupyter notebook"),Object(a.b)("p",null,"A common use case for interacive logging is to train a model in a notebook."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from azureml.core import Workspace\nfrom azureml.core import Experiment\nws = Workspace.from_config()\nexp = Experiment(ws, 'example')\n\nrun = exp.start_logging()                   # start interactive run\nprint(run.get_portal_url())                 # get link to studio\n\n# toy example in place of e.g. model\n# training or exploratory data analysis\nimport numpy as np\nfor x in np.linspace(0, 10):\n    y = np.sin(x)\n    run.log_row('sine', x=x, y=y)           # log metrics\n\nrun.complete()                              # stop interactive run\n")),Object(a.b)("p",null,"Follow the link to the run to see the metric logging in real time."),Object(a.b)("p",null,Object(a.b)("img",{src:t(178).default})))}l.isMDXComponent=!0}}]);
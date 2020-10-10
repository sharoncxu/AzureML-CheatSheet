
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/azureml-cheatsheet/',
  component: ComponentCreator('/azureml-cheatsheet/','ad1'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/blog',
  component: ComponentCreator('/azureml-cheatsheet/blog','ad0'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/blog/run-config',
  component: ComponentCreator('/azureml-cheatsheet/blog/run-config','9b7'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/blog/run-history',
  component: ComponentCreator('/azureml-cheatsheet/blog/run-history','81a'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/blog/tags',
  component: ComponentCreator('/azureml-cheatsheet/blog/tags','841'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/blog/tags/run',
  component: ComponentCreator('/azureml-cheatsheet/blog/tags/run','71e'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/next',
  component: ComponentCreator('/azureml-cheatsheet/docs/next','98f'),
  
  routes: [
{
  path: '/azureml-cheatsheet/docs/next/cheatsheet',
  component: ComponentCreator('/azureml-cheatsheet/docs/next/cheatsheet','754'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/next/compute-targets',
  component: ComponentCreator('/azureml-cheatsheet/docs/next/compute-targets','bd0'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/next/custom-docker',
  component: ComponentCreator('/azureml-cheatsheet/docs/next/custom-docker','592'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/next/distributed-training',
  component: ComponentCreator('/azureml-cheatsheet/docs/next/distributed-training','76d'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/next/docker-build',
  component: ComponentCreator('/azureml-cheatsheet/docs/next/docker-build','9af'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/next/environment',
  component: ComponentCreator('/azureml-cheatsheet/docs/next/environment','4d1'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/next/installation',
  component: ComponentCreator('/azureml-cheatsheet/docs/next/installation','675'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/next/run-history',
  component: ComponentCreator('/azureml-cheatsheet/docs/next/run-history','df2'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/next/running-code-interactively',
  component: ComponentCreator('/azureml-cheatsheet/docs/next/running-code-interactively','258'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/next/script-run-config',
  component: ComponentCreator('/azureml-cheatsheet/docs/next/script-run-config','212'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/next/templates',
  component: ComponentCreator('/azureml-cheatsheet/docs/next/templates','bc2'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/next/train-cloud',
  component: ComponentCreator('/azureml-cheatsheet/docs/next/train-cloud','a23'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/next/vs-code-snippets/snippets',
  component: ComponentCreator('/azureml-cheatsheet/docs/next/vs-code-snippets/snippets','c6b'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/next/workspace',
  component: ComponentCreator('/azureml-cheatsheet/docs/next/workspace','793'),
  exact: true,
},
]
},
{
  path: '/azureml-cheatsheet/docs',
  component: ComponentCreator('/azureml-cheatsheet/docs','9eb'),
  
  routes: [
{
  path: '/azureml-cheatsheet/docs/cheatsheet',
  component: ComponentCreator('/azureml-cheatsheet/docs/cheatsheet','65e'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/compute-targets',
  component: ComponentCreator('/azureml-cheatsheet/docs/compute-targets','526'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/custom-docker',
  component: ComponentCreator('/azureml-cheatsheet/docs/custom-docker','29c'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/distributed-training',
  component: ComponentCreator('/azureml-cheatsheet/docs/distributed-training','330'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/docker-build',
  component: ComponentCreator('/azureml-cheatsheet/docs/docker-build','36a'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/environment',
  component: ComponentCreator('/azureml-cheatsheet/docs/environment','cb6'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/installation',
  component: ComponentCreator('/azureml-cheatsheet/docs/installation','eac'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/run-history',
  component: ComponentCreator('/azureml-cheatsheet/docs/run-history','e63'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/running-code-interactively',
  component: ComponentCreator('/azureml-cheatsheet/docs/running-code-interactively','3c2'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/script-run-config',
  component: ComponentCreator('/azureml-cheatsheet/docs/script-run-config','fe2'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/templates',
  component: ComponentCreator('/azureml-cheatsheet/docs/templates','39e'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/train-cloud',
  component: ComponentCreator('/azureml-cheatsheet/docs/train-cloud','77b'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/vs-code-snippets/snippets',
  component: ComponentCreator('/azureml-cheatsheet/docs/vs-code-snippets/snippets','1be'),
  exact: true,
},
{
  path: '/azureml-cheatsheet/docs/workspace',
  component: ComponentCreator('/azureml-cheatsheet/docs/workspace','4cb'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];

// module.exports = {
//   mainSidebar: {
//     'Getting Started': ['installation', 'cheatsheet'],
//     'Basic Assets': ['workspace', 'compute-targets', 'environment'],
//     'Common Scenarios': ['train-cloud'],
//     'Advanced Scenarios': ['docker-build', 'distributed-training'],
//   }
// };

module.exports = {
  mainSidebar: {
    'Menu': [
      {
        type: 'doc',
        id: 'cheatsheet'
      },
      {
        type: 'category',
        label: 'Getting Started',
        items: ['installation'],
      },
      {
        type: 'category',
        label: 'Basic Assets',
        items: ['workspace', 'compute-targets', 'environment', 'data'],
      },
      {
        type: 'category',
        label: 'Submitting Code',
        items: ['run', 'script-run-config', 'logging'],
      }
    ],
  },
  secondaySidebar: {
    Cookbook: [
      {
        type: 'doc',
        id: 'cbdocs/cookbook',
      },
      {
        type: 'category',
        label: 'Setup',
        items: ['cbdocs/setup-sdk', 'cbdocs/setup-notebook'],
      }
    ]
  }
};

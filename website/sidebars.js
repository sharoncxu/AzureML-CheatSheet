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
    docs: [
      {
        type: 'category',
        label: 'Getting Started',
        items: ['installation', 'cheatsheet'],
      },
      {
        type: 'category',
        label: 'Basic Assets',
        items: ['workspace', 'compute-targets', 'environment'],
      },
      {
        type: 'category',
        label: 'Common Scenarios',
        items: ['train-cloud'],
      },
      {
        type: 'category',
        label: 'Advanced Scenarios',
        items: ['docker-build', 'distributed-training'],
      },
    ],
    cookbook: [
      {
        type: 'category',
        label: 'Getting Started',
        items: ['installation', 'cheatsheet'],
      }
    ]
  }
};

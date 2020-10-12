module.exports = {
  title: 'Azure ML Cheat Sheet',
  tagline: '80% of what you need in 20% of the documentation',
  url: 'https://aminsaied.github.io',
  baseUrl: '/AzureML-CheatSheet/',
  onBrokenLinks: 'ignore',
  favicon: 'img/aml-logo.png',
  organizationName: 'aminsaied', // Usually your GitHub org/user name.
  projectName: 'AzureML-CheatSheet', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Azure ML Cheat Sheet',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/cheatsheet',
          label: 'Cheat Sheet',
          position: 'left',
        },
        {
          to: 'docs/cookbook',
          label: 'Cookbook',
          position: 'left',
        },
        {to: 'blog', label: 'Snippets', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/aminsaied',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Microsoft Docs',
              href: 'https://docs.microsoft.com/azure/machine-learning',
            },
            {
              label: 'Azure ML Examples (GitHub)',
              href: 'https://github.com/Azure/azureml-examples',
            },
            {
              label: 'AzureML Python SDK API',
              href: 'https://docs.microsoft.com/en-us/python/api/overview/azure/ml/?view=azure-ml-py'
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.microsoft.com/questions/tagged/10888',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/aminsaied',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Microsoft // Built with Docusaurus2`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        cookbook: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

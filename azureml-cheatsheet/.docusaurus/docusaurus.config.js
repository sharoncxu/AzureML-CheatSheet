export default {
  "title": "Azure ML Cheat Sheet",
  "tagline": "80% of what you need in 20% of the documentation",
  "url": "https://aminsaied.github.io",
  "baseUrl": "/azureml-cheatsheet/",
  "onBrokenLinks": "ignore",
  "favicon": "img/aml-logo.png",
  "organizationName": "aminsaied",
  "projectName": "cheatsheet",
  "themeConfig": {
    "navbar": {
      "title": "Azure ML Cheat Sheet",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "to": "docs/cheatsheet",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/aminsaied",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Microsoft Docs",
              "href": "https://docs.microsoft.com/azure/machine-learning"
            },
            {
              "label": "Azure ML Examples (GitHub)",
              "href": "https://github.com/Azure/azureml-examples"
            },
            {
              "label": "AzureML Python SDK API",
              "href": "https://docs.microsoft.com/en-us/python/api/overview/azure/ml/?view=azure-ml-py"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.microsoft.com/questions/tagged/10888"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/aminsaied"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 Microsoft // Built with Docusaurus2"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "metadatas": []
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/amin/repos/AzureML-CheatSheet/azureml-cheatsheet/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/home/amin/repos/AzureML-CheatSheet/azureml-cheatsheet/src/css/custom.css"
        }
      }
    ]
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|"
};
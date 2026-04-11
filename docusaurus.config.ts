import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Mosaic Modding Documentation',
  tagline: 'We like modding',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'docs.mosaicmodding.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MosaicModding', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {

        //docs: {
        //  sidebarPath: './sidebars.ts',

          //lastVersion: "current",
          //includeCurrentVersion: true,
          //versions: require("./version_labels.json"),
        //},
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
      ["@docusaurus/plugin-content-docs",
          {
              id: "sullysmod",
              path: "sullysmod",
              routeBasePath: "sullysmod",
              sidebarPath: require.resolve(`./sidebar/sullysmod.ts`),
          },
      ],
      ["@docusaurus/plugin-content-docs",
          {
              id: "paintersinc",
              path: "paintersinc",
              routeBasePath: "paintersinc",
              sidebarPath: require.resolve(`./sidebar/paintersinc.ts`),
          },
      ],
      ["@docusaurus/plugin-content-docs",
          {
              id: "cosmetics",
              path: "cosmetics",
              routeBasePath: "cosmetics",
              sidebarPath: require.resolve(`./sidebar/cosmetics.ts`),
          },
      ],
      ["@docusaurus/plugin-content-docs",
          {
              id: "plaster",
              path: "plaster",
              routeBasePath: "plaster",
              sidebarPath: require.resolve(`./sidebar/plaster.ts`),
          },
      ],
      ["@docusaurus/plugin-content-docs",
          {
              id: "tessera",
              path: "tessera",
              routeBasePath: "tessera",
              sidebarPath: require.resolve(`./sidebar/tessera.ts`),
          },
      ]
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Homepage',
      logo: {
        alt: 'Mosaic Modding Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'sullysmodSidebar',
          position: 'left',
          docsPluginId: 'sullysmod',
          label: 'Sully\'s Mod',
        },
        {
          type: 'docSidebar',
          sidebarId: 'paintersincSidebar',
          position: 'left',
          docsPluginId: 'paintersinc',
          label: 'Painter\'s Inc',
        },
        {
          type: 'docSidebar',
          sidebarId: 'plasterSidebar',
          position: 'left',
          docsPluginId: 'plaster',
          label: 'Plaster',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tesseraSidebar',
          position: 'left',
          docsPluginId: 'tessera',
          label: 'Tessera',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Mod Docs',
          items: [
            {
              label: 'Sully\'s Mod',
              to: '/sullysmod/about',
            },
            {
              label: 'Painters Inc',
              to: '/paintersinc/about',
            },
          ],
        },
          {
              title: 'Dev Docs',
              items: [
                  {
                      label: 'Cosmetics',
                      to: '/cosmetics/about',
                  },
                  {
                      label: 'Tessera',
                      to: '/tessera/about',
                  },
                  {
                      label: 'Plaster',
                      to: '/plaster/about',
                  },
              ],
          },
        {
          title: 'External Links',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/nuVuQ4v',
            },
            {
              label: 'Bluesky',
              href: 'https://bsky.app/profile/mosaicmodding.com',
            },
            {
               label: 'GitHub',
               href: 'https://github.com/MosaicModding',
            },
          ],
        },
      ],
      copyright: `
      <p>NOT AN OFFICIAL MINECRAFT WEBSITE. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.</p>
      Copyright © ${new Date().getFullYear()} Mosaic Modding. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

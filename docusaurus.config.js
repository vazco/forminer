// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Form Builder',
  tagline: 'Vazco Form Builder Docs',
  url: 'https://vazco.github.io',
  baseUrl: '/form-builder-docs/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vazco', // Usually your GitHub org/user name.
  projectName: 'form-builder-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    'docusaurus-plugin-hotjar',
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: 'Form Builder logo',
          src: 'img/form-builder-logo.svg',
          href: 'https://www.vazco.eu/form-builder',
        },
        items: [
          {
            href: 'https://www.vazco.eu/form-builder#pricing',
            html: 'Pricing',
            position: 'right',
          },
          {
            to: 'demo',
            label: 'Demo',
            position: 'right',
          },
          {
            type: 'doc',
            docId: 'intro',
            label: 'Docs',
            className: 'docs-nav-item',
            position: 'right',
          },
          {
            href: 'https://www.vazco.eu/',
            html: 'Custom solutions',
            position: 'right',

          },
          {
            href: 'https://www.vazco.eu/form-builder#contact-form',
            html: 'Buy now',
            className: 'buy-now-nav-item',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Documentation',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vazco.eu`,
      },
      prism: {
        theme: lightCodeTheme,
      },
      hotjar: {
        applicationId: '3212446',
      },
    }),
};

module.exports = config;

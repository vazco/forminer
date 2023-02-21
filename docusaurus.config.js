// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Forminer',
  tagline: 'Vazco Forminer Docs',
  url: 'https://forminer.com',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vazco', // Usually your GitHub org/user name.
  projectName: 'form-builder', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: ['docusaurus-plugin-hotjar'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/docs',
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
          alt: 'Forminer logo',
          src: 'img/forminer.png',
        },
        items: [
          {
            to: '/#pricing',
            html: 'Pricing',
            position: 'right',
            className: 'pricing-nav-item',
          },
          {
            to: 'demo',
            label: 'Demo',
            position: 'right',
          },
          {
            to: 'docs',
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
            to: '/#pricing',
            html: 'Buy now',
            className: 'buy-now-nav-item',
            position: 'right',
          },
        ],
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

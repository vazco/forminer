/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Forminer Docs',
      link: {
        type: 'doc',
        id: 'intro',
      },
      collapsed: false,
      collapsible: false,
      items: [
        'supported-stack',
        'technical-requirements',
        'integration',
        'form-definition',
        'display-if',
        'custom-components',
        'handling-lists',
        'translations',
      ],
    },
    {
      type: 'category',
      label: 'Coming soon',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'link', label: 'Nesting of fields', href: '#' },
        { type: 'link', label: 'Recipes / use cases', href: '#' },
      ],
    },
  ],
};

module.exports = sidebars;

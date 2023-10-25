import Head from '@docusaurus/Head';
import React from 'react';

import seoData from './seo-data.json';

export const SEO = () => (
  <Head>
    <title>{seoData.title}</title>
    <meta
      name="clarity-site-verification"
      content="482a972d-1709-4257-8039-d59297fcba91"
    />
    <meta name="description" content={seoData.description} />
    <meta property="robots" content={seoData.robots} />
  </Head>
);

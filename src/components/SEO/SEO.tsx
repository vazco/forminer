import Head from '@docusaurus/Head';
import React from 'react';

import seoData from './seo-data.json';

export const SEO = () => (
  <Head>
    <title>{seoData.title}</title>
    <meta name="description" content={seoData.description} />
    <meta property="robots" content={seoData.robots} />
  </Head>
);

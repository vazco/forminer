import React from 'react';
import { Helmet } from 'react-helmet';

import seoData from './seo-data.json';

export const SEO = () => (
  <Helmet>
    <title>{seoData.title}</title>
    <meta name="description" content={seoData.description} />
    <meta property="robots" content={seoData.robots} />
  </Helmet>
);

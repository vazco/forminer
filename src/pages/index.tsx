import Head from '@docusaurus/Link';
import Layout from '@theme/Layout';
import React from 'react';

import { LayoutBase } from '../components/LayoutBase';
import { SEO } from '../components/SEO';
import {
  Hero,
  KeyFunctionalitiesSection,
  StepsSection,
  CTASection,
  WhatYouGetSection,
  TestProductSection,
  TrustedByOpenSourceSection,
  PricingSection,
  FAQSection,
  Footer,
} from '../sections';

const IndexPage = () => {
  return (
    <>
      <SEO />
      <Head>
        <link
          rel="preload"
          href={require('../images/forminer.webp')}
          as="image"
          type="image/webp"
        />
      </Head>
      <Layout>
        <LayoutBase>
          <Hero />
          <KeyFunctionalitiesSection />
          <StepsSection />
          <CTASection
            heading="How can these solutions help your project?"
            buttonText="Ask our CTO"
          />
          <WhatYouGetSection />
          <TestProductSection />
          <PricingSection />
          <TrustedByOpenSourceSection />
          <FAQSection />
          <Footer />
        </LayoutBase>
      </Layout>
    </>
  );
};

export default IndexPage;

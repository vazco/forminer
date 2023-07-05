import Head from '@docusaurus/Link';
import Layout from '@theme/Layout';
import React from 'react';

import { LayoutBase } from '../components/LayoutBase';
import { SEO } from '../components/SEO';
import {
  Hero,
  TechnologyListSection,
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
  // const context = useDocusaurusContext();
  // const {
  //     customFields: { keywords },
  //     tagline,
  // } = context.siteConfig;

  return (
    <>
      <SEO />
      <Head>
        <link
          rel="preload"
          href={require('../images/Forminer.webp')}
          as="image"
          type="image/webp"
        />
      </Head>
      <Layout title="Forminer | Build Forms in React the way you need | Vazco">
        <LayoutBase>
          <Hero />
          <TechnologyListSection />
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

import Layout from '@theme/Layout';
import React from 'react';

import { LayoutBase } from '../components/LayoutBase';
import { SEO } from '../components/SEO';
import {
  Hero,
  CTASection,
  FAQSection,
  Footer,
  FormRelatedIssues,
  PowerfulFeatures,
  WhatDoYouGet,
  Pricing,
  UseCases,
  TrustedBy,
} from '../sections';
import { Testimonials } from '../sections/Testimonials';

const IndexPage = () => {
  return (
    <>
      <SEO />
      <Layout>
        <LayoutBase>
          <Hero />
          <TrustedBy />
          <Testimonials />
          <FormRelatedIssues />
          <CTASection
            heading="How does Forminer help overcome your challenges?"
            buttonText="Explore docs"
            link="/docs"
            btnClassName="btn-banner-explore-docs"
          />
          <PowerfulFeatures />
          <CTASection
            heading="Ready to see Forminer in action?"
            buttonText="Explore demo"
            link="/demo"
            btnClassName="btn-banner-explore-demo"
          />
          <UseCases />
          <WhatDoYouGet />
          <Pricing />
          <FAQSection />
          <Footer />
        </LayoutBase>
      </Layout>
    </>
  );
};

export default IndexPage;

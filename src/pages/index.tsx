import Layout from '@theme/Layout';
import React from 'react';

import { LayoutBase } from '..//components/LayoutBase';
import {
  Hero,
  TechnologyListSection,
  KeyFunctionalitiesSection,
  StepsSection,
  CTASection,
  WhatYouGetSection,
  TestProductSection,
  ClutchSection,
  TrustedByOpenSourceSection,
  PricingSection,
  FAQSection,
  Footer,
} from '../sections';

export default function IndexPage() {
  // const context = useDocusaurusContext();
  // const {
  //     customFields: { keywords },
  //     tagline,
  // } = context.siteConfig;

  return (
    <Layout title="Form Builder | Build Forms in React the way you need | Vazco">
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
        <ClutchSection />
        <CTASection
          heading="Interested in using Forminer?"
          buttonText="Book free consultation"
        />
        <TrustedByOpenSourceSection />
        <PricingSection />
        <FAQSection />
        <Footer />
      </LayoutBase>
    </Layout>
  );
}

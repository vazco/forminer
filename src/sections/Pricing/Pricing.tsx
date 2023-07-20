import React from "react";
import { PricingCard } from "../../components/PricingCard";
import { SectionLayout } from "../../components/SectionLayout";
import styled from 'styled-components';

const PricingWrapperComponent = styled.div`
  display: flex;
  gap: 10px;
`;

const DescriptionComponent = styled.div`
  font-size: 28px;
  text-align: center;
  margin-bottom: 32px;
`;

export const Pricing = () => {
  return (
    <SectionLayout heading="Pricing" centerHeading id="pricing">
      <DescriptionComponent>
        Interested in using Forminer? Find the plan that suits you best.
      </DescriptionComponent>
      <PricingWrapperComponent>
        <PricingCard
          color="#818A96"
          title="Trial"
          price="Free"
          benefits={[
            "Use it in PoC (Proof of Concept) to see how it fits your project.",
            "Once ready to use it in your operations, purchase and enjoy it on production."
          ]}
          buttonText="Try it out"
          buttonLink="https://transactions.sendowl.com/products/78972481/998CD884/view"
        />
        <PricingCard
          isMostPopular
          color="#DBDB40"
          title="Monthly"
          price="$149"
          denominator="month"
          benefits="Forminer's complete package 💪"
          buttonText="Buy now"
          buttonLink="https://transactions.sendowl.com/subscriptions/21901/AC6D4F49/view"
        />
        <PricingCard
          color="#00ABFF"
          title="Yearly"
          price="$1490"
          denominator="year"
          benefits="Forminer's complete package 💪"
          buttonText="Buy now"
          buttonLink="https://transactions.sendowl.com/subscriptions/21900/D0E5583D/view"
        />
        <PricingCard
          color="#004AAD"
          title="Lifelong"
          price="$4900"
          denominator="∞"
          benefits="Forminer's complete package 💪"
          buttonText="Buy now"
          buttonLink="https://transactions.sendowl.com/products/78872705/34727BAC/view"
        />
        <PricingCard
          color="#00141E"
          title="Custom"
          benefits={[
            "Multi-project licenses",
            "Custom extensions",
            "Training sessions & consultancy"
          ]}
          buttonText="Contact us"
          buttonLink="https://www.vazco.eu/contact-us"
        />
      </PricingWrapperComponent>
    </SectionLayout>
  )
};

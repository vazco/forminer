import React from 'react';

import animationData from './animation.json';
import { Button } from '../../components/Button';
import { Link } from '../../components/Link';
import { SectionLayout } from '../../components/SectionLayout';
import { TextAndMediaItem } from '../../components/TextAndMediaItem';

export const TestProductSection = () => {
  const animationDataJson = JSON.stringify(animationData);

  return (
    <SectionLayout alternativeBackground>
      <TextAndMediaItem
        index={0}
        heading="Trial Version"
        mediaType="animation"
        mediaData={animationDataJson}
      >
        <p>
          You deserve to try out a form solution before making an investment.
          <br />
          To ensure that you are satisfied with Forminer, you can
          <strong> try the trial version for free </strong> and use it in PoC
          (Proof of Concept) to see how it fits your requirements with
          <strong> no strings attached</strong>.
          <br />
          Once ready to use it in your operations, you can purchase Forminer and
          <strong> enjoy it on production</strong>.
        </p>
        <Link to="https://sowl.co/s/bjKCyA" newTab={false}>
          <Button reversed>Get the trial</Button>
        </Link>
      </TextAndMediaItem>
    </SectionLayout>
  );
};

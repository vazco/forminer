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
        heading="Test the product before you buy it"
        mediaType="animation"
        mediaData={animationDataJson}
      >
        <p>
          You deserve a solution that fully meets your needs. To make sure
          Forminer is your match, try the free product demo linked below.
        </p>
        <Link to="/demo" internal>
          <Button>Check how it works</Button>
        </Link>
      </TextAndMediaItem>
    </SectionLayout>
  );
};

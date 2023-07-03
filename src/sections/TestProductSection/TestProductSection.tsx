import React from 'react';

import animationData from './animation.json';
import { Button } from '../../components/Button';
import { Link } from '../../components/Link';
import { List, ListItem } from '../../components/List';
import { SectionLayout } from '../../components/SectionLayout';
import { TextAndMediaItem } from '../../components/TextAndMediaItem';

export const TestProductSection = () => {
  const animationDataJson = JSON.stringify(animationData);

  return (
    <SectionLayout alternativeBackground>
      <TextAndMediaItem
        index={0}
        heading="Get the trial version"
        mediaType="animation"
        mediaData={animationDataJson}
      >
        <p>
          You deserve a form solution that meets all your needs. To ensure that
          you are satisfied with Forminer, you can try the trial version without
          making any commitments.
          <br />
          During the trial, you can assess the following:
        </p>
        <List>
          <ListItem>how easy is it to integrate Forminer</ListItem>
          <ListItem>the quality of our code.</ListItem>
        </List>
        <p>
          *If you want to use Forminer for a non-production environment (no
          users on the platform), you can use it to your heart&apos;s content.
        </p>
        <Link to="https://sowl.co/s/bjKCyA" newTab={false}>
          <Button>Get started</Button>
        </Link>
      </TextAndMediaItem>
    </SectionLayout>
  );
};

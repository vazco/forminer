import React from 'react';

import { Button } from '../../components/Button';
import { Link } from '../../components/Link';
import { List, ListItem } from '../../components/List';
import { SectionLayout } from '../../components/SectionLayout';
import { TextAndMediaItem } from '../../components/TextAndMediaItem';
// @ts-expect-error Image import
import uniformsImage from '../../images/uniforms.png';

export const TrustedByOpenSourceSection = () => {
  return (
    <SectionLayout alternativeBackground>
      <TextAndMediaItem
        index={0}
        heading="Trusted by Open Source community"
        mediaType="image"
        mediaData={uniformsImage}
        alt="uniforms screenshot"
      >
        <List>
          <ListItem>
            Reliance on<Link to="https://uniforms.tools/"> uniforms </Link>
            guarantees a good level of support for Forminer - both from the
            community and Vazco
          </ListItem>
          <ListItem>
            The most popular form package with the schema-first approach for
            <Link to="https://www.vazco.eu/technologies/reactjs">
              {' '}
              React.js
            </Link>
          </ListItem>
          <ListItem>
            The solution focuses on<strong> Developer Experience </strong>and
            speeding up the development
          </ListItem>
          <ListItem>
            <strong>We believe in Open Source. </strong>Your purchase of
            Forminer helps us support
            <Link to="https://uniforms.tools/"> uniforms </Link>and our other
            Open Source packages
          </ListItem>
        </List>

        <Link to="https://uniforms.tools/">
          <Button>Explore</Button>
        </Link>
      </TextAndMediaItem>
    </SectionLayout>
  );
};

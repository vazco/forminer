import Grid from '@material-ui/core/Grid';
import React from 'react';

import { Card } from './Card';
import { Link } from '../../components/Link';
import { SectionLayout } from '../../components/SectionLayout';

export const WhatYouGetSection = () => {
  const numOfItems = 3;
  return (
    <SectionLayout heading="What do you get?" id="what-you-get">
      <Grid spacing={3} container>
        <Card heading="Handy" icon="ageement" numOfItems={numOfItems}>
          A <strong> user-centric system </strong> for building custom forms in
          React with a <strong> drag-and-drop interface</strong>
        </Card>
        <Card heading="Extensible" icon="opportunities" numOfItems={numOfItems}>
          <strong>Easily extend to other tools </strong>with a universal data
          schema.
        </Card>
        <Card
          heading="Developer-friendly"
          icon="techtalk"
          numOfItems={numOfItems}
        >
          A well-documented package, easy to integrate,
          <strong>
            {' '}
            based on <Link to="https://uniforms.tools/">uniforms</Link>
          </strong>
        </Card>
      </Grid>
    </SectionLayout>
  );
};

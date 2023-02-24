import Grid from '@material-ui/core/Grid';
import React from 'react';
import styled from 'styled-components';

import { ProcessStep } from './ProcessStep';
import { Link } from '../../components/Link';
import { SectionLayout } from '../../components/SectionLayout';
import media from '../../globalStyles/media';

const GridContainer = styled(Grid)`
  && {
    margin-top: 60px;
    ${media.greaterThan('lg')`
  margin-top: 100px;
`}
  }
`;

const numOfSteps = 3;

export const StepsSection = () => {
  return (
    <SectionLayout heading="Solution easy to use" id="easy-to-use">
      <GridContainer container>
        <ProcessStep
          heading="Installation"
          orderNum={1}
          numOfSteps={numOfSteps}
        >
          We provide you with <strong>ready-to-use code</strong>
        </ProcessStep>
        <ProcessStep
          heading="Modification"
          orderNum={2}
          numOfSteps={numOfSteps}
        >
          Based on
          <Link to="https://www.vazco.eu/technologies/reactjs"> React </Link>
          components
        </ProcessStep>
        <ProcessStep
          heading="Customization"
          orderNum={3}
          numOfSteps={numOfSteps}
        >
          Freely modify the look by editing the CSS, either by hand or using
          indexes and variables
        </ProcessStep>
      </GridContainer>
    </SectionLayout>
  );
};

import Grid from '@material-ui/core/Grid';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { ProgressCircle } from './ProgressCircle';
import media from '../../../globalStyles/media';

const Step = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${media.greaterThan('lg')`
    flex-direction: column;
    text-align: center;
  `}
  p:last-child {
    margin-bottom: 0;
  }
  ${media.greaterThan('lg')`
    &:after,
    &:before {
      content: '';
      height: 1px;
      background-color: #E7EAEC;
      position: absolute;
      top: 46px;
      width: 20%;
    }
    &:before {
      left: 0;
      display: ${({ firstChild }) => (firstChild ? 'none' : 'display')}
    }
    &:after {
      right: 0;
      display: ${({ lastChild }) => (lastChild ? 'none' : 'display')}
    }
  `}
  ${media.greaterThan('1200px' as 'xl')`
    &:after,
    &:before {
      width: 25%;
    }
  `}
`;

const Text = styled.p`
  font-weight: ${({ bold }) => (bold ? '500' : '300')};
  margin-bottom: 8px;
  padding: 0 8px;
`;

const StyledGridItem = styled(Grid)`
  margin-bottom: 24px;
  ${media.greaterThan('lg')`
  margin-bottom: 0;
`}
`;

type ProcessStepProps = {
  heading: string;
  children: ReactNode;
  orderNum: number;
  numOfSteps: number;
};

export const ProcessStep = ({
  heading,
  children,
  orderNum,
  numOfSteps,
}: ProcessStepProps) => {
  const lastChild = numOfSteps === orderNum;
  return (
    <StyledGridItem xs={12} item lg>
      <Step firstChild={orderNum === 1} lastChild={lastChild}>
        <ProgressCircle
          lastChild={lastChild}
          textContent={orderNum}
          length={numOfSteps}
        />
        <div>
          <Text bold>{heading}</Text>
          <p>{children}</p>
        </div>
      </Step>
    </StyledGridItem>
  );
};

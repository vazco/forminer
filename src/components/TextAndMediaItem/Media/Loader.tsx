import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import styled from 'styled-components';

import media from '../../../globalStyles/media';

const Container = styled.div`
  width: 100%;
  min-height: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.greaterThan('md')`
    min-height: 400px;
  `}
`;

export const Loader = () => {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
};

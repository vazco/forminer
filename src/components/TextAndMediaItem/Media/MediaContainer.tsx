import styled from 'styled-components';

import media from '../../../globalStyles/media';

export const MediaContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  ${media.greaterThan('md')`
    width: 50%;
    margin-bottom: 0px;
    position: relative;
  `}
`;

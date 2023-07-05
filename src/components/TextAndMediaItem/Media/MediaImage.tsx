import React from 'react';
import styled from 'styled-components';

import { MediaContainer } from './MediaContainer';
import media from '../../../globalStyles/media';

const StyledMediaContainer = styled(MediaContainer)`
  ${media.greaterThan('md')`
    min-height: 600px;
  `}
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 709px;
  max-height: 600px;
  object-fit: scale-down;
`;

type MediaImageProps = {
  data: string;
  alt?: string;
};

export const MediaImage = ({ data, alt }: MediaImageProps) => {
  return (
    <StyledMediaContainer>
      <StyledImage loading="lazy" src={data} alt={alt} />
    </StyledMediaContainer>
  );
};

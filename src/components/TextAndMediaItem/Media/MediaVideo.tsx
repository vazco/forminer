import React, { lazy, Suspense } from 'react';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';

import { Loader } from './Loader';
import { MediaContainer } from './MediaContainer';
import media from '../../../globalStyles/media';

const VideoPlayer = lazy(() => import('./VideoPlayer'));

const StyledMediaContainer = styled(MediaContainer)`
  ${media.greaterThan('md')`
    min-height: 600px;
  `}
`;

const StyledDiv = styled.div`
  width: 100%;
`;

type MediaVideoProps = {
  data: string;
};

export const MediaVideo = ({ data }: MediaVideoProps) => {
  return (
    <StyledMediaContainer>
      <StyledDiv>
        <LazyLoad offset={1200} once>
          <Suspense fallback={<Loader />}>
            <VideoPlayer videoURL={data} />
          </Suspense>
        </LazyLoad>
      </StyledDiv>
    </StyledMediaContainer>
  );
};

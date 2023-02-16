import lottie from 'lottie-web';
import React, { useRef, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';

import { MediaContainer } from './MediaContainer';
import media from '../../../globalStyles/media';

type AnimationProps = {
  data: string;
};

const Animation = ({ data }: AnimationProps) => {
  const ref = useRef(null);

  useEffect(() => {
    let animation;

    if (ref.current) {
      const animationData = JSON.parse(data);
      animation = lottie.loadAnimation({
        animationData,
        container: ref.current,
        loop: true,
        renderer: 'svg',
      });
    }

    return () => {
      animation.destroy();
    };
  }, [data, ref]);

  return <div ref={ref} />;
};

const StyledMediaContainer = styled(MediaContainer)`
  ${media.greaterThan('md')`
    min-height: 600px;
  `}
`;

const StyledDiv = styled.div`
  width: 100%;
`;

export const MediaAnimation = ({ data }: AnimationProps) => {
  return (
    <StyledMediaContainer>
      <StyledDiv>
        <LazyLoad offset={1200} once>
          <Animation data={data} />
        </LazyLoad>
      </StyledDiv>
    </StyledMediaContainer>
  );
};

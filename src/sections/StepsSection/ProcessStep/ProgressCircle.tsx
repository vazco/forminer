import React, { useRef } from 'react';
import styled from 'styled-components';

import media from '../../../globalStyles/media';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

const circleConfig = {
  viewBox: '0 0 38 38',
  x: '19',
  y: '19',
  radio: 16,
};

const Wrapper = styled.div`
  position: relative;
  min-width: 92px;
  height: auto;
  margin-right: 16px;
  margin-bottom: auto;
  ${media.greaterThan('lg')`
    margin: 0 auto 16px;
  `}

  svg {
    display: block;
    background-color: ${({ theme }) => theme.color.white};
    position: relative;
    z-index: 3;
  }
`;

const Circle = styled.div`
  position: relative;
  &:after {
    content: '';
    display: ${({ lastChild }) => (lastChild ? 'none' : 'block')};
    height: 100%;
    width: 1px;
    background-color: #e7eaec;
    position: absolute;
    bottom: -50px;
    left: 50%;
    z-index: 1;
  }
  ${media.greaterThan('lg')`
    &:after {
      display: none;
    }
  `}
`;

const CircleWithProgress = styled.circle`
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-dasharray: ${({ array }) => array};
  stroke-dashoffset: ${({ offset }) => offset};
  animation: rotate 2s forwards;
  @keyframes rotate {
    from {
      stroke-dashoffset: ${({ array }) => array};
    }
    ,
    to {
      stroke-dashoffset: ${({ offset }) => offset};
    }
  }
`;

const Number = styled.p`
  margin: 0;
  font-weight: 500;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

type ProgressCircleProps = {
  textContent: number;
  lastChild: boolean;
  length: number;
};

export const ProgressCircle = ({
  textContent,
  lastChild,
  length,
}: ProgressCircleProps) => {
  const ref = useRef();
  const isInView = useIntersectionObserver(ref);

  const circumference = circleConfig.radio * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (((100 / length) * textContent) / 100) * circumference;

  return (
    <Wrapper ref={ref}>
      <Circle lastChild={lastChild}>
        <svg viewBox={circleConfig.viewBox}>
          {isInView && (
            <CircleWithProgress
              animation={isInView}
              stroke="#1074EF"
              fill="transparent"
              strokeWidth={3}
              array={circumference}
              offset={strokeDashoffset}
              stroke-width={1}
              cx={circleConfig.x}
              cy={circleConfig.y}
              r={circleConfig.radio}
            />
          )}
        </svg>
      </Circle>
      <Number>{textContent}</Number>
    </Wrapper>
  );
};

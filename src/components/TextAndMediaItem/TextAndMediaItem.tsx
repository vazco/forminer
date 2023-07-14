import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { MediaAnimation, MediaVideo, MediaImage } from './Media';
import media from '../../globalStyles/media';
import { AccentHeading } from '../AccentHeading';

const Wrapper = styled.div`
  display: flex;
  align-items: space-between;
  flex-direction: column-reverse;

  &:not(:last-child) {
    margin-bottom: 40px;
  }

  ${media.greaterThan('md')`
    flex-direction: ${({ isReversed }) => (isReversed ? 'row-reverse' : 'row')};
    &:not(:last-child) {
      margin-bottom: 0px;
    }
  `}
`;

const TextContainer = styled.div`
  width: 100%;

  ${media.greaterThan('md')`
    width: 50%;
    padding-top: 58px;
    padding-bottom: 58px;
    ${({ isReversed }) =>
      isReversed
        ? css`
            padding-right: 0;
            padding-left: 116px;
          `
        : css`
            padding-left: 0;
            padding-right: 116px;
          `}
  `}

  p:last-child {
    margin-bottom: ${({ isButton }) => (isButton ? '1.5rem' : 0)};
  }
`;

type Media = 'animation' | 'video' | 'image';

const mediaMap = {
  animation: MediaAnimation,
  video: MediaVideo,
  image: MediaImage,
};

type TextAndMediaItemProps = {
  index: number;
  children: ReactNode;
  heading: string;
  mediaType: Media;
  mediaData: string;
  alt?: string;
  isStrong?: boolean;
  reversedItems?: boolean;
};

export const TextAndMediaItem = ({
  index,
  children,
  heading,
  mediaType,
  mediaData,
  alt = '',
  isStrong = true,
  reversedItems = false,
}: TextAndMediaItemProps) => {
  const isReversed = reversedItems ? !!((index + 1) % 2) : !!(index % 2);

  const MediaComponent = mediaMap[mediaType];
  return (
    <Wrapper isReversed={isReversed}>
      <TextContainer isReversed={isReversed}>
        <AccentHeading isStrong={isStrong}>{heading}</AccentHeading>
        {children}
      </TextContainer>

      <MediaComponent data={mediaData} alt={alt} />
    </Wrapper>
  );
};

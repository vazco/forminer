import React from 'react';
import styled, { css } from 'styled-components';

import media from '../../globalStyles/media';
// @ts-expect-error png import
import antDesignIcon from '../../images/technologies/ant-design.webp';
// @ts-expect-error png import
import bootstrapIcon from '../../images/technologies/bt.webp';
// @ts-expect-error png import
import materialIcon from '../../images/technologies/material-ui.webp';
// @ts-expect-error png import
import semanticIcon from '../../images/technologies/semanticUI.webp';

const ListContainer = styled.div`
  display: grid;
  justify-items: start;
  align-items: center;

  ${({ numberOfItems }) => css`
    grid-template-columns: repeat(
      ${calculateNumberOfColumns(numberOfItems)},
      1fr
    );
    ${media.greaterThan('sm')`
      grid-template-columns: repeat(
        ${calculateNumberOfColumns(numberOfItems, 'sm')},
        1fr
      ); 
    `};
    ${media.greaterThan('md')`
      grid-template-columns: repeat(${numberOfItems}, 1fr);
    `};
  `}

  grid-row-gap: 5px;
  ${media.greaterThan('md')`
    grid-row-gap: 10px;
    width: 40%;
  `};
  ${media.between('md', 'xl')`
    width: 50%;
  `};
  ${media.greaterThan('lg')`
    grid-row-gap: 15px;
  `};
`;

const StyledImage = styled.img`
  width: 75px;
  height: 80%;
  max-height: 40px;
  object-fit: scale-down;
  object-position: left;
  margin: 0 !important;
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0%);
  }
`;

const items = [
  {
    src: semanticIcon,
    alt: 'semanticUI icon',
  },
  {
    src: antDesignIcon,
    alt: 'antDesign icon',
  },
  {
    src: materialIcon,
    alt: 'MUI icon',
  },
  {
    src: bootstrapIcon,
    alt: 'bootstrap icon',
  },
];

const calculateNumberOfColumns = (numberOfItems, mediaBreakpoint = 'xs') => {
  if (
    (mediaBreakpoint === 'xs' && numberOfItems > 4) ||
    (mediaBreakpoint === 'sm' && numberOfItems > 6)
  ) {
    return Math.ceil(numberOfItems / 2);
  }

  return numberOfItems;
};

const numberOfItems = items.length;

export const SupportedDesignLibraries = () => {
  return (
    <ListContainer numberOfItems={numberOfItems}>
      {items.map(({ src, alt }) => {
        return <StyledImage key={src} loading="lazy" src={src} alt={alt} />;
      })}
    </ListContainer>
  );
};

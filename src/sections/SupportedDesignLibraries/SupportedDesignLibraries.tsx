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
  justify-items: center;
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
  grid-column-gap: 10px;
  ${media.greaterThan('md')`
    grid-row-gap: 10px;
    grid-column-gap: 20px;
  `};
  ${media.greaterThan('lg')`
    grid-row-gap: 15px;
    grid-column-gap: 30px;
  `};
`;

const Item = styled.a`
  display: flex;
  justify-content: start;
  padding-top: 10px;
  padding-bottom: 10px;

  max-width: 200px;
  max-height: 50px;
  ${media.greaterThan('md')`
    max-width: 210px;
    max-height: 60px;
  `};

  filter: grayscale(0%);
  ${media.greaterThan('md')`
    filter: grayscale(100%);

    &:hover {
      filter: grayscale(0%);
    }
  `}
`;

const StyledImage = styled.img`
  width: 200;
  height: 50;
  ${media.lessThan('xl')`
  max-width: 65%;
  `}
  max-width: 40%;
  max-height: 100%;
  object-fit: scale-down;
  margin: 0 !important;
`;

const items = [
  {
    url: 'https://semantic-ui.com/',
    src: semanticIcon,
    alt: 'semanticUI icon',
  },
  {
    url: 'https://ant.design/',
    src: antDesignIcon,
    alt: 'antDesign icon',
  },
  {
    url: 'https://mui.com/core/',
    src: materialIcon,
    alt: 'MUI icon',
  },
  {
    url: 'https://getbootstrap.com/',
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
      {items.map(({ url, src, alt }) => {
        return (
          <Item key={url} href={url} target="_blank" rel="noopener noreferrer">
            <StyledImage loading="lazy" src={src} alt={alt} />
          </Item>
        );
      })}
    </ListContainer>
  );
};

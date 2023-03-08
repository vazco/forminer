import React from 'react';
import styled, { css } from 'styled-components';

import { SectionLayout } from '../../components/SectionLayout';
import media from '../../globalStyles/media';
// @ts-expect-error png import
import antDesignIcon from '../../images/technologies/ant-design.png';
// @ts-expect-error png import
import bootstrapIcon from '../../images/technologies/bt.png';
// @ts-expect-error png import
import materialIcon from '../../images/technologies/material-ui.png';
// @ts-expect-error png import
import semanticIcon from '../../images/technologies/semanticUI.png';

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
  justify-content: center;
  padding: 5px;

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
  max-width: 100%;
  max-height: 100%;
  object-fit: scale-down;
  margin: 0 !important;
`;

const items = [
  {
    url: 'https://semantic-ui.com/',
    src: semanticIcon,
  },
  {
    url: 'https://ant.design/',
    src: antDesignIcon,
  },
  {
    url: 'https://mui.com/core/',
    src: materialIcon,
  },
  {
    url: 'https://getbootstrap.com/',
    src: bootstrapIcon,
  },
];

const heading = 'Supported design libraries';
const id = 'tech-list';

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

export const TechnologyListSection = () => {
  return (
    <SectionLayout heading={heading} id={id}>
      <ListContainer numberOfItems={numberOfItems}>
        {items.map(({ url, src }) => {
          return (
            <Item
              key={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledImage src={src} />
            </Item>
          );
        })}
      </ListContainer>
    </SectionLayout>
  );
};

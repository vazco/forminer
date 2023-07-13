import { useMediaQuery, useTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
// eslint-disable-next-line no-unused-vars -- false positive error
import React, { MouseEvent } from 'react';
import styled, { css } from 'styled-components';

import { Container } from '../../components/Container';
import media from '../../globalStyles/media';

const StyledFooter = styled.footer`
  background-color: #0d5dbf;
  overflow: hidden;
  padding: 20px 0;
  ${media.greaterThan('md')`
    padding: 30px 0;
  `}
  color: ${({ theme }) => theme.color.white};
`;

const TopSection = styled.div`
  margin-top: 42px;
  padding-bottom: 56px;
`;

const StyledContainer = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  ${media.greaterThan('md')`
    width: 20%
  `}
`;

const StyledContainerCentered = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CopyrightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const ShowcaseCardContainer = styled.div`
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
  border: 2px dashed white;
  ${media.greaterThan('md')`
    max-width: 20%
  `}
`;

const ShowcaseCardText = styled.p`
  text-align: center;
  padding-top: 1.5em;
  font-size: 16px;
`;

const SectionListItem = styled.li`
  margin-bottom: 10;
`;

const commonText = css`
  background-color: inherit;
  border: none;
  font-size: 16px;
  font-weight: 300;
  color: white;
`;

const SectionListButton = styled.button`
  ${commonText}
  padding: 0;
  &:hover {
    color: #1074ef;
    cursor: pointer;
  }
`;

const SectionListLink = styled.a`
  ${commonText}
  text-decoration: none !important;
`;

const Mail = styled.a`
  ${commonText}
  text-decoration: none !important;
`;

const siteMapData = [
  {
    name: 'Demo',
    link: 'demo',
  },
  {
    name: 'Docs',
    link: 'docs',
  },
  {
    name: 'Custom solutions',
    link: 'https://www.vazco.eu/',
  },
];

const firstStepsData = [
  {
    name: 'Installation',
    link: 'https://forminer.com/docs/installation',
  },
  {
    name: 'Handling custom components',
    link: 'https://forminer.com/docs/custom-components',
  },
  {
    name: 'Integration',
    link: 'https://forminer.com/docs/integration',
  },
];

export const Footer = () => {
  const theme = useTheme();
  const columnView = useMediaQuery(theme.breakpoints.down('sm'));

  const scrollToSection = (
    event: MouseEvent<HTMLButtonElement>,
    sectionId: string,
  ) => {
    event.preventDefault();
    const pricingSection = document.getElementById(sectionId);

    if (pricingSection) {
      pricingSection.scrollIntoView();
    }
  };

  return (
    <StyledFooter>
      <Container>
        <TopSection>
          <Box
            gridColumnGap={20}
            display="flex"
            flexDirection={columnView ? 'column' : 'row'}
            alignContent="space-around"
            justifyContent="center"
            flexWrap="wrap"
          >
            <ShowcaseCardContainer>
              <img
                width={75}
                height={75}
                alt="forminer logo"
                src="img/forminer-logo.svg"
              />
              <ShowcaseCardText>
                Powerful tool for building forms in React
              </ShowcaseCardText>
            </ShowcaseCardContainer>
            <StyledContainer>
              <h5>Site map</h5>
              <ul>
                <SectionListItem>
                  <SectionListButton
                    onClick={event => scrollToSection(event, 'pricing')}
                  >
                    Pricing
                  </SectionListButton>
                </SectionListItem>
                {siteMapData.map(item => (
                  <SectionListItem key={item.link}>
                    <SectionListLink href={item.link}>
                      {item.name}
                    </SectionListLink>
                  </SectionListItem>
                ))}
              </ul>
            </StyledContainer>
            <StyledContainer>
              <h5>First steps</h5>
              <ul>
                {firstStepsData.map(item => (
                  <SectionListItem key={item.link}>
                    <SectionListLink href={item.link}>
                      {item.name}
                    </SectionListLink>
                  </SectionListItem>
                ))}
              </ul>
            </StyledContainer>
            <StyledContainerCentered>
              <h5>Start a conversation!</h5>
              <Mail href="mailto:hello@forminer.com">hello@forminer.com</Mail>
              <CopyrightContainer>
                <a
                  href="https://www.vazco.eu/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src="img/vazco-logo-2023.svg"
                    alt="Vazco.eu"
                    width="150"
                    height="auto"
                  />
                </a>
                <p
                  style={{ marginBottom: 0, fontSize: 16 }}
                >{`Copyright © ${new Date().getFullYear()}`}</p>
                <p style={{ fontSize: 16 }}>All Rights Reserved</p>
              </CopyrightContainer>
            </StyledContainerCentered>
          </Box>
        </TopSection>
      </Container>
    </StyledFooter>
  );
};

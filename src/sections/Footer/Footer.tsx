import Box from '@material-ui/core/Box';
import { rem } from 'polished';
import React from 'react';
import styled from 'styled-components';

import { Container } from '../../components/Container';
import { Link } from '../../components/Link';
import media from '../../globalStyles/media';

// import Logo from '~components/atoms/navMenu/Logo';

const StyledFooter = styled.footer`
  background-color: #303846;
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

const Address = styled.div`
  a {
    font-size: inherit;
  }
  .phone-number {
    color: inherit;
    font-weight: inherit;
  }
`;

const StyledContainer = styled.div`
  padding: 12px;
`;

const LinkContainer = styled.div`
  ${media.greaterThan('sm')`
  margin-left: 60px;
      
      `}
`;

const FooterNavMenuTitle = styled.p`
  font-weight: 500;
  font-size: ${rem('16px')};
  line-height: ${rem('26px')};
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const FooterNavMenuItem = styled.div`
  margin-bottom: 6px;
  margin-left: 16px;
  
  & > a {
    color: ${props => props.theme.color.white};
    font-size: ${rem('16px')};
    font-weight: 300;
    line-height: ${rem('26px')};
    transition: all 0.3s ease-out;

    &:hover {
      color: ${props => props.theme.color.primary};
      text-decoration: none;
    }
`;

const Copyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const CopyrightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const menuData = [
  {
    title: 'Docs',
    items: [
      {
        name: 'Introduction',
        link: '/docs',
      },
      {
        name: 'Supported technologies',
        link: '/docs/supported-stack',
      },
      {
        name: 'Integration',
        link: '/docs/integration',
      },
    ],
  },
];

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <TopSection>
          <Box display="flex" flexWrap="wrap">
            <StyledContainer>
              <Address>
                <p>
                  Vazco P.S.A.
                  <br />
                  Wrocław, 50-043
                  <br />
                  ul. Podwale 7/1 Poland
                </p>
                <p>
                  e.{' '}
                  <Link to="mailto:hello@forminer.com" newTab={false}>
                    hello@forminer.com
                  </Link>
                  <br />
                  m. +48 609 257 363
                </p>
              </Address>
            </StyledContainer>
            <LinkContainer>
              {menuData.map(({ title, items }) => (
                <StyledContainer key={title}>
                  <FooterNavMenuTitle>{title}</FooterNavMenuTitle>
                  {items.map(({ name, link }) => (
                    <FooterNavMenuItem key={name}>
                      <Link to={link} internal>
                        {name}
                      </Link>
                    </FooterNavMenuItem>
                  ))}
                </StyledContainer>
              ))}
            </LinkContainer>
          </Box>
          <CopyrightContainer>
            <Copyright>
              {`Copyright © ${new Date().getFullYear()}`}
              <a
                href="https://www.vazco.eu/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src="img/vazco-logo.png"
                  alt="Vazco.eu"
                  width="114"
                  height="51"
                />
              </a>
            </Copyright>
            All Rights Reserved
          </CopyrightContainer>
        </TopSection>
      </Container>
    </StyledFooter>
  );
};

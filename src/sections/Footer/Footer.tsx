import Link from '@docusaurus/Link';
import { useMediaQuery, useTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import React from 'react';

import { Container } from '../../components/Container';
// @ts-expect-error Image import
import ctaBackground from '../../images/cta-background.webp';
import { scrollToSection } from '../../utils/scrollToSection';

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
    link: '/docs/installation',
  },
  {
    name: 'Handling custom components',
    link: '/docs/custom-components',
  },
  {
    name: 'Integration',
    link: '/docs/integration',
  },
];

export const Footer = () => {
  const theme = useTheme();
  const columnView = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <footer
      className="footer-styled"
      style={{ backgroundImage: `url(${ctaBackground})` }}
    >
      <Container>
        <div className="footer-styled__top-section">
          <Box
            gridColumnGap={20}
            display="flex"
            flexDirection={columnView ? 'column' : 'row'}
            alignContent="space-around"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <div className="footer-styled__showcase-card-container">
              <img
                width={75}
                height={75}
                alt="forminer logo"
                src="img/forminer-logo.svg"
              />
              <p className="footer-styled__showcase-card-text">
                Empowering your users to build forms seamlessly
              </p>
            </div>
            <div className="footer-styled__column-container">
              <h5>Product</h5>
              <ul>
                <li className="footer-styled__column-item">
                  <button
                    className={clsx(
                      'footer-styled__common-text',
                      'footer-styled__column-button',
                    )}
                    onClick={event => scrollToSection(event, 'pricing')}
                  >
                    Pricing
                  </button>
                </li>
                {siteMapData.map(item => (
                  <li key={item.link} className="footer-styled__column-item">
                    <Link
                      className="footer-styled__common-text"
                      href={item.link}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-styled__column-container">
              <h5>First steps</h5>
              <ul>
                {firstStepsData.map(item => (
                  <li key={item.link} className="footer-styled__column-item">
                    <Link className="footer-styled__common-text" to={item.link}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-styled__column-container__centered">
              <h5>Start a conversation!</h5>
              <a
                className="footer-styled__common-text"
                href="mailto:hello@forminer.com"
              >
                hello@forminer.com
              </a>
              <div className="footer-styled__copyright-container">
                <a
                  href="https://www.vazco.eu/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src="img/vazco-logo-dark.png"
                    alt="Vazco.eu"
                    width="150"
                    height="auto"
                  />
                </a>
                <p
                  style={{ marginBottom: 0, fontSize: 16 }}
                >{`Copyright © 2020 - ${new Date().getFullYear()}`}</p>
                <p style={{ fontSize: 16 }}>All Rights Reserved</p>
              </div>
            </div>
          </Box>
        </div>
      </Container>
    </footer>
  );
};

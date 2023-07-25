import { createMuiTheme } from '@material-ui/core/styles';
import { rem } from 'polished';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import media from './media';
import {
  HEADING_LG_STYLES,
  HEADING_MD_STYLES,
  HEADING_XL_STYLES,
} from './sharedStyles/headings';

export const MuiTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1024,
      xl: 1360,
    },
  },
  palette: {
    primary: {
      main: '#1074ef',
    },
  },
});

export const theme = {
  color: {
    primary: '#1074ef',
    darkBlue: '#0d5dbf',
    body: '#000000',
    grey: '#fafafb',
    darkGrey: '#f4f5f6',
    white: '#fff',
  },
};

export const GlobalStyle = createGlobalStyle`
${normalize}
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
*, *:before, *:after {
  box-sizing: inherit;
}
main {
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  color: ${theme.color.body};
  overflow-x: hidden;
  
  h1, h2, h3, h4, h5 {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  margin-top: 0;
}

h1, h2, h3 {
  margin-bottom: ${rem('24px')};
}

h4, h5 {
  margin-bottom: ${rem('20px')};
}

h1 {
  ${HEADING_XL_STYLES}
}
h2 {
  ${HEADING_LG_STYLES}
}
h3 {
  ${HEADING_MD_STYLES}
}
h4 {
  font-size: ${rem('18px')};
  line-height: ${rem('28px')};

  ${media.greaterThan('md')`
    font-size: ${rem('24px')};
    line-height: ${rem('34px')};
  `}
}
h5 {
  font-size: ${rem('16px')};
  line-height: ${rem('26px')};

  ${media.greaterThan('md')`
    font-size: ${rem('20px')};
    line-height: ${rem('30px')};
  `}
}

p, a, ul, ol {
  font-size: ${rem('16px')};
  line-height: ${rem('26px')};

  ${media.greaterThan('md')`
    font-size: ${rem('19px')};
    line-height: ${rem('29px')};
  `}
}

p {
  margin-top: 0;
  margin-bottom: ${rem('24px')};
}

a {
  font-weight: 500;
  color: ${theme.color.primary};
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
}

small {
  font-size: ${rem('14px')};
  line-height: ${rem('24px')};
}

strong {
  font-weight: 500;
}
}
`;

import { MuiThemeProvider } from '@material-ui/core/styles';
import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme, MuiTheme } from '../../globalStyles/theme';

// import { Cookies } from '~components/molecules/Cookies';
// import SEO from '~components/organisms/SEO';

type LayoutBaseProps = {
  children: ReactNode;
  seoMetaTags?: any;
};

export const LayoutBase = ({ children }: LayoutBaseProps) => {
  return (
    <MuiThemeProvider theme={MuiTheme}>
      {/*<SEO metaTags={seoMetaTags} />*/}
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {children}
        {/*<Cookies />*/}
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

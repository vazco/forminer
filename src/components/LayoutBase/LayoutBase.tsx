import { MuiThemeProvider } from '@material-ui/core/styles';
import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme, MuiTheme } from '../../globalStyles/theme';
import { useNavbarStyles } from '../../hooks/useNavbarStyles';
import { VideoAsk } from '../VideoAsk';

// import { Cookies } from '~components/molecules/Cookies';
// import SEO from '~components/organisms/SEO';

type LayoutBaseProps = {
  children: ReactNode;
  seoMetaTags?: any;
};

export const LayoutBase = ({ children }: LayoutBaseProps) => {
  useNavbarStyles();

  return (
    <MuiThemeProvider theme={MuiTheme}>
      {/*<SEO metaTags={seoMetaTags} />*/}
      <VideoAsk />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <main className="homepage-main-container">{children}</main>
        {/*<Cookies />*/}
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

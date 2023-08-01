import { useHistory } from '@docusaurus/router';
import { MuiThemeProvider } from '@material-ui/core/styles';
import React, { ReactNode, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme, MuiTheme } from '../../globalStyles/theme';
import {
  handleNavbarBackground,
  handleNavbarScroll,
} from '../../utils/navbarChangeHandlers';

// import { Cookies } from '~components/molecules/Cookies';
// import SEO from '~components/organisms/SEO';

type LayoutBaseProps = {
  children: ReactNode;
  seoMetaTags?: any;
};

export const LayoutBase = ({ children }: LayoutBaseProps) => {
  const history = useHistory();

  useEffect(() => {
    history.location.pathname === '/' && handleNavbarBackground();
  }, [history]);

  useEffect(() => {
    window.addEventListener('scroll', handleNavbarScroll);

    return () => {
      window.removeEventListener('scroll', handleNavbarScroll);
    };
  }, []);

  return (
    <MuiThemeProvider theme={MuiTheme}>
      {/*<SEO metaTags={seoMetaTags} />*/}
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <main className="homepage-main-container">{children}</main>
        {/*<Cookies />*/}
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

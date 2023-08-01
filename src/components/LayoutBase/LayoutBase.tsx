import { MuiThemeProvider } from '@material-ui/core/styles';
import React, { ReactNode, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme, MuiTheme } from '../../globalStyles/theme';
import { handleNavbarChange } from '../../utils/navbarChangeHandler';

// import { Cookies } from '~components/molecules/Cookies';
// import SEO from '~components/organisms/SEO';

type LayoutBaseProps = {
  children: ReactNode;
  seoMetaTags?: any;
};

export const LayoutBase = ({ children }: LayoutBaseProps) => {
  useEffect(() => {
    window.addEventListener('scroll', handleNavbarChange);

    const setupMutationObserver = () => {
      const observer = new MutationObserver(mutationsList => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList') {
            const forminerDemo = document.querySelector('.forminer-demo');
            const forminerDocs = document.querySelector('.forminer-docs');
            if (forminerDemo || forminerDocs) {
              handleNavbarChange();
            }
          }
        }
      });

      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
      });

      return () => {
        observer.disconnect();
      };
    };

    setTimeout(setupMutationObserver, 100);

    return () => {
      window.removeEventListener('scroll', handleNavbarChange);
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

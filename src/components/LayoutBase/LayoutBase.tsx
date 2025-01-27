import { MuiThemeProvider } from '@material-ui/core/styles';
import React, { ReactNode } from 'react';

import { GlobalStyle, MuiTheme } from '../../globalStyles/theme';
import { useNavbarStyles } from '../../hooks/useNavbarStyles';

type LayoutBaseProps = {
  children: ReactNode;
  seoMetaTags?: any;
};

export const LayoutBase = ({ children }: LayoutBaseProps) => {
  useNavbarStyles();

  return (
    <MuiThemeProvider theme={MuiTheme}>
      <GlobalStyle />
      <main className="homepage-main-container">{children}</main>
    </MuiThemeProvider>
  );
};

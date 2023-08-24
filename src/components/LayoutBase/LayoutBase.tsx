import { MuiThemeProvider } from '@material-ui/core/styles';
import React, { ReactNode } from 'react';

import { GlobalStyle, MuiTheme } from '../../globalStyles/theme';
import { useNavbarStyles } from '../../hooks/useNavbarStyles';
import { VideoAsk } from '../VideoAsk';

type LayoutBaseProps = {
  children: ReactNode;
  seoMetaTags?: any;
};

export const LayoutBase = ({ children }: LayoutBaseProps) => {
  useNavbarStyles();

  return (
    <MuiThemeProvider theme={MuiTheme}>
      <VideoAsk />
      <GlobalStyle />
      <main className="homepage-main-container">{children}</main>
    </MuiThemeProvider>
  );
};

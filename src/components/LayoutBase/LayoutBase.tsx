import { MuiThemeProvider } from '@material-ui/core/styles';
import React, { ReactNode, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme, MuiTheme } from '../../globalStyles/theme';
import { useNavbarStyles } from '../../hooks/useNavbarStyles';

// import { Cookies } from '~components/molecules/Cookies';
// import SEO from '~components/organisms/SEO';

type LayoutBaseProps = {
  children: ReactNode;
  seoMetaTags?: any;
};

export const LayoutBase = ({ children }: LayoutBaseProps) => {
  useNavbarStyles();

  useEffect(() => {
    const videoAskScript = document.createElement('script');
    videoAskScript.innerHTML = `
      window.VIDEOASK_EMBED_CONFIG = {
        "kind": "widget",
        "url": "https://www.videoask.com/fno6cfau6",
        "options": {
          "widgetType": "VideoThumbnailExtraLarge",
          "text": "Hey!&#x1FAE1;",
          "backgroundColor": "#00ABFF",
          "position": "bottom-right",
          "dismissible": true
        }
      };
    `;
    document.body.appendChild(videoAskScript);

    const embedScript = document.createElement('script');
    embedScript.src = 'https://www.videoask.com/embed/embed.js';
    document.body.appendChild(embedScript);

    return () => {
      document.body.removeChild(videoAskScript);
      document.body.removeChild(embedScript);
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

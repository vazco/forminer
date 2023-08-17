import Head from '@docusaurus/Head';
import React from 'react';

export const VideoAsk = () => (
  <Head>
    <script>
      {`
    window.VIDEOASK_EMBED_CONFIG = {
        "kind": "widget",
        "url": "https://www.videoask.com/fno6cfau6",
        "options": {
            "widgetType": "VideoThumbnailExtraLarge",
            "text": "Hey!&#129761;",
            "backgroundColor": "#00ABFF",
            "position": "bottom-right",
            "dismissible": true
        }
    };
    `}
    </script>
    <script src="https://www.videoask.com/embed/embed.js" />
  </Head>
);

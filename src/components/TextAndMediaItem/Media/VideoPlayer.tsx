import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

import { BOX_COMMON_STYLES } from '../../../globalStyles/sharedStyles/box';

const PlayerContainer = styled.div`
  max-width: 100%;
  height: auto;
  position: relative;
  margin-top: 50px;
  padding-bottom: 56.25%;
`;

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${BOX_COMMON_STYLES}
  }
`;

type VideoPlayerProps = {
  videoURL: string;
};

const VideoPlayer = ({ videoURL }: VideoPlayerProps) => {
  return (
    <PlayerContainer>
      <StyledReactPlayer url={videoURL} width="100%" height="100%" controls />
    </PlayerContainer>
  );
};

export default VideoPlayer;

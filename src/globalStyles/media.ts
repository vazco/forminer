import { generateMedia } from 'styled-media-query';

const media = generateMedia({
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '1024px',
  xl: '1360px',
  xxl: '1920px',
});

export default media;

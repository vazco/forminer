import { css } from 'styled-components';

export const BOX_BORDER_RADIUS = css`
  border-radius: 8px;
`;

export const BOX_SHADOW = css`
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
`;

export const BOX_COMMON_STYLES = css`
  ${BOX_BORDER_RADIUS}
  ${BOX_SHADOW}
`;

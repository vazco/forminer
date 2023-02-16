import { rem } from 'polished';
import { css } from 'styled-components';

import media from '../media';

export const HEADING_XL_STYLES = css`
  font-size: ${rem('40px')};
  line-height: ${rem('50px')};

  ${media.greaterThan('md')`
    font-size: ${rem('54px')};
    line-height: ${rem('64px')};
  `}
`;

export const HEADING_LG_STYLES = css`
  font-size: ${rem('26px')};
  line-height: ${rem('36px')};

  ${media.greaterThan('md')`
    font-size: ${rem('40px')};
    line-height: ${rem('50px')};
  `}
`;

export const HEADING_MD_STYLES = css`
  font-size: ${rem('20px')};
  line-height: ${rem('30px')};

  ${media.greaterThan('md')`
    font-size: ${rem('28px')};
    line-height: ${rem('38px')};
  `}
`;

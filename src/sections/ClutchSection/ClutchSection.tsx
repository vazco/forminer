import React from 'react';
import styled from 'styled-components';

import { SectionLayout } from '../../components/SectionLayout';
import media from '../../globalStyles/media';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  h3 {
    font-weight: 300;
    margin-bottom: 32px;
  }
  ${media.greaterThan('md')`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    h3 {
      margin: 0;
    }
  `}
`;

const ClutchWrap = styled.div`
  max-width: 200px;
  margin: 0 auto;
  ${media.greaterThan('md')`
    margin: 0 0 0 60px;
  `}
`;

const StyledIFrame = styled.iframe`
  border: none;
  height: 45px;
`;

export const ClutchSection = () => {
  return (
    <SectionLayout>
      {' '}
      <Wrapper>
        <h3>
          Choose a solution made by the team of experts rated ★4.8/5 by
          executives.
        </h3>
        <ClutchWrap>
          <StyledIFrame
            title="Clutch"
            src="https://widget.clutch.co/widgets/get/2?ref_domain=vazco.eu&uid=631900"
          />
        </ClutchWrap>
      </Wrapper>
    </SectionLayout>
  );
};

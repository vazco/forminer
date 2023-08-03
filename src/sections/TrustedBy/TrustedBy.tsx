import React from 'react';
import styled from 'styled-components';

import media from '../../globalStyles/media';
// @ts-expect-error Image import
import campusSkills from '../../images/campus-skills.webp';
// @ts-expect-error Image import
import cbre from '../../images/cbre.webp';
// @ts-expect-error Image import
import eriez from '../../images/eriez.webp';
// @ts-expect-error Image import
import kodefly from '../../images/kodefly.webp';

const Container = styled.div`
  width: 100%;
  padding: 20px 0px;
  margin: 0px 0px 100px 0px;
  background-color: #eeeeee;
`;

const Content = styled.div`
  display: flex;
  max-width: 1360px;
  width: 100%;
  margin: 0px auto;
  padding: 0px 16px;
  ${media.lessThan('lg')`
    flex-direction: column;
    gap: 15px;
    & img {
      margin-left: 0px;
    }
  `}
`;

const Companies = styled.div`
  display: flex;
  ${media.lessThan('lg')`
    flex-direction: column;
    gap: 30px;
  `}
`;

const CompanyWrap = styled.div`
  width: 250px;
  height: 20px;
  ${media.lessThan('lg')`
    padding: 0px;
  `}
`;

const CompanyImage = styled.img`
  height: 100%;
`;

export const TrustedBy = () => (
  <Container>
    <Content>
      <div style={{ width: 150 }}>Solution trusted by:</div>
      <Companies>
        <CompanyWrap>
          <CompanyImage src={cbre} alt="CBRE" />
        </CompanyWrap>
        <CompanyWrap>
          <CompanyImage src={campusSkills} alt="CampusSkills" />
        </CompanyWrap>
        <CompanyWrap>
          <CompanyImage src={eriez} alt="Eriez" />
        </CompanyWrap>
        <CompanyWrap>
          <CompanyImage src={kodefly} alt="Kodefly" />
        </CompanyWrap>
      </Companies>
    </Content>
  </Container>
);

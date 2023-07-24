import React from 'react';
import { SectionLayout } from '../../components/SectionLayout';
import styled from 'styled-components';
import media from '../../globalStyles/media';
// @ts-expect-error Image import
import ProcessesClient from '../../images/processes-client.webp';
// @ts-expect-error Image import
import ProcessesTeam from '../../images/processes-team.webp';
import { ListCard } from '../../components/ListCard';

const id = 'use-cases';

const CardsWrapComponent = styled.div`
  display: flex;
  gap: 120px;
  ${media.lessThan('md')`
    gap: 40px;
    flex-direction: column;
  `}
`;

const CardWrapComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

export const UseCases = () => {
  return (
    <SectionLayout heading="Most popular use cases" centerHeading id={id}>
      <CardsWrapComponent>
        <CardWrapComponent>
          <img src={ProcessesClient} alt="Client processes" />
          <ListCard
            title="Scenario description"
            points={[
              'Your platform allows your clients to build forms.',
              'Your clients build forms on the platform.',
              'Your client’s users fill out the forms.',
            ]}
          />
        </CardWrapComponent>
        <CardWrapComponent>
          <img src={ProcessesTeam} alt="Team processes" />
          <ListCard
            title="Scenario description"
            points={[
              'Your application consists of forms.',
              'Your team builds the forms of your application in Forminer.',
              'Your user fills out the forms.',
            ]}
          />
        </CardWrapComponent>
      </CardsWrapComponent>
    </SectionLayout>
  );
};

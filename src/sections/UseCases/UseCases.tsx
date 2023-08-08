import React from 'react';

import { ListCard } from '../../components/ListCard';
import { SectionLayout } from '../../components/SectionLayout';
// @ts-expect-error Image import
import ProcessesClient from '../../images/processes-client.webp';
// @ts-expect-error Image import
import ProcessesTeam from '../../images/processes-team.webp';

const useCases = [
  {
    src: ProcessesClient,
    alt: 'Client processes',
    title: 'Scenario description',
    points: [
      'Your platform allows your clients to build forms.',
      'Your clients build forms on the platform.',
      'Your client’s users fill out the forms.',
    ],
  },
  {
    src: ProcessesTeam,
    alt: 'Team processes',
    title: 'Scenario description',
    points: [
      'Your application consists of forms.',
      'Your team builds the forms of your application in Forminer.',
      'Your user fills out the forms.',
    ],
  },
];

export const UseCases = () => {
  return (
    <SectionLayout heading="Most popular use cases" centerHeading>
      <div className="use-cases__cards-container">
        {useCases.map(useCase => (
          <div key={useCase.title} className="use-cases__card-container">
            <img src={useCase.src} alt={useCase.alt} />
            <ListCard title={useCase.title} points={useCase.points} />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

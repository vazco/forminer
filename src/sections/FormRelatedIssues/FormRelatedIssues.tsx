import React from 'react';

import { CardGrid } from '../../components/CardGrid';
import { SectionLayout } from '../../components/SectionLayout';
import CustomizeFormsIcon from '../../images/svg/customize-forms.svg';
import SavingTimeIcon from '../../images/svg/saving-time.svg';
import ScalabilityIcon from '../../images/svg/scalability.svg';

const cards = [
  {
    icon: <SavingTimeIcon />,
    title: 'Save up your time on form-building features development',
    description:
      'Use the ready-made solution to address your project needs instead of wasting your time & budget to build on your own.',
  },
  {
    icon: <ScalabilityIcon />,
    title: 'Ensure your forms system scalability',
    description: `Forminer offers a vast range of form configurations that would be extremely challenging to upkeep manually via coding.
      Let your users build the forms, to let your app scale up.`,
  },
  {
    icon: <CustomizeFormsIcon />,
    title: 'Customize forms or use our already-prepped UI',
    description: `Forminer gives you full control - use any of the existing design systems or create a custom one.
      You can assemble different themes for each of your clients.`,
  },
];

export const FormRelatedIssues = () => {
  return (
    <SectionLayout
      heading="Take form-related issues off your mind"
      id="form-related-issues"
      centerHeading
    >
      <CardGrid cards={cards} />
    </SectionLayout>
  );
};

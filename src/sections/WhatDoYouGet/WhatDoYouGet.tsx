import React from 'react';

import { CardGrid } from '../../components/CardGrid';
import { SectionLayout } from '../../components/SectionLayout';
import ConsultancyIcon from '../../images/svg/consultancy.svg';
import FlexibilityIcon from '../../images/svg/flexibility.svg';
import MultiTenantIcon from '../../images/svg/multi-tenant.svg';
import ReadyToUseIcon from '../../images/svg/ready-to-use.svg';
import SupportIcon from '../../images/svg/support.svg';
import UnlimitedUsersIcon from '../../images/svg/unlimited-users.svg';

const cards = [
  {
    icon: <ReadyToUseIcon />,
    title: 'Ready-to-use code',
    description:
      "Buy it, unzip it, and enjoy Forminer on your project. It's really that easy.",
  },
  {
    icon: <UnlimitedUsersIcon />,
    title: 'Unlimited traffic & users environment',
    description:
      'Whether your app garners a mere 10 daily users or soars to the thousands, our pricing model remains the same.',
  },
  {
    icon: <MultiTenantIcon />,
    title: 'A multi-tenant license for a single project',
    description:
      'One license covers a single deployment or a per-tenant one. Use Forminer most conveniently for you.',
  },
  {
    icon: <FlexibilityIcon />,
    title: 'Internal deployments',
    description: `Deploy our form builder internally to allow your team to create custom forms simultaneously
      in Forminer instead of manual coding in React.`,
  },
  {
    icon: <ConsultancyIcon />,
    title: 'Debugging consultancy & free updates',
    description: `Already purchased Forminer? Whether it's a new version release or some bug occurred in your app,
      the Forminer team is here to help.`,
  },
  {
    icon: <SupportIcon />,
    title: 'Open Source community support',
    description: `While Forminer is based on our Open Source (MIT-licensed) React form library - uniforms.
      You can always count on community support.`,
  },
];

export const WhatDoYouGet = () => {
  return (
    <SectionLayout
      heading="What do you get?"
      id="what-do-you-get"
      centerHeading
    >
      <div className="what-do-you-get__subtitle">
        Forminer is code - React components that let you making core changes
        seamlessly.
      </div>
      <CardGrid cards={cards} />
    </SectionLayout>
  );
};

import React from 'react';
import styled from 'styled-components';
import ReadyToUseIcon from '../../images/svg/ready-to-use.svg';
import UnlimitedUsersIcon from '../../images/svg/unlimited-users.svg';
import MultiTenantIcon from '../../images/svg/multi-tenant.svg';
import FlexibilityIcon from '../../images/svg/flexibility.svg';
import ConsultancyIcon from '../../images/svg/consultancy.svg';
import SupportIcon from '../../images/svg/support.svg';
import { CardGrid } from '../../components/CardGrid';
import { SectionLayout } from '../../components/SectionLayout';

const id = 'what-do-you-get';

const cards = [
  {
    icon: <ReadyToUseIcon />,
    title: `Ready-to-use code`,
    description: `Buy it, unzip it, and enjoy Forminer on your project. It's really that easy.`
  },
  {
    icon: <UnlimitedUsersIcon />,
    title: `Unlimited traffic & users environment`,
    description: `Whether your app garners a mere 10 daily users or soars to the thousands, our pricing model remains the same.`
  },
  {
    icon: <MultiTenantIcon />,
    title: `A multi-tenant license for a single project`,
    description: `One license covers a single deployment or a per-tenant one. Use Forminer most conveniently for you.`
  },
  {
    icon: <FlexibilityIcon />,
    title: `Internal deployments`,
    description: `Deploy our form builder internally to allow your team to create custom forms simultaneously
      in Forminer instead of manual coding in React.`
  },
  {
    icon: <ConsultancyIcon />,
    title: `Debugging consultancy & free updates`,
    description: `Already purchased Forminer? Whether it's a new version release or some bug occurred in your app,
      the Forminer team is here to help.`
  },
  {
    icon: <SupportIcon />,
    title: `Open Source community support`,
    description: `While Forminer is based on our Open Source (MIT-licensed) React form library - uniforms.
      You can always count on community support.`
  }
];

const UnderlineComponent = styled.div`
  text-decoration: underline;
  text-decoration-color: #00D5B0;
  text-decoration-thickness: 3px;
  font-size: 28px;
  text-align: center;
  margin-bottom: 32px;
`;

type WhatDoYouGetProps = {};

export const WhatDoYouGet = ({}: WhatDoYouGetProps) => {
  return (
    <SectionLayout heading="What do you get?" centerHeading id={id}>
      <UnderlineComponent>
        Forminer is code - React components that let you making core changes seamlessly.
      </UnderlineComponent>
      <CardGrid cards={cards} />
    </SectionLayout>
  );
};

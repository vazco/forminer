import React, { ReactNode } from 'react';
import styled from 'styled-components';

const CardComponent = styled.div`
  width: 100%;
  padding: 36px 48px;
  text-align: center;
  background-color: #eee;
  border-radius: 8px;
`;

const TitleComponent = styled.div`
  font-weight: 700;
  margin: 20px 0px;
  font-size: 20px;
  line-height: 30px;
`;

const IconComponent = styled.div`
  width: 40px;
  margin: auto;
  & svg {
    width: 100%;
    height: 100%;
  }
`;

const DescriptionComponent = styled.div`
  line-height: 24px;
`;

type CardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const Card = ({ icon, title, description }: CardProps) => {
  return (
    <CardComponent>
      <IconComponent>{icon}</IconComponent>
      <TitleComponent>{title}</TitleComponent>
      <DescriptionComponent>{description}</DescriptionComponent>
    </CardComponent>
  );
};

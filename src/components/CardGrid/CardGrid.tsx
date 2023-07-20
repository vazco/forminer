import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Card } from '../../components/Card';

const CardWrapperComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 40px;
  width: 100%;
  margin: auto;
`;

type CardElement = {
  icon: ReactElement;
  title: string;
  description: string;
};

type CardGridProps = {
  cards: CardElement[];
};

export const CardGrid = ({ cards }: CardGridProps) => (
  <CardWrapperComponent>
    {cards.map(c => (
      <Card icon={c.icon} title={c.title} description={c.description} />
    ))}
  </CardWrapperComponent>
);

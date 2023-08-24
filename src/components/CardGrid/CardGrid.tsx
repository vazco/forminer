import React, { ReactElement } from 'react';

import { Card } from '../../components/Card';

type CardElement = {
  icon: ReactElement;
  title: string;
  description: string;
};

type CardGridProps = {
  cards: CardElement[];
};

export const CardGrid = ({ cards }: CardGridProps) => (
  <div className="card-grid">
    {cards.map(c => (
      <Card
        key={c.title}
        icon={c.icon}
        title={c.title}
        description={c.description}
      />
    ))}
  </div>
);

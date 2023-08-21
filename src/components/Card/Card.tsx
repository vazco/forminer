import React, { ReactNode } from 'react';

type CardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const Card = ({ icon, title, description }: CardProps) => {
  return (
    <div className="card__container">
      <div className="card__icon">{icon}</div>
      <div className="card__title">{title}</div>
      <div className="card__description">{description}</div>
    </div>
  );
};

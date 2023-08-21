import React from 'react';

import CheckmarkIcon from '../../images/svg/checkmark.svg';

type ListCardProps = {
  title: string;
  points: string[];
};

export const ListCard = ({ title, points }: ListCardProps) => {
  return (
    <div className="list-card__card">
      <div className="list-card__title">{title}</div>
      <div className="list-card__bullets-container">
        {points.map(point => (
          <div key={point} className="list-card__bulletpoint-container">
            <div className="list-card__bulletpoint">
              <CheckmarkIcon />
            </div>
            <div>{point}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

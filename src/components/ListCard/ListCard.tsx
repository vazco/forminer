import React from 'react';
import { BOX_BORDER_RADIUS } from '../../globalStyles/sharedStyles/box';
import styled from 'styled-components';
import media from '../../globalStyles/media';
import CheckmarkIcon from '../../images/svg/checkmark.svg';

type ListCardProps = {
  title: string;
  points: string[];
};

const CardComponent = styled.div`
  width: 100%;
  padding: 36px 48px;
  background-color: #eee;
  ${BOX_BORDER_RADIUS};
  ${media.lessThan('md')`
    padding: 24px;
  `}
`;

const TitleComponent = styled.div`
  text-align: center;
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 24px;
`;

const BulletsWrapComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BulletpointWrapComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BulletPointComponent = styled.div`
  color: ${({ theme }) => theme.color.black};
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const ListCard = ({ title, points }: ListCardProps) => {
  return (
    <CardComponent>
      <TitleComponent>{title}</TitleComponent>
      <BulletsWrapComponent>
        {points.map(point => (
          <BulletpointWrapComponent>
            <BulletPointComponent>
              <CheckmarkIcon />
            </BulletPointComponent>
            <div>{point}</div>
          </BulletpointWrapComponent>
        ))}
      </BulletsWrapComponent>
    </CardComponent>
  );
};

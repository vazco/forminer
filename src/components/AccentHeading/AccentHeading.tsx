import React from 'react';

// eslint-disable-next-line no-unused-vars -- false positive error
import { UnifiedHeading, UnifiedHeadingProps } from './UnifiedHeading';

export const AccentHeading = ({
  children,
  size = 'md',
  isStrong = true,
  center = false,
}: UnifiedHeadingProps) => {
  return (
    <div
      className="accent-heading__container"
      style={{ textAlign: center ? 'center' : 'initial' }}
    >
      <UnifiedHeading size={size} isStrong={isStrong}>
        {children}
      </UnifiedHeading>
    </div>
  );
};

import clsx from 'clsx';
import React, { ReactNode } from 'react';

export type UnifiedHeadingProps = {
  children: ReactNode;
  size?: 'md' | 'lg' | 'xl';
  isStrong?: boolean;
  marginBottom?: number;
  center?: boolean;
};

export const UnifiedHeading = ({
  children,
  size = 'md',
  isStrong = true,
  marginBottom,
}: UnifiedHeadingProps) => {
  return (
    <h2
      className={clsx('unified-heading', {
        'unified-heading__xl': size === 'xl',
        'unified-heading__lg': size === 'lg',
        'unified-heading__md': size === 'md',
      })}
      style={{
        fontWeight: isStrong ? 700 : 300,
        marginBottom: marginBottom || 0,
      }}
    >
      {children}
    </h2>
  );
};

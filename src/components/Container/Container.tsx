import clsx from 'clsx';
import React, { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export const Container = ({ children, id, className }: ContainerProps) => {
  return (
    <div id={id} className={clsx(className, 'container')}>
      {children}
    </div>
  );
};

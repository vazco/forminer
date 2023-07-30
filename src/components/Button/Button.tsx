import classNames from 'classNames';
import noop from 'lodash/noop';
// eslint-disable-next-line no-unused-vars -- false positive error
import React, { ReactNode, MouseEvent, CSSProperties } from 'react';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: string;
  style?: CSSProperties;
};

export const Button = ({
  children,
  className,
  disabled = false,
  onClick = noop,
  variant,
  style,
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        className,
        'button',
        variant === 'solid' && 'button__solid',
        variant === 'outlined' && 'button__outlined',
        variant === 'pricing' && 'button__pricing',
      )}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

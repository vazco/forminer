import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  variant?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  className,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(className, 'button', {
        button__solid: variant === 'solid',
        button__outlined: variant === 'outlined',
        button__pricing: variant === 'pricing',
      })}
      {...props}
    >
      {children}
    </button>
  );
};

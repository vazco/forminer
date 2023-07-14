import noop from 'lodash/noop';
import { rem } from 'polished';
// eslint-disable-next-line no-unused-vars -- false positive error
import React, { ReactNode, MouseEvent } from 'react';
import styled, { css } from 'styled-components';

const resetDefault = css`
  padding: 0;
  border: none;
  outline: none;
  font: inherit;
  color: inherit;
  background: none;
`;

const commonStyles = css`
  cursor: pointer;
  font-weight: 700;
  min-width: 180px;
  padding: 16px;
  border-radius: 32px;
  transition: all 0.2s ease-out;
  &:hover {
    text-decoration: none;
  }

  ${({ theme, variant, reversed }) => {
    if (reversed && variant === 'solid') {
      return css`
        background-color: ${theme.color.primary};
        color: ${theme.color.white};
        border: 2px solid white;
        &:hover {
          background-color: ${theme.color.white};
          color: ${theme.color.primary};
          border: 2px solid ${({ theme }) => theme.color.primary};
        }
      `;
    } else if (variant === 'solid') {
      return css`
        background-color: ${theme.color.white};
        color: ${theme.color.primary};
        border: 2px solid ${theme.color.white};
        &:hover {
          background-color: inherit;
          color: ${theme.color.white};
        }
      `;
    } else if (variant === 'outlined') {
      return css`
        color: ${theme.color.white};
        border: 2px solid ${theme.color.white};
        &:hover {
          background-color: ${theme.color.white};
          color: ${theme.color.primary};
        }
      `;
    }
    return css``;
  }}

  ${({ size }) => {
    if (size === 'md') {
      return css`
        font-size: ${rem('16px')};
        line-height: ${rem('26px')};
      `;
    } else if (size === 'sm') {
      return css`
        font-size: ${rem('14px')};
        line-height: ${rem('24px')};
      `;
    } else if (size === 'lg') {
      return css`
        font-size: ${rem('18px')};
        line-height: ${rem('28px')};
      `;
    }
    return css``;
  }}
`;

const StyledButton = styled.button`
  ${resetDefault}
  ${commonStyles}
`;

type ButtonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  reversed?: boolean;
  size?: string;
  type?: string;
  variant?: string;
};

export const Button = ({
  children,
  className,
  disabled = false,
  onClick = noop,
  reversed = false,
  size = 'md',
  type = 'button',
  variant = 'solid',
}: ButtonProps) => {
  return (
    <StyledButton
      className={className}
      disabled={disabled}
      onClick={onClick}
      reversed={reversed}
      size={size}
      type={type}
      variant={variant}
    >
      {children}
    </StyledButton>
  );
};

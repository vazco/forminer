import noop from 'lodash/noop';
import { rem, lighten } from 'polished';
// eslint-disable-next-line no-unused-vars
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

const variantSolid = css`
  ${({ theme }) => css`
    background-color: ${theme.color.primary};
    color: ${theme.color.white};
    &:hover:not(:disabled) {
      background-color: ${lighten(0.1, `${theme.color.primary}`)};
      border-color: ${lighten(0.1, `${theme.color.primary}`)};
    }
  `}
`;

const commonStyles = css`
  cursor: pointer;
  font-weight: 500;
  min-width: 180px;
  padding: 16px;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 4px;
  transition: all 0.2s ease-out;
  &:hover {
    text-decoration: none;
  }
  &:disabled {
    background-color: ${({ theme }) => lighten(0.2, `${theme.color.primary}`)};
    border-color: ${({ theme }) => lighten(0.2, `${theme.color.primary}`)};
  }

  ${({ theme, variant, reversed }) => {
    if (variant === 'solid') {
      return css`
        ${variantSolid}
      `;
    } else if (reversed && variant === 'outlined') {
      return css`
        color: ${theme.color.white};
        border-color: ${theme.color.white};
        &:hover {
          background-color: ${theme.color.white};
          color: ${theme.color.primary};
        }
      `;
    } else if (variant === 'outlined') {
      return css`
        color: ${theme.color.primary};
        &:hover {
          background-color: ${theme.color.primary};
          color: ${theme.color.white};
        }
      `;
    } else if (variant === 'icon') {
      return css`
        ${variantSolid}

        display: flex;
        align-items: center;
        border-radius: 50%;
        min-width: auto;
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

import React from 'react';
import styled from '@emotion/styled';
import { BASE_PROPS } from '@src/types/types';
import { ButtonShape, ButtonVariant } from './types';
import { COLOR } from '@src/styles/color/color';

type BaseProps = {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  clickEffect?: boolean;
};

type Props<T extends React.ElementType> = BASE_PROPS<T> & BaseProps;

const DEFAULT_ELEMENT = 'button';

type ELEMENT_TYPE = typeof DEFAULT_ELEMENT;

const Component = styled(DEFAULT_ELEMENT)<Props<ELEMENT_TYPE>>`
  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 1;
    }
    20% {
      transform: scale(25, 25);
    }
    100% {
      transform: scale(40, 40);
      opacity: 0;
    }
  }

  // Button 기본 스타일
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: none;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  &:disabled {
    cursor: not-allowed;
  }

  // Button 색상 스타일
  background-color: ${COLOR.LIGHT.primary['000']};
  color: ${COLOR.LIGHT.text};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  // active
  &:active:not(:disabled):not(.loading) {
    background-color: ${COLOR.LIGHT.primary['300']};
    color: ${COLOR.LIGHT.black};
  }
  // hover
  &:hover:not(:disabled):not(.loading) {
    background-color: ${COLOR.LIGHT.primary['100']};
    color: ${COLOR.LIGHT.text};
  }
  &:disabled {
    background-color: ${COLOR.LIGHT.gray['000']};
    color: ${COLOR.LIGHT.gray['200']};
    &:active:not(.outlined):not(.clear),
    &:hover:not(.outlined):not(.clear) {
      background-color: ${COLOR.LIGHT.gray['000']};
      color: ${COLOR.LIGHT.gray['200']};
    }
  }

  // variant
  ${({ variant }) => {
    if (variant === 'outlined') {
      return `
        background-color: none;
        box-shadow: none;
        outline: 0.08rem solid ${COLOR.LIGHT.primary['300']};
      `;
    }
    if (variant === 'clear') {
      return `
        background-color: none;
        box-shadow: none;
      `;
    }
    return ``;
  }}

  // ripple
  ${({ clickEffect }) => {
    if (!clickEffect) return ``;
    return `
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0.25rem;
        height: 0.25rem;
        background-color: ${COLOR.LIGHT.primary['200']};
        opacity: 0;
        border-radius: 100%;
        transform: scale(1, 1) translate(-50%);
        transform-origin: 50% 50%;
      }
      &:focus:not(:active)::after {
        animation: ripple 0.5s ease-out;
      }
    `;
  }}

  // shape
  ${({ shape }) => {
    if (shape === 'circle') return `border-radius: 50%;`;
    if (shape === 'square') return `border-radius: 0;`;
    return ``;
  }}
`;

function Button<T extends React.ElementType = typeof DEFAULT_ELEMENT>({
  children,
  variant = 'primary',
  shape = 'rect',
  clickEffect = true,
  ...props
}: Props<T>) {
  return (
    <Component
      {...props}
      variant={variant}
      shape={shape}
      clickEffect={clickEffect}
    >
      {children}
    </Component>
  );
}

export default Button;

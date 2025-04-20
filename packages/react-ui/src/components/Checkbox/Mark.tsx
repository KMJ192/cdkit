import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { BASE_PROPS } from '@src/types/types';
import Context from './store/Context';
import { COLOR } from '@src/styles/color/color';

type Props<T extends React.ElementType> = BASE_PROPS<T>;

const DEFAULT_ELEMENT = 'svg';

const Component = styled(DEFAULT_ELEMENT)<{
  disabled: boolean;
  checked: boolean;
  hover: boolean;
}>`
  width: inherit;
  height: inherit;
  transition: all 0.1s cubic-bezier(0.4, 0, 1, 1) 0ms;

  ${({ checked }) => {
    if (checked) {
      return `
        opacity: 1;
        visibility: visible;
      `;
    }
    return `
      opacity: 0;
      visibility: hidden;
    `;
  }}

  ${({ checked, disabled, hover }) => {
    if (checked && disabled) {
      return `
        color: ${COLOR.LIGHT.gray['100']};
        background-color: ${COLOR.LIGHT.gray['300']};
      `;
    }
    if (disabled && !checked) {
      return `
        color: ${COLOR.LIGHT.gray['100']};
        background-color: ${COLOR.LIGHT.gray['100']};
        opacity: 1;
      `;
    }

    return `
      color: ${COLOR.LIGHT.primary['000']};
      background-color: ${
        hover ? COLOR.LIGHT.blue['500'] : COLOR.LIGHT.blue['400']
      };
    `;
  }}
`;

function Mark<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  props: Props<T>,
) {
  const { multiple, disabled, checked, hover } = useContext(Context);

  return multiple ? (
    <Component
      {...props}
      disabled={disabled}
      checked={checked}
      hover={hover}
      width='1em'
      height='1em'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3 6H9'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </Component>
  ) : (
    <Component
      {...props}
      disabled={disabled}
      checked={checked}
      hover={hover}
      width='1em'
      height='1em'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.1562 4.71875L6.59375 11.2812L3.3125 8'
        stroke='currentColor'
        strokeWidth='1.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Component>
  );
}

export default Mark;

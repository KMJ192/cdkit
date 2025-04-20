import React, { useState } from 'react';
import styled from '@emotion/styled';
import { BASE_PROPS } from '@src/types/types';
import { COLOR } from '@src/styles/color/color';
import Context from './store/Context';
import Mark from './Mark';
import Center from '@src/layout/Center/Center';

type BaseProps = {
  checked?: boolean;
  multiple?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
};

type Props<T extends React.ElementType> = BASE_PROPS<T> & BaseProps;

const DEFAULT_ELEMENT = 'div';

type ELEMENT_TYPE = typeof DEFAULT_ELEMENT;

const Component = styled(DEFAULT_ELEMENT)<Props<ELEMENT_TYPE>>`
  border-radius: 0.125rem;
  width: 1rem;
  height: 1rem;
  aspect-ratio: 1;
  border-width: 0.125rem;
  border-style: solid;
  transition: border-color 0.1s;
  cursor: pointer;
  ${({ disabled }) => {
    if (disabled) {
      return `
        cursor: not-allowed;
      `;
    }
    return ``;
  }}

  ${({ checked, disabled }) => {
    let backgroundColor = '';
    let borderColor = COLOR.LIGHT.primary['700'];

    if (disabled) {
      backgroundColor = COLOR.LIGHT.gray['100'];
    }
    if (checked && !disabled) {
      borderColor = COLOR.LIGHT.blue['400'];
    }
    if (!checked && disabled) {
      borderColor = COLOR.LIGHT.gray['200'];
    }
    if (checked && disabled) {
      borderColor = COLOR.LIGHT.gray['300'];
    }
    return `
      border-color: ${borderColor};
      background-color: ${backgroundColor};
    `;
  }}
  &:hover {
    ${({ checked, disabled }) => {
      if (disabled) {
        return ``;
      }
      if (checked) {
        return `
          border-color: ${COLOR.LIGHT.blue['500']};
        `;
      }
      return `
        border-color: ${COLOR.LIGHT.blue['300']};
      `;
    }}
  }
`;

function CB<T extends React.ElementType = typeof DEFAULT_ELEMENT>({
  children,
  checked = false,
  multiple = false,
  disabled = false,
  ...props
}: Props<T>) {
  const [hover, setHover] = useState(false);
  return (
    <Context.Provider
      value={{
        multiple,
        checked,
        disabled,
        hover,
      }}
    >
      <Component
        {...props}
        checked={checked}
        multiple={multiple}
        disabled={disabled}
        onClick={(e) => {
          props.onClick?.(e);
          props.onChange?.(e);
        }}
        onMouseOver={(e) => {
          props.onMouseOver?.(e);
          setHover(true);
        }}
        onMouseLeave={(e) => {
          props.onMouseLeave?.(e);
          setHover(false);
        }}
      >
        <Center>{children}</Center>
      </Component>
    </Context.Provider>
  );
}

const Checkbox = Object.assign(CB as typeof CB, {
  Mark,
});

export default Checkbox;

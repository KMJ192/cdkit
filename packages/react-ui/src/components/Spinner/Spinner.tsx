import React from 'react';
import styled from '@emotion/styled';
import { BASE_PROPS } from '@src/types/types';
import { COLOR } from '@src/styles/color/color';

type BaseProps = {
  type?: 'type-1' | 'type-2';
};

type Props<T extends React.ElementType> = BASE_PROPS<T> & BaseProps;

const DEFAULT_ELEMENT = 'div';

type ELEMENT_TYPE = typeof DEFAULT_ELEMENT;

const Component = styled(DEFAULT_ELEMENT)<Props<ELEMENT_TYPE>>`
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  ${({ type }) => {
    if (type === 'type-2') {
      return `
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
        border: 0.25rem solid;
        border-color: ${COLOR.LIGHT.primary[200]};
        border-bottom-color: ${COLOR.LIGHT.primary[400]};
      `;
    }

    return `
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
      border: 0.25rem solid;
      border-color: ${COLOR.LIGHT.primary[200]};
      border-bottom-color: transparent;
    `;
  }}
`;

function Spinner<T extends React.ElementType = typeof DEFAULT_ELEMENT>({
  type = 'type-1',
  ...props
}: Props<T>) {
  return <Component {...props} type={type}></Component>;
}

export default Spinner;

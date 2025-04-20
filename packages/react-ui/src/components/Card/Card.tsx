import React from 'react';
import styled from '@emotion/styled';
import { BASE_PROPS } from '@src/types/types';
import { COLOR } from '@src/styles/color/color';

type BaseProps = {
  children?: React.ReactNode;
};

type Props<T extends React.ElementType> = BASE_PROPS<T> & BaseProps;

const DEFAULT_ELEMENT = 'div';

type ELEMENT_TYPE = typeof DEFAULT_ELEMENT;

const Component = styled(DEFAULT_ELEMENT)<Props<ELEMENT_TYPE>>`
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid;
  border-color: ${COLOR.LIGHT.gray['400']};
  background-color: ${COLOR.LIGHT.background};
  overflow: auto;
  box-sizing: border-box;
`;

function Card<T extends React.ElementType = typeof DEFAULT_ELEMENT>({
  children,
  ...props
}: Props<T>) {
  return <Component {...props}>{children}</Component>;
}

export default Card;

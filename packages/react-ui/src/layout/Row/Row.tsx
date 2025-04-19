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

const Container = styled(DEFAULT_ELEMENT)<Props<ELEMENT_TYPE>>`
  padding: 1rem 1.5rem;
  border-radius: 0.375px;
  color: ${COLOR.LIGHT.TEXT};
  background-color: ${COLOR.LIGHT.PRIMARY_000};
  box-shadow: 0px 3px 6px rgba(64, 64, 64, 0.2);
`;

function Row<T extends React.ElementType = typeof DEFAULT_ELEMENT>({
  children,
  ...props
}: Props<T>) {
  return <Container {...props}>{children}</Container>;
}

export default Row;

import React from 'react';
import styled from 'styled-components';
import { BASE_PROPS } from '@src/types/types';

type BaseProps = {
  // component props
};

type Props<T extends React.ElementType> = BASE_PROPS<T> & BaseProps;

const DEFAULT_ELEMENT = 'div';

type ELEMENT_TYPE = typeof DEFAULT_ELEMENT;

const Container = styled.div<Props<ELEMENT_TYPE>>`
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  @supports (display: grid) {
    display: -ms-grid;
    display: -webkit-grid;
    display: grid;
  }
`;

function BaseComponent<T extends React.ElementType = typeof DEFAULT_ELEMENT>({
  children,
  ...props
}: Props<T>) {
  return <Container {...props}>{children}</Container>;
}

export default BaseComponent;

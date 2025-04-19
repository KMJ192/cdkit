import React from 'react';
import styled from '@emotion/styled';
import { BASE_PROPS } from '@src/types/types';
import { flex } from '../Flex/Flex';
import { getStyle } from './calcStyle';

type BaseProps = {
  children?: React.ReactNode;
  startDirection?: 'lt' | 'lb' | 'rt' | 'rb';
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
};

type Props<T extends React.ElementType> = BASE_PROPS<T> & BaseProps;

const DEFAULT_ELEMENT = 'div';

type ELEMENT_TYPE = typeof DEFAULT_ELEMENT;

const Container = styled.div<Props<ELEMENT_TYPE>>`
  position: fixed;
  ${flex()}
`;

function Float<T extends React.ElementType = typeof DEFAULT_ELEMENT>({
  children,
  startDirection = 'lt',
  left,
  right,
  top,
  bottom,
  style,
  ...props
}: Props<T>) {
  const curStyle = getStyle({
    left,
    right,
    top,
    bottom,
    style,
    startDirection,
  });

  return (
    <Container {...props} style={curStyle}>
      {children}
    </Container>
  );
}

export default Float;

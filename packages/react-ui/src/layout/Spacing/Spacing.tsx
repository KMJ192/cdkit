import React from 'react';
import styled from '@emotion/styled';
import { BASE_PROPS } from '@src/types/types';
import { getStyle } from './calcStyle';

type BaseProps = {
  direction?: 'horizontal' | 'vertical';
  unit?: 'px' | 'em' | 'rem';
  spacing?: number;
};

type Props<T extends React.ElementType> = BASE_PROPS<T> & BaseProps;

const DEFAULT_ELEMENT = 'div';

type ELEMENT_TYPE = typeof DEFAULT_ELEMENT;

const Container = styled(DEFAULT_ELEMENT)<Props<ELEMENT_TYPE>>``;

function Spacing<T extends React.ElementType = typeof DEFAULT_ELEMENT>({
  children,
  direction = 'vertical',
  unit = 'px',
  spacing,
  style,
  ...props
}: Props<T>) {
  const curStyle = getStyle({
    direction,
    spacing,
    style,
    unit,
  });

  return (
    <Container {...props} style={curStyle}>
      {children}
    </Container>
  );
}

export default Spacing;

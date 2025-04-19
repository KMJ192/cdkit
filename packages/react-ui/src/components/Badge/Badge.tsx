import React from 'react';
import styled from '@emotion/styled';
import {
  BASE_PROPS,
  CSS_DISPLAY,
  CSS_DISPLAY_FLEX_DIRECTION,
} from '@src/types/types';

type BaseProps = {
  children?: React.ReactNode;
  colorSchema?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
  display?: CSS_DISPLAY;
  flexDirection?: CSS_DISPLAY_FLEX_DIRECTION;
  centerVertical?: boolean;
  centerHorizontal?: boolean;
};

type Props<T extends React.ElementType> = BASE_PROPS<T> & BaseProps;

const DEFAULT_ELEMENT = 'div';

type ELEMENT_TYPE = typeof DEFAULT_ELEMENT;

const Container = styled(DEFAULT_ELEMENT)<Props<ELEMENT_TYPE>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 4px;
`;

function Badge<T extends React.ElementType = typeof DEFAULT_ELEMENT>({
  children,
  ...props
}: Props<T>) {
  return <Container {...props}>{children}</Container>;
}

export default Badge;

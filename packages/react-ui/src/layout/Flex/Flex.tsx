import React from 'react';
import styled from 'styled-components';
import { BASE_PROPS, CSS_DISPLAY_FLEX_DIRECTION } from '@src/types/types';

type BaseProps = {
  flexDirection?: CSS_DISPLAY_FLEX_DIRECTION;
};

type Props<T extends React.ElementType> = BASE_PROPS<T> & BaseProps;

const DEFAULT_ELEMENT = 'div';

type ELEMENT_TYPE = typeof DEFAULT_ELEMENT;

export const Container = styled.div<Props<ELEMENT_TYPE>>`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  ${({ flexDirection }) => {
    if (flexDirection) {
      return `
        -webkit-box-orient: ${
          flexDirection.includes('column') ? 'vertical' : 'horizontal'
        };
        -webkit-box-direction: ${
          flexDirection.includes('reverse') ? 'reverse' : 'normal'
        };
        -webkit-flex-direction: ${flexDirection};
        -moz-flex-direction: ${flexDirection};
        -ms-flex-direction: ${flexDirection};
        flex-direction: ${flexDirection};
      `;
    }
    return `
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
      -moz-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
    `;
  }}
`;

function Flex<T extends React.ElementType = typeof DEFAULT_ELEMENT>({
  children,
  ...props
}: Props<T>) {
  return <Container {...props}>{children}</Container>;
}

export default Flex;

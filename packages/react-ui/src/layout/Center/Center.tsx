import React from 'react';
import styled from 'styled-components';
import { BASE_PROPS, CSS_DISPLAY_FLEX_DIRECTION } from '@src/types/types';

type BaseProps = {
  vertical?: boolean;
  horizontal?: boolean;
  children?: React.ReactNode;
  flexDirection?: CSS_DISPLAY_FLEX_DIRECTION;
};

type Props<T extends React.ElementType> = BASE_PROPS<T> & BaseProps;

const DEFAULT_ELEMENT = 'div';

type ELEMENT_TYPE = typeof DEFAULT_ELEMENT;

const Container = styled.div<Props<ELEMENT_TYPE>>`
  width: 100%;
  height: 100%;
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

  ${({ vertical, horizontal }) => {
    if (vertical && !horizontal) {
      return `
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      `;
    }
    if (horizontal && !vertical) {
      return `
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      `;
    }

    return `
      align-items: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
    `;
  }}
`;

function BaseComponent<T extends React.ElementType = typeof DEFAULT_ELEMENT>({
  children,
  vertical = true,
  horizontal = true,
  flexDirection = 'row',
  ...props
}: Props<T>) {
  return (
    <Container
      {...props}
      vertical={vertical}
      horizontal={horizontal}
      flexDirection={flexDirection}
    >
      {children}
    </Container>
  );
}

export default BaseComponent;

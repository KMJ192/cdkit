import React from 'react';
import styled from '@emotion/styled';
import { BASE_PROPS, CSS_DISPLAY_FLEX_DIRECTION } from '@src/types/types';

type BaseProps = {
  flexDirection?: CSS_DISPLAY_FLEX_DIRECTION;
};

type Props<T extends React.ElementType> = BASE_PROPS<T> & BaseProps;

const DEFAULT_ELEMENT = 'div';

export const flex = (flexDirection: CSS_DISPLAY_FLEX_DIRECTION = 'row') => `
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
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

export const Container = styled(DEFAULT_ELEMENT)<{
  $flexDirection: CSS_DISPLAY_FLEX_DIRECTION;
}>`
  ${({ $flexDirection }) => flex($flexDirection)}
`;

function Flex<T extends React.ElementType = typeof DEFAULT_ELEMENT>({
  children,
  flexDirection = 'row',
  ...props
}: Props<T>) {
  return (
    <Container {...props} $flexDirection={flexDirection}>
      {children}
    </Container>
  );
}

export default Flex;

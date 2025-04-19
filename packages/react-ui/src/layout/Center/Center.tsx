import React from 'react';
import styled from '@emotion/styled';
import { BASE_PROPS, CSS_DISPLAY_FLEX_DIRECTION } from '@src/types/types';
import { flex } from '../Flex/Flex';

type BaseProps = {
  vertical?: boolean;
  horizontal?: boolean;
  children?: React.ReactNode;
  flexDirection?: CSS_DISPLAY_FLEX_DIRECTION;
};

type Props<T extends React.ElementType> = BASE_PROPS<T> & BaseProps;

const DEFAULT_ELEMENT = 'div';

const center = ({
  vertical = true,
  horizontal = true,
  flexDirection = 'row',
}: {
  vertical?: boolean;
  horizontal?: boolean;
  flexDirection?: CSS_DISPLAY_FLEX_DIRECTION;
}) => {
  const v = `
    align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
  `;

  const h = `
    justify-content: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
  `;

  let sort = '';
  if (vertical && !horizontal) {
    sort = v;
  } else if (horizontal && !vertical) {
    sort = h;
  } else {
    sort = `${v} ${h}`;
  }

  return `
    width: 100%;
    height: 100%;
    ${flex(flexDirection)}
    ${sort}
  `;
};

const Container = styled(DEFAULT_ELEMENT)<{
  $vertical: boolean;
  $horizontal: boolean;
  $flexDirection: CSS_DISPLAY_FLEX_DIRECTION;
}>`
  ${({ $vertical, $horizontal, $flexDirection }) => {
    return center({
      vertical: $vertical,
      horizontal: $horizontal,
      flexDirection: $flexDirection,
    });
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
      $vertical={vertical}
      $horizontal={horizontal}
      $flexDirection={flexDirection}
    >
      {children}
    </Container>
  );
}

export default BaseComponent;

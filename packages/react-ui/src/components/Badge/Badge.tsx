import React from 'react';
import styled from '@emotion/styled';
import { BASE_PROPS } from '@src/types/types';
import { COLOR } from '@src/styles/color/color';

type BaseProps = {
  children?: React.ReactNode;
  colorSchema?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
  centerVertical?: boolean;
  centerHorizontal?: boolean;
};

type Props<T extends React.ElementType> = BASE_PROPS<T> & BaseProps;

const DEFAULT_ELEMENT = 'div';

type ELEMENT_TYPE = typeof DEFAULT_ELEMENT;

const Container = styled(DEFAULT_ELEMENT)<Props<ELEMENT_TYPE>>`
  display: inline-block;
  white-space: nowrap;
  padding: 0.5rem;
  border-radius: 1rem;
  width: fit-content;
  min-height: 0.75rem;
  ${({ colorSchema }) => {
    if (colorSchema === 'success') {
      return `
        color: ${COLOR.LIGHT.PRIMARY000};
        background-color: ${COLOR.LIGHT.SUCCESS};
      `;
    }
    if (colorSchema === 'info') {
      return `
        color: ${COLOR.LIGHT.TEXT};
        background-color: ${COLOR.LIGHT.INFO};
      `;
    }
    if (colorSchema === 'warning') {
      return `
        color: ${COLOR.LIGHT.TEXT};
        background-color: ${COLOR.LIGHT.WARNING};
      `;
    }
    if (colorSchema === 'danger') {
      return `
        color: ${COLOR.LIGHT.PRIMARY000};
        background-color: ${COLOR.LIGHT.DANGER};
      `;
    }
    return `
      color: ${COLOR.LIGHT.TEXT};
      background-color: ${COLOR.LIGHT.PRIMARY200};
    `;
  }}
`;

function Badge<T extends React.ElementType = typeof DEFAULT_ELEMENT>({
  children,
  ...props
}: Props<T>) {
  return <Container {...props}>{children}</Container>;
}

export default Badge;

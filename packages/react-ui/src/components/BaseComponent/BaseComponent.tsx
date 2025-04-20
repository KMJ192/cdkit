import React from 'react';
import styled from '@emotion/styled';
import { BASE_PROPS } from '@src/types/types';

type BaseProps = {
  // component props
};

type Props<T extends React.ElementType> = BASE_PROPS<T> & BaseProps;

const DEFAULT_ELEMENT = 'div';

type ELEMENT_TYPE = typeof DEFAULT_ELEMENT;

const Component = styled(DEFAULT_ELEMENT)<Props<ELEMENT_TYPE>>`
  /* 기본 스타일 */
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 100%;
  height: 100%;

  /* 커스텀 스타일을 위한 클래스 */
  &.custom {
    /* 커스텀 스타일 */
  }

  /* 상태별 스타일 */
  &:hover {
    /* 호버 스타일 */
  }

  &:active {
    /* 액티브 스타일 */
  }

  &:disabled {
    /* 비활성화 스타일 */
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

function BaseComponent<T extends React.ElementType = typeof DEFAULT_ELEMENT>({
  children,
  ...props
}: Props<T>) {
  return <Component {...props}>{children}</Component>;
}

export default BaseComponent;

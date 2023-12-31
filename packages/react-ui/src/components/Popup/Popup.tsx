import React from 'react';

import type {
  CSS_DISPLAY,
  CSS_DISPLAY_FLEX_DIRECTION,
  OVER_RIDABLE_PROPS,
} from '@src/types/types';

import type { PopupAnimation } from './types';

import classNames from 'classnames/bind';
import style from '@css/components/Popup/style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  animation?: PopupAnimation;
  visible?: boolean;
  display?: CSS_DISPLAY;
  flexDirection?: CSS_DISPLAY_FLEX_DIRECTION;
  centerVertical?: boolean;
  centerHorizontal?: boolean;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Popup<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    children,
    animation = 'none',
    visible = false,
    display = 'flex',
    flexDirection,
    centerVertical,
    centerHorizontal,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <ELEMENT
      {...props}
      ref={ref}
      className={cx(
        'popup',
        animation,
        { visible },
        display,
        flexDirection,
        centerVertical && 'center-vertical',
        centerHorizontal && 'center-horizontal',
        className,
      )}
    >
      {children}
    </ELEMENT>
  );
}

export type PopupProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Popup) as typeof Popup;

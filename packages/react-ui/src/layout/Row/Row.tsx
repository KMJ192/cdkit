import React from 'react';

import type {
  CSS_DISPLAY,
  CSS_DISPLAY_FLEX_DIRECTION,
  OVER_RIDABLE_PROPS,
} from '@src/types/types';

import classNames from 'classnames/bind';
import style from '@css/layout/Row/style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  display?: CSS_DISPLAY;
  flexDirection?: CSS_DISPLAY_FLEX_DIRECTION;
  children?: React.ReactNode;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Row<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, display, flexDirection, children, className, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <ELEMENT
      {...props}
      ref={ref}
      className={cx('row', display, flexDirection, className)}
    >
      {children}
    </ELEMENT>
  );
}

export type RowProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Row) as typeof Row;

import React, { useContext } from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import Context from '../store/Context';

import classNames from 'classnames/bind';
import style from '@css/components/Switch/style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  // ...
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Bullet<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, className, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;
  const { disabled, checked } = useContext(Context);

  return (
    <ELEMENT
      {...props}
      ref={ref}
      className={cx('switch-bullet', { disabled }, { checked }, className)}
    ></ELEMENT>
  );
}

export type SwitchBulletProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Bullet) as typeof Bullet;

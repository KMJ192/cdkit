import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import SideNavProvider from './store/Provider';

import Menu from './Menu/Menu';
import MenuGroup from './MenuGroup/MenuGroup';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  depthGap?: number;
};

const DEFAULT_ELEMENT = 'nav';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Nav<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { children, depthGap = 0, className, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  return (
    <SideNavProvider
      value={{
        depthGap,
      }}
    >
      <DEFAULT_ELEMENT
        {...props}
        ref={ref}
        className={cx('navigation', className)}
      >
        {children}
      </DEFAULT_ELEMENT>
    </SideNavProvider>
  );
}

const Navigation = Object.assign(React.forwardRef(Nav) as typeof Nav, {
  Menu,
  MenuGroup,
});

export type NavigationProps = Props<typeof DEFAULT_ELEMENT>;
export default Navigation;

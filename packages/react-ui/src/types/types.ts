import { ComponentPropsWithRef, ElementType } from 'react';

type COMBINE<T, K> = T & Omit<K, keyof T>;

// T가 사용자, K가 react 제공 props
type COMBINE_ELEMENT_PROPS<T extends ElementType, K = unknown> = COMBINE<
  K,
  ComponentPropsWithRef<T>
>;

// 자동으로 as 타입 추가
type OVER_RIDABLE_PROPS<
  T extends ElementType,
  K = unknown,
> = COMBINE_ELEMENT_PROPS<T, K> & {
  as?: T;
};

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

type CSS_DISPLAY = 'flex' | 'grid';

type CSS_DISPLAY_FLEX_DIRECTION =
  | 'column'
  | 'row'
  | 'column-reverse'
  | 'row-reverse';

export type {
  OVER_RIDABLE_PROPS,
  COMBINE_ELEMENT_PROPS,
  COMBINE,
  RecursivePartial,
  CSS_DISPLAY,
  CSS_DISPLAY_FLEX_DIRECTION,
};

import type { ComponentPropsWithRef, ElementType } from 'react';

type BASE_PROPS<T extends ElementType> = {
  as?: T;
} & Omit<ComponentPropsWithRef<T>, 'as'>;

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export type { BASE_PROPS, RecursivePartial };

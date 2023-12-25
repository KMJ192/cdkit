import { createContext } from 'react';
import { deepClone } from '@cdkit/common';

import type { ContextState, ContextDispatch } from './types';

const INIT_STATE: ContextState = {
  direction: 'horizontal',
};

const INIT_CONTEXT: ContextDispatch = [
  deepClone(INIT_STATE),
  () => {
    return deepClone(INIT_STATE);
  },
];

const Context = createContext(INIT_CONTEXT);

export { INIT_STATE as INIT_TAB_STATE };
export default Context;
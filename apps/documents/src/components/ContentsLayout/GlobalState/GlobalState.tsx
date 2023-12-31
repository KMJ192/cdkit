'use client';

import { useEffect } from 'react';

import useSetAppState from '@src/store/AppProvider/hooks/useSetAppState';
import { useWindowSize } from '@src/store/windowSize';
import { useScrollPosition } from '@src/store/scroll';
import type { THEME } from '@src/types/types';

type Props = {
  theme: THEME;
};

function GlobalState({ theme }: Props) {
  const setAppState = useSetAppState();
  const { setWindowSize } = useWindowSize();
  const { setScrollPosition } = useScrollPosition();

  useEffect(() => {
    setAppState((appState) => ({
      ...appState,
      theme,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  useEffect(() => {
    const resize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const { scrollX, scrollY } = window;
      setScrollPosition({
        scrollX,
        scrollY,
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

export default GlobalState;

import type { CSSProperties } from 'react';

const getStyle = ({
  direction,
  spacing,
  style,
  unit,
}: {
  direction?: 'horizontal' | 'vertical';
  unit?: 'px' | 'em' | 'rem';
  spacing?: number;
  style?: CSSProperties;
}) => {
  let newStyle = {};
  const isSpacing = typeof spacing === 'number';

  if (isSpacing && direction === 'vertical') {
    newStyle = {
      height: `${spacing}${unit}`,
    };
  } else if (isSpacing && direction === 'horizontal') {
    newStyle = {
      width: `${spacing}${unit}`,
    };
  } else {
    return style;
  }

  return style
    ? {
        ...style,
        ...newStyle,
      }
    : newStyle;
};

export { getStyle };

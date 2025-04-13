type COLOR_SCHEME =
  | 'primary'
  | 'secondary'
  | 'red'
  | 'green'
  | 'blue'
  | 'purple'
  | 'gray'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger';

type ColorMap = {
  LIGHT: { [key: string]: any };
  DARK: { [key: string]: any };
  SOLID: {
    white: string;
    black: string;
  };
  INFO: string;
  WARNING: string;
  DANGER: string;
  SUCCESS: string;
};

const COLOR: ColorMap = {
  LIGHT: {
    primary: {
      '000': '#e7f8ff',
      '100': '#def4fd',
      '200': '#cff0fd',
      '300': '#c0e9f9',
      '400': '#b6e7fa',
      '500': '#aae3fa',
      '600': '#a3dff9',
      '700': '#99daf5',
    },
    secondary: {
      '000': '#dffbd4',
      '100': '#dcf9d1',
      '200': '#cefabd',
      '300': '#c9f9b6',
      '400': '#c5f8b1',
      '500': '#c5f8b1',
      '600': '#c1f7ac',
      '700': '#bcf6a5',
    },
    red: {
      '000': '#fcd9d9',
      '100': '#fbcfcf',
      '200': '#fbb6b6',
      '300': '#fb9797',
      '400': '#fd8787',
      '500': '#fb7171',
      '600': '#fb5c5c',
      '700': '#fe4141',
    },
    green: {
      '000': '#eeffee',
      '100': '#dfffdf',
      '200': '#c6ffc6',
      '300': '#abfbab',
      '400': '#90fd90',
      '500': '#70fd70',
      '600': '#59f959',
      '700': '#2fff2f',
    },
    blue: {
      '000': '#f7f7ff',
      '100': '#e1e1ff',
      '200': '#c1c1fc',
      '300': '#9d9dfd',
      '400': '#8989ff',
      '500': '#7272ff',
      '600': '#5959ff',
      '700': '#3e3eff',
    },
    purple: {
      '000': '#e8d2f9',
      '100': '#e3c4fb',
      '200': '#ddb8fa',
      '300': '#d1a1f6',
      '400': '#c98ff6',
      '500': '#c481f7',
      '600': '#ba68f9',
      '700': '#ae4ff7',
    },
    gray: {
      '000': '#e7e7e7',
      '100': '#dbdbdb',
      '200': '#d3d3d3',
      '300': '#bfbfbf',
      '400': '#b8b8b8',
      '500': '#acacac',
      '600': '#a5a5a5',
      '700': '#979797',
    },
    success: '#3e3eff',
    info: '#70fd70',
    warning: '#f4fb21',
    danger: '#fe4141',
    background: '#FFFFFF',
    text: '#000000',
  },
  DARK: {
    primary: {
      '000': '#252525',
      '100': '#414141',
      '200': '#5a5a5a',
      '300': '#747474',
      '400': '#8f8f8f',
      '500': '#a6a6a6',
      '600': '#cecece',
      '700': '#e7e7e7',
    },
    secondary: {},
    red: {
      '000': '#dd0000',
      '100': '#dd2d2d',
      '200': '#dd4b4b',
      '300': '#dd7979',
      '400': '#dd9090',
      '500': '#ddb0b0',
      '600': '#ddd3d3',
      '700': '#ddeeee',
    },
    green: {
      '000': '#00dd00',
      '100': '#2ddd2d',
      '200': '#4bdd4b',
      '300': '#79dd79',
      '400': '#90dd90',
      '500': '#b0ddb0',
      '600': '#d3ddd3',
      '700': '#eeddee',
    },
    blue: {
      '000': '#0000dd',
      '100': '#2d2ddd',
      '200': '#4b4bdd',
      '300': '#7979dd',
      '400': '#9090dd',
      '500': '#b0b0dd',
      '600': '#d3d3dd',
      '700': '#eeeedd',
    },
    purple: {
      '000': '#9c1bff',
      '100': '#a837ff',
      '200': '#af46ff',
      '300': '#b75dfc',
      '400': '#c172fc',
      '500': '#cc8bfe',
      '600': '#d29ff9',
      '700': '#e3bdff',
    },
    gray: {
      '000': '#636363',
      '100': '#7b7b7b',
      '200': '#898989',
      '300': '#909090',
      '400': '#a0a0a0',
    },
    success: '#2d2ddd',
    info: '#79dd79',
    danger: '#dd2d2d',
    background: '#1d1d1d',
    text: '#e7e7e7',
  },
  SOLID: {
    white: '#FFFFFF',
    black: '#000000',
  },
  INFO: '#1890FF',
  WARNING: '#FAAD14',
  DANGER: '#F5222D',
  SUCCESS: '#52C41A',
};

export type { ColorMap, COLOR_SCHEME };
export { COLOR };

import { Card } from '@cdkit/react-ui';
import type {
  CSS_VARIABLES,
  DATA_TYPE,
  DOCUMENT,
  PAGE_CONTENTS,
  PROPS,
} from './contents';
import { CSS_VAR_TYPE } from '@src/utils/utils';

const document: Array<DOCUMENT> = [
  {
    title: 'Example',
    subtitle: 'Card 예시입니다.',
    desc: [],
    view: <Card>Card</Card>,
    code: ['<Card>Card</Card>'],
  },
];

const dataType: Array<DATA_TYPE> = [];

const props: Array<PROPS> = [
  {
    title: 'Props',
    desc: '',
    element: [
      {
        name: 'children',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['Children 컴포넌트'],
      },
      {
        name: 'display',
        type: '"flex" | "grid"',
        essential: false,
        defaultValue: 'flex',
        description: ['display 설정'],
      },
      {
        name: 'flexDirection',
        type: '"column" | "row" | "column-reverse" | "row-reverse"',
        essential: false,
        defaultValue: 'undefined',
        description: ['flex-direction (display가 flex로 설정된 경우만)'],
      },
    ],
  },
];

const cssVar: Array<CSS_VARIABLES> = [
  {
    title: 'CSS Variables',
    desc: '',
    element: [
      {
        name: '--cdkit-color-card-border',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상'],
      },
      {
        name: '--cdkit-color-card-bg',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경색상'],
      },
    ],
  },
];

const defaultCode: Array<string> = ['<Card>Card</Card>'];

const pgCode = `import { Card } from '@cdkit/react-ui';

function App() {
  return (
    <Card>Card</Card>
  );
}

export default App;
`;

export const cardContents: PAGE_CONTENTS = {
  pageTitle: 'Card',
  pageDesc: 'Card 컴포넌트',
  document,
  dataType,
  props,
  cssVar,
  defaultCode,
  pgCode,
};
import { Sandpack } from '@codesandbox/sandpack-react';
import { Flex, Text } from '@cdkit/react-ui';

import useValueAppState from '@src/store/AppProvider/hooks/useValueAppState';

import { LAYOUT_CONTENTS } from '../contents/contents';

import type { PAGE_LAYOUT } from '@src/utils/url';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  type: PAGE_LAYOUT;
};

function Playground({ type }: Props) {
  const { theme } = useValueAppState();
  const { pgCode } = LAYOUT_CONTENTS[type];

  return (
    <Flex flexDirection='column' className={cx('container')}>
      <Text typo='s1'>CodeSandbox에서 테스트 하기</Text>
      <Sandpack
        theme={theme}
        customSetup={{
          dependencies: {
            '@cdkit/react-ui': 'latest',
          },
        }}
        template='react'
        files={{
          '/App.js': pgCode,
        }}
        options={{
          classes: {
            'sp-layout': cx('pg-layout'),
            'sp-preview': cx('pg-preview'),
            'sp-editor': cx('pg-editor'),
          },
        }}
      />
    </Flex>
  );
}

export default Playground;
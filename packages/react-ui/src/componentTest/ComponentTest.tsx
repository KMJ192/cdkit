import newStyled from '@emotion/styled';
import Checkbox from '@src/components/Checkbox/Checkbox';
import { useState } from 'react';

const Test = newStyled.div`
  padding: 30px;
`;

function ComponentTest() {
  const [checked, setChecked] = useState(false);

  return (
    <Test>
      <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
        <Checkbox.Mark />
      </Checkbox>
    </Test>
  );
}

export default ComponentTest;

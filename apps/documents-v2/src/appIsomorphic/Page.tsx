'use client';

import React, { useState } from 'react';
import { InfiniteScroll, sleep } from '@cdkit/react-modules';

function Page() {
  const [list, setList] = useState(Array.from({ length: 20 }, () => 0));
  const [isLoading, setIsLoading] = useState(false);

  const onLoad = async () => {
    setIsLoading(true);
    await sleep(1000);
    setList((list) => {
      return [...list, ...Array.from({ length: 20 }, () => 0)];
    });
    setIsLoading(false);
  };

  return (
    <div>
      <InfiniteScroll
        isLoading={isLoading}
        loadingElement={<div>Loading...</div>}
        onLoad={onLoad}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {list.map((_, idx) => {
          return <div key={idx}>Row : {idx + 1}</div>;
        })}
      </InfiniteScroll>
    </div>
  );
}

export default Page;

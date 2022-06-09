import React from 'react';
import { useAppSelector } from '@utils/reduxHooks';
import getRootPath from '@utils/getRootPath';

import Button from '@src/components/button/Button';
import Scroll from '@src/components/scroll/Scroll';

export default function Resume() {
  const { title } = useAppSelector((state) => {
    return {
      title: state.resume.title,
    };
  });

  getRootPath().then((res) => {
    console.log(res);
  });

  return (
    <div>
      我是Resume模块 {title}
      <Button>点击我打飞机</Button>
      <Scroll>
        {new Array(100)
          .fill(0)
          .map((_, idx) => idx + 1)
          .map((num) => {
            return <div>{num}</div>;
          })}
      </Scroll>
    </div>
  );
}

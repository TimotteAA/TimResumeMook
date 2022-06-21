import React from 'react';
import './index.normal.less';
import Scroll from '@src/components/scroll/Scroll';

interface IProps {
  children: React.ReactNode;
}
function Right({ children }: IProps) {
  const getChild = () => {
    const menuElement = (children as any)[0];
    const formElement = (children as any)[1][0];

    return [
      React.cloneElement(menuElement, {
        ...(children as any)[0],
        key: 'menuElement',
      }),
      React.cloneElement(formElement, {
        ...(children as any)[0],
        key: 'formElement',
      }),
    ];
  };
  console.log(children);
  return (
    <>
      <div className="header">{getChild()[0]}</div>
      <div className="content">
        <Scroll maxHeight={360} width={500}>
          {getChild()[1]}
        </Scroll>
      </div>
    </>
  );
}

export default Right;

import React from 'react';

import './index.normal.less';
import Button from '@src/components/button/Button';
import Scroll from '@src/components/scroll/Scroll';
import List, { IListProps } from './list/List';

interface IProps extends IListProps {
  onAdd: () => void;
}

function Left({ index, experienceList = [], onDelete, onAdd, onChange }: IProps) {
  return (
    <div className="layout-left">
      {experienceList.length > 0 && (
        <>
          <Scroll maxHeight={420} width={239}>
            <List index={index} experienceList={experienceList} onChange={onChange} onDelete={onDelete} />
          </Scroll>
          <div className="action">
            <Button width={112} size="middle" onClick={onAdd}>
              添加条目
            </Button>
          </div>
        </>
      )}
      {experienceList.length === 0 && (
        <div className="empty">
          <div className="empty-tips">还没有内容，快添加一下吧～</div>
          <div className="empty-action">
            <Button width={112} size="middle" onClick={onAdd}>
              添加条目
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Left;

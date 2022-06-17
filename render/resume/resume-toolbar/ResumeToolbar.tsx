import React, { useState, useEffect } from 'react';

import { RESUME_TOOLBAR_LIST } from './mockData';
import Scroll from '@src/components/scroll/Scroll';
import styles from './index.module.less';
import { useAppDispatch } from '@utils/reduxHooks';
import { addKeysAction } from '../store/index';
import emitter from '@utils/events';
import workLogo from '@assets/icon/work.png';

interface ToolBarItem {
  key: string;
  name: string;
  summary: string;
  required: boolean;
}

export default function ResumeToolbar() {
  const [addToolbarList, setAddToolbarList] = useState<ToolBarItem[]>([]);
  const [unAddToolbarList, setUnAddToolbarList] = useState<ToolBarItem[]>([]);

  // redux
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (RESUME_TOOLBAR_LIST.length) {
      const addToolbarList: ToolBarItem[] = [];
      const unAddToolbarList: ToolBarItem[] = [];
      RESUME_TOOLBAR_LIST.forEach((s) => {
        if (s.required) {
          addToolbarList.push(s);
        } else {
          unAddToolbarList.push(s);
        }
      });

      setAddToolbarList([...addToolbarList]);
      setUnAddToolbarList([...unAddToolbarList]);
      dispatch(addKeysAction(addToolbarList));
    }
  }, []);

  // 点击未添加模块，添加到加入模块
  const handleAddToolBar = (item: ToolBarItem) => {
    const allAddKeys = addToolbarList.map((i) => i.key);
    const addedItems = [...addToolbarList];
    if (!allAddKeys.includes(item.key)) {
      // 已添加模块没有这个模块的key
      addedItems.push(item);
      setAddToolbarList([...addedItems]);
      allAddKeys.push(item.key);
      dispatch(addKeysAction(allAddKeys));
    }

    // 删去未加入模块
    const unAddedKeys = unAddToolbarList.map((i) => i.key);
    if (unAddedKeys.includes(item.key)) {
      const unAddedItems = unAddToolbarList.filter((i) => i.key !== item.key);
      setUnAddToolbarList([...unAddedItems]);
    }
  };

  // 点击已添加模块，添加到未加入模块
  const handleRemoveToolBar = (item: ToolBarItem) => {
    if (item.required) return;

    const unAddedKeys = unAddToolbarList.map((i) => i.key);
    if (!unAddedKeys.includes(item.key)) {
      const unAddedItems = [...unAddToolbarList];
      unAddedItems.push(item);
      setUnAddToolbarList([...unAddedItems]);
    }

    const addKeys = addToolbarList.map((i) => i.key);
    if (addKeys.includes(item.key)) {
      const addedItems = addToolbarList.filter((i) => i.key !== item.key);
      setAddToolbarList([...addedItems]);

      const newAddKeys = addKeys.filter((i) => i !== item.key);
      dispatch(addKeysAction(newAddKeys));
    }
  };

  const showModal = (key: string) => {
    emitter.send('showModal', key);
  };

  const height = document.body.clientHeight;
  return (
    <Scroll width={280} maxHeight={height - 180}>
      <div className={styles.module}>
        <div className={styles.content}>
          <div className={styles.module}>已添加模块</div>
          {addToolbarList.length &&
            addToolbarList.map((toolbar) => {
              return (
                <div className={styles.box} key={toolbar.key} onClick={() => showModal(toolbar.key)}>
                  <div className={styles.title}>
                    <img src={workLogo} alt="" />
                    {toolbar.name}
                  </div>
                  {toolbar.required && <div className={styles.mustIcon}>{'必选项'}</div>}
                  {!toolbar.required && (
                    <div
                      className={styles.icon}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveToolBar(toolbar);
                      }}
                    >
                      {'移除这一项'}
                    </div>
                  )}
                  <div className={styles.summary}>{toolbar.summary}</div>
                </div>
              );
            })}

          {unAddToolbarList.length > 0 && <div className={styles.module}>未添加模块</div>}
          {unAddToolbarList.length > 0 &&
            unAddToolbarList.map((toolbar) => {
              return (
                <div className={styles.box} key={toolbar.key} onClick={() => handleAddToolBar(toolbar)}>
                  <div className={styles.title}>
                    <img src={workLogo} alt="" />
                    {toolbar.name}
                  </div>
                  <div className={styles.summary}>{toolbar.summary}</div>
                </div>
              );
            })}
        </div>
      </div>
    </Scroll>
  );
}

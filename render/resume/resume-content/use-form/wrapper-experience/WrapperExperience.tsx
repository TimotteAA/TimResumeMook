import React, { useState, useEffect, useCallback, useMemo } from 'react';

import './index.normal.less';
import { AdapterExperienceType } from './adapter';
import Left from './left/Left';
import Right from './right/Right';
import Menu from './right/menu/Menu';
import Modal from '@src/components/Modal';

interface IProps {
  dataList: any[];
  updateDataList: (newDataList: any[]) => void;
  children: React.ReactNode;
}

/**
 *
 * @param children: 传入的form
 * @param dataList: list数组
 * @param updateDataList: 同步到redux中
 */
export default function WrapperExperience({ children, dataList, updateDataList }: IProps) {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [currentItem, setCurrentItem] = useState({});
  const [experienceList, setExperienceList] = useState<AdapterExperienceType[]>([]);

  // 修改当前选中项
  const onChangeCurrentItem = useCallback(
    (newCurrentItem: AdapterExperienceType) => {
      // 在这里同步到redux
      if (currentIndex >= 0) {
        const { title, ...updateNewItem } = newCurrentItem;
        dataList[currentIndex] = updateNewItem;
        updateDataList([...dataList]);
      }
    },
    [currentItem]
  );

  useEffect(() => {
    if (dataList && dataList.length) {
      setCurrentIndex(0);
    }
  }, []);

  useEffect(() => {
    if (currentIndex >= 0) {
      setCurrentItem(dataList[currentIndex]);
    }
  }, [currentIndex, dataList]);

  // 2. 当条目数据列表修改更新，则更新数据
  useEffect(() => {
    if (dataList && dataList?.length > 0) {
      setExperienceList(dataList || []);
    } else {
      setExperienceList([]);
    }
  }, [dataList]);

  // CRUD的回调
  const onAddItem = () => {};

  const onChangeItem = () => {};

  const onDeleteItem = () => {};

  // 当前项的编辑状态
  // 编辑状态
  const [editModal, setEditModal] = useState({
    showByCancel: false, // 编辑下的取消弹窗
    showBySave: false, // 编辑下的保存弹窗
    status: false, // 编辑的状态
    tempSaveItem: {}, // 暂时保存的数据
    onAfterFn: () => {}, // 操作之后的执行方法
  });

  // 删除状态
  const [deleteModal, setDeleteModal] = useState({
    show: false,
    deleteIndex: -1,
  });

  const onToggleEditModal = (...args: any[]) => {};

  const onSaveEditValue = () => {};

  const onDeleteCancel = () => [];

  const onDeleteOk = () => {};

  console.log(currentItem);

  const newChildren = useMemo(() => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        // 给每个list传入数据源与修改选中项的方法
        return React.cloneElement(child, {
          currentItem: currentItem,
          onChangeCurrentItem: onChangeCurrentItem,
        });
      }
      return child;
    });
  }, [children, dataList, currentItem]);
  console.log(newChildren);
  console.log(experienceList.length > 0);
  // return <div>{newChildren}</div>
  return (
    <div className="form">
      <div className="left-box">
        <Left
          index={currentIndex}
          experienceList={experienceList}
          onAdd={onAddItem}
          onChange={onChangeItem}
          onDelete={onDeleteItem}
        />
      </div>
      <div className="right-box">
        {experienceList.length > 0 && (
          <Right>
            <Menu
              isEdit={editModal?.status}
              currentItem={currentItem}
              onChangeEditStatus={() => onToggleEditModal({ status: true, tempSaveItem: { ...currentItem } })}
              onCancelEditValue={() => onToggleEditModal({ showByCancel: true })}
              onSaveEditValue={onSaveEditValue}
            />
            {newChildren}
          </Right>
        )}
      </div>
      {deleteModal.show && (
        <Modal.Confirm
          title="确定删除条目吗？"
          description="删除后将无法恢复哦～"
          config={{
            cancelBtn: {
              isShow: true,
              callback: onDeleteCancel,
            },
            submitBtn: {
              isShow: true,
              callback: onDeleteOk,
            },
          }}
        />
      )}
      {editModal.showByCancel && (
        <Modal.Confirm
          title="你确定放弃编辑的笔记内容？"
          description="放弃后将无法恢复哦～"
          config={{
            cancelBtn: {
              isShow: true,
              callback: () => {
                onToggleEditModal({
                  showByCancel: false,
                });
              },
            },
            submitBtn: {
              isShow: true,
              callback: () => {
                onToggleEditModal({
                  status: false,
                  showByCancel: false,
                  tempSaveItem: {},
                });
                editModal?.onAfterFn && editModal?.onAfterFn();
                setCurrentItem(experienceList[currentIndex]);
              },
            },
          }}
        />
      )}
    </div>
  );
}

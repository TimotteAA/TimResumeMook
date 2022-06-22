import React, { useState, useEffect, useCallback, useMemo } from 'react';

import './index.normal.less';
import { AdapterExperienceType } from './adapter';
import Left from './left/Left';
import Right from './right/Right';
import Menu from './right/menu/Menu';
import Modal from '@src/components/Modal';
import { onAddExperience, onDeleteExperience } from './utils';

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
  // 增加一个条目
  const onAddItem = () => {
    if (!editModal.status) {
      // 当前项没有进行编辑aa
      const newList = onAddExperience(experienceList);
      setCurrentIndex(0);
      updateDataList && updateDataList([...newList]);
      setExperienceList([...newList]);
    } else {
      // 当前项处于编辑状态
      onToggleEditModal({
        showByCancel: true, // 弹窗询问是否真的取消
        onAftefFn: () => {
          // 确定取消后执行的回调
          const newList = onAddExperience(experienceList);
          console.log(newList);
          updateDataList && updateDataList(newList);
          setCurrentIndex(0);
          setCurrentItem(newList[0]);
          setExperienceList(newList);
        },
      });
    }
  };

  const onChangeItem = (idx: number) => {
    if (!editModal.status) {
      // 不处于编辑态;
      setCurrentIndex(idx);
    } else {
      onToggleEditModal({
        showByCancel: true,
        onAfterFn: () => {
          setCurrentIndex(idx);
        },
      });
    }
  };

  // 当前项的编辑状态
  // 编辑状态
  const [editModal, setEditModal] = useState({
    showByCancel: false, // 编辑下的取消弹窗
    showBySave: false, // 编辑下的保存弹窗
    status: false, // 编辑的状态
    tempSaveItem: {}, // 暂时保存的数据
    onAfterFn: () => {}, // 确认操作之后的执行方法
  });

  // 删除状态
  const [deleteModal, setDeleteModal] = useState({
    show: false,
    deleteIndex: -1,
  });

  // 修改当前项的编辑态  // 修改编辑状态
  const onToggleEditModal = useCallback(
    (config: any) => {
      setEditModal((prev) => {
        return {
          ...prev,
          ...config,
        };
      });
    },
    [editModal]
  );

  // 1. 点击删除条目，保存要删除的条目信息
  const onDeleteItem = (index: number) => {
    setDeleteModal({
      show: true,
      deleteIndex: index,
    });
  };
  // 2. 删除弹窗中的取消按钮回调
  const onDeleteCancel = useCallback(() => {
    // 重置删除信息
    setDeleteModal({
      show: false,
      deleteIndex: -1,
    });
  }, [currentIndex, deleteModal]);

  // 3. 删除弹窗中的确定按钮回调
  const onDeleteOk = useCallback(() => {
    const newList = onDeleteExperience(deleteModal.deleteIndex, experienceList);
    if (newList.length > 0) setCurrentIndex(0);
    else setCurrentIndex(-1);

    // 重置删除信息
    setDeleteModal({
      show: false,
      deleteIndex: -1,
    });
    setExperienceList(newList);
    updateDataList && updateDataList(newList);
  }, [currentIndex, deleteModal]);
  // 修改当前条目内容
  const onChangeCurrentItem = useCallback(
    (newItem: AdapterExperienceType) => {
      // 临时保存当前编辑的内容数据
      onToggleEditModal({
        tempSaveItem: { ...newItem },
      });
      setCurrentItem(newItem);
    },
    [children, onToggleEditModal]
  );

  // 当点击“保存”按钮时触发
  const onSaveEditValue = useCallback(() => {
    let newList = [...experienceList];
    let item = editModal?.tempSaveItem ? { ...editModal?.tempSaveItem } : { ...currentItem };
    newList[currentIndex] = item;
    setExperienceList(newList);
    updateDataList && updateDataList(newList);
    onToggleEditModal({
      status: false,
    });
  }, [editModal?.tempSaveItem, currentIndex, onToggleEditModal]);

  const newChildren = useMemo(() => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        // 给每个list传入数据源与修改选中项的方法
        return React.cloneElement(child, {
          currentItem: currentItem,
          onChangeCurrentItem: onChangeCurrentItem,
          isEdit: editModal?.status,
        });
      }
      return child;
    });
  }, [children, dataList, currentItem, editModal, currentIndex]);

  console.log(currentIndex, currentItem, experienceList);

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
          showFooter={true}
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
          title="你确定放弃编辑的当前内容吗？"
          description="放弃后将无法恢复哦～"
          showFooter={true}
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
                console.log(editModal.onAfterFn);
                editModal.onAfterFn && editModal.onAfterFn();
              },
            },
          }}
        />
      )}
    </div>
  );
}

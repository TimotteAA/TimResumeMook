import React, { useState, useEffect, useCallback, useMemo } from 'react';

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
  const [currentItem, setCurrentItem] = useState(null);
  // 修改当前选中项
  const onChangeCurrentItem = useCallback(() => {
    // 在这里同步到redux
  }, [currentItem]);

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

  return <div>{newChildren}</div>;
}

import React from 'react';

import { AdapterExperienceType } from '../../wrapper-experience/adapter';
import Input from '@src/components/input/Input';
import styles from './index.module.less';

interface IProps {
  isDisable: boolean;
  currentItem: AdapterExperienceType;
  onChangeCurrentItem: (newCurrentItem: AdapterExperienceType[]) => void;
}

export default function Form({ isDisable, currentItem, onChangeCurrentItem }: IProps) {
  console.log(currentItem);
  return (
    <div className={styles.wrapper}>
      <div className={styles.flex}>
        <div className={styles.left}>
          <span className={styles.required}>*</span>项目名 ：
        </div>
        <div className={styles.right}>
          <Input
            onChange={(e) => {}}
            value={currentItem?.title}
            placeholder="请输入项目名"
            allowClear={!isDisable}
            disabled={isDisable}
          />
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.left}>
          <span className={styles.required}>*</span>职 位 ：
        </div>
        <div className={styles.right}>
          <Input
            onChange={(e) => {}}
            value={currentItem?.post}
            placeholder="在项目中担任什么职位"
            allowClear={!isDisable}
            disabled={isDisable}
          />
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.left}>
          <span className={styles.required}>*</span>时 间 ：
        </div>
        <div className={styles.right}>
          <Input
            onChange={(e) => {}}
            value={currentItem?.beginTime}
            placeholder="2015.09.01"
            allowClear={!isDisable}
            style={{ width: 290 }}
            disabled={isDisable}
          />
          <span className={styles.line}>-</span>
          <Input
            onChange={(e) => {}}
            value={currentItem?.endTime}
            placeholder="2015.09.01"
            allowClear={!isDisable}
            style={{ width: 290 }}
            disabled={isDisable}
          />
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.left}>
          <span className={styles.required}>*</span>内 容 ：
        </div>
        <div className={styles.right}>
          <Input
            type="textarea"
            onChange={(e) => {}}
            rows={5}
            value={currentItem?.content}
            placeholder="你在项目中的主要工作是什么呢？"
            allowClear={!isDisable}
            disabled={isDisable}
          />
        </div>
      </div>
    </div>
  );
}

import React from 'react';

import { AdapterExperienceType } from '../../wrapper-experience/adapter';
import Input from '@src/components/input/Input';
import styles from './index.module.less';

interface IProps {
  isEdit: boolean;
  currentItem: AdapterExperienceType;
  onChangeCurrentItem: (newCurrentItem: AdapterExperienceType) => void;
}

export default function Form({ isEdit, currentItem, onChangeCurrentItem }: IProps) {
  console.log(currentItem);
  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.flex}>
        <div className={styles.left}>
          <span className={styles.required}>*</span>工作名 ：
        </div>
        <div className={styles.right}>
          <Input
            onChange={(e) => {
              console.log(e.target.value);
              // const newCurrentItem = { ...currentItem, title: e.target.value, projectName: e.target.value };
              // onChangeCurrentItem(newCurrentItem);
            }}
            value={currentItem.title}
            placeholder="请输入工作名"
            allowClear={isEdit}
            disabled={!isEdit}
          />
        </div>
      </div> */}
      <div className={styles.flex}>
        <div className={styles.left}>
          <span className={styles.required}>*</span>部 门 ：
        </div>
        <div className={styles.right}>
          <Input
            onChange={(e) => {
              const newCurrentItem = { ...currentItem, department: e.target.value };
              onChangeCurrentItem(newCurrentItem);
            }}
            value={currentItem.department}
            placeholder="在什么部门中工作"
            allowClear={isEdit}
            disabled={!isEdit}
          />
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.left}>
          <span className={styles.required}>*</span>职 位 ：
        </div>
        <div className={styles.right}>
          <Input
            onChange={(e) => {
              const newCurrentItem = { ...currentItem, post: e.target.value };
              onChangeCurrentItem(newCurrentItem);
            }}
            value={currentItem.post}
            placeholder="在工作中担任什么职位"
            allowClear={isEdit}
            disabled={!isEdit}
          />
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.left}>
          <span className={styles.required}>*</span>时 间 ：
        </div>
        <div className={styles.right}>
          <Input
            onChange={(e) => {
              const beginTime = e.target.value;
              const newCurrentItem = { ...currentItem, beginTime };
              onChangeCurrentItem(newCurrentItem);
            }}
            value={currentItem.beginTime}
            placeholder="2015.09.01"
            allowClear={isEdit}
            style={{ width: 290 }}
            disabled={!isEdit}
          />
          <span className={styles.line}>-</span>
          <Input
            onChange={(e) => {
              const endTime = e.target.value;
              const newCurrentItem = { ...currentItem, endTime };
              onChangeCurrentItem(newCurrentItem);
            }}
            value={currentItem.endTime}
            placeholder="2015.09.01"
            allowClear={isEdit}
            style={{ width: 290 }}
            disabled={!isEdit}
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
            onChange={(e) => {
              const content = e.target.value;
              const newCurrentItem = { ...currentItem, content };
              onChangeCurrentItem(newCurrentItem);
            }}
            rows={5}
            value={currentItem.content}
            placeholder="你在工作中的主要负责什么呢？"
            allowClear={isEdit}
            disabled={!isEdit}
          />
        </div>
        <span style={{ marginTop: '5px', color: 'red' }}>每项之间请以｜进行分割（建议直接在此复制）</span>
      </div>
    </div>
  );
}

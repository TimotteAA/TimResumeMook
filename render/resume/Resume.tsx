import React from 'react';

import { useAppSelector } from '@utils/reduxHooks';
// import getRootPath from '@utils/getRootPath';
import styles from './index.module.less';
import ResumeHeader from './resume-header/ResumeHeader';
import ResumeToolbar from './resume-toolbar/ResumeToolbar';
import ResumeContent from './resume-content/ResumeContent';

// 我是Resume模块 {title}
// <Button onClick={onButtonClick}>点击我打飞机</Button>
// <Scroll>
//   {new Array(100)
//     .fill(0)
//     .map((_, idx) => idx + 1)
//     .map((num) => {
//       return <div>{num}</div>;
//     })}
// </Scroll>
// <Input allowClear={true} maxLength={500} />
// {/* <Modal.Confirm
//   title="确定要打印简历吗？"
//   description="请确保信息的正确，目前仅支持单页打印哦～"
//   config={{
//     deleteBtn: { isShow: true, callback: () => {}, text: '取消' },
//     submitBtn: { isShow: true, callback: () => {} },
//     cancelBtn: { isShow: true, callback: () => {} },
//   }}
//   showFooter={true}
// /> */}

export default function Resume() {
  const { title } = useAppSelector((state) => {
    return {
      title: state.resume.title,
    };
  });

  return (
    <div className={styles.resumeContainer}>
      <div className={styles.header}>
        <ResumeHeader />
      </div>
      <div className={styles.content}>
        <ResumeContent />
      </div>
      <div className={styles.toolbar}>
        <ResumeToolbar />
      </div>
    </div>
  );
}

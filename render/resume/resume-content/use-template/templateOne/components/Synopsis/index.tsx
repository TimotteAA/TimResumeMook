import React from 'react';
import './index.normal.less';
import { useAppSelector } from '@utils/reduxHooks';

function Synopsis() {
  const { username, evaluation, job, hobby } = useAppSelector((state) => {
    return {
      username: state.resume.resumeData.base.username,
      job: state.resume.resumeData.work.job,
      evaluation: state.resume.resumeData.evaluation,
      hobby: state.resume.resumeData.hobby,
    };
  });

  return (
    <div className="content">
      <p className="name">{username}</p>
      <p className="job">{job}</p>
      {evaluation && <p className="summary">个人评价：{evaluation}</p>}
      {hobby && <p className="summary">爱好：{hobby}</p>}
    </div>
  );
}

export default Synopsis;

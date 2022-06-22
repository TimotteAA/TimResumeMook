import React from 'react';
import './index.normal.less';
import { useAppSelector } from '@utils/reduxHooks';

function Synopsis() {
  const { username, evaluation, job } = useAppSelector((state) => {
    return {
      username: state.resume.resumeData.base.username,
      job: state.resume.resumeData.work.job,
      evaluation: state.resume.resumeData.evaluation,
    };
  });

  return (
    <div className="content">
      <p className="name">{username}</p>
      <p className="job">{job}</p>
      <p className="summary">{evaluation}</p>
    </div>
  );
}

export default Synopsis;

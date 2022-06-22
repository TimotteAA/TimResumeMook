import React, { useMemo } from 'react';

import '../../../styles/template-one.normal.less';
import './index.normal.less';
import { useAppSelector } from '@utils/reduxHooks';

function Job() {
  const { work } = useAppSelector((state) => {
    return {
      work: state.resume.resumeData.work,
    };
  });

  const renderedWork = useMemo(() => {
    const newWork = { ...work };
    newWork.cityList = work.city.split('|');
    return newWork;
  }, [work]);

  return (
    <div className="container">
      <p className="title">求职意向 Work</p>
      <ul className="content">
        <li>职位：{renderedWork.job}</li>
        <li>城市：{renderedWork.cityList.join(' | ')}</li>
      </ul>
    </div>
  );
}

export default Job;

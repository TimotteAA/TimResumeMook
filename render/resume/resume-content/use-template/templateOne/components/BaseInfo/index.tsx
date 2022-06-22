import React, { useMemo } from 'react';
import '../../../styles/template-one.normal.less';

import { useAppSelector } from '@utils/reduxHooks';

function BaseInfo() {
  const { base } = useAppSelector((state) => {
    return {
      base: state.resume.resumeData.base,
    };
  });

  const renderedBase = useMemo(() => base, [base]);

  return (
    <div className="container">
      <p className="title">基本信息 Basic</p>
      <ul className="content">
        <li>院校：{renderedBase?.school}</li>
        <li>专业：{renderedBase?.major}</li>
        <li>学历：{renderedBase?.degree}</li>
        <li>
          学年：{renderedBase?.onSchoolTime?.beginTime} - {renderedBase?.onSchoolTime?.endTime}
        </li>
        <li>籍贯：{renderedBase?.hometown}</li>
      </ul>
    </div>
  );
}

export default BaseInfo;

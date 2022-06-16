/**
 * @desc 求职意向
 * @author pengdaokuan
 */
import React from 'react';
import '../../../styles/template-one.normal.less';
import './index.normal.less';

function Job() {
  return (
    <div className="container">
      <p className="title">求职意向 Work</p>
      <ul className="content">
        <li>职位：前端工程师</li>
        <li>城市：广州｜成都｜海口</li>
      </ul>
    </div>
  );
}

export default Job;

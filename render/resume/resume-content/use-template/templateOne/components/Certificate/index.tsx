import React, { useMemo } from 'react';
import '../../../styles/template-one.normal.less';
import { useAppSelector } from '@utils/reduxHooks';

function Certificate() {
  const { certificate } = useAppSelector((state) => {
    return { certificate: state.resume.resumeData.certificate };
  });

  const renderedCertificate = useMemo(() => {
    return certificate;
  }, [certificate]);

  return (
    <div className="container">
      <p className="title">荣誉奖励 Certificate</p>
      <ul className="content">
        {/* <li>全国英语四级证书</li>
        <li>全国计算机二级证书</li>
        <li>湖南瞎说大学自封骰王</li>
        <li>广州第一届酒王大赛参与奖</li> */}
        {renderedCertificate.split('|').map((c) => {
          return <li key={c}>{c}</li>;
        })}
      </ul>
    </div>
  );
}

export default Certificate;

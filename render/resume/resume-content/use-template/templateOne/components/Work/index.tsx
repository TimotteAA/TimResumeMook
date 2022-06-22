import './index.normal.less';
import React, { useMemo } from 'react';
import { useAppSelector } from '@utils/reduxHooks';

function Work() {
  const { workExperience } = useAppSelector((state) => {
    return {
      workExperience: state.resume.resumeData.workExperience,
    };
  });

  const renderedWorkExperience = useMemo(() => {
    return workExperience;
  }, [workExperience]);

  console.log(renderedWorkExperience);

  return (
    <div className="content">
      <p className="label">工作、实习经历 Post</p>
      <ul className="list">
        {renderedWorkExperience.map((work, idx) => {
          return (
            <li className="flex" key={idx}>
              <div className="left">
                <p>
                  {work.beginTime}-{work.endTime}
                </p>
              </div>
              <div className="right">
                <p>
                  {work.department} {work.post}
                </p>
              </div>
              <p>{work.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Work;

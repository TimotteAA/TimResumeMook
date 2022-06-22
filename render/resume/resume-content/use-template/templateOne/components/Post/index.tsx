import './index.normal.less';
import React, { useMemo } from 'react';
import { useAppSelector } from '@utils/reduxHooks';

function Post() {
  const { schoolExperience } = useAppSelector((state) => {
    return {
      schoolExperience: state.resume.resumeData.schoolExperience,
    };
  });

  const renderedSchoolExperience = useMemo(() => {
    return schoolExperience;
  }, [schoolExperience]);

  return (
    <div className="content">
      <p className="label">在校经历 Post</p>
      <ul className="list">
        {renderedSchoolExperience.map((school, idx) => {
          return (
            <li className="flex" key={idx}>
              <div className="left">
                <p>
                  {school.beginTime}-{school.endTime}
                </p>
                <p>{school.post}</p>
              </div>
              <div className="right">
                <p>{school.department}</p>
                <p>{school.content}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Post;

import React, { useMemo } from 'react';
import './index.normal.less';
import { useAppSelector } from '@utils/reduxHooks';

function Project() {
  const { projectExperience } = useAppSelector((state) => {
    return {
      projectExperience: state.resume.resumeData.projectExperience,
    };
  });

  const renderedProjectExperience = useMemo(() => {
    const tmpList = projectExperience.map((item) => {
      const newItem = { ...item };
      const parsed = newItem.content.split('｜');
      if (parsed.length > 1) {
        newItem.parseContent = parsed;
      } else {
        newItem.parseContent = newItem.content.split('|');
      }
      return newItem;
    });
    return tmpList;
  }, [projectExperience]);

  console.log(renderedProjectExperience);

  return (
    <div className="content">
      <p className="label">项目经历 Project</p>
      <ul className="list">
        {!renderedProjectExperience ? (
          <li className="flex">
            <div className="left">
              <p>
                <span>2021.03 - 2021.05</span>
              </p>
            </div>
            <div className="right">
              <p>
                <span>visResumeMook 可视化简历平台 -前端工程师</span>
              </p>
            </div>
            <div className="text">
              <ul className="item-box">
                <li className="item-content">
                  <span>Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版</span>
                </li>
                <li className="item-content">
                  <span>通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档</span>
                </li>
                <li className="item-content">
                  <span>通过可视化拖拽形式，自定义组件模版</span>
                </li>
              </ul>
            </div>
          </li>
        ) : (
          renderedProjectExperience.map((item, idx) => {
            return (
              <li className="flex" key={idx}>
                <div className="left">
                  <p>
                    <span>
                      {item.beginTime} - {item.endTime}
                    </span>
                  </p>
                </div>
                <div className="right">
                  <p>
                    <span>{item.projectName}</span>
                  </p>
                </div>
                <div className="text">
                  <ul className="item-box">
                    {item.parseContent.map((c) => {
                      return (
                        <li className="item-content" key={c}>
                          <span>{c}</span>
                        </li>
                      );
                    })}
                    {/* <li className="item-content">
                      <span>Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版</span>
                    </li>
                    <li className="item-content">
                      <span>通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档</span>
                    </li>
                    <li className="item-content">
                      <span>通过可视化拖拽形式，自定义组件模版</span>
                    </li> */}
                  </ul>
                </div>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default Project;

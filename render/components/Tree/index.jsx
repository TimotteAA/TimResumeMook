import React, { useState } from "react";

import classNames from "classnames";

import "./index.css";

const dfs = (item, state) => {
  if (item.children && item.children.length) {
    for (let child of item.children) {
      child.clicked = state;
      dfs(child, state);
    }
  } else {
    return;
  }
};

// clicked：当前选中的一支
// checkbox：是否选择当前项及子项
const Tree = ({ data }) => {
  const [rootData, setRootData] = useState(data);

  const handleLeafDelete = (id) => {
    console.log(id, rootData);
    const newRootData = rootData.filter((i) => i.id !== id);
    setRootData([...newRootData]);
  };

  return (
    <ul className="tree">
      {rootData.map((item) => {
        return (
          <li className="tree-item" key={item.id}>
            {/* 展开 */}
            {item.children && item.children.length && (
              <div
                className={classNames({ opened: true, yes: item.opened })}
                onClick={() => {
                  item.opened = !item.opened;
                  setRootData([...rootData]);
                }}
              ></div>
            )}
            {/* 选中 */}
            <div
              className={classNames({ checkbox: true, yes: item.clicked })}
              onClick={() => {
                item.clicked = !item.clicked;
                // 修改子组件clicked
                dfs(item, item.clicked);
                setRootData([...rootData]);
              }}
            ></div>
            <div className="title">{item.title}</div>

            {item.opened && item.children && <Tree data={item.children} />}
            {(!item.children || !item.children.length) && (
              <span
                style={{ marginLeft: "5px", color: "blue", cursor: "pointer" }}
                onClick={() => handleLeafDelete(item.id)}
              >
                Delete
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Tree;

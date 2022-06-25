import React from 'react';
import './index.normal.less';

import { useAppSelector, useAppDispatch } from '@utils/reduxHooks';
import { changeTheme } from '@src/components/theme/store';
import { useThemeR } from '@utils/useThemeActionHooks';

// interface IProps {
//   // 主题列表
//   themeList: Theme.Item[];
//   // 当前选中的主题
//   currentTheme: Theme.Item;
//   // 切换主题
//   onChangeTheme: (theme: Theme.Item) => void;
// }

function Theme() {
  //   const dispatch = useAppDispatch();
  //   const { themeList, currentTheme } = useAppSelector((state) => {
  //     return {
  //       themeList: state.theme.themeList,
  //       currentTheme: state.theme.currentTheme,
  //     };
  //   });
  const [themeList, currentTheme, dispatch] = useThemeR();

  return (
    <div className="box">
      {themeList.length > 0 &&
        themeList.map((t: Theme.Item, index: number) => {
          return (
            <span
              key={index}
              style={{ backgroundColor: t.backgroundColor }}
              className={`${currentTheme.id === t.id ? 'active' : ''}`}
              onClick={() => {
                dispatch(changeTheme(t));
              }}
            />
          );
        })}
    </div>
  );
}

export default Theme;

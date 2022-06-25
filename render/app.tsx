import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@src/store/index';
import mockData from './resume/mockData/mockData';
import Router from '@src/router/Router';
import { useAppDispatch } from '@utils/reduxHooks';
import { readAppConfigThemeFile } from '@utils/useThemeActionHooks';
import { changeResumeData } from './resume/store/index';
import { changeTheme, changeThemeList } from '@src/components/theme/store';

const { onGetResumeData, onReplyResumeData } = window.getResumeData;

function App() {
  const dispatch = useAppDispatch();
  // 刚挂载时从本地尝试取resumeData，如果没有则dispatch mockData进去
  useEffect(() => {
    const getResumeData = async () => {
      onGetResumeData();
      const res = await onReplyResumeData();
      if (Object.keys(res).length) {
        dispatch(changeResumeData(res));
      } else {
        dispatch(changeResumeData(mockData));
      }
    };
    getResumeData();
    console.log(27);
    readAppConfigThemeFile().then((themeConfig) => {
      console.log(themeConfig);
      const themeList = themeConfig.themeList;
      const currentTheme = themeConfig.currentTheme;
      dispatch(changeTheme(currentTheme));
      dispatch(changeThemeList(themeList));
    });
    console.log(29);
  }, []);

  return <Router />;
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

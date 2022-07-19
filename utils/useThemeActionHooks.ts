import { useAppDispatch, useAppSelector } from './reduxHooks';
import { changeTheme } from '@src/components/theme/store';
import getRootPath from './getRootPath';
import fileAction from './file';

const { join } = window.electron;

function readAppConfigThemeFile() {
  return new Promise((resolve: (values: { [key: string]: any }) => void, reject: (value: Error) => void) => {
    getRootPath().then((appPath: string) => {
      const jsonPath = join(appPath, 'appConfig/theme.config.json');
      fileAction
        .hasFile(jsonPath)
        .then(async () => {
          const themeConfigValues = await fileAction.read(jsonPath, 'utf-8');
          console.log(themeConfigValues);
          resolve(JSON.parse(themeConfigValues));
        })
        .catch(() => {
          reject(new Error('appConfig does not exist !'));
        });
    });
  });
}

function useThemeR() {
  const dispatch = useAppDispatch();
  const { themeList, currentTheme } = useAppSelector((state) => {
    return {
      themeList: state.theme.themeList,
      currentTheme: state.theme.currentTheme,
    };
  });
  const dispatchTheme = (theme: Theme.Item) => {
    dispatch(changeTheme(theme));
  };
  return [themeList, currentTheme, dispatchTheme];
}

export { readAppConfigThemeFile, useThemeR };

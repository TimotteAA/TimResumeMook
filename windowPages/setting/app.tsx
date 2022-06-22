import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@src/store/index';
import Setting from './index';

const root = ReactDOM.createRoot(document.getElementById('root2')!);
root.render(
  <Provider store={store}>
    <Setting />
  </Provider>
);

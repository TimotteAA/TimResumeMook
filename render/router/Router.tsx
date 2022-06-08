import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import Root from '@src/root/Root';
import Resume from '@src/resume/Resume';

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;

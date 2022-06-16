import React from 'react';

import Scroll from '@src/components/scroll/Scroll';
import { TemplateOne } from './use-template/index';

export default function ResumeContent() {
  const HEADER_ACTION_HEIGHT = 92;
  const height = document.body.clientHeight;

  return (
    <Scroll maxHeight={height - HEADER_ACTION_HEIGHT} width={820}>
      <TemplateOne />
    </Scroll>
  );
}

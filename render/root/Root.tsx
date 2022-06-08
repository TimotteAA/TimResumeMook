import React, { useState } from 'react';
import { HiCubeTransparent } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.less';
import { isHttpOrHttps } from '@utils/isHttpOrHttps';

const { shell } = window.electron;

interface ILink {
  src: string;
  title: string;
}

const defaultLinks: ILink[] = [
  { src: 'https://github.com/TimotteAA/TimResumeMook/tree/master', title: '介绍' },
  { src: '/resume', title: '简历' },
  { src: 'https://github.com/TimotteAA/TimResumeMook/tree/master', title: '源码' },
];

export default function Root() {
  const navigate = useNavigate();
  const [links] = useState(defaultLinks);

  const handleRouteChange = (src: string) => {
    if (isHttpOrHttps(src)) {
      shell.openExternal('https://github.com/TimotteAA/TimResumeMook/tree/master');
    } else {
      console.log(src);
      navigate(src);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <HiCubeTransparent className={styles.logoItem} />
        </div>
        <div className={styles.title}>TimResumeMook</div>
        <div className={styles.desc}>一个模板简历制作平台，让你的简历更加出众 ~</div>
        <div className={styles.links}>
          {links.map((link) => {
            return (
              <div key={link.title} className={styles.linkItem} onClick={() => handleRouteChange(link.src)}>
                {link.title}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.bottom}>
        Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By timotte@hexudong
      </div>
    </div>
  );
}

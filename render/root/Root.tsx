import React, { useState } from 'react';
import { HiCubeTransparent } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.less';
import { isHttpOrHttps } from '@utils/isHttpOrHttps';
import Theme from '@src/components/theme/Theme';
import { useAppSelector } from '@utils/reduxHooks';

const { shell } = window.electron;

interface ILink {
  src: string;
  title: string;
}

const defaultLinks: ILink[] = [
  { src: 'https://github.com/TimotteAA/TimResumeMook/tree/master', title: 'Home' },
  { src: '/resume', title: 'Resume' },
  { src: 'https://github.com/TimotteAA/TimResumeMook/tree/master', title: 'Source Code' },
];

export default function Root() {
  const navigate = useNavigate();
  const [links] = useState(defaultLinks);

  const { currentTheme } = useAppSelector((state) => {
    return {
      currentTheme: state.theme.currentTheme,
    };
  });

  const handleRouteChange = (src: string) => {
    if (isHttpOrHttps(src)) {
      shell.openExternal('https://github.com/TimotteAA/TimResumeMook/tree/master');
    } else {
      navigate(src);
    }
  };

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: currentTheme?.backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <HiCubeTransparent className={styles.logoItem} />
          </div>
          <div className={styles.title}>TimResumeMook</div>
          <div className={styles.desc}>A template resume making platform to make your resume more outstanding ~</div>
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
        <div className={styles.flex}>
          <Theme />
        </div>
      </div>
    </div>
  );
}

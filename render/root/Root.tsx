import React, { useState } from 'react';
import { HiCubeTransparent } from 'react-icons/hi';
import { shell } from 'electron';

import styles from './index.module.less';

interface ILink {
  src: string;
  title: string;
}

const defaultLinks: ILink[] = [
  { src: '', title: '介绍' },
  { src: '', title: '简历' },
  { src: '', title: '源码' },
];

export default function Root() {
  const [links] = useState(defaultLinks);

  const handleRouteChange = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
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
              <div className={styles.linkItem} onClick={handleRouteChange}>
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

import React from 'react';
import classNames from 'classnames';

import './index.normal.less';

export interface Button {
  /**
   * @description 按钮大小
   */
  size?: 'middle' | 'big' | 'small';
  /**
   * @description 宽度
   */
  width?: number;
  /**
   * @description 高度
   */
  height?: number;
  /**
   * @description 自定义样式
   */
  style?: React.CSSProperties;
  /**
   * @description 子组件
   */
  children?: React.ReactNode | any;
  /**
   * @description 禁止
   */
  disabled?: boolean;
  /**
   * @description 样式名
   */
  className?: string;
  /**
   * @description 点击事件
   */
  onClick?: Function;
  /**
   * @description 是否显示边框
   */
  border?: boolean;
}

export default function Button({
  size = 'middle',
  width,
  height,
  style,
  children,
  disabled,
  className,
  onClick,
  border = true,
}: Button) {
  return (
    <div
      className={classNames(className, 'my-button', `my-button-${size}`, {
        'my-button-disabled': disabled,
        'my-button-hide-border': border,
      })}
      style={{ ...style, width, height }}
      onClick={(e) => onClick && onClick(e)}
    >
      {children}
    </div>
  );
}

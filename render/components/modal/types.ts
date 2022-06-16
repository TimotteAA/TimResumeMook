import React from 'react';

type Position = 'top' | 'bottom' | 'center';

interface BtnConfig {
  /**
   * @description 按钮显示文本
   */
  text?: string;
  /**
   * @description 是否显示按钮
   */
  isShow?: boolean;
  /**
   * @description 按钮点击事件
   */
  callback?: () => void;
}

interface IBasicModal {
  /**
   * @description 弹窗标题
   */
  title?: string;
  /**
   * @description 弹窗宽度
   */
  width?: number;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 描述
   */
  description?: string;
  /**
   * @description 弹窗位置
   */
  position?: Position;
  /**
   * @description 是否需要显示底部
   */
  showFooter?: boolean;
  /**
   * @description 底部的自定义按钮
   */
  Footer?: React.ReactNode;
  /**
   * @description 提交、取消、关闭按钮的配置
   */
  config?: {
    /**
     * @description 取消按钮
     */
    cancelBtn?: BtnConfig;
    /**
     * @description 确定按钮
     */
    submitBtn?: BtnConfig;
    /**
     * @description 删除按钮
     */
    deleteBtn?: BtnConfig;
  };
  eleRef?: React.LegacyRef<HTMLDivElement> | null;
  /**
   * @description 渲染的子组件
   */
  children?: React.ReactNode;
}

export { IBasicModal };

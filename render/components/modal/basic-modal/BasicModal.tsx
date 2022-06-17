import React from 'react';
import './index.normal.less';

import Button from '@src/components/button/Button';
import { IBasicModal } from '../types';

const BasicModal: React.FC<IBasicModal> = (props) => {
  const { title, width, className, description, showFooter, Footer, config, eleRef } = props;

  const { cancelBtn = { isShow: false }, submitBtn = { isShow: true }, deleteBtn = { isShow: false } } = config;

  return (
    <div className="basic-modal-mask">
      <div className="modal-wrapper">
        <div className={className} ref={eleRef} style={{ width: width || '440px' }}>
          <div className="content">
            <div className="title">{title || '一些信息'}</div>
            <div className="description">{description}</div>
          </div>
          {props.children}
          {/* 支持自定义Footer */}
          {showFooter &&
            (Footer || (
              <div className="footer">
                {cancelBtn.isShow && (
                  <Button
                    size="middle"
                    onClick={(e: any) => {
                      cancelBtn.callback && cancelBtn.callback(e);
                    }}
                    className="footer-btn-cancel footer-btn"
                  >
                    {cancelBtn.text || '取消'}
                  </Button>
                )}
                {deleteBtn.isShow && (
                  <Button
                    size="middle"
                    onClick={(e: any) => {
                      deleteBtn.callback && deleteBtn.callback(e);
                    }}
                    className="footer-btn-delete footer-btn"
                  >
                    {deleteBtn.text || '删除'}
                  </Button>
                )}
                {submitBtn.isShow && (
                  <Button
                    size="middle"
                    onClick={(e: any) => {
                      submitBtn.callback && submitBtn.callback(e);
                    }}
                    className="footer-btn-submit footer-btn"
                  >
                    {submitBtn.text || '确认'}
                  </Button>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BasicModal;

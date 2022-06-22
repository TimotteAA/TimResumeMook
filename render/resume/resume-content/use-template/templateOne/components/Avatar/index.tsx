import React from 'react';
import './index.normal.less';
import AvatarImage from '@assets/avatar.jpg';

function Avatar() {
  return (
    <div className="box">
      <div className="avatar">
        <img src={AvatarImage} />
      </div>
    </div>
  );
}

export default Avatar;

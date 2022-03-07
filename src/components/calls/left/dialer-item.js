import React from 'react';
import './dialer-item.css';

function DialerItem(item) {
  return (
    <div className='dialer-item'>
        <img src={item.avatar} className="item-avatar" alt="" />
    </div>
  );
}

export default DialerItem;
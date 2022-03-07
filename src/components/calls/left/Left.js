import React from 'react';
import { CallsMenu, DialerList } from '../../../data/calls';
import DialerItem from './dialer-item';
import './left.css';
import MenuItem from './menu-item';

function Left() {
  const menu = CallsMenu;
  const dialerList = DialerList;
  return (
    <div className='left'>
      <div left-menu>
        <label className='menu-label'>Calls</label>
        <div className='menu-items'>
          {
            menu.map((item) =>{
              return (
                <div><MenuItem item={item}/></div>
              )
            })
          }
        </div>
      </div>
      <div className='left-dialer'>
        <label className='dialer-label'>Suggested</label>
        <div className='dialer-search'>
          <input placeholder='Type a name' />
        </div>
        <div className='dialer-suggested'>
          <label className='suggested-label'>Suggested</label>
          <div className='suggested-list'>
            {
              dialerList.map((item) => {
                return <DialerItem item={item} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;
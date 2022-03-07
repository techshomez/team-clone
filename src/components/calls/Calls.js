import React from 'react';
import Header from '../common/header/Header';
import Sidebar from '../common/sidebar/Sidebar';
import Left from '../calls/left/Left';
import Right from '../calls/right/Right';

import '../calls/calls.css';

function Calls() {
  return (
  <div className='calls-container'>
      <Header />
      <div className='calls-body'>
          <div className='calls-sidebar'>
              <Sidebar />
          </div>
          <div className='calls-left'>
              <Left />
          </div>
          <div className='calls-right'>
              <Right />
          </div>
      </div>
      </div>
  );   
}

export default Calls
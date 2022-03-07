import React from 'react';
import { FiGrid, FiSearch } from "react-icons/fi";
import { FaEllipsisH } from 'react-icons/fa';
import '../header/header.css';

function Header() {
  return (
    <div className='header'>
      <div className='header-menu'>
        <i>
        <FiGrid />
        </i>
      </div>
      <div className='header-left'>
        <label className='header-label'>Microsoft Teams</label>
      </div>
      <div className='header-right'>
        <div className='header-search'>
          <i>
          <FiSearch />
          </i>
          <input placeholder='Search' />
        </div>
        <div className='header-profile'>
          <div className='header-options'>
            <i>
              <FaEllipsisH />
            </i>
          </div>
          <img className='header-avatar' src="https://cdn-icons.flaticon.com/png/128/2202/premium/2202112.png?token=exp=1646672548~hmac=e665bd1ba107aab82fd7e78ba57dfb20" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header
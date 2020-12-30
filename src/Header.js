import React from 'react'
import './Header.css'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Avatar } from '@material-ui/core';
import {useStateValue} from './StateProvider';

function Header() {
  const [{user}]=useStateValue();
  return (
    <div className="header">
      <div className="header__left">
       <Avatar className="header__avatar" src={user?.photoURL} alt={user?.displayName}/>
       <AccessTimeIcon/>
      </div>

      <div className="header__search">
        <SearchIcon/>
        <input placeholder="search anything" />

      </div>

      <div className="header__right">
      <HelpOutlineIcon />
      </div>
    </div>
  )
}

export default Header

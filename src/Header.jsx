import React, { useState } from 'react';
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import image1 from './images/YouTube-Logo-2013-2015.png'
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import image2 from './images/OIP.jfif'
import { Avatar } from '@mui/material';
import {Link} from 'react-router-dom'

function Header() {
  const [inputSearch, setInputSearch] = useState('');
  return (
    <div className='header'>

      <div className='header_left'>
        <MenuIcon />
        <Link to="/">
      <img className='header_logo' src={image1} alt="no image" /> 
      </Link>
      </div>

      <div className='header_input'>
        <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder='search' type="text" />
        <Link to={`/search/${inputSearch}`}>
        <SearchIcon className='header_inputbutton'/>
        </Link>
      </div>

      <div className='header_icons'>
        <VideoCallIcon className='header_icon'/>
        <AppsIcon className='header_icon'/>
        <NotificationsActiveIcon className='header_icon'/>
        <Avatar  src={image2} alt='no image'/>
        
      </div>

    </div>
  );
}

export default Header;
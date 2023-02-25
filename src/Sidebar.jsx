import React from 'react'
import SidebarRaw from './SidebarRaw'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRaw selected Icon={HomeIcon} title="Home"/>  {/*selected is a bollean prop */}
      <SidebarRaw Icon={WhatshotIcon} title="Trending"/>
      <SidebarRaw Icon={SubscriptionsIcon} title="Subscription"/>
      <hr/>
      <SidebarRaw Icon={VideoLibraryIcon} title="library"/>
      <SidebarRaw Icon={HistoryIcon} title="history"/>
      <SidebarRaw Icon={OndemandVideoIcon} title="your videos"/>
      <SidebarRaw Icon={WatchLaterIcon} title="watch later"/>
      <SidebarRaw Icon={ThumbUpAltIcon} title="liked videos"/>
      <SidebarRaw Icon={ExpandMoreIcon} title="show more"/>
      <hr/>
    </div>
  )
}

export default Sidebar

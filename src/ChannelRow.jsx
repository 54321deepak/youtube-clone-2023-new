import React from 'react'
import './ChannelRow.css'
import { Avatar } from '@mui/material';
import VerifiedIcon  from '@mui/icons-material/CheckCircleOutline';

function ChannelRow({image,channel,varified,subs,noOfVideos,discription}) {
  return (
    <div className='channelRow'>
        <Avatar className='channelRow_logo' alt={channel} src={image} />      
        <div className='channelRow_text'> 
        <h4 >
        {channel} {varified && <VerifiedIcon/>}
        </h4>
        <p>
            {subs} subscribers•{noOfVideos}videos
        </p>
        <p>
            {discription}
        </p>
        </div>
    </div>
  )
}

export default ChannelRow;
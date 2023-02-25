import React from 'react'
import './SearchPage.css'
import TuneIcon from '@mui/icons-material/Tune';
import image5 from './images/download.jfif'
import ChannelRow from './ChannelRow';
import VideoRaw from './VideoRaw';
import image6 from './images/download (1).jfif'

function SearchPage() {
  return (
    <div className='searchPage'>
    <div className='searchPage_filter'>
    <TuneIcon />      
    <h2>FILTER</h2>
    </div>
    <hr/>

    <ChannelRow 
        image={image5}
        channel="clever programmmer"
        varified
        subs="659k"
        noOfVideos="397"
        discription="find the awesome video here,free sany time,any where"
    />
    <hr/>

    <VideoRaw 
        views="1.4M"
        subs="677k"
        description="do you want to watch amazing live stream so come here and watch"
        timestamp="59 second ago"
        channel="clever programmer"
        title="best game you ever paly are here"
        image={image6}
    />
    <VideoRaw 
        views="1.4M"
        subs="677k"
        description="do you want to watch amazing live stream so come here and watch"
        timestamp="59 second ago"
        channel="clever programmer"
        title="best game you ever paly are here"
        image={image6}
    />
    <VideoRaw 
        views="1.4M"
        subs="677k"
        description="do you want to watch amazing live stream so come here and watch"
        timestamp="59 second ago"
        channel="clever programmer"
        title="best game you ever paly are here"
        image={image6}
    />
    <VideoRaw 
        views="1.4M"
        subs="677k"
        description="do you want to watch amazing live stream so come here and watch"
        timestamp="59 second ago"
        channel="clever programmer"
        title="best game you ever paly are here"
        image={image6}
    />
    </div>  
  )
}

export default SearchPage;
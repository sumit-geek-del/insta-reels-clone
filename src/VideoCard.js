import React, {useRef, useState} from 'react';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';
import './VideoCard.css'

const VideoCard = ({url, likes, shares, channel, avatarSrc, song}) => {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const onVideoPress = ()=>{
    if(isVideoPlaying){
      // stop
      videoRef.current.pause();
      setIsVideoPlaying(false)
    }
    else{
      // play
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  }
  return (
    <div className='videoCard'>
    <VideoHeader/>
    <video
    ref={videoRef}
    onClick={onVideoPress}
    className='video__player'
        src={url}
        alt="IG reels Videos"
        loop
    />
    <VideoFooter
      channel={channel}
      likes={likes}
      shares={shares}
      avatarSrc={avatarSrc}
      song={song}
    />
    </div>
  )
}

export default VideoCard
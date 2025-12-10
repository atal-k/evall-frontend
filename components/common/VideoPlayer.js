// VideoPlayer.jsx
import React, { useState, useRef, useEffect } from 'react';
import styles from './VideoPlayer.module.css';
import Image from 'next/image';
import { getIcon } from '@/data/iconsData';

const VideoPlayer = ({ 
  src, 
  title = 'Video',
  thumbnail
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsPlaying(false);
      setShowThumbnail(true);
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        setShowThumbnail(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={styles['video-player']}>
      <video
        ref={videoRef}
        className={styles['video-player__video']}
        src={src}
        onClick={togglePlay}
      />
      
      {thumbnail && showThumbnail && (
        <div className={styles['video-player__thumbnail']}>
          <Image src={thumbnail} alt={title} width={1080} height={1920} />
        </div>
      )}

      {!isPlaying && (
        <button className={styles['video-player__center-play']} onClick={togglePlay}>
          {getIcon('play')}
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
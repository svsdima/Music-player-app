import React, {useRef, useState } from 'react';
// Add Icons from Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPlayCircle, 
    faAngleLeft, 
    faAngleRight,
    faPauseCircle,
    faVolumeUp,
    faVolumeMute } from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
    //  Ref
    const audioRef = useRef(null);
    // Event Handlers
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime,
              duration = e.target.duration;
              console.log(e);
        setSongInfo({...songInfo, currentTime: current, duration});
    };
    //  Minutes & Seconds
    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    };
    // Drag Handler
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value});
    };

    // State
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    });
    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                min={0} 
                max={songInfo.duration} 
                value={songInfo.currentTime} 
                onChange={dragHandler}
                type="range"/>
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPauseCircle : faPlayCircle} />
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
            <audio 
            onTimeUpdate={timeUpdateHandler} 
            onLoadedMetadata={timeUpdateHandler}
            ref={audioRef} 
            src={currentSong.audio}></audio>
        </div>
    )
};

export default Player;
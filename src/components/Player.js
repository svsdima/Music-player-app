import React from 'react';
// Add Icons from Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPlayCircle, 
    faAngleLeft, 
    faAngleRight,
    faPauseCircle,
    faVolumeUp,
    faVolumeMute } from '@fortawesome/free-solid-svg-icons';

const Player = ({ audioRef, currentSong, isPlaying, setIsPlaying, setSongInfo, songInfo }) => {

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


    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                min={0} 
                max={songInfo.duration || 0} 
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
        </div>
    )
};

export default Player;
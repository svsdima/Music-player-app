import React, {useState} from 'react';
// Add Icons from Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPlayCircle, 
    faAngleLeft, 
    faAngleRight,
    faPauseCircle,
    faVolumeDown } from '@fortawesome/free-solid-svg-icons';

const Player = ({ audioRef, currentSong, isPlaying, setIsPlaying, setSongInfo, songInfo, songs, setCurrentSong, setSongs }) => {
    const [activeVolume, setActiveVolume] = useState(false);
    const activeLibraryHandler = (nextPrev) => {
        const newSongs = songs.map((song) => {
            if(song.id === nextPrev.id) {
                return {
                    ...song,
                    active: true,
                }
            } else {
                return {
                    ...song,
                    active: false,
                }
            }
        });
        setSongs(newSongs);
    }
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
    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === "skip-forward") {
           await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
           activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
        }
        if (direction === 'skip-back') {
            if ((currentIndex - 1) %songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1]);
                activeLibraryHandler(songs[songs.length - 1]);
                if (isPlaying) audioRef.current.play();
                return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
        }
        if (isPlaying) audioRef.current.play();
    };
    // Add the styles
    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }
    // Change Volume
    const changeVolume = (e) => {
        let value = e.target.value;
        audioRef.current.volume = value;
        setSongInfo({ ...songInfo, volume: value });
    };

    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className="track">
                    <input 
                    min={0} 
                    max={songInfo.duration || 0} 
                    value={songInfo.currentTime} 
                    onChange={dragHandler}
                    type="range"/>
                    <div style={trackAnim} className="animate-track"></div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon 
                onClick={() => skipTrackHandler('skip-back')} 
                className="skip-back" 
                size="2x" 
                icon={faAngleLeft} />
                <FontAwesomeIcon 
                onClick={playSongHandler} 
                className="play" 
                size="2x" 
                icon={isPlaying ? faPauseCircle : faPlayCircle} />
                <FontAwesomeIcon 
                onClick={() => skipTrackHandler('skip-forward')} 
                className="skip-forward" 
                size="2x" 
                icon={faAngleRight} 
                />
            </div>
            <div className="volume-control">
                <FontAwesomeIcon
                    onClick={() => setActiveVolume(!activeVolume)}
                    icon={faVolumeDown} 
                />
                {activeVolume && (
                    <input
                        onChange={changeVolume}
                        value={songInfo.volume}
                        max="1"
                        min="0"
                        step="0.01"
                        type="range"
                        
                    />
                )}
            </div>
        </div>
    )
};

export default Player;
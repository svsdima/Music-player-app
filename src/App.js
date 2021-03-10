import React, { useState, useRef } from 'react';
// Import Styles
import './styles/app.scss';
// Adding Components
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';
// Import Util
import data from './util';

function App() {
  //  Ref
  const audioRef = useRef(null);
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime,
          duration = e.target.duration;
          console.log(e);
    setSongInfo({...songInfo, currentTime: current, duration});
  };
  // State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player 
      audioRef={audioRef}
      setIsPlaying={setIsPlaying} 
      isPlaying={isPlaying} 
      currentSong={currentSong}
      setSongInfo={setSongInfo}
      songInfo={songInfo} />
      <Library 
        audioRef={audioRef}
        songs={songs} 
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying} />
      <audio 
            onTimeUpdate={timeUpdateHandler} 
            onLoadedMetadata={timeUpdateHandler}
            ref={audioRef} 
            src={currentSong.audio}></audio>
    </div>
  );
}

export default App;

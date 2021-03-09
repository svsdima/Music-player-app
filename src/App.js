import React, { useState } from 'react';
// Import Styles
import './styles/app.scss';
// Adding Components
import Song from './components/Song';
import Player from './components/Player';
// Import Util
import data from './util';

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;

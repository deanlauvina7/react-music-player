import React, { useState } from 'react';
import './styles/app.scss';
import data from './util';
// @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
// Adding Components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';

function App() {
  // State
  const [songs, useSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} />
    </div>
  );
}

export default App;

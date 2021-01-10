import React, { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Songs";
import Library from "./components/Library";
import Nav from "./components/nav";

//import style
import "./styles/app.scss";

//import songs
import data from "./util";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioRef, setAudioRef] = useState(null);
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <div>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        setAudioRef={setAudioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />

      <Library
        songs={songs}
        setSongs={setSongs}
        isPlaying={isPlaying}
        audioRef={audioRef}
        setCurrentSong={setCurrentSong}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
    </div>
  );
}

export default App;

//https://fontawesome.com/how-to-use/on-the-web/using-with/react

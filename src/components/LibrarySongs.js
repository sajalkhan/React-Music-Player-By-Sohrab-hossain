import React from "react";
import { playAudio } from "./player_util";

const LibrarySongs = ({
  currentSong,
  setCurrentSong,
  AllSongs,
  isPlaying,
  audioRef,
  setSongs,
}) => {
  const setSongHandler = () => {
    setCurrentSong(currentSong);

    //Update Active song
    const newSong = AllSongs.map((item) => {
      if (item.id == currentSong.id) {
        return {
          ...item,
          active: true,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }
    });

    setSongs(newSong);
    playAudio(isPlaying, audioRef);
  };

  return (
    <div>
      <div
        onClick={setSongHandler}
        className={`libray__songs-container ${
          currentSong.active ? "selected" : ""
        }`}
      >
        <img src={currentSong.cover} alt={currentSong.name} />
        <div>
          <h3>{currentSong.name}</h3>
          <h4>{currentSong.artist}</h4>
        </div>
      </div>
    </div>
  );
};

export default LibrarySongs;

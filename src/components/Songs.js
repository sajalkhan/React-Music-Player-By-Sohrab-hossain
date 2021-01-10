import React from "react";

const Songs = ({ currentSong, isPlaying }) => {
  return (
    <div>
      <div className="song-container">
        <div className={`loading-image ${isPlaying ? "rotate" : ""}`}>
          <img src={currentSong.cover} alt={currentSong.name} />
        </div>
        <h2>{currentSong.name}</h2>
        <h3>{currentSong.artist}</h3>
      </div>
    </div>
  );
};

export default Songs;

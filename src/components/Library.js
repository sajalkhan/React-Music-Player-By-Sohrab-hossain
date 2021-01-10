import React, { useRef, useEffect } from "react";
import LibrarySongs from "./LibrarySongs";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

export default function Library({
  songs,
  setCurrentSong,
  isPlaying,
  audioRef,
  setSongs,
  libraryStatus,
  setLibraryStatus,
}) {
  let domNode = useClickOutside(() => {
    setLibraryStatus(false);
  });

  return (
    <div
      ref={domNode}
      className={`library ${libraryStatus ? "active-library" : ""}`}
    >
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((item) => (
          <LibrarySongs
            key={item.id}
            currentSong={item}
            AllSongs={songs}
            setSongs={setSongs}
            isPlaying={isPlaying}
            audioRef={audioRef}
            setCurrentSong={setCurrentSong}
          />
        ))}
      </div>
    </div>
  );
}

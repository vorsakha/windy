import React from "react";
import SongBox from "../SongBox";

const SongList = ({ playlistData }: SongListTypes) => {
  return (
    <ul>
      <>
        {playlistData.tracks.hits.map((listItem, idx) => (
          <SongBox idx={idx} track={listItem.track} />
        ))}
      </>
    </ul>
  );
};

export default SongList;

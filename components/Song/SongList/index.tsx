import React from "react";
import SongBox from "../SongBox";

const SongList = ({ playlistData }: SongListTypes) => {
  return (
    <ul>
      <>
        {playlistData.tracks.hits.map((listItem, idx) => (
          <React.Fragment key={idx}>
            <SongBox track={listItem.track} />
          </React.Fragment>
        ))}
      </>
    </ul>
  );
};

export default SongList;

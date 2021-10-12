import React from "react";
import LoadingSpinner from "../common/LoadingSpinner";
import SongBox from "../common/SongBox";

const SongList = ({ playlistData, loading }: SongListTypes) => {
  return (
    <ul>
      {loading && playlistData === null ? (
        <LoadingSpinner />
      ) : (
        <>
          {playlistData.tracks.hits.map((listItem) => (
            <SongBox track={listItem.track} />
          ))}
        </>
      )}
    </ul>
  );
};

export default SongList;

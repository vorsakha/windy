import React from "react";
import LoadingSpinner from "../../common/LoadingSpinner";
import SongBox from "../SongBox";

const SongList = ({ playlistData }: SongListTypes) => {
  return (
    <ul>
      <>
        {playlistData === null ? (
          <LoadingSpinner />
        ) : (
          playlistData.tracks.hits.map((listItem, idx) => (
            <React.Fragment key={idx}>
              <SongBox track={listItem.track} />
            </React.Fragment>
          ))
        )}
      </>
    </ul>
  );
};

export default SongList;

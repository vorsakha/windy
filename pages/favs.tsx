import React from "react";
import LoadingSpinner from "../components/common/LoadingSpinner";
import SongBox from "../components/Song/SongBox";
import useFavs from "../hooks/useFavs";

const Favs = () => {
  const favoriteSongs = useFavs();

  return (
    <div>
      {favoriteSongs === null ? (
        <LoadingSpinner />
      ) : (
        favoriteSongs.map((listItem, idx) => (
          <SongBox fav idx={idx} track={listItem} />
        ))
      )}
    </div>
  );
};

export default Favs;

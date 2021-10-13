import React from "react";
import LoadingSpinner from "../components/common/LoadingSpinner";
import SongBox from "../components/Song/SongBox";
import useFavs from "../hooks/useFavs";

const Favs = () => {
  const favoriteSongs = useFavs();

  return (
    <div>
      {favoriteSongs !== null && favoriteSongs.length === 0 ? (
        <p className="text-center">Sem músicas favoritas por enquanto...</p>
      ) : (
        <h1 className="text-center self-start font-bold text-2xl p-4 pt-8">
          Minhas Músicas Favoritas
        </h1>
      )}
      {favoriteSongs === null ? (
        <LoadingSpinner />
      ) : (
        <ul>
          {favoriteSongs.map((listItem, idx) => (
            <SongBox fav idx={idx} track={listItem} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favs;

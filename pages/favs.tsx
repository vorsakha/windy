import React from "react";
import Head from "next/head";
import LoadingSpinner from "../components/common/LoadingSpinner";
import SongBox from "../components/Song/SongBox";
import useFavs from "../hooks/useFavs";

const Favs = () => {
  const favoriteSongs = useFavs();

  return (
    <div>
      <Head>
        <title>Favs | Windy</title>
        <meta
          name="description"
          content="Let the weather choose your music for you."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-total">
        {favoriteSongs !== null && favoriteSongs.length === 0 ? (
          <p className="text-center mt-10">
            Sem músicas favoritas por enquanto...
          </p>
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
              <React.Fragment key={idx}>
                <SongBox fav track={listItem} />
              </React.Fragment>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default Favs;

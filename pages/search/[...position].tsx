import Head from "next/head";
import React from "react";
import Banner from "../../components/Banner";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import SongList from "../../components/SongList";
import useParams from "../../hooks/useParams";
import useSongList from "../../hooks/useSongList";
import useWeather from "../../hooks/useWeather";

const Search = () => {
  const params = useParams();
  const [lat, lon] = params;

  const weather = useWeather(lat, lon);

  const songList = useSongList(weather.weatherObj.playlistType);

  return (
    <div>
      <Head>
        <title>Search | Windy</title>
        <meta
          name="description"
          content="Let the weather choose your music for you."
        />
      </Head>

      <main>
        {weather.loading || songList.loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Banner weatherObj={weather.weatherObj} loading={weather.loading} />
            <SongList
              playlistData={songList.playlistData}
              loading={songList.loading}
            />
          </>
        )}
      </main>
    </div>
  );
};

export default Search;

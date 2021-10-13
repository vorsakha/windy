import Head from "next/head";
import { useContext, useEffect } from "react";
import Banner from "../components/Banner";
import LoadingSpinner from "../components/common/LoadingSpinner";
import SongList from "../components/Song/SongList";
import { LocalDataContext } from "../context/LocalDataContext";
import useCurrentLocation from "../hooks/useCurrentLocation";
import useSongList from "../hooks/useSongList";
import useWeather from "../hooks/useWeather";

const Home = () => {
  const [lat, lon] = useCurrentLocation();
  const weather = useWeather(lat, lon, true);

  const songList = useSongList(weather.weatherObj.playlistType, true);

  const localDataContext = useContext(LocalDataContext);
  useEffect(() => {
    weather.weatherObj.city !== "" &&
      localDataContext?.setLocalWeather(weather.weatherObj);
  }, [weather]);
  useEffect(() => {
    songList.playlistData !== null &&
      localDataContext?.setLocalSongList(songList.playlistData);
  }, [songList]);

  return (
    <div>
      <Head>
        <title>Windy</title>
        <meta
          name="description"
          content="Let the weather choose your music for you."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-total">
        {weather.loading || songList.loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Banner
              weatherObj={localDataContext?.localWeather || weather.weatherObj}
              loading={weather.loading}
            />
            <SongList
              playlistData={
                localDataContext?.localSongList || songList.playlistData
              }
              loading={songList.loading}
            />
          </>
        )}
      </main>
    </div>
  );
};

export default Home;

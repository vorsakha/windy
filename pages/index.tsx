import Head from "next/head";
import Banner from "../components/Banner";
import SongList from "../components/SongList";
import useCurrentLocation from "../hooks/useCurrentLocation";
import useSongList from "../hooks/useSongList";
import useWeather from "../hooks/useWeather";

const Home = () => {
  const [lat, lon] = useCurrentLocation();
  const weather = useWeather(lat, lon);

  const songList = useSongList(weather.weatherObj.temperature);

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

      <main>
        <Banner weatherObj={weather.weatherObj} loading={weather.loading} />
        <SongList
          playlistData={songList.playlistData}
          loading={songList.loading}
        />
      </main>
    </div>
  );
};

export default Home;

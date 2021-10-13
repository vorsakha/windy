import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { WEATHER_URL } from "../constants";
import { LocalDataContext } from "../context/LocalDataContext";
import { TemperatureContext } from "../context/TemperatureContext";

const useWeather = (
  lat: number | string,
  lon: number | string,
  home?: boolean
) => {
  const [weather, setWeather] = useState<WeatherTypes>({
    weatherObj: { city: "", country: "", playlistType: "", temperature: 0 },
    loading: true,
  });
  const [error, setError] = useState(false);

  const context = useContext(TemperatureContext);
  const localDataContext = useContext(LocalDataContext);

  const getWeather = useCallback(async () => {
    try {
      setError(false);

      if (lat !== undefined && lon !== undefined) {
        const response = await axios.get(`${WEATHER_URL}/${lat}/${lon}`);

        const responseData = response.data;

        setWeather({ weatherObj: responseData, loading: false });

        context?.setTemperature(responseData);

        return;
      }
    } catch (error: any) {
      console.log(error.message);
      if (error) setError(true);
    }
  }, [lat, lon]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (home && localDataContext?.localWeather.city === "") {
        getWeather();
      } else if (!home) {
        getWeather();
      } else {
        setWeather((prev: any) => {
          return {
            ...prev,
            loading: false,
          };
        });
      }
    }
    mounted = false;
  }, [getWeather]);

  const { weatherObj, loading } = weather;

  return { weatherObj, loading, error };
};

export default useWeather;

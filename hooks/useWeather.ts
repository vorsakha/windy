import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { WEATHER_URL } from "../constants";
import { TemperatureContext } from "../context/TemperatureContext";

const useWeather = (lat: number | string, lon: number | string) => {
  const [weather, setWeather] = useState<WeatherTypes>({
    weatherObj: { city: "", country: "", playlistType: "", temperature: 0 },
    loading: true,
  });
  const [error, setError] = useState(false);

  const context = useContext(TemperatureContext);

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
      getWeather();
    }
    mounted = false;
  }, [getWeather]);

  const { weatherObj, loading } = weather;

  return { weatherObj, loading, error };
};

export default useWeather;

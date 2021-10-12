import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { WEATHER_URL } from "../constants";

const useWeather = (lat: number, lon: number) => {
  const [weather, setWeather] = useState<WeatherTypes>({
    resDataObj: { city: "", country: "", playlistType: "", temperature: 0 },
    loading: true,
  });

  const getWeather = useCallback(async () => {
    try {
      if (lat !== undefined && lon !== undefined) {
        const response = await axios.get(`${WEATHER_URL}/${lat}/${lon}`);

        const responseData = response.data;

        setWeather({ resDataObj: responseData, loading: false });

        return;
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }, [lat, lon]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getWeather();
    }
    mounted = false;
  }, [getWeather]);

  const { resDataObj, loading } = weather;

  return { resDataObj, loading };
};

export default useWeather;

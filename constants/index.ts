const env = process.env.NODE_ENV;
export const MUSIC_URL =
  env === "development"
    ? "http://localhost:3000/api/music"
    : "https://windy-one.vercel.app/api/music";
export const WEATHER_URL =
  env === "development"
    ? "http://localhost:3000/api/weather"
    : "https://windy-one.vercel.app/api/weather";

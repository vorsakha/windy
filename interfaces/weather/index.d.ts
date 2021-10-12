interface NextRequest extends NextApiRequest {
  query: {
    position: [number, number];
  };
  method: string;
}
interface WeatherTypes {
  weatherObj: {
    city: string;
    country: string;
    playlistType: string;
    temperature: number;
  };
  loading: boolean;
}

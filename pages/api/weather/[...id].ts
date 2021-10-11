import axios from "axios";
import { NextApiResponse } from "next";

const apiKey = process.env.WEATHER_API_KEY;

export default async (req: NextRequest, res: NextApiResponse) => {
  const {
    method,
    query: { id },
  } = req;

  const [lat, lon] = id;

  switch (method) {
    case "GET":
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );

        const responseData: {
          main: { temp: number };
          name: string;
          sys: { country: string };
        } = response.data;

        const temp = responseData.main.temp;
        const country = responseData.sys.country;
        const city = responseData.name;

        const resObject = {
          temperature: temp,
          country: country,
          city: city,
          playlistType: "Metal",
        };

        if (temp > 32) {
          resObject.playlistType = "Rock";
        } else if (temp < 32 && temp > 24) {
          resObject.playlistType = "Pop";
        } else if (temp < 24 && temp > 16) {
          resObject.playlistType = "Classica";
        } else if (temp < 16) {
          resObject.playlistType = "Lofi";
        }

        res.status(200).send(resObject);
      } catch (error: any) {
        return res.status(400).send(error.message);
      }
      break;

    default:
      res.status(400).json({ msg: "Wrong Method." });
      break;
  }
};

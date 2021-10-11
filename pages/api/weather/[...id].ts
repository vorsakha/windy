import axios from "axios";
import { NextApiResponse } from "next";
import { WEATHER_API_KEY } from "../../../constants";

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
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );

        res.send(response.data);
      } catch (error: any) {
        return res.status(400).send(error.message);
      }
      break;

    default:
      res.status(400).json({ msg: "Wrong Method." });
      break;
  }
};

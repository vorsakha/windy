import axios from "axios";
import { NextApiResponse } from "next";
import { NextApiRequest } from "next";

const apiKey = process.env.MUSIC_API_KEY || "";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const options = {
          headers: {
            "x-rapidapi-host": "shazam.p.rapidapi.com",
            "x-rapidapi-key": apiKey,
          },
        };

        const response = await axios.get(
          "https://shazam.p.rapidapi.com/charts/list",
          options
        );

        res.status(200).send(response.data);
      } catch (error: any) {
        return res.status(400).send(error.message);
      }
      break;

    default:
      res.status(400).json({ msg: "Wrong Method." });
      break;
  }
};
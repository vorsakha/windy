import axios from "axios";
import { NextApiResponse } from "next";
import { NextApiRequest } from "next";

const apiKey = process.env.MUSIC_API_KEY || "";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    method,
    query: { genre },
  } = req;

  switch (method) {
    case "GET":
      try {
        const options = {
          params: { term: genre, locale: "en-US", offset: "0", limit: "5" },
          headers: {
            "x-rapidapi-host": "shazam.p.rapidapi.com",
            "x-rapidapi-key": apiKey,
          },
        };

        const response = await axios.get(
          "https://shazam.p.rapidapi.com/search",
          options
        );

        res.setHeader(
          "Cache-Control",
          "s-maxage=86400, stale-while-revalidate"
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

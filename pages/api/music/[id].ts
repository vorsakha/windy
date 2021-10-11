import axios from "axios";
import { NextApiResponse } from "next";
import { NextApiRequest } from "next";

const apiKey = process.env.MUSIC_API_KEY;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const response = await axios.get(
          `https://api.spotify.com/v1/browse/categories/${id}/playlists?country=BR&offset=0&limit=5`,
          {
            headers: {
              Authorization: "Bearer " + apiKey,
            },
          }
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

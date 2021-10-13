import axios from "axios";
import { useEffect, useState } from "react";
import { MUSIC_URL } from "../constants";

const useSongList = (playlistType: string) => {
  const [playlist, setPlaylist] = useState<any>({
    playlistData: null,
    loading: true,
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const getPlaylist = async () => {
        if (playlistType !== undefined) {
          if (playlistType !== "") {
            try {
              setError(false);
              const response = await axios.get(`${MUSIC_URL}/${playlistType}`);

              setPlaylist({ playlistData: response.data, loading: false });
            } catch (error: any) {
              console.log(error.message);
              if (error) setError(true);
            }

            return;
          }
        }
      };
      getPlaylist();
    }
    mounted = false;
  }, [playlistType]);

  const { playlistData, loading } = playlist;

  return { playlistData, loading, error };
};

export default useSongList;

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MUSIC_URL } from "../constants";
import { LocalDataContext } from "../context/LocalDataContext";

const useSongList = (playlistType: string, home?: boolean) => {
  const [playlist, setPlaylist] = useState<any>({
    playlistData: null,
    loading: true,
  });
  const [error, setError] = useState(false);

  const localDataContext = useContext(LocalDataContext);

  useEffect(() => {
    let mounted = true;
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
    if (mounted) {
      if (home && localDataContext?.localSongList === null) {
        getPlaylist();
      } else if (!home) {
        getPlaylist();
      } else {
        setPlaylist((prev: any) => {
          return {
            ...prev,
            loading: false,
          };
        });
      }
    }
    mounted = false;
  }, [playlistType]);

  const { playlistData, loading } = playlist;

  return { playlistData, loading, error };
};

export default useSongList;

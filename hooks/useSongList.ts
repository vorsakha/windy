import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { MUSIC_URL } from "../constants";

const useSongList = (temperature: number) => {
  const [playlist, setPlaylist] = useState<any>({
    playlistData: null,
    loading: true,
  });

  const getPlaylist = useCallback(async () => {
    if (temperature !== undefined) {
      const response = await axios.get(`${MUSIC_URL}/${temperature}`);

      setPlaylist({ playlistData: response.data, loading: false });

      return;
    }
  }, [temperature]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getPlaylist();
    }
    mounted = false;
  }, []);

  const { playlistData, loading } = playlist;

  return { playlistData, loading };
};

export default useSongList;

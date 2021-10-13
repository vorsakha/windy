import { useEffect, useState } from "react";

const useFavs = () => {
  const [favs, setFavs] = useState<SongType[] | null>(null);

  const allStorage = () => {
    let values: any = [];
    const keys = Object.keys(localStorage);

    let i = keys.length;

    while (i--) {
      const value = localStorage.getItem(keys[i]) || "";
      const parsed = JSON.parse(value);

      values.push(parsed);
    }

    setFavs(values);

    return;
  };

  useEffect(() => {
    allStorage();
  }, []);

  return favs;
};

export default useFavs;

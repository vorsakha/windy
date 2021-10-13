import { useEffect, useState } from "react";

const useFavs = () => {
  const [favs, setFavs] = useState<SongType[] | null>(null);
  const [favsByDate, setFavsByDate] = useState<SongType[] | null>(null);

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

  useEffect(() => {
    const favsRaw = favs || [];

    const filterByDate = favsRaw.sort((a, b) => {
      const dateA: any = new Date(a.date);
      const dateB: any = new Date(b.date);

      return dateB - dateA;
    });

    setFavsByDate(filterByDate);
  }, [favs]);

  return favsByDate;
};

export default useFavs;

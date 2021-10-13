import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface LocalObj {
  localData: number;
  country: string;
  city: string;
  playlistType: string;
}

interface LocalTypes {
  localWeather: any | null;
  setLocalWeather: Dispatch<SetStateAction<any | null>>;
  localSongList: any | null;
  setLocalSongList: Dispatch<SetStateAction<any | null>>;
}

export const LocalDataContext = createContext<LocalTypes | null>(null);

const LocalDataProvider: React.FC = ({ children }) => {
  const [localSongList, setLocalSongList] = useState<any | null>(null);
  const [localWeather, setLocalWeather] = useState<any | null>({
    city: "",
    country: "",
    playlistType: "",
    temperature: 0,
  });

  return (
    <LocalDataContext.Provider
      value={{ localSongList, setLocalSongList, localWeather, setLocalWeather }}
    >
      {children}
    </LocalDataContext.Provider>
  );
};

export default LocalDataProvider;

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface TempObj {
  temperature: number;
  country: string;
  city: string;
  playlistType: string;
}

interface TemperatureTypes {
  temperature: TempObj | null;
  setTemperature: Dispatch<SetStateAction<TempObj | null>>;
}

export const TemperatureContext = createContext<TemperatureTypes | null>(null);

const TemperatureProvider: React.FC = ({ children }) => {
  const [temperature, setTemperature] = useState<TempObj | null>(null);

  return (
    <TemperatureContext.Provider value={{ temperature, setTemperature }}>
      {children}
    </TemperatureContext.Provider>
  );
};

export default TemperatureProvider;

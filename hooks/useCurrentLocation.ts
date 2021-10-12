import { useEffect, useState } from "react";

const useCurrentLocation = () => {
  const [position, setPosition] = useState<number[]>([]);

  const locateCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((pos: PositionType) => {
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;

      setPosition([latitude, longitude]);
    });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      locateCurrentPosition();
    }
  }, []);

  const [latitude, longitude] = position;

  return [latitude, longitude];
};

export default useCurrentLocation;

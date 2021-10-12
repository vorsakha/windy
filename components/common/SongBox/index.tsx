import React, { useContext } from "react";
import { TemperatureContext } from "../../../context/TemperatureContext";
import Fav from "../Fav";
import LoadingSpinner from "../LoadingSpinner";

const SongBox = ({ track }: SongBoxTypes) => {
  const { images, share, subtitle, title, key } = track;

  const tempContext = useContext(TemperatureContext);
  const temperature = tempContext?.temperature?.temperature || "";
  const city = tempContext?.temperature?.city || "";

  return (
    <li key={key} className="relative">
      {temperature === null || temperature === "" ? (
        <LoadingSpinner />
      ) : (
        <Fav
          items={{ images, share, subtitle, title, temperature, city, key }}
        />
      )}
      <img src={images.coverart} alt={title} />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <a href={share.snapchat} target="_blank">
        share icon
      </a>
    </li>
  );
};

export default SongBox;

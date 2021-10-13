import React, { useContext } from "react";
import { TemperatureContext } from "../../../context/TemperatureContext";
import Fav from "../Fav";
import LoadingSpinner from "../LoadingSpinner";

const SongBox = ({ track, fav, idx }: SongBoxTypes) => {
  const { images, share, subtitle, title, key, date } = track;
  const index = key || idx;

  const tempContext = useContext(TemperatureContext);
  const temperature = tempContext?.temperature?.temperature || "";
  const city = tempContext?.temperature?.city || "";

  return (
    <li key={index} className="relative">
      {temperature === null || temperature === "" ? (
        <LoadingSpinner />
      ) : (
        <Fav
          items={{ images, share, subtitle, title, temperature, city, key }}
        />
      )}
      <img src={images.coverart} alt={title} />
      {fav ? (
        <>
          <p>{temperature}</p>
          <p>{city}</p>
          <p>{date}</p>
        </>
      ) : (
        <></>
      )}
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <a href={share.snapchat} target="_blank">
        share icon
      </a>
    </li>
  );
};

export default SongBox;

import React, { useContext } from "react";
import { TemperatureContext } from "../../../context/TemperatureContext";
import Fav from "../../Fav";

const SongBox = ({ track, fav }: SongBoxTypes) => {
  const {
    images,
    share,
    subtitle,
    title,
    key,
    date,
    city,
    temperature,
    category,
  } = track;

  const tempContext = useContext(TemperatureContext);
  const newTemperature = tempContext?.temperature?.temperature || "";
  const newCity = tempContext?.temperature?.city || "";
  const newCategory = tempContext?.temperature?.playlistType || "";

  return (
    <li className="relative">
      {newTemperature === null || newTemperature === "" ? (
        <></>
      ) : (
        <Fav
          items={{
            images,
            share,
            subtitle,
            title,
            temperature: newTemperature,
            city: newCity,
            key,
            category: newCategory,
          }}
        />
      )}
      {share !== undefined && (
        <a
          className="flex h-32 items-center my-4 p-4 pl-0 rounded shadow-md border border-blue-500 border-opacity-25 hover:border-opacity-50 hover:shadow-lg"
          href={share.snapchat}
          target="_blank"
        >
          <img
            className="object-cover rounded rounded-r-none  w-32"
            src={images.coverart}
            alt={title}
          />
          {fav ? (
            <div className="flex flex-col p-4">
              <p className="text-xl">{temperature}º</p>
              <p className="text-md">{category}</p>
              <p className="text-sm">{city}</p>
              <small className="font-light">{date}</small>
            </div>
          ) : (
            <></>
          )}
          <div className="px-8">
            <p className="font-bold text-blue-400">{title}</p>
            <small className="font-light text-blue-400">{subtitle}</small>
          </div>
        </a>
      )}
    </li>
  );
};

export default SongBox;

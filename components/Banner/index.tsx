import React from "react";
import LoadingSpinner from "../common/LoadingSpinner";
import SearchBar from "../SearchBar";

const Banner = ({ weatherObj, loading }: WeatherTypes) => {
  const { city, country, playlistType, temperature } = weatherObj;

  return (
    <div>
      <SearchBar />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex items-center justify-center gap-16 p-8">
          <div>
            <h1 className="text-6xl">{temperature}º</h1>
            <h2 className="text-3xl">
              {city && (
                <div className="text-2xl">
                  {city}, {country}
                </div>
              )}
            </h2>
          </div>
          <h2 className="font-bold text-3xl">{playlistType}</h2>
        </div>
      )}
    </div>
  );
};

export default Banner;

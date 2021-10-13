import React from "react";
import LoadingSpinner from "../common/LoadingSpinner";

const Banner = ({ weatherObj, loading }: WeatherTypes) => {
  const { city, country, playlistType, temperature } = weatherObj;

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <h1>{temperature}º</h1>
          <h2>
            {city && (
              <>
                {city}, {country}
              </>
            )}
          </h2>
          <p>{playlistType}</p>
        </div>
      )}
    </div>
  );
};

export default Banner;

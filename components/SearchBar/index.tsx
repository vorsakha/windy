import React from "react";
import useSearch from "../../hooks/useSearch";
import Button from "../common/Button";

const SearchBar = () => {
  const {
    handleInputChange,
    handleSubmit,
    formInput: { lat, lon },
  } = useSearch();

  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 md:px-20 text-center">
      <div className="w-full max-w-md mt-6">
        <form
          className="bg-gray-600 shadow-lg rounded px-6 sm:px-12 pt-6 pb-8 mb-4"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            className="shadow text-gray-700 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring ring-1 ring-black ring-opacity-5 mb-2"
            type="text"
            name="lat"
            placeholder="Latitude"
            onChange={(e) => handleInputChange(e)}
            value={lat}
            required
            autoComplete="lat"
          />
          <input
            className="shadow text-gray-700  appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring ring-1 ring-black ring-opacity-5 mb-2"
            type="text"
            name="lon"
            placeholder="Longitude"
            onChange={(e) => handleInputChange(e)}
            value={lon}
            required
            autoComplete="lon"
          />
          <div className="flex justify-center mt-2">
            <Button type="submit">Pesquisar</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;

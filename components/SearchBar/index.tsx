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
      <div className="w-full max-w-md">
        <form className="px-6 sm:px-12 p-4" onSubmit={(e) => handleSubmit(e)}>
          <h1 className="font-bold text-2xl p-4">Procure Músicas</h1>
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

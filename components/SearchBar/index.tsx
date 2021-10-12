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
          <h1 className="text-2xl flex justify-center border-b-2 py-2 mb-4 border-gray-500">
            Login
          </h1>
          <input
            className="shadow text-gray-700 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring ring-1 ring-black ring-opacity-5 mb-2"
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => handleInputChange(e)}
            value={lat}
            required
            autoComplete="email"
          />
          <input
            className="shadow text-gray-700  appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring ring-1 ring-black ring-opacity-5 mb-2"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => handleInputChange(e)}
            value={lon}
            required
            autoComplete="current-password"
          />
          <div className="flex justify-center mt-2">
            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;

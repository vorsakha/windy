import { useRouter } from "next/dist/client/router";
import { useState } from "react";

// Types //
type SearchTypes = {
  lat: string;
  lon: string;
};

const useSearch = () => {
  const [formInput, setFormInput] = useState<SearchTypes>({
    lat: "",
    lon: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const { lat, lon } = formInput;
    const url = `/search/${lat}/${lon}`;

    router.push(url);
  };

  return { handleSubmit, handleInputChange, formInput };
};

export default useSearch;

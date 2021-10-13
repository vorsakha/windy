import { useContext } from "react";
import { AlertContext } from "../context/AlertContext";

const useLocalStorage = () => {
  const alertContext = useContext(AlertContext);

  const handleSaveToStorage = (itemsToSave: LocalStorageTypes) => {
    const { key } = itemsToSave;
    const serializedItems = JSON.stringify(itemsToSave);

    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, serializedItems);

      alertContext?.setAlert({ msg: "Música salva.", active: true });
      return;
    }

    localStorage.removeItem(key);

    alertContext?.setAlert({ msg: "Música removida.", active: true });

    return;
  };

  return { handleSaveToStorage };
};

export default useLocalStorage;

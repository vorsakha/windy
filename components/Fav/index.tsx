import { memo } from "react";
import useFavIcon from "../../hooks/useFavIcon";
import useLocalStorage from "../../hooks/useLocalStorage";
import newDate from "../../utils/newDate";

const Fav = ({
  items,
  className = "",
  big,
}: {
  items: LocalStorageTypes;
  className?: string;
  big?: boolean;
}) => {
  const { icon, handleGetIcon } = useFavIcon(items.key);
  const { handleSaveToStorage } = useLocalStorage();
  const date = newDate();
  const favItems = { ...items, date };

  return (
    <button
      className={`${className} ${
        big ? "static" : "absolute"
      } right-0 top-0 p-2 text-xl transition-colors hover:text-red-600`}
      onClick={() => {
        handleSaveToStorage(favItems);
        handleGetIcon(items.key);
      }}
    >
      {icon}
    </button>
  );
};

export default memo(Fav);

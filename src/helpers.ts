import { customAlphabet } from "nanoid";
import { useEffect, useState } from "react";
import { IResource } from "./types";

const nanoid = customAlphabet("1234567890", 8);
export const getUUID = () => nanoid();

// Hooks
export const useLocalStorage = (defaultValue: IResource[], key: string) => {
  const [value, setValue] = useState(() => {
    const localStorageValue = window.localStorage.getItem(key);
    return localStorageValue !== null
      ? JSON.parse(localStorageValue)
      : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

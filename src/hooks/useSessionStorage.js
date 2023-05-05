import { useEffect, useState } from "react";

function getSavedVal(key, value) {
  const savedVal = JSON.parse(sessionStorage.getItem(key));

  if (savedVal) return savedVal;

  if (value instanceof Function) return value();

  return value;
}

export function useSessionStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedVal(key, initialValue);
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

import { useEffect } from "react";
import { useState } from "react";

export function Search({ value, onFind, onReset }) {
  const [tempSearch, setTempSearch] = useState("");

  useEffect(() => {
    setTempSearch(value);
  }, [value]);

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={tempSearch}
        onChange={(evt) => setTempSearch(evt.currentTarget.value)}
      />
      <button onClick={() => onFind(tempSearch)}>Find</button>
      <button onClick={() => onReset()}>Reset</button>
    </div>
  );
}

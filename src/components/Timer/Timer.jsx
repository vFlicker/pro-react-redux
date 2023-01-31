import { useEffect } from "react";
import { useState } from "react";

export function Timer() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  });

  return <div>{seconds}</div>;
}

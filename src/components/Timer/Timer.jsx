import { useEffect } from "react";
import { useState } from "react";

export function Timer({ id, defaultSeconds = 10, callback }) {
  const [seconds, setSeconds] = useState(defaultSeconds);

  useEffect(() => {
    setSeconds(defaultSeconds);
  }, [id, defaultSeconds]);

  useEffect(() => {
    if (seconds < 1) callback();
  }, [seconds, callback]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [id]);

  return <div>{seconds}</div>;
}

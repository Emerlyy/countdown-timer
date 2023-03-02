import { useEffect, useState } from "react";

export const useTimer = (countToDate) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const calcDate = () => {
    const currentDate = Date.now();
    const timeBetweenDates = Math.floor((countToDate - currentDate) / 1000);
    setSeconds(timeBetweenDates % 60);
    setMinutes((timeBetweenDates / 60) % 60);
    setHours((timeBetweenDates / 3600) % 24);
    setDays((timeBetweenDates / 86400) % 24);
  }

  useEffect(() => {
    calcDate();
    const intervalHandle = setInterval(() => {
      calcDate();
    }, 1000);

    return () => clearInterval(intervalHandle);
  }, [countToDate]);

  return [days, hours, minutes, seconds];
}
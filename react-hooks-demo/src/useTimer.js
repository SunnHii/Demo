import { useEffect, useState } from "react";

export function useTimer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(timer); // dọn dẹp khi unmount
  }, []);

  return time;
}

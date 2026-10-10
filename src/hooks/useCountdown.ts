import { useCallback, useEffect, useState } from 'react';

export default function useCountdown(initialSeconds = 42) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) return undefined;
    const timer = setTimeout(() => setSeconds((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  const restart = useCallback(() => setSeconds(initialSeconds), [initialSeconds]);

  return { seconds, finished: seconds <= 0, restart };
}

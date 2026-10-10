import { useEffect, useState } from 'react';
import { transcriptText, typingSpeed } from './voiceData';

export default function useVoiceSession(active) {
  const [seconds, setSeconds] = useState(0);
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (!active) return undefined;
    const timer = setInterval(() => setSeconds((value) => value + 1), 1000);
    return () => clearInterval(timer);
  }, [active]);

  useEffect(() => {
    if (!active || typed >= transcriptText.length) return undefined;
    const timer = setTimeout(() => setTyped((value) => value + 1), typingSpeed);
    return () => clearTimeout(timer);
  }, [active, typed]);

  return { seconds, transcript: transcriptText.slice(0, typed) };
}

import { useCallback, useEffect, useRef, useState } from 'react';
import { seedConversations, buildReply } from './chatData';

const REPLY_DELAY = 1400;

const createMessage = (role, text) => ({
  id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
  role,
  text,
  time: new Date(),
});

export default function useChat(conversationId) {
  const [messages, setMessages] = useState(() => seedConversations[conversationId] ?? []);
  const [typing, setTyping] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const send = useCallback(
    (text) => {
      const trimmed = text.trim();
      if (!trimmed || typing) return;

      setMessages((prev) => [...prev, createMessage('user', trimmed)]);
      setTyping(true);

      timerRef.current = setTimeout(() => {
        setMessages((prev) => [...prev, createMessage('assistant', buildReply())]);
        setTyping(false);
      }, REPLY_DELAY);
    },
    [typing]
  );

  const reset = useCallback(() => {
    clearTimeout(timerRef.current);
    setTyping(false);
    setMessages([]);
  }, []);

  return { messages, typing, send, reset };
}

import React from 'react';
import UserBubble from './UserBubble';
import AssistantMessage from './AssistantMessage';

export default function MessageBubble({ message }) {
  if (message.role === 'user') {
    return <UserBubble text={message.text} />;
  }
  return <AssistantMessage message={message} />;
}

import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot?: boolean;
  timestamp?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isBot = false, timestamp }) => {
  return (
    <div className={`flex items-start space-x-3 p-4 animate-fade-in ${isBot ? 'bg-secondary/50' : 'bg-white'}`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        isBot ? 'bg-primary text-white' : 'bg-gray-100'
      }`}>
        {isBot ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5 text-gray-600" />}
      </div>
      <div className="flex-1">
        <div className="text-sm text-gray-900">{message}</div>
        {timestamp && (
          <div className="mt-1 text-xs text-gray-500">{timestamp}</div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot?: boolean;
  timestamp?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isBot = false, timestamp }) => {
  return (
    <div className={`flex items-start space-x-3 p-4 animate-fade-in rounded-xl transition-all duration-300 hover:shadow-md ${
      isBot 
        ? 'bg-white shadow-sm hover:bg-white/95' 
        : 'bg-primary/5 hover:bg-primary/10'
    }`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 ${
        isBot 
          ? 'bg-primary text-white shadow-sm' 
          : 'bg-white border-2 border-primary/20'
      }`}>
        {isBot ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5 text-primary" />}
      </div>
      <div className="flex-1 space-y-1">
        <div className="text-sm text-gray-900">{message}</div>
        {timestamp && (
          <div className="text-xs text-gray-500">{timestamp}</div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
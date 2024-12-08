import React, { useState } from 'react';
import { Mic, Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onStartRecording: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, onStartRecording }) => {
  const [message, setMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="p-4 border-t bg-white shadow-lg relative">
      <form onSubmit={handleSubmit} className="relative">
        <div className={`flex items-center space-x-2 transition-all duration-300 ${isFocused ? 'transform scale-[1.01]' : ''}`}>
          <div className="relative flex-1 group">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Type here to start chatting..."
              className="w-full px-4 py-3.5 pr-24 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 hover:bg-white shadow-sm"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
              <button
                type="button"
                onClick={onStartRecording}
                className="p-2 text-gray-500 hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
              >
                <Mic className="w-5 h-5" />
              </button>
              <button
                type="submit"
                disabled={!message.trim()}
                className={`p-2 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 ${
                  message.trim()
                    ? 'text-primary hover:bg-primary/10 animate-pulse'
                    : 'text-gray-300 cursor-not-allowed'
                }`}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
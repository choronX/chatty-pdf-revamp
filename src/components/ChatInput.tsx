import React, { useState, forwardRef } from 'react';
import { Mic, Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onStartRecording: () => void;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, onStartRecording, inputRef }) => {
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
              ref={inputRef}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Type here to start chatting..."
              className="w-full px-4 py-3.5 pr-24 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 hover:bg-white shadow-sm highlight-pulse"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
              <button
                type="button"
                onClick={onStartRecording}
                className="p-2.5 text-gray-500 hover:text-primary bg-white shadow-md hover:shadow-lg rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
              >
                <Mic className="w-5 h-5" />
              </button>
              <button
                type="submit"
                disabled={!message.trim()}
                className={`p-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 ${
                  message.trim()
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
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
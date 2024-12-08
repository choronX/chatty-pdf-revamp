import React, { useState } from 'react';
import { Mic, Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onStartRecording: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, onStartRecording }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type here to start chatting..."
            className="w-full px-4 py-2.5 pr-24 rounded-full border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
            <button
              type="button"
              onClick={onStartRecording}
              className="p-2 text-gray-500 hover:text-primary hover:bg-primary/5 rounded-full transition-colors"
            >
              <Mic className="w-5 h-5" />
            </button>
            <button
              type="submit"
              disabled={!message.trim()}
              className={`p-2 rounded-full transition-all ${
                message.trim()
                  ? 'text-primary hover:bg-primary/5'
                  : 'text-gray-300 cursor-not-allowed'
              }`}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ChatInput;
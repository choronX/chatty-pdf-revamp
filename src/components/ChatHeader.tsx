import React from 'react';
import { FileText } from 'lucide-react';

interface ChatHeaderProps {
  fileName: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ fileName }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-white">
      <div className="flex items-center space-x-3">
        <FileText className="w-5 h-5 text-primary" />
        <h1 className="text-lg font-semibold text-gray-900">{fileName}</h1>
      </div>
      <div className="flex items-center space-x-2">
        <button className="px-3 py-1.5 text-sm text-primary hover:bg-primary/5 rounded-full transition-colors">
          Research
        </button>
        <button className="px-3 py-1.5 text-sm text-primary hover:bg-primary/5 rounded-full transition-colors">
          Summary
        </button>
        <button className="px-3 py-1.5 text-sm text-primary hover:bg-primary/5 rounded-full transition-colors">
          Translate PDF
        </button>
        <button className="px-3 py-1.5 text-sm bg-primary text-white rounded-full hover:bg-primary-hover transition-colors">
          Draft an article
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
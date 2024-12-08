import React from 'react';
import { FileText } from 'lucide-react';

interface ChatHeaderProps {
  fileName: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ fileName }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-white shadow-sm">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-primary/10 rounded-lg transition-transform duration-200 hover:scale-105">
          <FileText className="w-5 h-5 text-primary" />
        </div>
        <h1 className="text-lg font-semibold text-gray-900">{fileName}</h1>
      </div>
      <div className="flex items-center space-x-2">
        <button className="px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-sm">
          Research
        </button>
        <button className="px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-sm">
          Summary
        </button>
        <button className="px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-sm">
          Translate PDF
        </button>
        <button className="px-4 py-1.5 text-sm font-medium bg-primary text-white rounded-full hover:bg-primary-hover transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md active:scale-95">
          Draft an article
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
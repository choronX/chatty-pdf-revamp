import React from 'react';
import { FileText } from 'lucide-react';

interface ChatHeaderProps {
  fileName: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ fileName }) => {
  return (
    <div className="flex items-center space-x-3 p-4 border-b bg-white shadow-sm">
      <div className="p-2 bg-primary/10 rounded-lg transition-transform duration-200 hover:scale-105">
        <FileText className="w-5 h-5 text-primary" />
      </div>
      <h1 className="text-lg font-semibold text-gray-900">{fileName}</h1>
    </div>
  );
};

export default ChatHeader;
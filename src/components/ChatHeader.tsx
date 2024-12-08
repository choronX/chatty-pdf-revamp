import React from 'react';
import { FileText } from 'lucide-react';

interface ChatHeaderProps {
  fileName: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ fileName }) => {
  return (
    <div className="flex flex-col space-y-4 p-4 border-b bg-white shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 rounded-lg transition-transform duration-200 hover:scale-105">
            <FileText className="w-5 h-5 text-primary" />
          </div>
          <h1 className="text-lg font-semibold text-gray-900">{fileName}</h1>
        </div>
      </div>
      
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
        <ActionButton>Research</ActionButton>
        <ActionButton>Summary</ActionButton>
        <ActionButton>Translate PDF</ActionButton>
        <ActionButton primary>Draft an article</ActionButton>
      </div>
    </div>
  );
};

const ActionButton: React.FC<{ children: React.ReactNode; primary?: boolean }> = ({ children, primary }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md active:scale-95 whitespace-nowrap ${
        primary
          ? 'bg-primary text-white hover:bg-primary-hover'
          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
      }`}
    >
      {children}
    </button>
  );
};

export default ChatHeader;
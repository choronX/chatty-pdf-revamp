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
      
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <div className="flex items-center gap-2">
          <ActionButton variant="secondary">
            Research
          </ActionButton>
          <ActionButton variant="secondary">
            Summary
          </ActionButton>
        </div>
        <div className="h-6 w-px bg-gray-200 mx-2" />
        <div className="flex items-center gap-2">
          <ActionButton variant="secondary">
            Translate PDF
          </ActionButton>
          <ActionButton variant="primary">
            Draft an article
          </ActionButton>
        </div>
      </div>
    </div>
  );
};

interface ActionButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ children, variant, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full font-medium 
        transition-all duration-200 
        hover:scale-105 active:scale-95
        shadow-sm hover:shadow-md
        whitespace-nowrap
        ${variant === 'primary' 
          ? 'bg-primary text-white hover:bg-primary-hover' 
          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
        }
        animate-fade-in
      `}
    >
      {children}
    </button>
  );
};

export default ChatHeader;
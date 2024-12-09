import React from 'react';
import { FileText, Search, FileSignature, Languages, FileStack } from 'lucide-react';

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
      
      <nav className="flex items-center justify-start gap-1 overflow-x-auto pb-2 scrollbar-hide">
        <ActionButton 
          variant="secondary"
          icon={<Search className="w-4 h-4" />}
          tooltip="Research this document"
        >
          Research
        </ActionButton>
        <ActionButton 
          variant="secondary"
          icon={<FileStack className="w-4 h-4" />}
          tooltip="Get a quick summary"
        >
          Summary
        </ActionButton>
        <ActionButton 
          variant="secondary"
          icon={<Languages className="w-4 h-4" />}
          tooltip="Translate this document"
        >
          Translate
        </ActionButton>
        <ActionButton 
          variant="primary"
          icon={<FileSignature className="w-4 h-4" />}
          tooltip="Create a new article"
        >
          Draft
        </ActionButton>
      </nav>
    </div>
  );
};

interface ActionButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  icon: React.ReactNode;
  tooltip: string;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ 
  children, 
  variant, 
  icon, 
  tooltip,
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      title={tooltip}
      className={`
        flex items-center gap-1.5
        px-3 py-1.5 rounded-lg
        font-medium text-sm
        transition-all duration-200 
        hover:scale-102 active:scale-98
        shadow-sm hover:shadow
        whitespace-nowrap
        ${variant === 'primary' 
          ? 'bg-primary text-white hover:bg-primary-hover' 
          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
        }
        animate-fade-in
      `}
    >
      {icon}
      {children}
    </button>
  );
};

export default ChatHeader;
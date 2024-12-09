import React, { useState, useRef } from 'react';
import ChatHeader from '../components/ChatHeader';
import ChatInput from '../components/ChatInput';
import ChatMessage from '../components/ChatMessage';
import { toast } from 'sonner';
import { Search, FileSignature, Languages, FileStack } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: string;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date().toLocaleTimeString(),
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm analyzing the PDF content to provide you with a relevant response.",
        isBot: true,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleStartRecording = () => {
    toast.info("Voice recording feature coming soon!");
  };

  const scrollToInput = () => {
    inputRef.current?.focus();
    inputRef.current?.scrollIntoView({ behavior: 'smooth' });
    inputRef.current?.classList.add('highlight-pulse');
    setTimeout(() => {
      inputRef.current?.classList.remove('highlight-pulse');
    }, 2000);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* PDF Viewer Section */}
      <div className="w-1/2 p-4 flex flex-col">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <div className="flex flex-wrap gap-2">
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
          </div>
        </div>
        <div className="flex-1 rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-lg border border-gray-100">
          <p className="text-gray-500">PDF Viewer Component</p>
        </div>
      </div>

      {/* Chat Section */}
      <div className="w-1/2 flex flex-col bg-white shadow-xl">
        <div className="flex-1 flex flex-col h-full">
          <ChatHeader fileName="zomato financialreport1.pdf" />
          
          <div className="flex-1 overflow-y-auto bg-[#f8fafc] px-4 py-2">
            {messages.length === 0 ? (
              <div 
                onClick={scrollToInput}
                className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4 cursor-pointer group transition-all duration-300 hover:bg-gray-50/50 rounded-xl p-8"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4-4-4z" />
                  </svg>
                </div>
                <p className="text-lg font-medium group-hover:text-primary transition-colors">Start a conversation about the PDF</p>
                <p className="text-sm text-gray-400">Click here to begin chatting</p>
              </div>
            ) : (
              <div className="space-y-4 py-4">
                {messages.map(message => (
                  <ChatMessage
                    key={message.id}
                    message={message.text}
                    isBot={message.isBot}
                    timestamp={message.timestamp}
                  />
                ))}
              </div>
            )}
          </div>
          
          <ChatInput
            onSendMessage={handleSendMessage}
            onStartRecording={handleStartRecording}
            inputRef={inputRef}
          />
        </div>
      </div>
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

export default Index;
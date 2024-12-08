import React, { useState } from 'react';
import ChatHeader from '../components/ChatHeader';
import ChatInput from '../components/ChatInput';
import ChatMessage from '../components/ChatMessage';
import { toast } from 'sonner';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: string;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);

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

  return (
    <div className="flex h-screen bg-gray-50">
      {/* PDF Viewer Section */}
      <div className="w-1/2 p-6 bg-white border-r border-gray-200">
        <div className="h-full rounded-lg bg-gray-100 flex items-center justify-center">
          <p className="text-gray-500">PDF Viewer Component</p>
        </div>
      </div>

      {/* Chat Section */}
      <div className="w-1/2 flex flex-col bg-white shadow-lg">
        <ChatHeader fileName="zomato financialreport1.pdf" />
        
        <div className="flex-1 overflow-y-auto bg-gray-50 px-4">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center text-gray-500">
              Start a conversation about the PDF
            </div>
          ) : (
            messages.map(message => (
              <ChatMessage
                key={message.id}
                message={message.text}
                isBot={message.isBot}
                timestamp={message.timestamp}
              />
            ))
          )}
        </div>
        
        <ChatInput
          onSendMessage={handleSendMessage}
          onStartRecording={handleStartRecording}
        />
      </div>
    </div>
  );
};

export default Index;
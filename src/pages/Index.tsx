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
    <div className="flex flex-col h-screen bg-gray-50">
      <ChatHeader fileName="zomato financialreport1.pdf" />
      
      <div className="flex-1 overflow-y-auto">
        {messages.map(message => (
          <ChatMessage
            key={message.id}
            message={message.text}
            isBot={message.isBot}
            timestamp={message.timestamp}
          />
        ))}
      </div>
      
      <ChatInput
        onSendMessage={handleSendMessage}
        onStartRecording={handleStartRecording}
      />
    </div>
  );
};

export default Index;

import React, { useState, useRef, useEffect } from 'react';
import { chatService } from '../services/geminiService';
import { Message } from '../types';
import { WHATSAPP_URL } from '../constants';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Hola! Soy el asistente de The Machine. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);
    const response = await chatService.sendMessage(userMessage);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[350px] h-[500px] bg-zinc-950 border border-white/10 rounded-3xl flex flex-col overflow-hidden">
          <div className="p-4 bg-fuchsia-500 text-black font-black uppercase flex justify-between">
            <span>Asistente Machine</span>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-4 py-2 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-fuchsia-500 text-black' : 'bg-zinc-900 text-white'}`}>{msg.text}</div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="p-4 bg-black border-t border-white/5 flex gap-2">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 bg-zinc-900 border border-white/10 rounded-full px-4 py-2 text-white" placeholder="Escribe aquí..." />
            <button type="submit" className="bg-fuchsia-500 p-2 rounded-full">➔</button>
          </form>
          <div className="p-4 bg-zinc-900">
            <a href={WHATSAPP_URL} target="_blank" className="bg-green-600 block text-center py-2 rounded-full text-white font-bold text-xs uppercase">Hablar por WhatsApp</a>
          </div>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 bg-fuchsia-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
        💬
      </button>
    </div>
  );
};

export default ChatBot;
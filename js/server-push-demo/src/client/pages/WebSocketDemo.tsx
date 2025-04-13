import React, { useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

interface Message {
  id: string;
  text: string;
  timestamp: number;
}

const WebSocketDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const socketRef = useRef<Socket>();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 连接WebSocket服务器
    socketRef.current = io('http://localhost:3001');

    // 监听消息
    socketRef.current.on('chat message', (message: Message) => {
      setMessages(prev => [...prev, message]);
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    // 自动滚动到最新消息
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() && socketRef.current) {
      const message: Message = {
        id: Date.now().toString(),
        text: inputMessage,
        timestamp: Date.now(),
      };
      socketRef.current.emit('chat message', message);
      setInputMessage('');
    }
  };

  return (
    <div className="demo-container">
      <h2>WebSocket 聊天演示</h2>
      <p>这是一个使用WebSocket实现的实时聊天示例，展示了双向实时通信的特性。</p>
      
      <div className="message-list">
        {messages.map(message => (
          <div key={message.id} className="message">
            <span>{new Date(message.timestamp).toLocaleTimeString()}</span>
            <p>{message.text}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={sendMessage} className="input-group">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="输入消息..."
        />
        <button type="submit">发送</button>
      </form>
    </div>
  );
};

export default WebSocketDemo;
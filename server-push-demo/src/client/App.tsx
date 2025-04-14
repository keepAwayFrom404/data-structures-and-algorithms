import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WebSocketDemo from './pages/Chat';
import SSEDemo from './pages/SSEDemo';
import HTTP2Demo from './pages/HTTP2Demo';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <nav className="nav">
          <ul>
            <li><Link to="/websocket">WebSocket 演示</Link></li>
            <li><Link to="/sse">SSE 演示</Link></li>
            <li><Link to="/http2">HTTP/2 演示</Link></li>
          </ul>
        </nav>

        <main className="main">
          <Routes>
            <Route path="/websocket" element={<WebSocketDemo />} />
            <Route path="/sse" element={<SSEDemo />} />
            <Route path="/http2" element={<HTTP2Demo />} />
            <Route path="/" element={<h1>请选择一个演示功能</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
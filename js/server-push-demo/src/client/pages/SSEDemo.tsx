import React, { useState, useEffect } from 'react';

interface DataPoint {
  id: string;
  value: number;
  timestamp: number;
}

const SSEDemo: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [status, setStatus] = useState('未连接');

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:3001/events');

    eventSource.onopen = () => {
      setStatus('已连接');
    };

    eventSource.onmessage = (event) => {
      const newData: DataPoint = JSON.parse(event.data);
      setData(prev => [...prev, newData].slice(-10)); // 只保留最近10条数据
    };

    eventSource.onerror = () => {
      setStatus('连接错误');
      eventSource.close();
    };

    return () => {
      eventSource.close();
      setStatus('已断开连接');
    };
  }, []);

  return (
    <div className="demo-container">
      <h2>SSE 实时数据流演示</h2>
      <p>这是一个使用Server-Sent Events (SSE)实现的实时数据流推送示例，展示了服务器到客户端的单向推送特性。</p>
      
      <div className="status-bar">
        <strong>连接状态：</strong> {status}
      </div>

      <div className="data-container">
        <h3>实时数据更新</h3>
        <div className="data-list">
          {data.map(point => (
            <div key={point.id} className="data-point">
              <span className="timestamp">
                {new Date(point.timestamp).toLocaleTimeString()}
              </span>
              <span className="value">
                数值: {point.value.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .status-bar {
          margin: 1rem 0;
          padding: 0.5rem;
          background-color: #f8f9fa;
          border-radius: 4px;
        }

        .data-container {
          margin-top: 2rem;
        }

        .data-list {
          margin-top: 1rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 1rem;
          height: 300px;
          overflow-y: auto;
        }

        .data-point {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem;
          border-bottom: 1px solid #eee;
        }

        .data-point:last-child {
          border-bottom: none;
        }

        .timestamp {
          color: #666;
        }

        .value {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default SSEDemo;
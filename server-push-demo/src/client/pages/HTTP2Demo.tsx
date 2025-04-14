import React, { useState, useEffect } from 'react';

interface Resource {
  id: string;
  name: string;
  size: string;
  type: string;
  loadTime: number;
}

const HTTP2Demo: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(false);

  const loadResources = async () => {
    setLoading(true);
    try {
      const startTime = performance.now();
      const response = await fetch('http://localhost:3001/http2-demo');
      const data = await response.json();
      const endTime = performance.now();

      // 计算加载时间
      const loadTime = endTime - startTime;

      setResources(data.map((resource: any) => ({
        ...resource,
        loadTime
      })));
    } catch (error) {
      console.error('加载资源失败:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="demo-container">
      <h2>HTTP/2 服务器推送演示</h2>
      <p>这个示例展示了HTTP/2服务器推送的特性，通过主动推送相关资源来优化加载性能。</p>

      <div className="controls">
        <button 
          onClick={loadResources}
          disabled={loading}
          className="load-button"
        >
          {loading ? '加载中...' : '加载资源'}
        </button>
      </div>

      <div className="resources-list">
        <h3>已加载的资源</h3>
        {resources.length > 0 ? (
          <table className="resources-table">
            <thead>
              <tr>
                <th>资源名称</th>
                <th>类型</th>
                <th>大小</th>
                <th>加载时间</th>
              </tr>
            </thead>
            <tbody>
              {resources.map(resource => (
                <tr key={resource.id}>
                  <td>{resource.name}</td>
                  <td>{resource.type}</td>
                  <td>{resource.size}</td>
                  <td>{resource.loadTime.toFixed(2)}ms</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-resources">暂无加载的资源</p>
        )}
      </div>

      <style jsx>{`
        .controls {
          margin: 2rem 0;
        }

        .load-button {
          padding: 0.5rem 1rem;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
        }

        .load-button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }

        .resources-list {
          margin-top: 2rem;
        }

        .resources-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1rem;
        }

        .resources-table th,
        .resources-table td {
          padding: 0.75rem;
          border: 1px solid #ddd;
          text-align: left;
        }

        .resources-table th {
          background-color: #f8f9fa;
        }

        .no-resources {
          color: #666;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default HTTP2Demo;
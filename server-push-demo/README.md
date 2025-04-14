# 服务器推送技术演示项目

这是一个用于学习和演示各种服务器推送技术的示例项目，包括WebSocket、Server-Sent Events (SSE)和HTTP/2服务器推送。

## 技术栈

- 前端：React + TypeScript + Vite
- 后端：Node.js + Express + Socket.IO
- 通信协议：WebSocket、SSE、HTTP/2

## 目录结构

```
/
├── src/
│   ├── client/         # 前端React应用
│   ├── server/         # 后端Express服务器
│   └── certificates/   # SSL证书（用于HTTP/2）
├── package.json        # 项目依赖
└── vite.config.ts      # Vite配置文件
```

## 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
# 启动前端开发服务器
npm run dev

# 启动后端服务器
npm run server
```

3. 访问应用：
- 前端页面：http://localhost:5174
- WebSocket/SSE服务器：http://localhost:3001
- HTTP/2服务器：https://localhost:3002

## 功能演示

### 1. WebSocket 聊天功能
- 实时双向通信
- 支持多客户端同时聊天
- 服务器自动回复消息

### 2. Server-Sent Events (SSE)
- 服务器持续推送随机数据
- 实时数据流展示
- 自动重连机制

### 3. HTTP/2 服务器推送
- 演示资源预推送功能
- 包含样式、脚本和图片资源
- 性能优化展示

## 学习要点

1. WebSocket
   - 全双工通信
   - 实时数据交换
   - 聊天应用场景

2. Server-Sent Events (SSE)
   - 服务器到客户端的单向通信
   - 实时数据流推送
   - 监控和通知场景

3. HTTP/2 服务器推送
   - 主动推送相关资源
   - 优化加载性能
   - 资源预加载场景

## 注意事项

- HTTP/2需要使用HTTPS，请确保已正确配置SSL证书
- 首次运行时需要信任自签名证书
- 建议使用最新版本的现代浏览器以获得最佳体验
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import spdy from "spdy";
import fs from "fs";
import path from "path";
import cors from "cors";

const app = express();
app.use(cors());

// WebSocket服务器设置
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5174", // Vite 开发服务器的默认端口
    methods: ["GET", "POST"],
  },
});

const endpoint = "https://api.deepseek.com/chat/completions";
const endpoint2 = 'https://api.coze.cn/open_api/v2/chat';
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer pat_5esaxQUKDBzra0q49o7Qr78Ll4wX6VD4y8TwauopI9sG5YthU1zAk0C2ZXHkBPIE`,
};

// WebSocket 处理
io.on("connection", (socket) => {
  console.log("用户已连接");

  socket.on("chat message", async (message) => {
    io.emit("chat message", message); // 广播原始消息给所有客户端
    const payload = {
      model: "deepseek-chat",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: message.text },
      ],
      stream: false,
    };
    const payload2 = {
      bot_id: '7493178146314256436',
      user: 'cadenli',
      query: message.text,
      chat_history: [],
      stram: false,
      custom_variables: {
          prompt: "你是一个AI助手"
      }
  };
    const response = await fetch(endpoint2, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload2),
    });
    console.log(response,'response');

    const data = await response.json();

    // 生成自动回复消息
    const autoReply = {
      id: Date.now().toString(),
      // text: data.choices[0].message.content,
      text: data.messages[0].content,
      sender: "Server",
      timestamp: new Date().toISOString(),
    };

    // 延迟500毫秒后发送自动回复
    setTimeout(() => {
      io.emit("chat message", autoReply); // 广播自动回复消息给所有客户端
    }, 500);
  });

  socket.on("disconnect", () => {
    console.log("用户已断开连接");
  });
});

// SSE 路由
app.get("/events", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  // 每秒发送一次随机数据
  const interval = setInterval(() => {
    const data = {
      id: Date.now().toString(),
      value: Math.random() * 100,
      timestamp: Date.now(),
    };
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }, 1000);

  req.on("close", () => {
    clearInterval(interval);
  });
});

// HTTP/2 演示路由
app.get("/http2-demo", (req: any, res: any) => {
  // 模拟一些资源数据
  const resources = [
    {
      id: "1",
      name: "styles.css",
      type: "stylesheet",
      size: "10.5 KB",
      content: "/* 模拟的CSS内容 */",
    },
    {
      id: "2",
      name: "app.js",
      type: "javascript",
      size: "25.8 KB",
      content: "// 模拟的JavaScript内容",
    },
    {
      id: "3",
      name: "image.png",
      type: "image",
      size: "150 KB",
      content: "data:image/svg+xml,<svg></svg>",
    },
  ];

  // 使用HTTP/2服务器推送
  if (res.push) {
    resources.forEach((resource) => {
      const stream = res.push(`/assets/${resource.name}`, {
        status: 200,
        method: "GET",
        request: {
          accept: "*/*",
        },
        response: {
          "content-type":
            resource.type === "stylesheet"
              ? "text/css"
              : resource.type === "javascript"
              ? "application/javascript"
              : "image/png",
        },
      });

      stream.on("error", (err: any) => {
        console.error(`推送资源 ${resource.name} 失败:`, err);
      });

      stream.end(resource.content);
    });
  }

  res.json(resources);
});

// 启动HTTP/2服务器
const options = {
  key: fs.readFileSync(path.join(__dirname, "../certificates/server.key")),
  cert: fs.readFileSync(path.join(__dirname, "../certificates/server.crt")),
};

// 启动服务器
const PORT = 3001;

// 启动 HTTP/1.1 服务器（用于WebSocket和SSE）
httpServer.listen(PORT, () => {
  console.log(`HTTP服务器运行在 http://localhost:${PORT}`);
});

// 启动 HTTP/2 服务器
spdy.createServer(options, app).listen(PORT + 1, () => {
  console.log(`HTTP/2服务器运行在 https://localhost:${PORT + 1}`);
});

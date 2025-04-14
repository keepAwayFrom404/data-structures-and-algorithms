# SSL Certificates

此目录用于存放开发环境使用的SSL证书。

## 生成自签名证书

使用以下命令生成自签名证书：

```bash
openssl req -x509 -newkey rsa:2048 -keyout server.key -out server.crt -days 365 -nodes -subj "/CN=localhost"
```

注意：这些证书仅用于开发环境，不要在生产环境中使用。
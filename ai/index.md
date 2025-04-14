``` mermaid
flowchart TD
    A[开始] --> B{是否已登录?}
    B -->|是| C[显示主页]
    B -->|否| D[显示登录页]
    C --> E[结束]
    D --> E
```
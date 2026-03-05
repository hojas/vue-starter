# 配置文件目录

此目录用于存放项目的配置文件，包括：

- 环境配置
- API 配置
- 应用配置
- 第三方服务配置

## 示例文件

```typescript
// api.ts
const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
}

export default API_CONFIG
```

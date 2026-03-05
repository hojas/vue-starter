# 常量定义目录

此目录用于存放项目中使用的常量定义，包括：

- API 端点常量
- 状态码常量
- 路由路径常量
- 业务逻辑常量

## 示例文件

```typescript
// apiEndpoints.ts
export const API_ENDPOINTS = {
  USER: '/api/user',
  PRODUCT: '/api/product',
  ORDER: '/api/order',
}

// statusCodes.ts
export const STATUS_CODES = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
}
```

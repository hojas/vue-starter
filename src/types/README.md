# TypeScript 类型定义目录

此目录用于存放项目中使用的 TypeScript 类型定义，包括：

- 接口定义
- 类型别名
- 枚举定义
- 泛型定义

## 示例文件

```typescript
// user.ts
export interface User {
  id: number
  name: string
  email: string
  role: UserRole
}

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

// product.ts
export interface Product {
  id: number
  name: string
  price: number
  description: string
  category: string
}

// api.ts
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  error?: string
}
```

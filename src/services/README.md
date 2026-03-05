# API 服务目录

此目录用于存放项目中与 API 交互的服务，包括：

- HTTP 请求封装
- API 接口调用
- 数据转换处理
- 错误处理

## 示例文件

```typescript
// apiService.ts
import API_CONFIG from '../config/api';

export class ApiService {
  static async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_CONFIG.baseUrl}${endpoint}`);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return response.json();
  }

  static async post<T>(endpoint: string, data: any): Promise<T> {
    const response = await fetch(`${API_CONFIG.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return response.json();
  }
}

// userService.ts
export class UserService {
  static async getUser(id: number) {
    return ApiService.get(`/user/${id}`);
  }

  static async createUser(userData: any) {
    return ApiService.post('/user', userData);
  }
}
```

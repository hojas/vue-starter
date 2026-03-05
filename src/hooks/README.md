# 自定义钩子目录

此目录用于存放项目中使用的自定义钩子，包括：

- 状态管理钩子
- 副作用钩子
- 事件处理钩子
- 数据获取钩子

## 示例文件

```typescript
// useApi.ts
import { ref } from 'vue';

export function useApi() {
  const loading = ref(false);
  const error = ref(null);

  const fetchData = async (url: string) => {
    loading.value = true;
    error.value = null;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {
      error.value = err;
      return null;
    } finally {
      loading.value = false;
    }
  };

  return { loading, error, fetchData };
}
```

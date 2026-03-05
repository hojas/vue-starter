# 基础通用组件目录

此目录用于存放项目中使用的基础通用组件，包括：

- 按钮组件
- 输入框组件
- 卡片组件
- 列表组件
- 导航组件

## 命名规范

- 组件名称使用 PascalCase 命名法
- 组件文件名称与组件名称保持一致
- 组件目录使用 kebab-case 命名法

## 示例组件

```vue
<!-- Button.vue -->
<script setup lang="ts">
defineProps({
  variant: {
    type: String,
    default: 'default'
  }
})
</script>

<template>
  <button class="btn" :class="{ 'btn-primary': variant === 'primary' }">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary {
  background-color: #4285f4;
  color: white;
  border-color: #4285f4;
}
</style>
```

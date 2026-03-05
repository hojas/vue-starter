# 布局组件目录

此目录用于存放项目中使用的布局组件，包括：

- 页面布局组件
- 导航栏组件
- 页脚组件
- 侧边栏组件
- 内容区域组件

## 命名规范

- 组件名称使用 PascalCase 命名法
- 组件文件名称与组件名称保持一致
- 组件目录使用 kebab-case 命名法

## 示例组件

```vue
<!-- Layout.vue -->
<template>
  <div class="layout">
    <header class="layout-header">
      <slot name="header"></slot>
    </header>
    <main class="layout-main">
      <slot></slot>
    </main>
    <footer class="layout-footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Layout component
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout-header {
  background-color: #f8f9fa;
  padding: 16px;
  border-bottom: 1px solid #e9ecef;
}

.layout-main {
  flex: 1;
  padding: 24px;
}

.layout-footer {
  background-color: #f8f9fa;
  padding: 16px;
  border-top: 1px solid #e9ecef;
  text-align: center;
}
</style>
```

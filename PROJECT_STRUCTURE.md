# 项目结构优化建议

## 目录结构

### 推荐的目录结构

```text
src/
├── assets/           # 静态资源
│   ├── images/       # 图片资源
│   ├── styles/       # 全局样式
│   └── icons/        # 图标资源
├── components/       # 通用组件
│   ├── common/       # 基础通用组件
│   └── layout/       # 布局组件
├── composables/      # 组合式函数
├── config/           # 配置文件
├── constants/        # 常量定义
├── hooks/            # 自定义钩子
├── pages/            # 页面组件
│   ├── Home/         # 首页
│   ├── About/        # 关于页
│   └── NotFound/     # 404页面
├── router/           # 路由配置
├── services/         # API服务
├── store/            # 状态管理
├── types/            # TypeScript类型定义
├── utils/            # 工具函数
├── App.vue           # 根组件
└── main.ts           # 入口文件
```

## 命名规范

### 组件命名
- 组件名称使用 PascalCase（大驼峰）命名法
- 组件文件名称与组件名称保持一致
- 目录名称使用 kebab-case（短横线分隔）命名法

### 文件命名
- 组件文件：PascalCase（如 `HomePage.vue`）
- 工具函数：camelCase（如 `formatDate.ts`）
- 常量文件：UPPER_CASE（如 `API_ENDPOINTS.ts`）
- 目录名称：kebab-case（如 `user-profile`）

### 变量命名
- 普通变量：camelCase（如 `userName`）
- 常量：UPPER_CASE（如 `MAX_LENGTH`）
- 类型定义：PascalCase（如 `UserType`）
- 枚举：PascalCase（如 `StatusEnum`）

## 代码规范

### Vue 组件
- 使用 `<script setup>` 语法
- 组件属性使用 `defineProps` 定义
- 组件事件使用 `defineEmits` 定义
- 组件暴露的方法使用 `defineExpose` 定义

### TypeScript
- 尽量使用具体类型，避免使用 `any`
- 使用接口定义对象类型
- 使用枚举定义常量集合
- 使用泛型增强代码复用性

### 代码风格
- 使用 2 个空格进行缩进
- 语句末尾使用分号
- 字符串使用单引号
- 大括号使用与语句同一行的风格

## 最佳实践

### 组件设计
- 组件职责单一，避免过大的组件
- 使用 props 传递数据，使用 emit 触发事件
- 复杂逻辑使用 composables 提取
- 样式使用 scoped 或 CSS Modules

### 状态管理
- 全局状态使用 Pinia
- 局部状态使用组件内部状态
- 复杂状态逻辑使用 composables 封装

### API 调用
- 使用 axios 或 fetch 进行 API 调用
- 封装 API 调用为服务
- 处理错误和加载状态
- 使用拦截器处理认证等通用逻辑

### 路由管理
- 使用 Vue Router 进行路由管理
- 路由配置与页面组件分离
- 使用路由守卫进行权限控制
- 懒加载路由组件提高性能

### 性能优化
- 使用 `v-memo` 缓存计算结果
- 使用 `v-for` 时添加 `key` 属性
- 避免在模板中使用复杂表达式
- 合理使用 `computed` 和 `watch`

### 测试
- 为组件编写单元测试
- 为工具函数编写测试
- 为 API 服务编写测试
- 使用 E2E 测试验证关键功能

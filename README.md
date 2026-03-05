# Vue Starter

一个现代化的 Vue 3 项目模板，集成了最新的前端技术栈和最佳实践，用于快速搭建和开发 Vue 应用。

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vue Router** - 官方路由管理器
- **Pinia** - 轻量级状态管理库
- **MDX** - Markdown + JSX 支持
- **Vite** - 现代前端构建工具
- **TypeScript** - 类型安全的 JavaScript 超集
- **Sass** - CSS 预处理器
- **ESLint** - 代码质量检查工具

## 功能特性

- ✅ 现代化的项目结构
- ✅ 完整的 TypeScript 支持
- ✅ 集成路由和状态管理
- ✅ MDX 支持，便于编写文档和内容
- ✅ 开发环境热更新
- ✅ 生产环境优化构建
- ✅ CI/CD 集成
- ✅ Docker 支持

## 项目结构

```
├── src/
│   ├── assets/           # 静态资源
│   │   ├── icons/        # 图标资源
│   │   ├── images/       # 图片资源
│   │   └── styles/       # 样式资源
│   ├── components/       # 组件
│   │   ├── common/       # 基础通用组件
│   │   └── layout/       # 布局组件
│   ├── composables/      # 组合式函数
│   ├── config/           # 配置文件
│   ├── constants/        # 常量定义
│   ├── hooks/            # 自定义钩子
│   ├── pages/            # 页面组件
│   ├── router/           # 路由配置
│   ├── services/         # API服务
│   ├── store/            # 状态管理
│   ├── types/            # TypeScript类型定义
│   ├── utils/            # 工具函数
│   ├── App.vue           # 根组件
│   ├── main.ts           # 入口文件
│   └── style.css         # 全局样式
├── public/               # 公共静态资源
├── .github/              # GitHub配置
├── .env                  # 环境变量配置
├── .env.production       # 生产环境变量配置
├── Dockerfile            # Docker配置
├── docker-compose.yaml   # Docker Compose配置
├── vite.config.ts        # Vite配置
├── tsconfig.json         # TypeScript配置
└── package.json          # 项目依赖和脚本
```

## 安装

### 前提条件

- Node.js 20+ 
- pnpm 10+

### 安装步骤

```bash
# 启用 Corepack（如果尚未启用）
corepack enable

# 安装依赖
pnpm install
```

## 开发

```bash
# 启动开发服务器
pnpm dev

# 开发服务器将在 http://localhost:3000 启动
```

## 构建

```bash
# 构建生产版本
pnpm build

# 构建结果将输出到 dist 目录
```

## 预览

```bash
# 预览生产构建
pnpm preview

# 预览服务器将在 http://localhost:4173 启动
```

## 代码质量

```bash
# 运行 ESLint 检查
pnpm lint

# 运行类型检查
pnpm type-check
```

## 部署

### Docker 部署

```bash
# 构建 Docker 镜像
docker build -t vue-starter .

# 运行 Docker 容器
docker run -p 80:80 vue-starter

# 或者使用 Docker Compose
docker-compose up -d
```

### CI/CD

项目集成了 GitHub Actions CI/CD 流程，当代码推送到 main 分支时，会自动执行以下步骤：

1. 安装依赖
2. 运行代码质量检查
3. 构建项目
4. 部署到 GitHub Pages（可选）

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

本项目使用 MIT 许可证 - 详情请参阅 [LICENSE](LICENSE) 文件

## 联系方式

- 项目链接: [https://github.com/hojas/vue-starter](https://github.com/hojas/vue-starter)

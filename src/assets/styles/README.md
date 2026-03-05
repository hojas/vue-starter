# 样式资源目录

此目录用于存放项目中使用的样式资源，包括：

- 全局样式文件
- 主题配置文件
- 变量定义文件
- 动画效果文件

## 示例文件

```scss
// variables.scss
:root {
  --primary-color: #4285f4;
  --secondary-color: #34a853;
  --accent-color: #fbbc05;
  --error-color: #ea4335;
  --text-color: #202124;
  --background-color: #ffffff;
  --border-color: #dadce0;
}

// global.scss
@import './variables';

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  color: var(--text-color);
  background-color: var(--background-color);
}

// animations.scss
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.3s ease-in-out;
}
```

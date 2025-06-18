# Next.js 路由系统演示

这个项目展示了 Next.js App Router 提供的不同风格的文件路由系统，帮助你理解和学习 Next.js 13+ 的路由功能。

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

然后在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看项目。

## 📁 项目结构

```
src/app/
├── page.tsx                    # 首页 (根路由 /)
├── loading.tsx                 # 全局加载页面
├── not-found.tsx              # 404 错误页面
├── about/
│   └── page.tsx               # 静态路由 (/about)
├── blog/
│   ├── page.tsx               # 嵌套路由 - 父页面 (/blog)
│   └── [slug]/
│       └── page.tsx           # 动态路由 (/blog/[slug])
├── dashboard/
│   ├── layout.tsx             # 布局路由
│   ├── page.tsx               # 仪表板主页 (/dashboard)
│   ├── profile/
│   │   └── page.tsx           # 个人资料页面 (/dashboard/profile)
│   └── settings/
│       └── page.tsx           # 设置页面 (/dashboard/settings)
├── api/
│   └── hello/
│       └── route.ts           # API 路由 (/api/hello)
└── api-test/
    └── page.tsx               # API 测试页面 (/api-test)
```

## 🛣️ 路由类型说明

### 1. 静态路由
- **文件**: `src/app/about/page.tsx`
- **路径**: `/about`
- **说明**: 简单的页面路由，直接映射到文件路径

### 2. 嵌套路由
- **文件**: `src/app/blog/page.tsx`
- **路径**: `/blog`
- **说明**: 通过文件夹结构创建的路由层次

### 3. 动态路由
- **文件**: `src/app/blog/[slug]/page.tsx`
- **路径**: `/blog/nextjs-app-router`, `/blog/dynamic-routing` 等
- **说明**: 使用方括号 `[slug]` 创建动态参数路由

### 4. 布局路由
- **文件**: `src/app/dashboard/layout.tsx`
- **路径**: `/dashboard/*`
- **说明**: 为多个页面提供共享的布局组件

### 5. API 路由
- **文件**: `src/app/api/hello/route.ts`
- **路径**: `/api/hello`
- **说明**: 创建后端 API 端点，支持 GET、POST 等 HTTP 方法

### 6. 特殊页面
- **加载页面**: `src/app/loading.tsx` - 在路由切换时显示
- **错误页面**: `src/app/not-found.tsx` - 404 错误处理

## 🎯 功能特性

- ✅ **静态路由**: 简单的页面路由
- ✅ **动态路由**: 带参数的页面路由
- ✅ **嵌套路由**: 文件夹结构的路由层次
- ✅ **布局路由**: 共享布局组件
- ✅ **API 路由**: 后端 API 端点
- ✅ **加载状态**: 路由切换时的加载页面
- ✅ **错误处理**: 404 错误页面
- ✅ **响应式设计**: 支持移动端和桌面端
- ✅ **深色模式**: 支持深色主题

## 🔧 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: Vercel (推荐)

## 📚 学习资源

- [Next.js 官方文档](https://nextjs.org/docs)
- [App Router 路由文档](https://nextjs.org/docs/app/building-your-application/routing)
- [API 路由文档](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

## 🚀 部署

这个项目可以轻松部署到 Vercel：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/nextjs-routing-demo)

## 📝 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**注意**: 这是一个演示项目，用于学习和理解 Next.js 的路由系统。在实际项目中，请根据具体需求调整和优化代码。

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const routes = [
    {
      title: "静态路由",
      description: "简单的页面路由，如关于页面",
      path: "/about",
      filePath: "src/app/about/page.tsx",
      color: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "嵌套路由",
      description: "文件夹结构创建的路由层次",
      path: "/blog",
      filePath: "src/app/blog/page.tsx",
      color: "bg-green-50 dark:bg-green-900/20"
    },
    {
      title: "动态路由",
      description: "带参数的页面，如博客文章详情",
      path: "/blog/nextjs-app-router",
      filePath: "src/app/blog/[slug]/page.tsx",
      color: "bg-yellow-50 dark:bg-yellow-900/20"
    },
    {
      title: "布局路由",
      description: "共享布局的页面组",
      path: "/dashboard",
      filePath: "src/app/dashboard/layout.tsx",
      color: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      title: "API 路由",
      description: "后端 API 端点",
      path: "/api-test",
      filePath: "src/app/api/hello/route.ts",
      color: "bg-indigo-50 dark:bg-indigo-900/20"
    }
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-6xl">
        <div className="text-center sm:text-left">
          <Image
            className="dark:invert mx-auto sm:mx-0"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <h1 className="text-4xl font-bold mt-6 mb-4">Next.js 路由系统演示</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            这个项目展示了 Next.js App Router 提供的不同风格的文件路由系统
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {routes.map((route, index) => (
            <Link
              key={index}
              href={route.path}
              className={`${route.color} p-6 rounded-lg border hover:shadow-lg transition-shadow`}
            >
              <h3 className="text-xl font-semibold mb-2">{route.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{route.description}</p>
              <div className="text-sm">
                <div className="font-medium mb-1">文件位置:</div>
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                  {route.filePath}
                </code>
              </div>
              <div className="text-sm mt-2">
                <div className="font-medium mb-1">访问路径:</div>
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                  {route.path}
                </code>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg w-full">
          <h2 className="text-xl font-semibold mb-4">特殊页面</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">加载页面</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                文件: <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">src/app/loading.tsx</code>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                在路由切换时自动显示加载状态
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">404 错误页面</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                文件: <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">src/app/not-found.tsx</code>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                访问不存在的路由时显示
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://nextjs.org/docs/app/building-your-application/routing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            查看文档
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js 文档
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          学习
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          示例
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

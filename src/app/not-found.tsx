import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-300 dark:text-gray-700">404</h1>
        <h2 className="text-2xl font-semibold mb-4">页面未找到</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          抱歉，您访问的页面不存在或已被移除。
        </p>
        
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg mb-8">
          <h3 className="font-semibold mb-2">路由类型：404错误页面</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            文件位置: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">src/app/not-found.tsx</code>
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
            当访问不存在的路由时，Next.js会自动显示这个页面
          </p>
        </div>

        <div className="space-x-4">
          <Link 
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md inline-block"
          >
            返回首页
          </Link>
          <Link 
            href="/about"
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-md inline-block"
          >
            关于我们
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>您可以尝试访问以下页面：</p>
          <div className="mt-2 space-x-4">
            <Link href="/about" className="text-blue-600 hover:underline">/about</Link>
            <Link href="/blog" className="text-blue-600 hover:underline">/blog</Link>
            <Link href="/dashboard" className="text-blue-600 hover:underline">/dashboard</Link>
          </div>
        </div>
      </div>
    </div>
  );
} 
export default function AboutPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">关于我们</h1>
        <p className="text-lg mb-4">
          这是一个测试Next.js App Router不同路由风格的演示页面。
        </p>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-3">路由类型：静态路由</h2>
          <p className="text-gray-700 dark:text-gray-300">
            这个页面使用静态路由，路径为 <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">/about</code>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">文件位置</h3>
            <code className="text-sm">src/app/about/page.tsx</code>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">访问路径</h3>
            <code className="text-sm">http://localhost:3000/about</code>
          </div>
        </div>
      </div>
    </div>
  );
} 
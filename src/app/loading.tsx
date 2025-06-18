export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold mb-2">正在加载...</h2>
        <p className="text-gray-600 dark:text-gray-400">
          请稍候，页面正在加载中
        </p>
        <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">路由类型：全局加载页面</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            文件位置: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">src/app/loading.tsx</code>
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
            这个页面会在路由切换时自动显示
          </p>
        </div>
      </div>
    </div>
  );
} 
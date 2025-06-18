export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">仪表板概览</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">总用户数</h3>
          <p className="text-3xl font-bold text-blue-600">1,234</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">今日活跃</h3>
          <p className="text-3xl font-bold text-green-600">567</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">总收入</h3>
          <p className="text-3xl font-bold text-purple-600">¥89,123</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">最近活动</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
            <span>新用户注册</span>
            <span className="text-sm text-gray-500">2分钟前</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
            <span>订单完成</span>
            <span className="text-sm text-gray-500">5分钟前</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
            <span>系统更新</span>
            <span className="text-sm text-gray-500">1小时前</span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold mb-2">文件位置</h3>
          <code className="text-sm">src/app/dashboard/page.tsx</code>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold mb-2">访问路径</h3>
          <code className="text-sm">http://localhost:3000/dashboard</code>
        </div>
      </div>
    </div>
  );
} 
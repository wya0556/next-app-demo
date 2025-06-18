import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 顶部导航栏 */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                仪表板
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                返回首页
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
        {/* 侧边栏 */}
        <aside className="w-64 bg-white dark:bg-gray-800 shadow-sm">
          <div className="p-4">
            <nav className="space-y-2">
              <Link
                href="/dashboard"
                className="block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                概览
              </Link>
              <Link
                href="/dashboard/users"
                className="block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                用户管理
              </Link>
              <Link
                href="/dashboard/profile"
                className="block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                个人资料
              </Link>
              <Link
                href="/dashboard/settings"
                className="block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                设置
              </Link>
            </nav>
          </div>
        </aside>

        {/* 主内容区域 */}
        <main className="flex-1 p-8 overflow-auto">
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-3">路由类型：布局路由</h2>
            <p className="text-gray-700 dark:text-gray-300">
              这个页面使用布局路由，共享的导航栏和侧边栏由 <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">layout.tsx</code> 提供
            </p>
          </div>

          {children}
        </main>
      </div>
    </div>
  );
} 
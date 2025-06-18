export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">个人资料</h1>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-20 h-20 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-600 dark:text-gray-400">用户</span>
          </div>
          <div>
            <h2 className="text-xl font-semibold">张三</h2>
            <p className="text-gray-600 dark:text-gray-400">zhangsan@example.com</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              姓名
            </label>
            <input 
              type="text" 
              defaultValue="张三"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              邮箱
            </label>
            <input 
              type="email" 
              defaultValue="zhangsan@example.com"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              电话
            </label>
            <input 
              type="tel" 
              defaultValue="138-0013-8000"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              地址
            </label>
            <input 
              type="text" 
              defaultValue="北京市朝阳区"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </div>
        
        <div className="mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            保存更改
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold mb-2">文件位置</h3>
          <code className="text-sm">src/app/dashboard/profile/page.tsx</code>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold mb-2">访问路径</h3>
          <code className="text-sm">http://localhost:3000/dashboard/profile</code>
        </div>
      </div>
    </div>
  );
} 
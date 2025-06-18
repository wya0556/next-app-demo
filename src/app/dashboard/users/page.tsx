import Link from 'next/link';

// 模拟服务端数据
const users = [
  {
    id: 1,
    name: '张三',
    email: 'zhangsan@example.com',
    role: '管理员',
    status: '活跃',
    joinDate: '2024-01-15',
    lastLogin: '2024-01-20 14:30'
  },
  {
    id: 2,
    name: '李四',
    email: 'lisi@example.com',
    role: '用户',
    status: '活跃',
    joinDate: '2024-01-16',
    lastLogin: '2024-01-20 10:15'
  },
  {
    id: 3,
    name: '王五',
    email: 'wangwu@example.com',
    role: '编辑',
    status: '离线',
    joinDate: '2024-01-17',
    lastLogin: '2024-01-19 16:45'
  },
  {
    id: 4,
    name: '赵六',
    email: 'zhaoliu@example.com',
    role: '用户',
    status: '活跃',
    joinDate: '2024-01-18',
    lastLogin: '2024-01-20 09:20'
  },
  {
    id: 5,
    name: '钱七',
    email: 'qianqi@example.com',
    role: '管理员',
    status: '离线',
    joinDate: '2024-01-19',
    lastLogin: '2024-01-18 22:10'
  }
];

// 模拟服务端数据获取函数
async function getUsers() {
  // 模拟API调用延迟
  await new Promise(resolve => setTimeout(resolve, 2000));
  return users;
}

export default async function UsersPage() {
  // 服务端数据获取
  const usersData = await getUsers();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">用户管理</h1>
        <Link 
          href="/dashboard/users/client"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          查看客户端版本
        </Link>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-3">服务端数据获取示例</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          这个页面使用服务端组件，数据在服务器端获取并渲染。
        </p>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>• 使用 <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">async/await</code> 在服务端获取数据</li>
          <li>• 数据在页面加载时就已经准备好</li>
          <li>• 更好的SEO和初始加载性能</li>
          <li>• 无法进行客户端交互（如排序、筛选）</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold">用户列表</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            共 {usersData.length} 个用户
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  姓名
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  邮箱
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  角色
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  状态
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  注册时间
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  最后登录
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {usersData.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {user.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      user.role === '管理员' 
                        ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        : user.role === '编辑'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      user.status === '活跃'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {user.joinDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {user.lastLogin}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold mb-2">文件位置</h3>
          <code className="text-sm">src/app/dashboard/users/page.tsx</code>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold mb-2">访问路径</h3>
          <code className="text-sm">http://localhost:3000/dashboard/users</code>
        </div>
      </div>
    </div>
  );
} 
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const PAGE_SIZE = 5;
const ROLES = ['', '管理员', '编辑', '用户'];
const STATUS = ['', '活跃', '离线'];

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  joinDate: string;
  lastLogin: string;
};

type ApiResult = {
  data: User[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
};

export default function UsersClientPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [filters, setFilters] = useState({ name: '', email: '', role: '', status: '' });

  // 筛选表单处理
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    setPage(1); // 筛选时重置到第一页
  };

  // 获取数据
  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams({
      page: String(page),
      pageSize: String(PAGE_SIZE),
      ...Object.fromEntries(Object.entries(filters).filter(([_, v]) => v))
    });
    fetch(`/api/users?${params.toString()}`)
      .then(res => res.json())
      .then((data: ApiResult) => {
        setUsers(data.data);
        setTotalPages(data.totalPages);
        setTotal(data.total);
        setLoading(false);
      });
  }, [page, filters]);

  // 分页按钮
  const renderPagination = () => (
    <div className="flex gap-2 items-center justify-center mt-4">
      <button
        className="px-3 py-1 rounded border disabled:opacity-50"
        onClick={() => setPage(1)}
        disabled={page === 1}
      >首页</button>
      <button
        className="px-3 py-1 rounded border disabled:opacity-50"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >上一页</button>
      <span className="mx-2">第 {page} / {totalPages} 页</span>
      <button
        className="px-3 py-1 rounded border disabled:opacity-50"
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >下一页</button>
      <button
        className="px-3 py-1 rounded border disabled:opacity-50"
        onClick={() => setPage(totalPages)}
        disabled={page === totalPages}
      >末页</button>
    </div>
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">用户管理（客户端）</h1>
        <Link 
          href="/dashboard/users"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          查看服务端版本
        </Link>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-3">客户端数据获取与交互示例</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          通过API获取数据，支持分页、筛选、表格排序等交互。
        </p>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>• 通过 <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">/api/users</code> 获取数据</li>
          <li>• 支持分页、筛选</li>
          <li>• 更好的用户体验，适合需要交互的场景</li>
        </ul>
      </div>

      {/* 筛选表单 */}
      <form className="mb-4 flex flex-wrap gap-4 items-end bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
        <div>
          <label className="block text-sm font-medium mb-1">姓名</label>
          <input
            type="text"
            name="name"
            value={filters.name}
            onChange={handleInputChange}
            className="px-2 py-1 border rounded w-32 dark:bg-gray-700 dark:text-white"
            placeholder="模糊搜索"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">邮箱</label>
          <input
            type="text"
            name="email"
            value={filters.email}
            onChange={handleInputChange}
            className="px-2 py-1 border rounded w-40 dark:bg-gray-700 dark:text-white"
            placeholder="模糊搜索"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">角色</label>
          <select
            name="role"
            value={filters.role}
            onChange={handleInputChange}
            className="px-2 py-1 border rounded w-28 dark:bg-gray-700 dark:text-white"
          >
            {ROLES.map(r => <option key={r} value={r}>{r ? r : '全部'}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">状态</label>
          <select
            name="status"
            value={filters.status}
            onChange={handleInputChange}
            className="px-2 py-1 border rounded w-28 dark:bg-gray-700 dark:text-white"
          >
            {STATUS.map(s => <option key={s} value={s}>{s ? s : '全部'}</option>)}
          </select>
        </div>
      </form>

      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold">用户列表</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            共 {total} 个用户
          </p>
        </div>
        <div className="overflow-x-auto">
          {loading ? (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">正在加载数据...</div>
          ) : users.length === 0 ? (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">暂无数据</div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">姓名</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">邮箱</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">角色</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">状态</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">注册时间</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">最后登录</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{user.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{user.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{user.email}</td>
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{user.joinDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{user.lastLogin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      {renderPagination()}

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold mb-2">文件位置</h3>
          <code className="text-sm">src/app/dashboard/users/client/page.tsx</code>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold mb-2">访问路径</h3>
          <code className="text-sm">http://localhost:3000/dashboard/users/client</code>
        </div>
      </div>
    </div>
  );
} 
'use client';

import { useState } from 'react';

export default function ApiTestPage() {
  const [getResult, setGetResult] = useState<any>(null);
  const [postResult, setPostResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testGetApi = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/hello?name=Next.js');
      const data = await response.json();
      setGetResult(data);
    } catch (error) {
      setGetResult({ error: '请求失败' });
    } finally {
      setLoading(false);
    }
  };

  const testPostApi = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'Hello from client!',
          timestamp: new Date().toISOString(),
        }),
      });
      const data = await response.json();
      setPostResult(data);
    } catch (error) {
      setPostResult({ error: '请求失败' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">API 路由测试</h1>
        
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-3">路由类型：API 路由</h2>
          <p className="text-gray-700 dark:text-gray-300">
            这个页面测试 Next.js 的 API 路由功能，文件位置为 <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">src/app/api/hello/route.ts</code>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* GET API 测试 */}
          <div className="border p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">GET 请求测试</h3>
            <button
              onClick={testGetApi}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-md mb-4"
            >
              {loading ? '请求中...' : '测试 GET /api/hello'}
            </button>
            
            {getResult && (
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">响应结果：</h4>
                <pre className="text-sm overflow-auto">
                  {JSON.stringify(getResult, null, 2)}
                </pre>
              </div>
            )}
          </div>

          {/* POST API 测试 */}
          <div className="border p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">POST 请求测试</h3>
            <button
              onClick={testPostApi}
              disabled={loading}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-md mb-4"
            >
              {loading ? '请求中...' : '测试 POST /api/hello'}
            </button>
            
            {postResult && (
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">响应结果：</h4>
                <pre className="text-sm overflow-auto">
                  {JSON.stringify(postResult, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
          <h3 className="font-semibold mb-3">API 路由说明</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• API 路由文件必须命名为 <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">route.ts</code></li>
            <li>• 支持 GET、POST、PUT、DELETE 等 HTTP 方法</li>
            <li>• 可以通过 URL 参数或请求体传递数据</li>
            <li>• 返回 JSON 格式的响应</li>
            <li>• 访问路径：<code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">/api/hello</code></li>
          </ul>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">文件位置</h3>
            <code className="text-sm">src/app/api-test/page.tsx</code>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">访问路径</h3>
            <code className="text-sm">http://localhost:3000/api-test</code>
          </div>
        </div>
      </div>
    </div>
  );
} 
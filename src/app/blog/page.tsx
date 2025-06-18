import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    { id: 1, title: 'Next.js App Router 介绍', slug: 'nextjs-app-router' },
    { id: 2, title: '动态路由的使用方法', slug: 'dynamic-routing' },
    { id: 3, title: '布局和嵌套路由', slug: 'layout-nesting' },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">博客文章</h1>
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-3">路由类型：嵌套路由 - 父页面</h2>
          <p className="text-gray-700 dark:text-gray-300">
            这个页面是博客的父页面，路径为 <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">/blog</code>
          </p>
        </div>
        
        <div className="grid gap-4">
          {posts.map((post) => (
            <div key={post.id} className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <Link 
                href={`/blog/${post.slug}`}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                阅读全文 →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">文件位置</h3>
            <code className="text-sm">src/app/blog/page.tsx</code>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">访问路径</h3>
            <code className="text-sm">http://localhost:3000/blog</code>
          </div>
        </div>
      </div>
    </div>
  );
} 
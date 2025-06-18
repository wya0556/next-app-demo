import Link from 'next/link';
import { notFound } from 'next/navigation';

// 模拟博客文章数据
const posts = {
  'nextjs-app-router': {
    title: 'Next.js App Router 介绍',
    content: 'Next.js 13+ 引入了新的 App Router，它基于文件系统的路由，提供了更好的性能和开发体验...',
    author: '张三',
    date: '2024-01-15'
  },
  'dynamic-routing': {
    title: '动态路由的使用方法',
    content: '动态路由允许你创建基于参数的路由，比如博客文章的详情页面...',
    author: '李四',
    date: '2024-01-16'
  },
  'layout-nesting': {
    title: '布局和嵌套路由',
    content: 'Next.js App Router 支持布局嵌套，可以创建共享的UI组件...',
    author: '王五',
    date: '2024-01-17'
  }
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/blog"
          className="text-blue-600 dark:text-blue-400 hover:underline mb-6 inline-block"
        >
          ← 返回博客列表
        </Link>
        
        <article>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-600 dark:text-gray-400 mb-6">
            <span>作者: {post.author}</span>
            <span className="mx-2">•</span>
            <span>发布时间: {post.date}</span>
          </div>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-3">路由类型：动态路由</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              这个页面使用动态路由，路径为 <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">/blog/[slug]</code>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              当前参数: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">{params.slug}</code>
            </p>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed">{post.content}</p>
          </div>
        </article>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">文件位置</h3>
            <code className="text-sm">src/app/blog/[slug]/page.tsx</code>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">访问路径</h3>
            <code className="text-sm">http://localhost:3000/blog/{params.slug}</code>
          </div>
        </div>
      </div>
    </div>
  );
} 
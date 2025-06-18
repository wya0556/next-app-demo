import { NextRequest, NextResponse } from 'next/server';

const allUsers = [
  { id: 1, name: '张三', email: 'zhangsan@example.com', role: '管理员', status: '活跃', joinDate: '2024-01-15', lastLogin: '2024-01-20 14:30' },
  { id: 2, name: '李四', email: 'lisi@example.com', role: '用户', status: '活跃', joinDate: '2024-01-16', lastLogin: '2024-01-20 10:15' },
  { id: 3, name: '王五', email: 'wangwu@example.com', role: '编辑', status: '离线', joinDate: '2024-01-17', lastLogin: '2024-01-19 16:45' },
  { id: 4, name: '赵六', email: 'zhaoliu@example.com', role: '用户', status: '活跃', joinDate: '2024-01-18', lastLogin: '2024-01-20 09:20' },
  { id: 5, name: '钱七', email: 'qianqi@example.com', role: '管理员', status: '离线', joinDate: '2024-01-19', lastLogin: '2024-01-18 22:10' },
  { id: 6, name: '孙八', email: 'sunba@example.com', role: '用户', status: '活跃', joinDate: '2024-01-20', lastLogin: '2024-01-21 08:00' },
  { id: 7, name: '周九', email: 'zhoujiu@example.com', role: '编辑', status: '活跃', joinDate: '2024-01-21', lastLogin: '2024-01-21 09:30' },
  { id: 8, name: '吴十', email: 'wushi@example.com', role: '用户', status: '离线', joinDate: '2024-01-22', lastLogin: '2024-01-22 10:00' },
  { id: 9, name: '郑十一', email: 'zheng11@example.com', role: '管理员', status: '活跃', joinDate: '2024-01-23', lastLogin: '2024-01-23 11:00' },
  { id: 10, name: '王十二', email: 'wang12@example.com', role: '用户', status: '活跃', joinDate: '2024-01-24', lastLogin: '2024-01-24 12:00' },
  { id: 11, name: '冯十三', email: 'feng13@example.com', role: '编辑', status: '离线', joinDate: '2024-01-25', lastLogin: '2024-01-25 13:00' },
  { id: 12, name: '陈十四', email: 'chen14@example.com', role: '用户', status: '活跃', joinDate: '2024-01-26', lastLogin: '2024-01-26 14:00' },
  { id: 13, name: '褚十五', email: 'chu15@example.com', role: '管理员', status: '活跃', joinDate: '2024-01-27', lastLogin: '2024-01-27 15:00' },
  { id: 14, name: '卫十六', email: 'wei16@example.com', role: '用户', status: '离线', joinDate: '2024-01-28', lastLogin: '2024-01-28 16:00' },
  { id: 15, name: '蒋十七', email: 'jiang17@example.com', role: '编辑', status: '活跃', joinDate: '2024-01-29', lastLogin: '2024-01-29 17:00' }
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = parseInt(searchParams.get('pageSize') || '5', 10);
  const name = searchParams.get('name') || '';
  const email = searchParams.get('email') || '';
  const role = searchParams.get('role') || '';
  const status = searchParams.get('status') || '';

  // 筛选
  let filtered = allUsers.filter(user => {
    return (
      (!name || user.name.includes(name)) &&
      (!email || user.email.includes(email)) &&
      (!role || user.role === role) &&
      (!status || user.status === status)
    );
  });

  const total = filtered.length;
  const totalPages = Math.ceil(total / pageSize);
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const data = filtered.slice(start, end);

  // 模拟延迟
  await new Promise(resolve => setTimeout(resolve, 300));

  return NextResponse.json({
    data,
    page,
    pageSize,
    total,
    totalPages
  });
} 
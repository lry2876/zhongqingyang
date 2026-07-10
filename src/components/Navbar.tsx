import { Link, useLocation } from "react-router-dom";
import { Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * 顶部导航栏组件
 * 小白说明：这是页面顶部的导航条，包含品牌 Logo 和四个页面链接
 * 当前所在页面会高亮显示，方便用户知道自己在哪
 */
const navItems = [
  { name: "首页", path: "/" },
  { name: "AI 诊断", path: "/diagnosis" },
  { name: "调理方案", path: "/plan" },
  { name: "健康看板", path: "/dashboard" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-ink-green/10 bg-cream/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* 品牌 Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-green transition-transform group-hover:scale-110">
            <Leaf className="h-5 w-5 text-cream" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-lg font-bold text-ink-green">中轻养计划</span>
            <span className="text-[10px] tracking-widest text-ochre">ZQY · AI HEALTH</span>
          </div>
        </Link>

        {/* 导航链接 */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                  active
                    ? "bg-ink-green text-cream shadow-soft"
                    : "text-ink-green/70 hover:bg-ink-green/8 hover:text-ink-green"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* 移动端简化导航 */}
        <div className="flex items-center gap-1 md:hidden">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-medium transition-all",
                  active ? "bg-ink-green text-cream" : "text-ink-green/60"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

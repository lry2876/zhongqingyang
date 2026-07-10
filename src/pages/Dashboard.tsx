import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Area, AreaChart,
} from "recharts";
import { TrendingDown, TrendingUp, Bell, Users, Award, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Icon from "@/components/Icon";
import {
  dataMetrics, trendChartData, reminders as defaultReminders,
  checkinTasks as defaultTasks, familyMembers,
} from "@/data/mockData";

/**
 * 健康陪伴看板 - 中轻养计划
 * 小白说明：这是长期健康管理页面，展示健康数据趋势、智能提醒、每日打卡、家庭联动
 * 帮助中年人可持续地坚持养生，不制造焦虑
 */
export default function Dashboard() {
  // 提醒开关状态
  const [reminders, setReminders] = useState(defaultReminders);
  // 打卡任务状态
  const [tasks, setTasks] = useState(defaultTasks);

  // 切换提醒开关
  const toggleReminder = (id: string) => {
    setReminders((prev) =>
      prev.map((r) => (r.id === id ? { ...r, enabled: !r.enabled } : r))
    );
  };

  // 切换打卡状态
  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // 打卡完成进度
  const completedCount = tasks.filter((t) => t.completed).length;
  const progress = Math.round((completedCount / tasks.length) * 100);

  return (
    <div className="min-h-screen bg-cream">
      {/* 页面标题区 */}
      <div className="border-b border-ink-green/10 bg-cream-light">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex items-center gap-2 text-xs text-ochre">
            <Award className="h-4 w-4" />
            <span className="tracking-widest">HEALTH COMPANION</span>
          </div>
          <h1 className="mt-3 font-serif text-4xl font-bold text-ink-green">长期健康陪伴看板</h1>
          <p className="mt-2 text-earth-brown/70">智能提醒、数据跟踪、温和打卡，让养生变成可持续的日常</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-8 px-6 py-12">
        {/* ===== 数据概览卡片 ===== */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dataMetrics.map((metric) => (
            <DataCard key={metric.name} metric={metric} />
          ))}
        </div>

        {/* ===== 趋势图表 ===== */}
        <div className="rounded-2xl border border-ink-green/10 bg-cream-light p-6 shadow-soft">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="font-serif text-xl font-semibold text-ink-green">近 7 天健康趋势</h2>
              <p className="text-xs text-earth-brown/60">睡眠时长与压力指数对比</p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-ink-green" />
                睡眠 (h)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-ochre" />
                压力 (分)
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={trendChartData} margin={{ top: 5, right: 10, bottom: 5, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#5A7A6E20" />
              <XAxis dataKey="day" tick={{ fill: "#3D2E1F", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#8B7E6B", fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FAF7EF",
                  border: "1px solid #5A7A6E30",
                  borderRadius: "12px",
                  fontSize: "13px",
                }}
              />
              <Line type="monotone" dataKey="sleep" stroke="#2D5043" strokeWidth={2.5} dot={{ fill: "#2D5043", r: 3 }} activeDot={{ r: 5 }} />
              <Line type="monotone" dataKey="stress" stroke="#C97B4A" strokeWidth={2.5} dot={{ fill: "#C97B4A", r: 3 }} activeDot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* ===== 智能提醒 + 今日打卡 ===== */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* 智能提醒列表 */}
          <div className="rounded-2xl border border-ink-green/10 bg-cream-light p-6 shadow-soft">
            <div className="mb-5 flex items-center gap-2">
              <Bell className="h-5 w-5 text-ink-green" />
              <h2 className="font-serif text-xl font-semibold text-ink-green">智能提醒</h2>
              <span className="ml-auto text-xs text-earth-gray">适配加班作息自定义</span>
            </div>
            <div className="space-y-2.5">
              {reminders.map((r) => (
                <div key={r.id} className="flex items-center gap-3 rounded-xl border border-ink-green/8 bg-cream/40 p-3.5">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-ink-green/8">
                    <Icon name={r.icon} className="h-4 w-4 text-ink-green" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-ink-green">{r.name}</div>
                    <div className="text-xs text-earth-gray">{r.time}</div>
                  </div>
                  {/* 开关按钮 */}
                  <button
                    onClick={() => toggleReminder(r.id)}
                    className={cn(
                      "relative h-6 w-11 rounded-full transition-colors",
                      r.enabled ? "bg-ink-green" : "bg-ink-green/20"
                    )}
                  >
                    <span
                      className={cn(
                        "absolute top-0.5 h-5 w-5 rounded-full bg-cream shadow transition-transform",
                        r.enabled ? "translate-x-5" : "translate-x-0.5"
                      )}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 今日打卡 */}
          <div className="rounded-2xl border border-ink-green/10 bg-cream-light p-6 shadow-soft">
            <div className="mb-5 flex items-center gap-2">
              <Check className="h-5 w-5 text-ochre" />
              <h2 className="font-serif text-xl font-semibold text-ink-green">今日打卡</h2>
            </div>

            {/* 打卡进度环 */}
            <div className="mb-5 flex items-center justify-center">
              <div className="relative h-32 w-32">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="#5A7A6E20" strokeWidth="10" />
                  <circle
                    cx="60" cy="60" r="52" fill="none" stroke="#C97B4A" strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 52}`}
                    strokeDashoffset={`${2 * Math.PI * 52 * (1 - progress / 100)}`}
                    className="transition-all duration-500"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-serif text-3xl font-bold text-ink-green">{progress}%</span>
                  <span className="text-xs text-earth-gray">{completedCount}/{tasks.length} 完成</span>
                </div>
              </div>
            </div>

            {/* 打卡任务列表 */}
            <div className="space-y-2">
              {tasks.map((task) => (
                <button
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all",
                    task.completed
                      ? "border-ink-green/30 bg-ink-green/8"
                      : "border-ink-green/10 bg-cream/40 hover:border-ochre/30"
                  )}
                >
                  <div className={cn(
                    "flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all",
                    task.completed ? "border-ink-green bg-ink-green text-cream" : "border-ink-green/30"
                  )}>
                    {task.completed && <Check className="h-3.5 w-3.5" />}
                  </div>
                  <Icon name={task.icon} className={cn("h-4 w-4", task.completed ? "text-ink-green" : "text-earth-gray")} />
                  <span className={cn("text-sm", task.completed ? "text-ink-green" : "text-earth-brown/80")}>
                    {task.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ===== 家庭联动 ===== */}
        <div className="rounded-2xl border border-ink-green/10 bg-gradient-to-br from-cream-light to-cream-dark p-6 shadow-soft">
          <div className="mb-5 flex items-center gap-2">
            <Users className="h-5 w-5 text-ink-green" />
            <h2 className="font-serif text-xl font-semibold text-ink-green">家庭健康联动</h2>
            <span className="ml-auto rounded-full bg-ink-green/10 px-3 py-1 text-xs text-ink-green">顾自己 + 顾长辈</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {familyMembers.map((member) => (
              <div key={member.name} className="rounded-xl border border-ink-green/10 bg-cream-light p-5">
                <div className="mb-3 flex items-center gap-3">
                  {/* 头像 */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink-green/10 font-serif text-lg font-semibold text-ink-green">
                    {member.name[0]}
                  </div>
                  <div>
                    <div className="font-medium text-ink-green">{member.name}</div>
                    <div className="text-xs text-earth-gray">{member.relation}</div>
                  </div>
                  {member.synced && (
                    <span className="ml-auto flex items-center gap-1 text-[10px] text-ink-green">
                      <span className="h-1.5 w-1.5 rounded-full bg-ink-green animate-pulse" />
                      已同步
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {member.reminders.map((r) => (
                    <span key={r} className="rounded-full bg-ochre/10 px-2.5 py-1 text-[11px] text-ochre-deep">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 底部 CTA */}
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-ink-green p-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-xl font-bold text-cream">坚持每一天，身体会记住</h3>
            <p className="mt-1 text-sm text-cream/60">回到首页，了解更多中年轻养方案</p>
          </div>
          <Link
            to="/"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ochre px-7 py-3 text-sm font-medium text-cream shadow-glow transition-all hover:bg-ochre-deep hover:scale-105"
          >
            返回首页
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * 数据卡片组件
 * 小白说明：展示单项健康数据的数值、变化趋势、迷你折线图
 */
interface MetricProps {
  metric: typeof dataMetrics[number];
}

function DataCard({ metric }: MetricProps) {
  // 迷你折线图数据
  const sparkData = metric.trend.map((v, idx) => ({ idx, value: v }));

  return (
    <div className="rounded-2xl border border-ink-green/10 bg-cream-light p-5 shadow-soft transition-all hover:shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ink-green/8">
          <Icon name={metric.icon} className="h-5 w-5 text-ink-green" />
        </div>
        <span className={cn(
          "flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[10px] font-medium",
          metric.positive ? "bg-ink-green/10 text-ink-green" : "bg-red-50 text-red-600"
        )}>
          {metric.positive ? <TrendingDown className="h-3 w-3" /> : <TrendingUp className="h-3 w-3" />}
          {metric.change}
        </span>
      </div>
      <div className="mb-1 text-xs text-earth-gray">{metric.name}</div>
      <div className="mb-3 flex items-baseline gap-1">
        <span className="font-serif text-3xl font-bold text-ink-green">{metric.value}</span>
        <span className="text-xs text-earth-gray">{metric.unit}</span>
      </div>
      {/* 迷你折线图 */}
      <ResponsiveContainer width="100%" height={40}>
        <AreaChart data={sparkData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id={`grad-${metric.name}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C97B4A" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#C97B4A" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="value" stroke="#C97B4A" strokeWidth={2} fill={`url(#grad-${metric.name})`} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

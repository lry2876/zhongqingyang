import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, Leaf, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import Icon from "@/components/Icon";
import { scenePlans, sleepTimeline } from "@/data/mockData";

/**
 * 调理方案页 - 中轻养计划
 * 小白说明：展示四大生活场景的极简调理方案，用户可以切换场景查看不同方案
 * 还包含一个固定的睡眠修复时间轴
 */

// 四大场景类型
const scenes = ["工位", "居家", "通勤", "应酬"] as const;
type Scene = (typeof scenes)[number];

export default function Plan() {
  // 当前选中的场景
  const [activeScene, setActiveScene] = useState<Scene>("工位");
  // 当前场景的方案列表
  const actions = scenePlans[activeScene];

  return (
    <div className="min-h-screen bg-cream">
      {/* 页面标题区 */}
      <div className="border-b border-ink-green/10 bg-cream-light">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex items-center gap-2 text-xs text-ochre">
            <Leaf className="h-4 w-4" />
            <span className="tracking-widest">FRAGMENTED PLAN</span>
          </div>
          <h1 className="mt-3 font-serif text-4xl font-bold text-ink-green">碎片化极简调理方案</h1>
          <p className="mt-2 text-earth-brown/70">拒绝高强度健身、复杂药膳，适配通勤、办公室、居家、应酬全场景</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* 场景切换标签 */}
        <div className="mb-8 flex flex-wrap gap-2">
          {scenes.map((scene) => (
            <button
              key={scene}
              onClick={() => setActiveScene(scene)}
              className={cn(
                "rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300",
                activeScene === scene
                  ? "bg-ink-green text-cream shadow-soft"
                  : "border border-ink-green/20 text-ink-green hover:border-ochre/50 hover:bg-ochre/5"
              )}
            >
              {scene}场景
            </button>
          ))}
        </div>

        {/* 方案卡片网格 */}
        <div className="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {actions.map((action) => (
            <div
              key={action.id}
              className="group rounded-2xl border border-ink-green/10 bg-cream-light p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ochre/40 hover:shadow-card"
            >
              {/* 卡片头部 */}
              <div className="mb-4 flex items-start justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink-green/8 transition-colors group-hover:bg-ochre/12">
                  <Icon name={action.icon} className="h-6 w-6 text-ink-green transition-colors group-hover:text-ochre" />
                </div>
                <span className="rounded-full bg-ochre/10 px-2.5 py-1 text-[10px] font-medium text-ochre-deep">
                  {action.tag}
                </span>
              </div>

              {/* 标题与时长 */}
              <h3 className="mb-1 font-serif text-lg font-semibold text-ink-green">{action.title}</h3>
              <div className="mb-4 flex items-center gap-1.5 text-xs text-earth-gray">
                <Clock className="h-3.5 w-3.5" />
                {action.duration}
              </div>

              {/* 步骤列表 */}
              <ol className="space-y-2">
                {action.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-earth-brown/75">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink-green/10 text-[10px] font-medium text-ink-green">
                      {idx + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>

              {/* 功效 */}
              <div className="mt-4 border-t border-ink-green/8 pt-3">
                <span className="text-xs text-ochre">{action.effect}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 睡眠修复时间轴 */}
        <div className="rounded-3xl border border-ink-green/10 bg-gradient-to-br from-cream-light to-cream-dark p-8 lg:p-12">
          <div className="mb-8 flex items-center gap-3">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink-green/10">
              <Moon className="h-6 w-6 text-ink-green" />
            </div>
            <div>
              <div className="text-xs tracking-widest text-ochre">SLEEP RECOVERY</div>
              <h2 className="font-serif text-2xl font-bold text-ink-green">分场景睡眠修复流程</h2>
            </div>
          </div>

          <p className="mb-8 max-w-2xl text-sm text-earth-brown/70">
            针对入睡困难、多梦易醒人群，从 21:00 到 23:00 的渐进式睡前流程，帮助身体进入深度修复状态。
          </p>

          {/* 时间轴 */}
          <div className="relative">
            {/* 竖线 */}
            <div className="absolute left-[27px] top-2 bottom-2 w-0.5 bg-ink-green/20 md:left-[79px]" />

            <div className="space-y-6">
              {sleepTimeline.map((item, idx) => (
                <div key={idx} className="relative flex items-start gap-4 md:gap-6">
                  {/* 时间节点 */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink-green/20 bg-cream font-serif text-xs font-bold text-ink-green md:h-16 md:w-16 md:text-sm">
                      {item.time}
                    </div>
                  </div>
                  {/* 内容卡片 */}
                  <div className="flex-1 rounded-xl border border-ink-green/10 bg-cream-light p-5 transition-all hover:border-ochre/30 hover:shadow-soft">
                    <h3 className="mb-1 font-serif text-lg font-semibold text-ink-green">{item.title}</h3>
                    <p className="text-sm text-earth-brown/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 底部 CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl bg-ink-green p-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-xl font-bold text-cream">把这些方案变成日常习惯</h3>
            <p className="mt-1 text-sm text-cream/60">进入健康陪伴看板，设置提醒，开始温和可持续的打卡</p>
          </div>
          <Link
            to="/dashboard"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ochre px-7 py-3 text-sm font-medium text-cream shadow-glow transition-all hover:bg-ochre-deep hover:scale-105"
          >
            进入健康看板
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

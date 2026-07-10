import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Heart, Moon, Activity } from "lucide-react";
import Icon from "@/components/Icon";
import { painPoints, coreModules, highlights } from "@/data/mockData";

/**
 * 首页 - 中轻养计划
 * 小白说明：这是用户进入应用看到的第一个页面，包含品牌主视觉、痛点共鸣、三大功能入口、亮点展示
 * 整体采用东方养生美学风格，墨绿+米白+赭石配色
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      {/* ===== Hero 主视觉区 ===== */}
      <section className="relative overflow-hidden">
        {/* 背景装饰：抽象山水墨绿渐变 */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-0 h-[600px] w-[600px] rounded-full bg-ink-green/15 blur-3xl" />
          <div className="absolute right-20 top-40 h-72 w-72 rounded-full bg-ochre/10 blur-2xl" />
          <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-cream to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          {/* 左侧文案 */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-ink-green/20 bg-cream/60 px-4 py-1.5 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <Sparkles className="h-3.5 w-3.5 text-ochre" />
              <span className="text-xs font-medium tracking-wide text-ink-green">30-50 岁职场中年专属 AI 健康工具</span>
            </div>

            <h1 className="font-serif text-5xl font-bold leading-tight text-ink-green opacity-0 animate-fade-up lg:text-6xl" style={{ animationDelay: "0.25s" }}>
              把碎片化养生
              <br />
              变成<span className="text-ochre">可落地</span>的日常
            </h1>

            <p className="max-w-md text-lg leading-relaxed text-earth-brown/80 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              没时间体检、不懂调理、作息饮食失控——
              <br />
              用 AI 把杂乱养生信息去伪存真，输出适配中年人碎片时间的极简调理方案。
            </p>

            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.55s" }}>
              <Link
                to="/diagnosis"
                className="group inline-flex items-center gap-2 rounded-full bg-ink-green px-8 py-3.5 text-sm font-medium text-cream shadow-soft transition-all hover:bg-ink-greenDeep hover:shadow-card"
              >
                开始 AI 诊断
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/plan"
                className="inline-flex items-center gap-2 rounded-full border border-ink-green/30 px-8 py-3.5 text-sm font-medium text-ink-green transition-all hover:bg-ink-green/8"
              >
                查看调理方案
              </Link>
            </div>

            {/* 信任指标 */}
            <div className="flex gap-8 pt-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.7s" }}>
              <div>
                <div className="font-serif text-3xl font-bold text-ink-green">5 大</div>
                <div className="text-xs text-earth-gray">亚健康类型评估</div>
              </div>
              <div className="border-l border-ink-green/15 pl-8">
                <div className="font-serif text-3xl font-bold text-ink-green">4 类</div>
                <div className="text-xs text-earth-gray">生活场景方案</div>
              </div>
              <div className="border-l border-ink-green/15 pl-8">
                <div className="font-serif text-3xl font-bold text-ochre">0 门槛</div>
                <div className="text-xs text-earth-gray">温和可持续</div>
              </div>
            </div>
          </div>

          {/* 右侧视觉装饰 */}
          <div className="relative hidden h-[500px] lg:block opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* 同心圆装饰 */}
              <div className="absolute h-80 w-80 rounded-full border-2 border-ink-green/20" />
              <div className="absolute h-64 w-64 rounded-full border border-ochre/30 animate-pulse-slow" />
              <div className="absolute h-48 w-48 rounded-full bg-gradient-to-br from-ink-green to-ink-greenLight shadow-card" />
              {/* 中心图标 */}
              <div className="relative z-10 flex flex-col items-center text-cream">
                <Heart className="mb-3 h-12 w-12 animate-float" />
                <span className="font-serif text-xl">轻养 · 长伴</span>
                <span className="mt-1 text-xs tracking-widest text-cream/70">MIDLIFE WELLNESS</span>
              </div>
              {/* 浮动小卡片 */}
              <div className="absolute left-0 top-12 rounded-2xl bg-cream/90 p-4 shadow-card backdrop-blur animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-ochre/15 flex items-center justify-center">
                    <Moon className="h-4 w-4 text-ochre" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-ink-green">睡眠修复</div>
                    <div className="text-[10px] text-earth-gray">21:00 - 23:00</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-16 right-0 rounded-2xl bg-cream/90 p-4 shadow-card backdrop-blur animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-ink-green/15 flex items-center justify-center">
                    <Activity className="h-4 w-4 text-ink-green" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-ink-green">颈椎改善</div>
                    <div className="text-[10px] text-earth-gray">本周 -2 次</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 痛点共鸣区 ===== */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-14 text-center">
          <span className="text-xs font-medium tracking-widest text-ochre">PAIN POINTS</span>
          <h2 className="mt-3 font-serif text-4xl font-bold text-ink-green">中年人的身体，在悄悄透支</h2>
          <p className="mt-4 text-earth-brown/70">五大亚健康困扰，你中了几个？</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point, idx) => (
            <div
              key={point.title}
              className="group rounded-2xl border border-ink-green/10 bg-cream-light p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-ochre/40 hover:shadow-card"
              style={{ gridColumn: idx === 4 ? "span 1" : undefined }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink-green/8 transition-colors group-hover:bg-ochre/12">
                <Icon name={point.icon} className="h-6 w-6 text-ink-green transition-colors group-hover:text-ochre" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-semibold text-ink-green">{point.title}</h3>
              <p className="mb-3 text-sm leading-relaxed text-earth-brown/70">{point.desc}</p>
              <div className="border-t border-ink-green/8 pt-3">
                <span className="text-xs font-medium text-ochre">{point.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 三大模块入口 ===== */}
      <section className="bg-ink-green py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <span className="text-xs font-medium tracking-widest text-ochre-light">CORE MODULES</span>
            <h2 className="mt-3 font-serif text-4xl font-bold text-cream">三大核心模块，全链路守护</h2>
            <p className="mt-4 text-cream/60">从诊断到调理，再到长期陪伴，一站式解决中年健康问题</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {coreModules.map((mod) => (
              <Link
                key={mod.no}
                to={mod.route}
                className="group relative overflow-hidden rounded-2xl border border-cream/15 bg-cream/5 p-8 transition-all duration-300 hover:bg-cream/10 hover:shadow-glow"
              >
                <div className="absolute right-6 top-6 font-serif text-6xl font-bold text-cream/10 transition-colors group-hover:text-ochre/30">
                  {mod.no}
                </div>
                <div className="relative">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-ochre/20 transition-transform group-hover:scale-110">
                    <Icon name={mod.icon} className="h-7 w-7 text-ochre-light" />
                  </div>
                  <h3 className="mb-3 font-serif text-2xl font-semibold text-cream">{mod.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-cream/60">{mod.desc}</p>
                  <div className="inline-flex items-center gap-1.5 text-sm font-medium text-ochre-light">
                    进入模块
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 差异化亮点 ===== */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-14 text-center">
          <span className="text-xs font-medium tracking-widest text-ochre">WHY US</span>
          <h2 className="mt-3 font-serif text-4xl font-bold text-ink-green">为什么选择中轻养</h2>
          <p className="mt-4 text-earth-brown/70">四差异化亮点，贴合中年人真实需求</p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-ink-green/10 bg-ink-green/10 sm:grid-cols-2">
          {highlights.map((item, idx) => (
            <div key={item.title} className="bg-cream-light p-8 transition-colors hover:bg-cream">
              <div className="flex items-start gap-4">
                <span className="font-serif text-3xl font-bold text-ochre">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-2 font-serif text-xl font-semibold text-ink-green">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-earth-brown/70">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 底部 CTA ===== */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink-green to-ink-greenDeep px-8 py-16 text-center">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-ochre/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-ochre/10 blur-3xl" />
          </div>
          <div className="relative">
            <h2 className="font-serif text-3xl font-bold text-cream lg:text-4xl">
              从今天开始，用 AI 修复身体状态
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-cream/60">
              不必大动干戈，每天 5 分钟，温和可持续地把健康找回来
            </p>
            <Link
              to="/diagnosis"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ochre px-8 py-3.5 text-sm font-medium text-cream shadow-glow transition-all hover:bg-ochre-deep hover:scale-105"
            >
              免费开始 AI 诊断
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

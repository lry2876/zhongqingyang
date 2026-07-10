import { useState } from "react";
import { Link } from "react-router-dom";
import {
  RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer,
} from "recharts";
import {
  ArrowRight, ArrowLeft, Check, Upload, Loader2, AlertTriangle,
  TrendingUp, FileText, Stethoscope,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { surveySteps, healthReport, radarData } from "@/data/mockData";

/**
 * AI 诊断页 - 中轻养计划
 * 小白说明：这个页面让用户填写症状问卷，然后模拟 AI 分析，最后展示亚健康报告
 * 包含三个阶段：问卷填写 → AI 分析中 → 报告详情
 */
type Phase = "survey" | "loading" | "report";

export default function Diagnosis() {
  // 当前阶段：问卷 / 加载中 / 报告
  const [phase, setPhase] = useState<Phase>("survey");
  // 当前问卷步骤（0-3）
  const [step, setStep] = useState(0);
  // 用户选中的症状（按步骤分组）
  const [selected, setSelected] = useState<Record<number, string[]>>({});

  // 切换选项选中状态
  const toggleOption = (option: string) => {
    setSelected((prev) => {
      const current = prev[step] ?? [];
      return {
        ...prev,
        [step]: current.includes(option)
          ? current.filter((o) => o !== option)
          : [...current, option],
      };
    });
  };

  // 开始 AI 分析
  const startAnalysis = () => {
    setPhase("loading");
    // 模拟 AI 分析过程，3 秒后显示报告
    setTimeout(() => setPhase("report"), 3200);
  };

  // 重新开始
  const restart = () => {
    setPhase("survey");
    setStep(0);
    setSelected({});
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* 页面标题区 */}
      <div className="border-b border-ink-green/10 bg-cream-light">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="flex items-center gap-2 text-xs text-ochre">
            <Stethoscope className="h-4 w-4" />
            <span className="tracking-widest">AI DIAGNOSIS</span>
          </div>
          <h1 className="mt-3 font-serif text-4xl font-bold text-ink-green">AI 亚健康智能诊断</h1>
          <p className="mt-2 text-earth-brown/70">轻量化问卷 + AI 分层评估，3 分钟输出专属亚健康报告</p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-12">
        {phase === "survey" && (
          <SurveyForm
            step={step}
            setStep={setStep}
            selected={selected}
            toggleOption={toggleOption}
            onComplete={startAnalysis}
          />
        )}
        {phase === "loading" && <LoadingView />}
        {phase === "report" && <ReportView onRestart={restart} />}
      </div>
    </div>
  );
}

/**
 * 问卷表单组件
 * 小白说明：展示当前步骤的问题和选项，用户多选后进入下一步
 */
interface SurveyFormProps {
  step: number;
  setStep: (fn: (s: number) => number) => void;
  selected: Record<number, string[]>;
  toggleOption: (option: string) => void;
  onComplete: () => void;
}

function SurveyForm({ step, setStep, selected, toggleOption, onComplete }: SurveyFormProps) {
  const current = surveySteps[step];
  const selectedItems = selected[step] ?? [];
  const isLast = step === surveySteps.length - 1;

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      {/* 左侧步骤进度条 */}
      <div className="space-y-1">
        <div className="mb-4 text-xs font-medium tracking-widest text-earth-gray">填写进度</div>
        {surveySteps.map((s, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-xs font-medium transition-all",
                idx < step && "border-ink-green bg-ink-green text-cream",
                idx === step && "border-ochre bg-ochre/10 text-ochre",
                idx > step && "border-ink-green/20 text-earth-gray"
              )}
            >
              {idx < step ? <Check className="h-4 w-4" /> : idx + 1}
            </div>
            <span className={cn("text-sm", idx === step ? "font-medium text-ink-green" : "text-earth-gray")}>
              {s.title}
            </span>
          </div>
        ))}
        {/* 进度线 */}
        <div className="mt-4 h-1 overflow-hidden rounded-full bg-ink-green/10">
          <div
            className="h-full rounded-full bg-ochre transition-all duration-500"
            style={{ width: `${((step + 1) / surveySteps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* 右侧问卷内容 */}
      <div className="rounded-2xl border border-ink-green/10 bg-cream-light p-8 shadow-soft">
        <div className="mb-2 text-xs font-medium tracking-widest text-ochre">
          第 {step + 1} 步 / 共 {surveySteps.length} 步
        </div>
        <h2 className="mb-2 font-serif text-2xl font-bold text-ink-green">{current.title}</h2>
        <p className="mb-6 text-sm text-earth-brown/70">{current.desc}</p>

        {/* 选项标签 */}
        <div className="flex flex-wrap gap-2.5">
          {current.options.map((option) => {
            const active = selectedItems.includes(option);
            return (
              <button
                key={option}
                onClick={() => toggleOption(option)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-all",
                  active
                    ? "border-ink-green bg-ink-green text-cream shadow-soft"
                    : "border-ink-green/20 text-ink-green hover:border-ochre/50 hover:bg-ochre/5"
                )}
              >
                {active && <Check className="mr-1 inline h-3.5 w-3.5" />}
                {option}
              </button>
            );
          })}
        </div>

        {/* 体检报告上传（最后一步显示） */}
        {isLast && (
          <div className="mt-6 rounded-xl border border-dashed border-ink-green/30 bg-cream/50 p-6 text-center">
            <Upload className="mx-auto mb-2 h-8 w-8 text-ink-green/50" />
            <p className="text-sm text-earth-brown/70">上传体检报告照片（可选，帮助 AI 更精准评估）</p>
            <button className="mt-3 rounded-full border border-ink-green/30 px-5 py-1.5 text-xs text-ink-green transition-colors hover:bg-ink-green/8">
              选择文件
            </button>
          </div>
        )}

        {/* 操作按钮 */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-all",
              step === 0
                ? "cursor-not-allowed text-earth-gray/40"
                : "text-ink-green hover:bg-ink-green/8"
            )}
          >
            <ArrowLeft className="h-4 w-4" />
            上一步
          </button>

          {isLast ? (
            <button
              onClick={onComplete}
              className="inline-flex items-center gap-2 rounded-full bg-ochre px-7 py-2.5 text-sm font-medium text-cream shadow-glow transition-all hover:bg-ochre-deep hover:scale-105"
            >
              生成 AI 报告
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={() => setStep((s) => Math.min(surveySteps.length - 1, s + 1))}
              className="inline-flex items-center gap-2 rounded-full bg-ink-green px-7 py-2.5 text-sm font-medium text-cream shadow-soft transition-all hover:bg-ink-greenDeep"
            >
              下一步
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * AI 分析加载动画
 * 小白说明：模拟 AI 正在分析数据的过程，让用户有等待感
 */
function LoadingView() {
  return (
    <div className="flex flex-col items-center justify-center py-32">
      <div className="relative">
        <div className="absolute inset-0 animate-ping rounded-full bg-ochre/20" />
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-ink-green shadow-card">
          <Loader2 className="h-10 w-10 animate-spin text-cream" />
        </div>
      </div>
      <h2 className="mt-8 font-serif text-2xl font-bold text-ink-green">AI 正在分析您的健康状况</h2>
      <div className="mt-4 space-y-2 text-center text-sm text-earth-brown/60">
        <p className="animate-pulse-slow">正在解析症状数据…</p>
        <p className="animate-pulse-slow" style={{ animationDelay: "0.8s" }}>正在评估五大亚健康风险…</p>
        <p className="animate-pulse-slow" style={{ animationDelay: "1.6s" }}>正在生成个性化建议…</p>
      </div>
    </div>
  );
}

/**
 * 报告详情组件
 * 小白说明：展示 AI 生成的亚健康报告，包含总体评分、雷达图、各类风险详情
 */
function ReportView({ onRestart }: { onRestart: () => void }) {
  const score = healthReport.overallScore;
  const levelColor =
    score >= 70 ? "text-red-600 bg-red-50"
    : score >= 50 ? "text-ochre bg-ochre/10"
    : "text-ink-green bg-ink-green/10";

  return (
    <div className="space-y-6">
      {/* 总体风险横幅 */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-ink-green to-ink-greenDeep p-8 text-cream">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-ochre/15 blur-3xl" />
        <div className="relative flex items-center justify-between">
          <div>
            <div className="text-xs tracking-widest text-cream/60">YOUR HEALTH REPORT</div>
            <h2 className="mt-2 font-serif text-3xl font-bold">亚健康风险评估报告</h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-cream/70">{healthReport.summary}</p>
          </div>
          <div className="text-center">
            <div className="font-serif text-5xl font-bold text-ochre-light">{score}</div>
            <div className="text-xs text-cream/60">综合评分</div>
          </div>
        </div>
        <div className={cn("relative mt-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium", levelColor)}>
          <AlertTriangle className="h-4 w-4" />
          风险等级：{healthReport.overallLevel}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        {/* 雷达图 */}
        <div className="rounded-2xl border border-ink-green/10 bg-cream-light p-6 shadow-soft">
          <h3 className="mb-4 font-serif text-lg font-semibold text-ink-green">五维风险雷达</h3>
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#5A7A6E30" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: "#3D2E1F", fontSize: 12 }} />
              <Radar dataKey="score" stroke="#C97B4A" fill="#C97B4A" fillOpacity={0.4} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* 风险项列表 */}
        <div className="space-y-3">
          <h3 className="font-serif text-lg font-semibold text-ink-green">各类风险详情</h3>
          {healthReport.riskItems.map((item) => (
            <div key={item.category} className="rounded-xl border border-ink-green/10 bg-cream-light p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-ink-green">{item.category}</span>
                  <span className={cn(
                    "rounded-full px-2 py-0.5 text-[10px] font-medium",
                    item.level === "重度" ? "bg-red-100 text-red-700"
                    : item.level === "中度" ? "bg-ochre/15 text-ochre-deep"
                    : "bg-ink-green/10 text-ink-green"
                  )}>
                    {item.level}
                  </span>
                </div>
                <span className="font-serif text-lg font-bold text-ochre">{item.score}</span>
              </div>
              <div className="mt-2 space-y-1 text-xs text-earth-brown/70">
                <p><span className="text-ochre-deep">预警：</span>{item.warning}</p>
                <p><span className="text-ochre-deep">建议：</span>{item.advice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-ink-green/10 bg-cream-light p-6">
        <div className="flex items-center gap-3">
          <FileText className="h-8 w-8 text-ink-green/60" />
          <div>
            <div className="text-sm font-medium text-ink-green">查看个性化调理方案</div>
            <div className="text-xs text-earth-brown/60">基于报告推荐适配碎片时间的极简方案</div>
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={onRestart} className="inline-flex items-center gap-1.5 rounded-full border border-ink-green/30 px-5 py-2.5 text-sm text-ink-green transition-colors hover:bg-ink-green/8">
            重新评估
          </button>
          <Link to="/plan" className="inline-flex items-center gap-2 rounded-full bg-ink-green px-6 py-2.5 text-sm font-medium text-cream shadow-soft transition-all hover:bg-ink-greenDeep">
            <TrendingUp className="h-4 w-4" />
            查看调理方案
          </Link>
        </div>
      </div>
    </div>
  );
}

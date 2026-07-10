/**
 * Mock 数据文件 - 中轻养计划
 * 存放所有页面的模拟数据，包括痛点、模块入口、诊断报告、调理方案、健康看板数据
 * 小白说明：这个文件就像一个"数据仓库"，把所有要展示的内容提前写好，页面直接拿来用
 */

// ========== 首页数据 ==========

// 五大亚健康痛点类型
export const painPoints = [
  {
    icon: "Smartphone",
    title: "颈椎劳损",
    desc: "久坐伏案、低头手机，肩颈僵硬、腰背酸痛成为日常",
    stat: "78% 中年职场人存在颈椎问题",
  },
  {
    icon: "Moon",
    title: "睡眠障碍",
    desc: "入睡难、多梦易醒、深度睡眠不足，越累越睡不着",
    stat: "每 3 位中年人就有 1 位失眠",
  },
  {
    icon: "Activity",
    title: "代谢亚健康",
    desc: "脂肪肝、高血脂、腹型肥胖，代谢每年都在下滑",
    stat: "40 岁后代谢率每 10 年降 5%",
  },
  {
    icon: "Brain",
    title: "压力焦虑",
    desc: "工作内卷、家庭经济、子女教育，长期精神内耗",
    stat: "中年群体焦虑发生率达 42%",
  },
  {
    icon: "Droplet",
    title: "气血不足",
    desc: "乏力易累、换季易感冒、心慌气短，免疫力持续走低",
    stat: "超半数中年人自评精力不足",
  },
];

// 三大核心模块入口
export const coreModules = [
  {
    no: "01",
    title: "AI 智能诊断",
    desc: "轻量化问卷 + 体检报告，AI 分层评估五大亚健康风险，输出专属报告",
    icon: "Stethoscope",
    route: "/diagnosis",
  },
  {
    no: "02",
    title: "碎片化调理",
    desc: "工位 5 分钟修复操、简易食疗、睡眠修复，适配中年人碎片时间",
    icon: "Leaf",
    route: "/plan",
  },
  {
    no: "03",
    title: "长期健康陪伴",
    desc: "智能提醒、数据看板、温和打卡、家庭联动，可持续的健康管理",
    icon: "HeartHandshake",
    route: "/dashboard",
  },
];

// 差异化亮点
export const highlights = [
  {
    title: "垂直中年赛道",
    desc: "市面上健康 APP 多面向年轻人或老年人，专为中年职场人设计的完整康养工具极少",
  },
  {
    title: "低门槛无负担",
    desc: "不强制运动、不苛刻节食，贴合中年人客观时间精力，拒绝内卷式养生",
  },
  {
    title: "AI 去伪存真",
    desc: "自动辨别网络养生谣言，方案基于中西医温和调理逻辑，安全无极端偏方",
  },
  {
    title: "全链路 TRAE 实现",
    desc: "TRAE Work 梳理需求协作，TRAE IDE 完成开发，完整展示平台工具链能力",
  },
];

// ========== AI 诊断页数据 ==========

// 问卷步骤
export const surveySteps = [
  {
    title: "身体症状",
    desc: "选择你近期出现的身体不适（可多选）",
    options: [
      "肩颈僵硬酸痛",
      "腰背疼痛",
      "入睡困难",
      "多梦易醒",
      "头晕头痛",
      "乏力易累",
      "心慌气短",
      "腹胀消化不良",
      "视力模糊干涩",
      "情绪低落焦虑",
    ],
  },
  {
    title: "作息习惯",
    desc: "你的日常作息情况",
    options: ["经常熬夜（12 点后睡）", "睡眠不足 6 小时", "久坐超 8 小时", "缺乏规律运动", "经常加班应酬", "作息不规律"],
  },
  {
    title: "饮食情况",
    desc: "你的饮食习惯",
    options: ["外卖为主", "高油高盐", "应酬喝酒频繁", "蔬果摄入少", "暴饮暴食", "经常不吃早餐"],
  },
  {
    title: "压力状态",
    desc: "近期心理压力感受",
    options: ["工作压力大", "家庭经济负担重", "子女教育焦虑", "父母养老压力", "人际关系紧张", "对未来迷茫"],
  },
];

// AI 诊断报告 Mock 数据
export const healthReport = {
  overallLevel: "中度风险",
  overallScore: 58,
  summary:
    "综合评估显示，您处于中度亚健康状态。主要风险集中在颈椎劳损、睡眠障碍与代谢亚健康三个方面，建议优先进行针对性调理，3 个月后复查。",
  riskItems: [
    {
      category: "颈椎劳损",
      level: "中度",
      score: 72,
      warning: "已出现持续性肩颈僵硬，若不干预可能发展为颈椎病",
      consequence: "长期可导致颈椎间盘突出、神经压迫，影响上肢活动",
      advice: "每日工位 5 分钟肩颈修复操，调整坐姿，每 40 分钟起身活动",
    },
    {
      category: "睡眠障碍",
      level: "中度",
      score: 68,
      warning: "入睡困难且深度睡眠不足，影响身体修复",
      consequence: "长期失眠增加心脑血管疾病风险，加速衰老",
      advice: "建立固定睡前流程，22:30 前放下手机，尝试呼吸放松法",
    },
    {
      category: "代谢亚健康",
      level: "轻度",
      score: 55,
      warning: "腹型肥胖趋势明显，血脂指标偏高",
      consequence: "5 年内脂肪肝、高血脂风险显著增加",
      advice: "减少应酬饮酒，增加粗粮蔬菜，每周 3 次快走 30 分钟",
    },
    {
      category: "压力焦虑",
      level: "轻度",
      score: 48,
      warning: "长期精神紧张，已出现躯体化不适",
      consequence: "持续焦虑可诱发高血压、内分泌紊乱",
      advice: "每日 10 分钟正念呼吸，培养碎片化解压习惯",
    },
    {
      category: "气血不足",
      level: "轻度",
      score: 42,
      warning: "精力下降，换季易感冒",
      consequence: "免疫力持续走低，慢性疲劳综合征风险",
      advice: "食疗补气血，保证蛋白质摄入，适度户外活动",
    },
  ],
};

// 雷达图数据
export const radarData = healthReport.riskItems.map((item) => ({
  subject: item.category,
  score: item.score,
  fullMark: 100,
}));

// ========== 调理方案页数据 ==========

// 四大场景方案
export const scenePlans = {
  工位: [
    {
      id: "w1",
      title: "肩颈 5 分钟释放操",
      duration: "5 分钟",
      steps: ["坐姿颈部环绕 ×8 次", "肩胛骨夹紧 ×10 次", "胸部拉伸 ×30 秒", "颈部侧屈 ×各 15 秒"],
      effect: "缓解肩颈僵硬，改善头部供血",
      icon: "PersonStanding",
      tag: "修复操",
    },
    {
      id: "w2",
      title: "护眼 3 分钟远眺法",
      duration: "3 分钟",
      steps: ["闭眼深呼吸 ×5 次", "眼球转动 ×8 圈", "远眺窗外 1 分钟", "掌心热敷双眼 30 秒"],
      effect: "缓解视疲劳，预防干眼症",
      icon: "Eye",
      tag: "修复操",
    },
    {
      id: "w3",
      title: "腰椎舒缓伸展",
      duration: "4 分钟",
      steps: ["坐姿前屈 ×8 次", "腰部扭转 ×各 10 次", "骨盆前后倾 ×10 次", "靠墙站立 1 分钟"],
      effect: "放松腰背肌群，减轻腰椎压力",
      icon: "PersonStanding",
      tag: "修复操",
    },
  ],
  居家: [
    {
      id: "h1",
      title: "简易养肝小米粥",
      duration: "30 分钟",
      steps: ["小米 50g 淘洗", "加水 800ml 煮沸", "转小火 20 分钟", "加枸杞焖 5 分钟"],
      effect: "养肝明目，温和补脾胃",
      icon: "Soup",
      tag: "食疗",
    },
    {
      id: "h2",
      title: "降压芹菜炒香干",
      duration: "15 分钟",
      steps: ["芹菜切段焯水", "香干切条", "少油爆香蒜末", "大火快炒 3 分钟"],
      effect: "辅助降压，补充植物蛋白",
      icon: "Soup",
      tag: "食疗",
    },
    {
      id: "h3",
      title: "睡前泡脚安神方",
      duration: "20 分钟",
      steps: ["40℃ 温水没过脚踝", "加艾草包或生姜片", "浸泡 15-20 分钟", "擦干后按摩涌泉穴"],
      effect: "温通经络，助眠安神",
      icon: "Droplet",
      tag: "睡眠",
    },
  ],
  通勤: [
    {
      id: "c1",
      title: "地铁站立微运动",
      duration: "随时",
      steps: ["踮脚提踵 ×20 次", "收腹提肛 ×30 次", "肩胛骨下沉 ×10 次", "颈部微动 ×8 次"],
      effect: "利用通勤时间改善循环",
      icon: "Footprints",
      tag: "修复操",
    },
    {
      id: "c2",
      title: "呼吸减压法",
      duration: "3 分钟",
      steps: ["4 秒缓慢吸气", "7 秒屏息保持", "8 秒缓慢呼气", "重复 4 个循环"],
      effect: "快速平复焦虑，降低心率",
      icon: "Wind",
      tag: "解压",
    },
  ],
  应酬: [
    {
      id: "p1",
      title: "酒前护肝预案",
      duration: "餐前",
      steps: ["喝 300ml 温水垫胃", "吃一份酸奶或牛奶", "提前补充 B 族维生素", "避免空腹饮酒"],
      effect: "保护胃黏膜，减轻肝脏负担",
      icon: "Shield",
      tag: "护肝",
    },
    {
      id: "p2",
      title: "酒后解酒方",
      duration: "餐后",
      steps: ["蜂蜜温水 300ml", "香蕉 1 根补钾", "温热小米粥养胃", "避免浓茶咖啡"],
      effect: "加速酒精代谢，缓解不适",
      icon: "CupSoda",
      tag: "护肝",
    },
    {
      id: "p3",
      title: "高压 5 分钟解压",
      duration: "5 分钟",
      steps: ["闭眼深呼吸 ×10 次", "肩颈放松 ×8 次", "正念冥想 3 分钟", "喝一杯温水"],
      effect: "快速缓解精神紧张",
      icon: "Brain",
      tag: "解压",
    },
  ],
};

// 睡眠修复时间轴
export const sleepTimeline = [
  {
    time: "21:00",
    title: "停止高强度用脑",
    desc: "放下工作，避免蓝光刺激，开始进入放松状态",
  },
  {
    time: "21:30",
    title: "温水泡脚 15 分钟",
    desc: "40℃ 温水加艾草，引血下行，温通经络",
  },
  {
    time: "22:00",
    title: "睡前拉伸 5 分钟",
    desc: "肩颈、腰部轻柔拉伸，释放一天肌肉紧张",
  },
  {
    time: "22:30",
    title: "4-7-8 呼吸法",
    desc: "4 秒吸气、7 秒屏息、8 秒呼气，循环 4 次，激活副交感神经",
  },
  {
    time: "23:00",
    title: "入睡",
    desc: "保持卧室黑暗安静，室温 22-24℃，进入深度修复睡眠",
  },
];

// ========== 健康陪伴看板数据 ==========

// 数据概览卡片
export const dataMetrics = [
  {
    name: "睡眠时长",
    value: 6.2,
    unit: "h",
    change: "+0.3h",
    trend: [5.5, 5.8, 6.0, 5.7, 6.1, 6.0, 6.2],
    positive: true,
    icon: "Moon",
  },
  {
    name: "颈椎不适",
    value: 4,
    unit: "次/周",
    change: "-2 次",
    trend: [8, 7, 6, 6, 5, 5, 4],
    positive: true,
    icon: "Activity",
  },
  {
    name: "压力指数",
    value: 62,
    unit: "分",
    change: "-8 分",
    trend: [75, 72, 70, 68, 65, 64, 62],
    positive: true,
    icon: "Brain",
  },
  {
    name: "体重",
    value: 72.5,
    unit: "kg",
    change: "-0.8kg",
    trend: [74, 73.8, 73.5, 73.3, 73.0, 72.8, 72.5],
    positive: true,
    icon: "Scale",
  },
];

// 趋势折线图数据（近 7 天）
export const trendChartData = [
  { day: "周一", sleep: 5.5, stress: 75 },
  { day: "周二", sleep: 5.8, stress: 72 },
  { day: "周三", sleep: 6.0, stress: 70 },
  { day: "周四", sleep: 5.7, stress: 68 },
  { day: "周五", sleep: 6.1, stress: 65 },
  { day: "周六", sleep: 6.0, stress: 64 },
  { day: "周日", sleep: 6.2, stress: 62 },
];

// 智能提醒列表
export const reminders = [
  { id: "r1", name: "喝水提醒", time: "每 2 小时", enabled: true, icon: "Droplet" },
  { id: "r2", name: "肩颈拉伸", time: "10:30 / 15:30", enabled: true, icon: "PersonStanding" },
  { id: "r3", name: "早睡提醒", time: "22:30", enabled: true, icon: "Moon" },
  { id: "r4", name: "控糖提醒", time: "餐前", enabled: false, icon: "Apple" },
  { id: "r5", name: "复查体检", time: "每月 1 日", enabled: true, icon: "ClipboardCheck" },
];

// 每日打卡任务
export const checkinTasks = [
  { id: "t1", name: "喝水 8 杯", completed: true, icon: "Droplet" },
  { id: "t2", name: "肩颈操 1 次", completed: true, icon: "PersonStanding" },
  { id: "t3", name: "23 点前入睡", completed: false, icon: "Moon" },
  { id: "t4", name: "步行 6000 步", completed: true, icon: "Footprints" },
  { id: "t5", name: "蔬果 500g", completed: false, icon: "Apple" },
];

// 家庭成员健康提醒
export const familyMembers = [
  {
    name: "父亲",
    relation: "长辈",
    reminders: ["降压药服用", "血压记录", "晨起散步"],
    synced: true,
  },
  {
    name: "母亲",
    relation: "长辈",
    reminders: ["血糖监测", "关节保暖", "定期复查"],
    synced: true,
  },
];

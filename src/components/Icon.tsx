import {
  Smartphone, Moon, Activity, Brain, Droplet, Stethoscope, Leaf, HeartHandshake,
  PersonStanding, Eye, Soup, Footprints, Wind, Shield, CupSoda, Apple, Scale,
  ClipboardCheck, type LucideIcon,
} from "lucide-react";

/**
 * 图标映射组件
 * 小白说明：数据里图标用的是字符串名字（比如 "Moon"），
 * 这个组件负责把字符串名字转换成真正的图标显示出来
 */

// 图标名字到 lucide 图标组件的映射表
const iconMap: Record<string, LucideIcon> = {
  Smartphone, Moon, Activity, Brain, Droplet, Stethoscope, Leaf, HeartHandshake,
  PersonStanding, Eye, Soup, Footprints, Wind, Shield, CupSoda, Apple, Scale,
  ClipboardCheck,
};

interface IconProps {
  name: string;        // 图标名字
  className?: string;  // 样式类名
}

export default function Icon({ name, className }: IconProps) {
  const IconComponent = iconMap[name] ?? Leaf; // 找不到就用叶子图标兜底
  return <IconComponent className={className} />;
}

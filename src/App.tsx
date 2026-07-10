import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Diagnosis from "@/pages/Diagnosis";
import Plan from "@/pages/Plan";
import Dashboard from "@/pages/Dashboard";

/**
 * 应用根组件 - 中轻养计划
 * 小白说明：这是整个应用的入口，负责配置页面路由
 * 顶部导航栏 Navbar 在所有页面都显示，下方根据路径切换不同页面
 */
export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diagnosis" element={<Diagnosis />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

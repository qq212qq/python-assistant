'use client';

import { useEffect } from 'react';
import {
  BookOpen, Code2, MessageSquareText, Lightbulb, Brain,
  Target, Users, ArrowRight, Sparkles, GraduationCap,
  Bot, Telescope, Zap, QrCode, ClipboardList, BarChart3,
  RefreshCw, School,
} from 'lucide-react';
import { QRCodeDisplay } from '@/components/qr-code';

const domain =
  typeof window !== 'undefined'
    ? window.location.origin
    : 'https://python-assistant.example.com';

function useFadeInOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );
    document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const features = [
  {
    icon: MessageSquareText, title: '随时答疑',
    description: 'Python语法、代码报错、作业思路——遇到问题随时提问，智能助教即时解答，不再受课堂时间限制。',
  },
  {
    icon: Code2, title: '代码纠错',
    description: '粘贴你的代码，助教帮你找出Bug、分析错误原因、给出修改建议，像一位耐心的学长在旁边指导。',
  },
  {
    icon: ClipboardList, title: '练习题库',
    description: '基础语法题、综合案例题、小项目实战——分层次、分章节的练习体系，满足从入门到熟练各阶段需求。',
  },
  {
    icon: Brain, title: '知识点讲解',
    description: '变量与数据类型、分支与循环、函数与模块、文件操作、面向对象……每个知识点都有清晰讲解与配套示例。',
  },
  {
    icon: BarChart3, title: '学习记录',
    description: '做了多少题、错在哪里、薄弱知识点是哪些——学习数据全记录，让进步看得见，复习有方向。',
  },
  {
    icon: RefreshCw, title: '反馈与提升',
    description: '每次练习即时反馈，错题自动归集，举一反三推荐同类题目，从不会到会，从会到熟练。',
  },
];

const principles = [
  {
    icon: Users, title: '以学生为中心',
    items: ['尊重个体差异，提供自适应学习内容', '支持自主探究与个性化学习节奏', '关注每个学生学会什么、能做什么'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Target, title: 'OBE 成果导向',
    items: ['明确课程能力目标与学习成果', '反向设计教学内容与评价体系', '以"能独立写 Python 代码"为核心标准'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Zap, title: '数智化转型',
    items: ['AI 赋能实现教学全流程数字化', '数据驱动精准教学决策', '突破传统教学的时空局限'],
    color: 'from-violet-500 to-purple-500',
  },
];

export default function Home() {
  useFadeInOnScroll();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* ===== HERO ===== */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-white to-cyan-500/5" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-[10%] top-20 hidden text-[0.6rem] leading-relaxed text-blue-300/30 lg:block font-mono select-none">
          {`def hello():\n    print("Hello, Python!")\n    return 42`}
        </div>
        <div className="absolute left-[8%] bottom-20 hidden text-[0.6rem] leading-relaxed text-cyan-300/30 lg:block font-mono select-none">
          {`import numpy as np\n\ndata = np.array([1,2,3])\nmean = np.mean(data)`}
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 sm:pb-28 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
              <Sparkles className="h-4 w-4" />
              《Python程序设计》智能教学升级
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
                Python程序设计
              </span>
              <br />
              <span className="text-slate-800">课程智能助教 / 学伴</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-slate-600 sm:text-xl">
              以 AI 大语言模型为驱动，融合 OBE 成果导向教育理念，
              打造「学生为中心」的编程学习智能伙伴，让 Python 学习更高效、更有趣、更个性。
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href="#overview"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02]">
                了解更多 <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#qrcode"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:shadow-md">
                <QrCode className="h-4 w-4" /> 访问入口
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ===== 一、智能助教/学伴概述 ===== */}
      <section id="overview" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* 开篇概述 */}
          <div className="fade-in-up mx-auto max-w-4xl opacity-0 transition-all duration-700 translate-y-8 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 sm:p-10">
              <div className="flex items-start gap-4">
                <School className="mt-1 h-8 w-8 shrink-0 text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">智能助教 / 学伴 是什么？</h3>
                  <p className="mt-3 leading-relaxed text-slate-700">
                    《Python程序设计》课程智能助教/学伴是基于 AI 大语言模型开发的编程学习智能辅助工具。
                    它就像一位 <strong className="text-blue-700">24小时在线的学长/学姐</strong>，
                    随时随地陪伴学生学 Python——解答语法疑问、纠正代码错误、推荐练习题目、记录学习进展。
                    目的是解决传统编程教学中
                    <strong className="text-blue-700">学生基础差异大、课后无人答疑、练习反馈慢、容易放弃</strong>
                    等核心问题，让每位学生都能获得及时、个性化的学习支持。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 1. 开发缘由 */}
          <div className="fade-in-up mt-16 opacity-0 transition-all duration-700 translate-y-8 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-sm font-bold text-red-600">1</span>
              <h3 className="text-2xl font-bold text-slate-900">开发缘由——解决什么问题？</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: '学生基础差异大，老师顾不过来', desc: '同一个班级中，有零基础新生也有编程爱好者，统一进度难以兼顾所有人。', icon: Users },
                { title: '课后没人答疑，代码报错没人帮', desc: '课后遇到Python语法报错、运行异常，找不到人指导，问题越积越多。', icon: MessageSquareText },
                { title: '练习少、反馈慢、容易放弃', desc: '编程需要大量练习，但作业提交后反馈周期长，学生无法及时知道对错。', icon: ClipboardList },
                { title: '写作业/上机没人实时指导', desc: '上机实践时遇到卡点无人及时点拨，学习效率低，挫败感强。', icon: Code2 },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 rounded-xl border border-red-100 bg-red-50/50 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{item.title}</h4>
                    <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. 功能特点 */}
          <div className="fade-in-up mt-16 opacity-0 transition-all duration-700 translate-y-8 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">2</span>
              <h3 className="text-2xl font-bold text-slate-900">功能特点——它能干啥？</h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-blue-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md transition-all group-hover:scale-110 group-hover:shadow-lg">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h4 className="mt-5 text-lg font-semibold text-slate-900">{feature.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. 在课程里的作用 */}
          <div className="fade-in-up mt-16 opacity-0 transition-all duration-700 translate-y-8 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-sm font-bold text-emerald-600">3</span>
              <h3 className="text-2xl font-bold text-slate-900">在课程里的作用</h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600"><GraduationCap className="h-6 w-6" /></div>
                <h4 className="mt-4 text-lg font-semibold text-slate-900">帮老师</h4>
                <ul className="mt-3 space-y-2">
                  {['减轻课后答疑负担', '辅助作业批改与辅导', '释放精力用于教学设计创新'].map(i => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />{i}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600"><Users className="h-6 w-6" /></div>
                <h4 className="mt-4 text-lg font-semibold text-slate-900">帮学生</h4>
                <ul className="mt-3 space-y-2">
                  {['随时学、随时练、随时问', '降低编程入门难度与门槛', '获得即时、个性化的学习反馈'].map(i => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />{i}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600"><BookOpen className="h-6 w-6" /></div>
                <h4 className="mt-4 text-lg font-semibold text-slate-900">补短板</h4>
                <ul className="mt-3 space-y-2">
                  {['课后、假期也能持续学', '机房之外的学习场景全覆盖', '缩小基础差异，不让一个同学掉队'].map(i => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 二、赋能教学的理念与思路 ===== */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="fade-in-up mx-auto max-w-3xl text-center opacity-0 transition-all duration-700 translate-y-8 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">赋能教学的理念与思路</h2>
            <p className="mt-4 text-lg text-slate-600">以「学生为中心」和「OBE 成果导向教育」为核心理念，驱动课程从传统教学向数智化教学全面转型</p>
          </div>

          <div className="fade-in-up mt-16 grid gap-8 lg:grid-cols-3 opacity-0 transition-all duration-700 translate-y-8 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0">
            {principles.map((p) => (
              <div key={p.title} className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg">
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${p.color}`} />
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${p.color} text-white shadow-md`}><p.icon className="h-7 w-7" /></div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{p.title}</h3>
                <ul className="mt-4 space-y-3">
                  {p.items.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 转型路径 + 理念总结 ... 略（详见页面源代码）*/}
        </div>
      </section>

      {/* ===== 三、链接与二维码 ===== */}
      <section id="qrcode" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="fade-in-up mx-auto max-w-3xl text-center opacity-0 ...">
            <h2 className="text-3xl font-bold ...">立即体验智能学伴</h2>
            <p className="...">扫描二维码或点击下方链接，即刻开启你的 Python 智能学习之旅</p>
          </div>
          <div className="fade-in-up mt-12 mx-auto max-w-lg ...">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg text-center">
              <div className="flex justify-center"><QRCodeDisplay text={domain} size={200} /></div>
              <div className="mt-6">
                <p className="text-sm font-medium text-slate-500">网页地址</p>
                <a href={domain} target="_blank" className="...">{domain}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="flex items-center justify-center gap-2 text-slate-700">
            <Code2 className="h-5 w-5" />
            <span className="text-sm font-medium">《Python程序设计》课程智能助教 / 学伴</span>
          </div>
          <p className="mt-2 text-xs text-slate-400">以学生为中心 · 成果导向 · 持续改进</p>
        </div>
      </footer>
    </div>
  );
}

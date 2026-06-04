import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '《Python程序设计》智能助教 | 课程学伴',
    template: '%s | 《Python程序设计》智能助教',
  },
  description:
    '《Python程序设计》课程智能助教/学伴——以学生为中心，融入OBE理念，通过AI赋能实现从传统教学到数智化教学的转型。',
  openGraph: {
    title: '《Python程序设计》课程智能助教/学伴',
    description: '以AI赋能Python编程教学，打造学生为中心的智能学伴，实现数智化教学转型。',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}

import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Theme } from './types';
import { SEO } from './components/SEO';
import { pageMeta } from './seo-config';

// 動態導入所有頁面組件 - 實現代碼分割
const Home = lazy(() => import('./pages/Home'));
const Whitepaper = lazy(() => import('./pages/Whitepaper'));
const AboutMomo = lazy(() => import('./pages/AboutMomo'));
const LogicLoop = lazy(() => import('./pages/LogicLoop'));
const AIChat = lazy(() => import('./pages/AIChat'));
const LinearGuide = lazy(() => import('./pages/LinearGuide'));
const Sanctuary = lazy(() => import('./pages/Sanctuary'));
const SystemDetail = lazy(() => import('./pages/SystemDetail'));
const SystemZoneA = lazy(() => import('./pages/SystemZoneA'));
const SystemZoneB = lazy(() => import('./pages/SystemZoneB'));
const SystemZoneC = lazy(() => import('./pages/SystemZoneC'));
const SystemZone05 = lazy(() => import('./pages/SystemZone05'));
const NineOrigins = lazy(() => import('./pages/NineOrigins'));
const SevenPrinciples = lazy(() => import('./pages/SevenPrinciples'));
const UniverseScript = lazy(() => import('./pages/UniverseScript'));
const RealityMirror = lazy(() => import('./pages/RealityMirror'));

// 加載指示器組件
function LoadingFallback() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="text-center">
        <div className="inline-block w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-amber-100 font-mono text-sm tracking-wider">Loading...</p>
      </div>
    </div>
  );
}

// 頁面包裝器：添加 SEO 組件
function PageWrapper({ 
  children, 
  seoKey 
}: { 
  children: React.ReactNode; 
  seoKey: keyof typeof pageMeta;
}) {
  const meta = pageMeta[seoKey];
  return (
    <>
      <SEO 
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        url={meta.url}
      />
      {children}
    </>
  );
}

// 創建路由配置
export function createAppRouter(theme: Theme, toggleTheme: () => void) {
  return createBrowserRouter([
    { 
      path: '/', 
      element: (
        <PageWrapper seoKey="home">
          <Home theme={theme} onNavigate={() => {}} toggleTheme={toggleTheme} />
        </PageWrapper>
      )
    },
    { 
      path: '/whitepaper', 
      element: (
        <PageWrapper seoKey="whitepaper">
          <Whitepaper theme={theme} onNavigate={() => {}} />
        </PageWrapper>
      )
    },
    { 
      path: '/about', 
      element: (
        <PageWrapper seoKey="about">
          <AboutMomo theme={theme} onNavigate={() => {}} />
        </PageWrapper>
      )
    },
    { 
      path: '/logic-loop', 
      element: (
        <PageWrapper seoKey="logicLoop">
          <LogicLoop theme={theme} onNavigate={() => {}} />
        </PageWrapper>
      )
    },
    { 
      path: '/ai-chat', 
      element: (
        <PageWrapper seoKey="aiChat">
          <AIChat theme={theme} onNavigate={() => {}} />
        </PageWrapper>
      )
    },
    { 
      path: '/guide', 
      element: (
        <PageWrapper seoKey="guide">
          <LinearGuide theme={theme} onNavigate={() => {}} />
        </PageWrapper>
      )
    },
    { 
      path: '/sanctuary', 
      element: (
        <PageWrapper seoKey="sanctuary">
          <Sanctuary theme={theme} onNavigate={() => {}} />
        </PageWrapper>
      )
    },
    { 
      path: '/system', 
      element: (
        <PageWrapper seoKey="system">
          <SystemDetail theme={theme} onNavigate={() => {}} />
        </PageWrapper>
      )
    },
    { 
      path: '/system/zone-a', 
      element: (
        <PageWrapper seoKey="systemZoneA">
          <SystemZoneA theme={theme} onNavigate={() => {}} />
        </PageWrapper>
      )
    },
    { 
      path: '/system/zone-b', 
      element: (
        <PageWrapper seoKey="systemZoneB">
          <SystemZoneB theme={theme} onNavigate={() => {}} />
        </PageWrapper>
      )
    },
    { 
      path: '/system/zone-c', 
      element: (
        <PageWrapper seoKey="systemZoneC">
          <SystemZoneC theme={theme} onNavigate={() => {}} />
        </PageWrapper>
      )
    },
    { 
      path: '/system/zone-05', 
      element: (
        <PageWrapper seoKey="systemZone05">
          <SystemZone05 theme={theme} onNavigate={() => {}} />
        </PageWrapper>
      )
    },
    { 
      path: '/nine-origins', 
      element: (
        <PageWrapper seoKey="nineOrigins">
          <NineOrigins theme={theme} onNavigate={() => {}} />
        </PageWrapper>
      )
    },
    { 
      path: '/seven-principles', 
      element: (
        <PageWrapper seoKey="sevenPrinciples">
          <SevenPrinciples theme={theme} onNavigate={() => {}} />
        </PageWrapper>
      )
    },
    { 
      path: '/universe-script', 
      element: (
        <PageWrapper seoKey="universeScript">
          <UniverseScript theme={theme} onNavigate={() => {}} />
        </PageWrapper>
      )
    },
    { 
      path: '/reality-mirror', 
      element: (
        <PageWrapper seoKey="realityMirror">
          <RealityMirror theme={theme} onNavigate={() => {}} />
        </PageWrapper>
      )
    },
  ]);
}

// 路由提供者組件
export function AppRoutes({ theme, toggleTheme }: { theme: Theme; toggleTheme: () => void }) {
  const router = createAppRouter(theme, toggleTheme);
  
  return (
    <Suspense fallback={<LoadingFallback />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

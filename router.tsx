import React, { Suspense, lazy, useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Theme, PageId } from './types';
import { SEO } from './components/SEO';
import { pageMeta } from './seo-config';

// PageId to route path mapping
const PAGE_ROUTES: Record<PageId, string> = {
  home: '/',
  logic: '/logic-loop',
  chat: '/ai-chat',
  guide: '/guide',
  sanctuary: '/sanctuary',
  about: '/about',
  system: '/system',
  'system-a': '/system/zone-a',
  'system-b': '/system/zone-b',
  'system-c': '/system/zone-c',
  'system-05': '/system/zone-05',
  whitepaper: '/whitepaper',
  origins: '/nine-origins',
  principles: '/seven-principles',
  script: '/universe-script',
  mirror: '/reality-mirror',
};

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

// 學術架構頁面
const MuseumHome = lazy(() => import('./pages/MuseumHome'));
const SystemMap = lazy(() => import('./pages/SystemMap'));
const ChallengeKit = lazy(() => import('./pages/ChallengeKit'));
const Glossary = lazy(() => import('./pages/Glossary'));
const References = lazy(() => import('./pages/References'));
const AboutSystem = lazy(() => import('./pages/About'));
const Gallery = lazy(() => import('./pages/Gallery'));

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

// 路由組件
export function AppRoutes({ theme, toggleTheme }: { theme: Theme; toggleTheme: () => void }) {
  const navigate = useNavigate();
  
  const handleNavigate = useCallback((page: PageId) => {
    const path = PAGE_ROUTES[page];
    if (path) {
      navigate(path);
      window.scrollTo(0, 0);
    } else {
      console.warn(`handleNavigate called with invalid PageId: "${String(page)}". No route found in PAGE_ROUTES.`);
    }
  }, [navigate]);

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route 
          path="/" 
          element={
            <PageWrapper seoKey="home">
              <Home theme={theme} onNavigate={handleNavigate} toggleTheme={toggleTheme} />
            </PageWrapper>
          }
        />
        <Route 
          path="/whitepaper" 
          element={
            <PageWrapper seoKey="whitepaper">
              <Whitepaper theme={theme} />
            </PageWrapper>
          }
        />
        <Route 
          path="/about" 
          element={
            <PageWrapper seoKey="about">
              <AboutMomo theme={theme} />
            </PageWrapper>
          }
        />
        <Route 
          path="/logic-loop" 
          element={
            <PageWrapper seoKey="logicLoop">
              <LogicLoop theme={theme} onNavigate={handleNavigate} />
            </PageWrapper>
          }
        />
        <Route 
          path="/ai-chat" 
          element={
            <PageWrapper seoKey="aiChat">
              <AIChat theme={theme} />
            </PageWrapper>
          }
        />
        <Route 
          path="/guide" 
          element={
            <PageWrapper seoKey="guide">
              <LinearGuide theme={theme} onNavigate={handleNavigate} />
            </PageWrapper>
          }
        />
        <Route 
          path="/sanctuary" 
          element={
            <PageWrapper seoKey="sanctuary">
              <Sanctuary theme={theme} onNavigate={handleNavigate} />
            </PageWrapper>
          }
        />
        <Route 
          path="/system" 
          element={
            <PageWrapper seoKey="system">
              <SystemDetail theme={theme} onNavigate={handleNavigate} />
            </PageWrapper>
          }
        />
        <Route 
          path="/system/zone-a" 
          element={
            <PageWrapper seoKey="systemZoneA">
              <SystemZoneA theme={theme} />
            </PageWrapper>
          }
        />
        <Route 
          path="/system/zone-b" 
          element={
            <PageWrapper seoKey="systemZoneB">
              <SystemZoneB theme={theme} />
            </PageWrapper>
          }
        />
        <Route 
          path="/system/zone-c" 
          element={
            <PageWrapper seoKey="systemZoneC">
              <SystemZoneC theme={theme} onNavigate={handleNavigate} />
            </PageWrapper>
          }
        />
        <Route 
          path="/system/zone-05" 
          element={
            <PageWrapper seoKey="systemZone05">
              <SystemZone05 theme={theme} onNavigate={handleNavigate} />
            </PageWrapper>
          }
        />
        <Route 
          path="/nine-origins" 
          element={
            <PageWrapper seoKey="nineOrigins">
              <NineOrigins theme={theme} onNavigate={handleNavigate} />
            </PageWrapper>
          }
        />
        <Route 
          path="/seven-principles" 
          element={
            <PageWrapper seoKey="sevenPrinciples">
              <SevenPrinciples theme={theme} />
            </PageWrapper>
          }
        />
        <Route 
          path="/universe-script" 
          element={
            <PageWrapper seoKey="universeScript">
              <UniverseScript theme={theme} onNavigate={handleNavigate} />
            </PageWrapper>
          }
        />
        <Route 
          path="/reality-mirror" 
          element={
            <PageWrapper seoKey="realityMirror">
              <RealityMirror theme={theme} onNavigate={handleNavigate} />
            </PageWrapper>
          }
        />
        {/* 學術架構路由 */}
        <Route 
          path="/museum" 
          element={
            <PageWrapper seoKey="museum">
              <MuseumHome />
            </PageWrapper>
          }
        />
        <Route 
          path="/system-map" 
          element={
            <PageWrapper seoKey="systemMap">
              <SystemMap />
            </PageWrapper>
          }
        />
        <Route 
          path="/challenge-kit" 
          element={
            <PageWrapper seoKey="challengeKit">
              <ChallengeKit />
            </PageWrapper>
          }
        />
        <Route 
          path="/glossary" 
          element={
            <PageWrapper seoKey="glossary">
              <Glossary />
            </PageWrapper>
          }
        />
        <Route 
          path="/references" 
          element={
            <PageWrapper seoKey="references">
              <References />
            </PageWrapper>
          }
        />
        <Route 
          path="/about-system" 
          element={
            <PageWrapper seoKey="aboutSystem">
              <AboutSystem />
            </PageWrapper>
          }
        />
        <Route 
          path="/gallery" 
          element={
            <PageWrapper seoKey="gallery">
              <Gallery />
            </PageWrapper>
          }
        />
      </Routes>
    </Suspense>
  );
}

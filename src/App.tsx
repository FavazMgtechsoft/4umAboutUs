import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { WhatIs4um } from './components/WhatIs4um';
import { MissionVision } from './components/MissionVision';
import { Why4um } from './components/Why4um';
import { Community } from './components/Community';
import { InsightsSection } from './components/InsightsSection';
import { Future } from './components/Future';
import { CTA } from './components/CTA';
import { Navigation } from './components/Navigation';
import BlogReadingPage from './pages/BlogReadingPage';
import { FAQ } from './components/FAQ';

// Landing Page Component
function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <CTA />
      {/* <Hero /> */}
      <WhatIs4um />
      {/* <MissionVision /> */}
      {/* <Why4um /> */}
      {/* <Community /> */}
      <InsightsSection />
      {/* <Future /> */}
              {/* FAQ */}
        <FAQ />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog/:id" element={<BlogReadingPage />} />
      </Routes>
    </Router>
  );
}
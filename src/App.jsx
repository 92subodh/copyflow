import './App.css';
import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar    from './components/Navbar';
import HeroSection  from './components/HeroSection';
import LogosBar     from './components/LogosBar';
import HowItWorks   from './components/HowItWorks';
import FeaturesGrid from './components/FeaturesGrid';
import StatsSection from './components/StatsSection';
import KioskSection from './components/KioskSection';
import FAQSection   from './components/FAQSection';
import FooterCTA    from './components/FooterCTA';
import Footer       from './components/Footer';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import ContactUsPage from './pages/ContactUsPage';
import HelpCenterPage from './pages/HelpCenterPage';

function LandingPage() {
  return (
    <main>
      <HeroSection />
      <LogosBar />
      <HowItWorks />
      <FeaturesGrid />
      <StatsSection />
      <KioskSection />
      <FAQSection />
      <FooterCTA />
    </main>
  );
}

export default function App() {
  const location = useLocation();

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Handle page background toggling and automatic scroll-to-top on route changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    
    if (location.pathname === '/') {
      document.body.classList.add('home-page-bg');
    } else {
      document.body.classList.remove('home-page-bg');
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/help-center" element={<HelpCenterPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
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

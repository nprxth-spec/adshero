import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

import { HelmetProvider } from '@dr.pogodin/react-helmet';

// Pages
import HomePage from './pages/index';
import AboutPage from './pages/about';
import ServicesPage from './pages/services';
import ContactPage from './pages/contact';
import PrivacyPage from './pages/privacy';
import WorksPage from './pages/works';
import NotFoundPage from './pages/_404';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-primary">
      <Navbar />
      {/* Content wrapper with pt-20 to avoid content going under the sticky navbar */}
      <div className="flex-grow pt-[73px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/*" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

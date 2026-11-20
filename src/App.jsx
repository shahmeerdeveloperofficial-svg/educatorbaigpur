import React, { useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { SchoolProvider } from "./context/SchoolContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LightboxModal from "./components/LightboxModal";
import AdmissionModal from "./components/AdmissionModal";
import CircularModal from "./components/CircularModal";
import FloatingActions from "./components/FloatingActions";

// Direct synchronous page imports for instant transitions without layout flash
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ChairmanMessagePage from "./pages/ChairmanMessagePage";
import DirectorMessagePage from "./pages/DirectorMessagePage";
import AcademicsPage from "./pages/AcademicsPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import GalleryPage from "./pages/GalleryPage";
import NewsCircularsPage from "./pages/NewsCircularsPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";

// Scroll to top helper — ensures every page instantly opens at the top front
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Disable browser default scroll restoration so every route begins cleanly at the top
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    // Force instant scroll behavior on document
    document.documentElement.style.scrollBehavior = "auto";
    document.body.style.scrollBehavior = "auto";

    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "auto" });
        return;
      }
    }

    // Instantly reset scroll to the top front of the page without any delay or animation
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const raf = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <SchoolProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/leadership/chairman" element={<ChairmanMessagePage />} />
              <Route path="/leadership/director" element={<DirectorMessagePage />} />
              <Route path="/academics" element={<AcademicsPage />} />
              <Route path="/facilities" element={<FacilitiesPage />} />
              <Route path="/admissions" element={<AdmissionsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/news-circulars" element={<NewsCircularsPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admin" element={<AdminPage />} />
              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />

          {/* Global Interactive Modals & Floating Actions */}
          <LightboxModal />
          <AdmissionModal />
          <CircularModal />
          <FloatingActions />
        </div>
      </BrowserRouter>
    </SchoolProvider>
  );
}

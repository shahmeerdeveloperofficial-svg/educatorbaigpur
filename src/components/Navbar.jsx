import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles, 
  Menu, 
  X, 
  ChevronDown, 
  GraduationCap, 
  FileText, 
  Award, 
  Users, 
  ShieldCheck, 
  Send
} from "lucide-react";
import { schoolInfo } from "../data/schoolData";
import { useSchool } from "../context/SchoolContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLeadershipOpen, setIsLeadershipOpen] = useState(false);
  const { admissionsOpen, setIsAdmissionModalOpen } = useSchool();
  const location = useLocation();

  // Scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLeadershipOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="te-topbar">
        <div className="container-fluid px-3 px-xl-4 px-xxl-5">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div className="d-flex align-items-center gap-4 flex-wrap">
              <a href={`tel:${schoolInfo.phone}`} title="Call School">
                <Phone size={14} className="text-warning" />
                <span>{schoolInfo.phone}</span>
              </a>
              <span className="d-none d-md-inline text-secondary">|</span>
              <span className="d-none d-md-inline-flex align-items-center gap-1 text-light-50">
                <MapPin size={14} className="text-warning" />
                <span>{schoolInfo.shortAddress}</span>
              </span>
              <span className="d-none d-lg-inline text-secondary">|</span>
              <span className="d-none d-lg-inline-flex align-items-center gap-1 text-light-50">
                <Clock size={14} className="text-warning" />
                <span>7:45 AM – 2:00 PM</span>
              </span>
            </div>

            <div className="d-flex align-items-center gap-3">
              {admissionsOpen ? (
                <div className="te-topbar-badge">
                  <Sparkles size={12} />
                  <span>Admissions Open {schoolInfo.currentSession}</span>
                </div>
              ) : (
                <div className="badge bg-secondary">
                  <span>Admissions Currently Closed</span>
                </div>
              )}
              <Link 
                to="/admin" 
                className="text-secondary hover-gold small d-none d-sm-inline" 
                title="School Staff Login"
                style={{ fontSize: "0.78rem" }}
              >
                Staff Portal
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`te-navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container-fluid px-3 px-xl-4 px-xxl-5">
          <div className="d-flex align-items-center justify-content-between">
            {/* School Logo & Branding */}
            <Link to="/" className="te-brand-wrap text-decoration-none">
              <img 
                src="/assets/images/logo-educators-main-transparent.png" 
                alt="The Educators Logo" 
                className="te-brand-logo"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/images/logo-educators-main.jpg";
                }}
              />
              <div className="d-flex flex-column justify-content-center">
                <h1 className="te-brand-title">THE EDUCATORS</h1>
                <span className="te-brand-subtitle">Prime Campus • Baigpur</span>
                <span className="te-brand-campus">A Project of Beaconhouse</span>
              </div>
            </Link>

            {/* Desktop Navigation Links — All in 1 Line */}
            <div className="d-none d-xl-flex align-items-center gap-1 te-desktop-nav-group">
              <NavLink to="/" className={({ isActive }) => `te-nav-item ${isActive ? "active" : ""}`} end>
                Home
              </NavLink>

              <NavLink to="/about" className={({ isActive }) => `te-nav-item ${isActive ? "active" : ""}`}>
                About
              </NavLink>

              <NavLink to="/academics" className={({ isActive }) => `te-nav-item ${isActive ? "active" : ""}`}>
                Academics
              </NavLink>

              {/* Leadership Dropdown */}
              <div 
                className="position-relative"
                onMouseEnter={() => setIsLeadershipOpen(true)}
                onMouseLeave={() => setIsLeadershipOpen(false)}
              >
                <div 
                  className={`te-nav-item cursor-pointer ${
                    location.pathname.includes("leadership") ? "active" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  <span>Leadership</span>
                  <ChevronDown size={14} />
                </div>

                {isLeadershipOpen && (
                  <div 
                    className="position-absolute bg-white shadow-lg rounded-3 py-2 border te-dropdown-menu"
                    style={{ minWidth: "220px", top: "100%", left: 0, zIndex: 1050 }}
                  >
                    <Link 
                      to="/leadership/chairman" 
                      className="dropdown-item px-3 py-2 fw-medium d-flex align-items-center gap-2 hover-bg"
                    >
                      <Award size={16} className="text-warning" />
                      <div>
                        <div>Chairman / CEO</div>
                        <small className="text-muted" style={{ fontSize: "0.75rem" }}>Abu Sufyan Virk</small>
                      </div>
                    </Link>
                    <div className="dropdown-divider my-1"></div>
                    <Link 
                      to="/leadership/director" 
                      className="dropdown-item px-3 py-2 fw-medium d-flex align-items-center gap-2 hover-bg"
                    >
                      <Users size={16} className="text-primary" />
                      <div>
                        <div>Director's Message</div>
                        <small className="text-muted" style={{ fontSize: "0.75rem" }}>Dr. Rimsha Sufyan</small>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <NavLink to="/facilities" className={({ isActive }) => `te-nav-item ${isActive ? "active" : ""}`}>
                Facilities
              </NavLink>

              <NavLink to="/admissions" className={({ isActive }) => `te-nav-item ${isActive ? "active" : ""}`}>
                Admissions
              </NavLink>

              <NavLink to="/gallery" className={({ isActive }) => `te-nav-item ${isActive ? "active" : ""}`}>
                Gallery
              </NavLink>

              <NavLink to="/news-circulars" className={({ isActive }) => `te-nav-item ${isActive ? "active" : ""}`}>
                Circulars
              </NavLink>

              <NavLink to="/contact" className={({ isActive }) => `te-nav-item ${isActive ? "active" : ""}`}>
                Contact
              </NavLink>
            </div>

            {/* Desktop CTA Button — Single Line, Compact */}
            <div className="d-none d-xl-flex align-items-center gap-2">
              <button 
                onClick={() => setIsAdmissionModalOpen(true)}
                className="btn btn-te-gold text-nowrap te-btn-nav"
                type="button"
              >
                <GraduationCap size={16} />
                <span>Apply for Admission</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button 
              className="d-xl-none btn btn-light border p-2 rounded-3 text-dark"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              type="button"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas Drawer */}
      <div className={`te-mobile-drawer ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="te-mobile-backdrop" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className="te-mobile-panel">
          <div className="te-mobile-header">
            <div className="d-flex align-items-center gap-2">
              <img 
                src="/assets/images/logo-educators-main-transparent.png" 
                alt="The Educators Logo" 
                style={{ height: "54px", width: "auto" }} 
              />
              <div>
                <strong className="d-block" style={{ fontSize: "1.05rem", color: "var(--te-navy-dark)", fontWeight: "800" }}>
                  THE EDUCATORS
                </strong>
                <small className="text-warning fw-semibold" style={{ fontSize: "0.76rem" }}>Prime Campus Baigpur</small>
              </div>
            </div>
            <button 
              className="btn btn-sm btn-light border rounded-circle p-1"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Menu"
              type="button"
            >
              <X size={20} />
            </button>
          </div>

          <div className="te-mobile-body">
            <NavLink to="/" className={({ isActive }) => `te-mobile-link ${isActive ? "active" : ""}`} end>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `te-mobile-link ${isActive ? "active" : ""}`}>
              About School
            </NavLink>
            <NavLink to="/leadership/chairman" className={({ isActive }) => `te-mobile-link ${isActive ? "active" : ""}`}>
              CEO / Chairman Message
            </NavLink>
            <NavLink to="/leadership/director" className={({ isActive }) => `te-mobile-link ${isActive ? "active" : ""}`}>
              Director's Message
            </NavLink>
            <NavLink to="/academics" className={({ isActive }) => `te-mobile-link ${isActive ? "active" : ""}`}>
              Academics & Curricula
            </NavLink>
            <NavLink to="/facilities" className={({ isActive }) => `te-mobile-link ${isActive ? "active" : ""}`}>
              Campus Facilities (10)
            </NavLink>
            <NavLink to="/admissions" className={({ isActive }) => `te-mobile-link ${isActive ? "active" : ""}`}>
              Admissions & Fee Structure
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => `te-mobile-link ${isActive ? "active" : ""}`}>
              School Life & Gallery
            </NavLink>
            <NavLink to="/news-circulars" className={({ isActive }) => `te-mobile-link ${isActive ? "active" : ""}`}>
              News & Circulars (Urdu/English)
            </NavLink>
            <NavLink to="/careers" className={({ isActive }) => `te-mobile-link ${isActive ? "active" : ""}`}>
              Careers / Vacancies
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `te-mobile-link ${isActive ? "active" : ""}`}>
              Contact School
            </NavLink>
            <NavLink to="/admin" className={({ isActive }) => `te-mobile-link ${isActive ? "active" : ""}`}>
              Staff Admin Portal
            </NavLink>
          </div>

          <div className="te-mobile-footer">
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsAdmissionModalOpen(true);
              }}
              className="btn btn-te-gold w-100 mb-2"
              type="button"
            >
              <GraduationCap size={18} />
              <span>Apply for Admission</span>
            </button>
            <div className="text-center">
              <a 
                href={`tel:${schoolInfo.phone}`} 
                className="small text-muted d-inline-flex align-items-center gap-1"
              >
                <Phone size={14} className="text-warning" />
                <span>Call Us: {schoolInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

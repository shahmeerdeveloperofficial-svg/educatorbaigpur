import React from "react";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Award, 
  ShieldCheck, 
  Sparkles,
  ExternalLink
} from "lucide-react";
import { schoolInfo } from "../data/schoolData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="te-footer">
      <div className="container">
        <div className="row g-4 g-lg-5">
          {/* Col 1: School Identity */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-3 mb-3">
              <img 
                src="/assets/images/logo-educators-main-transparent.png" 
                alt="The Educators Logo" 
                style={{ height: "65px", width: "auto" }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/images/logo-educators-main.jpg";
                }}
              />
              <div>
                <h4 className="text-white fw-bold mb-0" style={{ fontSize: "1.25rem" }}>THE EDUCATORS</h4>
                <div className="text-warning fw-semibold small">Prime Campus • Baigpur</div>
                <div className="text-light-50 small">A Project of Beaconhouse</div>
              </div>
            </div>

            <p className="small text-light-50 mb-3" style={{ lineHeight: "1.7" }}>
              The Educators Prime Campus Baigpur delivers standard-setting education grounded in character building, 
              academic rigor, moral integrity, and modern facilities Near Jogiwala Stop, Baigpur, Main Road Sheikhupura-Gujranwala, Nowshera Virkan.
            </p>

            <div className="d-inline-flex align-items-center gap-2 p-2 px-3 rounded-3 bg-white bg-opacity-10 border border-white border-opacity-10">
              <Award size={18} className="text-warning" />
              <span className="small text-white fw-medium">Celebrating 25 Years (2002–2027)</span>
            </div>

            {/* Official Social Media Channels */}
            <div className="d-flex align-items-center gap-2 mt-3">
              <span className="small text-light-50 me-1">Official Pages:</span>
              <a 
                href={schoolInfo.socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="te-footer-social-btn" 
                title="The Educators Prime Campus Baigpur Facebook"
                aria-label="Facebook Page"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href={schoolInfo.socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="te-footer-social-btn" 
                title="The Educators Prime Campus Baigpur Instagram"
                aria-label="Instagram Profile"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5>Navigation</h5>
            <ul className="te-footer-links">
              <li>
                <Link to="/"><ChevronRight size={14} /> Home</Link>
              </li>
              <li>
                <Link to="/about"><ChevronRight size={14} /> About School</Link>
              </li>
              <li>
                <Link to="/academics"><ChevronRight size={14} /> Academics</Link>
              </li>
              <li>
                <Link to="/leadership/chairman"><ChevronRight size={14} /> CEO Message</Link>
              </li>
              <li>
                <Link to="/leadership/director"><ChevronRight size={14} /> Director Message</Link>
              </li>
              <li>
                <Link to="/facilities"><ChevronRight size={14} /> Campus Facilities</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Admissions & Resources */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5>Information</h5>
            <ul className="te-footer-links">
              <li>
                <Link to="/admissions"><ChevronRight size={14} /> Admissions 2026-27</Link>
              </li>
              <li>
                <Link to="/admissions#fee-structure"><ChevronRight size={14} /> Fee Structure</Link>
              </li>
              <li>
                <Link to="/gallery"><ChevronRight size={14} /> Photo Gallery</Link>
              </li>
              <li>
                <Link to="/news-circulars"><ChevronRight size={14} /> Urdu & Eng Circulars</Link>
              </li>
              <li>
                <Link to="/careers"><ChevronRight size={14} /> Careers</Link>
              </li>
              <li>
                <Link to="/admin"><ChevronRight size={14} /> Staff Portal</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Contact & Visiting */}
          <div className="col-lg-4 col-md-6">
            <h5>Contact Campus</h5>
            <ul className="te-footer-links">
              <li className="d-flex align-items-start gap-2 mb-3">
                <MapPin size={18} className="text-warning flex-shrink-0 mt-1" />
                <span className="small text-light-50">
                  {schoolInfo.address}
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-2">
                <Phone size={18} className="text-warning flex-shrink-0" />
                <a href={`tel:${schoolInfo.phone}`} className="small text-white fw-bold">
                  {schoolInfo.phone}
                </a>
              </li>
              <li className="d-flex align-items-center gap-2 mb-2">
                <Mail size={18} className="text-warning flex-shrink-0" />
                <a href={`mailto:${schoolInfo.email}`} className="small text-light-50">
                  {schoolInfo.email}
                </a>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <Clock size={18} className="text-warning flex-shrink-0" />
                <span className="small text-light-50">
                  {schoolInfo.officeHours}
                </span>
              </li>
            </ul>

            <div className="mt-3">
              <a 
                href={`https://wa.me/${schoolInfo.whatsapp}?text=Assalam-o-Alaikum,%20I%20am%20inquiring%20about%20admissions%20at%20The%20Educators%20Prime%20Campus%20Baigpur`}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-light w-100 py-2 d-flex align-items-center justify-content-center gap-2"
              >
                <span>WhatsApp Admissions Desk</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="te-footer-bottom">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div>
              © {currentYear} <strong>{schoolInfo.name}</strong>. A Project of Beaconhouse. All rights reserved.
            </div>
            <div className="d-flex align-items-center gap-3">
              <span className="small text-light-50">
                Official Campus Code • Nowshera Virkan
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

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

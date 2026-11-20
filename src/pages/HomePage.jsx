import React from "react";
import { Link } from "react-router-dom";
import { 
  Award, 
  GraduationCap, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Quote, 
  ShieldCheck, 
  Sun, 
  Droplets, 
  Users, 
  Compass, 
  HeartHandshake, 
  Phone, 
  Calendar,
  Layers,
  MapPin,
  Clock,
  Eye,
  MessageSquare,
  BookOpen,
  Trophy,
  Smile,
  HeartPulse,
  Bus,
  Palette,
  Mail,
  Globe,
  FileText,
  Coins,
  PhoneCall
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { schoolInfo, leadership, academicPrograms, facilitiesList, feeStructure } from "../data/schoolData";
import { galleryPhotos } from "../data/galleryData";
import { useSchool } from "../context/SchoolContext";

export default function HomePage() {
  const { setIsAdmissionModalOpen, openLightbox, circulars, setSelectedCircular } = useSchool();

  return (
    <div>
      {/* ====================================================================
          2. CINEMATIC HERO BANNER
          ==================================================================== */}
      <section className="te-hero">
        <div className="container position-relative">
          <div className="row align-items-center g-5">
            {/* Left Hero Content */}
            <div className="col-lg-6">
              <div className="te-hero-badge-wrap">
                <div className="te-hero-badge-icon">
                  <Award size={16} />
                </div>
                <span className="small fw-bold text-white">
                  25 Years of Nation Building • 2002–2027
                </span>
              </div>

              <h1 className="te-hero-title">
                Nurturing Future Leaders with Values, Character & Academic Excellence
              </h1>

              <p className="te-hero-subtitle">
                Welcome to <strong>{schoolInfo.name}</strong> ({schoolInfo.tagline}). 
                Providing a world-class educational foundation from Pre-School to Matriculation 
                with dedicated faculty and state-of-the-art campus on Main GT Road, Sheikhupura.
              </p>

              <div className="d-flex align-items-center gap-3 flex-wrap te-hero-actions">
                <button 
                  onClick={() => setIsAdmissionModalOpen(true)}
                  className="btn btn-te-gold"
                  type="button"
                >
                  <GraduationCap size={18} />
                  <span>Apply for Admission</span>
                </button>

                <Link to="/about" className="btn btn-te-outline-white">
                  <span>Explore Our Campus</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="d-flex align-items-center gap-4 mt-4 pt-3 border-top border-white border-opacity-10 text-white-50 small flex-wrap">
                <div className="d-flex align-items-center gap-2">
                  <CheckCircle2 size={16} className="text-warning" />
                  <span className="text-white">A Project of Beaconhouse</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <CheckCircle2 size={16} className="text-warning" />
                  <span className="text-white">Solar-Powered Green Campus</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <CheckCircle2 size={16} className="text-warning" />
                  <span className="text-white">Pre-School to Matric</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Composition */}
            <div className="col-lg-6">
              <div className="te-hero-image-frame">
                <img 
                  src="/assets/images/school-front-panoramic.webp" 
                  alt="The Educators Prime Campus Baigpur Front View" 
                  className="te-hero-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/images/school-front-panoramic.jpg";
                  }}
                />

                <div className="te-hero-floating-card">
                  <div className="d-flex align-items-center gap-3">
                    <div 
                      className="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center fw-bold"
                      style={{ width: "42px", height: "42px", fontSize: "0.85rem" }}
                    >
                      TE
                    </div>
                    <div>
                      <strong className="d-block text-white" style={{ fontSize: "0.95rem" }}>
                        Admissions Open {schoolInfo.currentSession}
                      </strong>
                      <span className="small text-light-50">Playgroup to Class 10 (Matric)</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsAdmissionModalOpen(true)}
                    className="btn btn-sm btn-light fw-bold px-3"
                  >
                    Inquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 25 Years Milestone Strip */}
      <div className="te-anniversary-banner">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div className="d-flex align-items-center gap-3">
              <span className="badge bg-warning text-dark fw-bold px-2 py-1">2002 – 2027</span>
              <span className="small text-white fw-semibold">
                Celebrating 25 Years of Nation Building Across Pakistan
              </span>
            </div>
            <div className="d-flex align-items-center gap-3 small text-light-50">
              <span>Motto: <strong className="text-white">Commitment, Quality, Dedication</strong></span>
              <span className="d-none d-md-inline">|</span>
              <a href={`tel:${schoolInfo.phone}`} className="text-warning fw-bold d-none d-md-inline">
                Call: {schoolInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          3. SCHOOL INTRODUCTION — ELEGANT EDITORIAL DESIGN
          ==================================================================== */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row align-items-center g-5">
            {/* Left: Campus Photo Frame */}
            <div className="col-lg-6">
              <div className="position-relative">
                <div 
                  className="rounded-4 overflow-hidden shadow-lg border"
                  style={{ maxHeight: "460px" }}
                >
                  <img 
                    src="/assets/images/school-entrance-building.webp" 
                    alt="The Educators Academic Building" 
                    className="w-100 h-100 object-fit-cover"
                    style={{ minHeight: "380px" }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/images/school-entrance-building.jpg";
                    }}
                  />
                </div>

                {/* Floating badge */}
                <div 
                  className="position-absolute bg-white p-3 rounded-3 shadow-lg border d-none d-sm-flex align-items-center gap-3"
                  style={{ bottom: "-20px", left: "24px", maxWidth: "300px" }}
                >
                  <div className="bg-primary-subtle text-primary p-2 rounded-circle">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <strong className="d-block text-dark small">Beaconhouse Standard</strong>
                    <span className="text-muted" style={{ fontSize: "0.75rem" }}>
                      National curriculum & quality audit benchmarks
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Editorial Content */}
            <div className="col-lg-6">
              <SectionHeading 
                badge="Introduction to Our School"
                badgeType="blue"
                title="Empowering Young Minds with"
                titleAccent="Knowledge & Moral Values"
                description="The Educators Prime Campus, Baigpur brings Pakistan's premier educational benchmarks directly to Sheikhupura under the Beaconhouse umbrella."
                center={false}
              />

              <p className="text-muted mb-4" style={{ lineHeight: "1.75" }}>
                Our purpose-built campus provides a nurturing and physically secure environment where students develop 
                academic confidence, scientific curiosity, language fluency, and moral integrity. 
                With expansive outdoor sports facilities, modern activity zones, and an uninterrupted 
                solar power system, our students thrive in a setting engineered for holistic success.
              </p>

              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2 p-2 rounded-2 bg-light border">
                    <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                    <span className="small text-dark fw-semibold">Beaconhouse Curriculum Standards</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2 p-2 rounded-2 bg-light border">
                    <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                    <span className="small text-dark fw-semibold">Expansive Sports & Lawn Area</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2 p-2 rounded-2 bg-light border">
                    <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                    <span className="small text-dark fw-semibold">100% Solar-Powered Campus</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2 p-2 rounded-2 bg-light border">
                    <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                    <span className="small text-dark fw-semibold">Character & Value-Based Coaching</span>
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <Link to="/about" className="btn btn-te-primary">
                  <span>Read Full School Profile</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/facilities" className="btn btn-te-outline">
                  <span>View 10 Campus Facilities</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. CHAIRMAN'S MESSAGE — SIGNATURE SEAL EXECUTIVE CARD (IMAGE 2 REFERENCE)
          ==================================================================== */}
      <section className="te-leadership-section bg-subtle py-5">
        <div className="container py-3">
          <SectionHeading 
            badge="Executive Leadership"
            badgeType="gold"
            title="From the"
            titleAccent="Chairman's Desk"
            description="Leading The Educators Prime Campus Baigpur with commitment to character building, academic rigor, and future leadership."
          />

          <div className="te-seal-exec-card">
            {/* Background Subtle Dot Grid */}
            <div className="te-seal-dot-pattern"></div>

            <div className="row align-items-center g-4 g-lg-5 position-relative" style={{ zIndex: 1 }}>
              {/* Left Column: Complete Message in Clean, Compact SEAL Layout */}
              <div className="col-lg-7 te-seal-content-col">
                <div className="te-seal-brand-pill">
                  <ShieldCheck size={14} className="text-warning" />
                  <span>The Educators • Prime Campus Baigpur</span>
                </div>

                <h3 className="te-seal-heading">
                  Chairman's Message
                </h3>

                <div className="te-seal-quote-body">
                  {leadership.ceo.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* 3 Gold Dots Divider as seen in Image 2 */}
                <div className="te-seal-divider-dots">
                  <div className="te-seal-dot"></div>
                  <div className="te-seal-dot"></div>
                  <div className="te-seal-dot"></div>
                </div>

                {/* Author Name and Designation */}
                <div className="te-seal-author-block">
                  <div className="te-seal-author-name">— {leadership.ceo.name}</div>
                  <div className="te-seal-author-desig">{leadership.ceo.designation}</div>
                  <div className="te-seal-author-school">{leadership.ceo.school}</div>
                </div>

                {/* Action Buttons */}
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <Link to="/leadership/chairman" className="btn btn-te-primary rounded-pill px-4 py-2">
                    <span>Read Leadership Profile</span>
                    <ArrowRight size={15} />
                  </Link>
                  <button 
                    onClick={() => setIsAdmissionModalOpen(true)}
                    className="btn btn-te-gold rounded-pill px-4 py-2"
                    type="button"
                  >
                    <GraduationCap size={16} />
                    <span>Apply for Admission</span>
                  </button>
                </div>

                {/* Bottom Contact Strip in SEAL style */}
                <div className="te-seal-contact-strip">
                  <a href={`tel:${schoolInfo.phone}`} className="te-seal-contact-link">
                    <span className="te-seal-icon-circle"><Phone size={13} /></span>
                    <span>{schoolInfo.phone}</span>
                  </a>
                  <a href={`mailto:${schoolInfo.email}`} className="te-seal-contact-link">
                    <span className="te-seal-icon-circle"><Mail size={13} /></span>
                    <span>{schoolInfo.email}</span>
                  </a>
                  <span className="te-seal-contact-link">
                    <span className="te-seal-icon-circle"><MapPin size={13} /></span>
                    <span>{schoolInfo.shortAddress}</span>
                  </span>
                </div>
              </div>

              {/* Right Column: Geometric Frame with 100% Full Head & Suit Visibility */}
              <div className="col-lg-5">
                <div className="te-seal-portrait-wrap">
                  {/* Diagonal Architectural Geometric Ribbon */}
                  <div className="te-seal-ribbon-bg"></div>

                  <div className="te-seal-photo-box">
                    <img 
                      src={leadership.ceo.image} 
                      alt={leadership.ceo.name} 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = leadership.ceo.imageFallback;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. DIRECTOR'S MESSAGE — SIGNATURE SEAL EXECUTIVE CARD (UPGRADED)
          ==================================================================== */}
      <section className="te-leadership-section bg-white py-5">
        <div className="container py-3">
          <SectionHeading 
            badge="Academic Guidance"
            badgeType="blue"
            title="Message from the"
            titleAccent="Director's Desk"
            description="Dedicated to fostering an inclusive, encouraging, and inspiring educational environment for every student."
          />

          <div className="te-seal-exec-card">
            {/* Background Subtle Dot Grid */}
            <div className="te-seal-dot-pattern"></div>

            <div className="row align-items-center g-4 g-lg-5 position-relative" style={{ zIndex: 1 }}>
              {/* Left Column: Geometric Frame with 100% Full Portrait Visibility */}
              <div className="col-lg-5 order-2 order-lg-1">
                <div className="te-seal-portrait-wrap">
                  {/* Diagonal Geometric Ribbon */}
                  <div className="te-seal-ribbon-bg director-geo"></div>

                  <div className="te-seal-photo-box director-box">
                    <img 
                      src={leadership.director.image} 
                      alt={leadership.director.name} 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = leadership.director.imageFallback;
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Complete Message in Clean, Compact SEAL Layout */}
              <div className="col-lg-7 order-1 order-lg-2 te-seal-content-col">
                <div className="te-seal-brand-pill">
                  <BookOpen size={14} className="text-primary" />
                  <span>Academic Leadership • Prime Campus Baigpur</span>
                </div>

                <h3 className="te-seal-heading">
                  Director's Message
                </h3>

                <div className="te-seal-quote-body">
                  {leadership.director.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* 3 Blue Dots Divider */}
                <div className="te-seal-divider-dots">
                  <div className="te-seal-dot" style={{ backgroundColor: "var(--te-blue-accent)" }}></div>
                  <div className="te-seal-dot" style={{ backgroundColor: "var(--te-blue-accent)" }}></div>
                  <div className="te-seal-dot" style={{ backgroundColor: "var(--te-blue-accent)" }}></div>
                </div>

                {/* Author Name and Designation */}
                <div className="te-seal-author-block">
                  <div className="te-seal-author-name">— {leadership.director.name}</div>
                  <div className="te-seal-author-desig">{leadership.director.designation}</div>
                  <div className="te-seal-author-school">{leadership.director.school}</div>
                </div>

                {/* Action Buttons */}
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <Link to="/leadership/director" className="btn btn-te-primary rounded-pill px-4 py-2">
                    <span>Read Director's Profile</span>
                    <ArrowRight size={15} />
                  </Link>
                  <button 
                    onClick={() => setIsAdmissionModalOpen(true)}
                    className="btn btn-te-gold rounded-pill px-4 py-2"
                    type="button"
                  >
                    <GraduationCap size={16} />
                    <span>Apply for Admission</span>
                  </button>
                </div>

                {/* Bottom Contact Strip in SEAL style */}
                <div className="te-seal-contact-strip">
                  <a href={`tel:${schoolInfo.phone}`} className="te-seal-contact-link">
                    <span className="te-seal-icon-circle"><Phone size={13} /></span>
                    <span>{schoolInfo.phone}</span>
                  </a>
                  <a href={`mailto:${schoolInfo.email}`} className="te-seal-contact-link">
                    <span className="te-seal-icon-circle"><Mail size={13} /></span>
                    <span>{schoolInfo.email}</span>
                  </a>
                  <span className="te-seal-contact-link">
                    <span className="te-seal-icon-circle"><MapPin size={13} /></span>
                    <span>{schoolInfo.shortAddress}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. ACADEMICS & PROGRAMS
          ==================================================================== */}
      <section className="py-5 bg-subtle">
        <div className="container py-4">
          <SectionHeading 
            badge="Academic Pathways"
            badgeType="blue"
            title="Educational Programs from"
            titleAccent="Pre-School to Matric"
            description="Carefully structured stages of learning designed to cultivate intellectual curiosity, character, and scholastic readiness."
          />

          <div className="row g-4">
            {academicPrograms.map((prog) => (
              <div key={prog.id} className="col-lg-6 col-md-6">
                <div className="te-program-card-pro">
                  <div className="te-program-img-wrap-pro">
                    <img 
                      src={prog.image} 
                      alt={prog.name} 
                    />
                    <div className="te-program-badge">
                      {prog.badge}
                    </div>
                  </div>

                  <div className="te-program-body">
                    <h4 className="fw-bold text-dark mb-1">{prog.name}</h4>
                    <span className="text-primary small fw-semibold mb-2">{prog.grades}</span>
                    <p className="text-muted small mb-3">{prog.summary}</p>

                    <div className="mt-auto">
                      <ul className="list-unstyled mb-3 small text-muted">
                        {prog.features.slice(0, 3).map((f, i) => (
                          <li key={i} className="d-flex align-items-center gap-2 mb-1">
                            <CheckCircle2 size={14} className="text-success flex-shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      <Link 
                        to="/academics" 
                        className="btn btn-sm btn-te-outline w-100 fw-semibold d-flex align-items-center justify-content-center gap-1"
                      >
                        <span>Explore Curriculum</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. SECTION A: 10 SCHOOL FACILITIES OVERVIEW (RAINBOW SHADE UPGRADE)
          ==================================================================== */}
      <section className="te-facilities-rainbow-section py-5">
        <div className="container py-4 position-relative" style={{ zIndex: 1 }}>
          <SectionHeading 
            badge="Campus Environment"
            badgeType="green"
            title="10 Core Campus Facilities"
            titleAccent="for Student Growth"
            description="Our campus provides a complete ecosystem ensuring physical health, academic comfort, and absolute peace of mind."
          />

          <div className="row g-4">
            {facilitiesList.slice(0, 6).map((fac) => (
              <div key={fac.id} className="col-lg-4 col-md-6">
                <div className="te-facility-card-pro">
                  <div className="te-facility-top-row">
                    <div className="te-facility-icon-pro">
                      {fac.icon === "BookOpen" && <BookOpen size={28} />}
                      {fac.icon === "Trophy" && <Trophy size={28} />}
                      {fac.icon === "Smile" && <Smile size={28} />}
                      {fac.icon === "ShieldCheck" && <ShieldCheck size={28} />}
                      {fac.icon === "Sun" && <Sun size={28} />}
                      {fac.icon === "Droplets" && <Droplets size={28} />}
                    </div>
                    <span className="te-facility-chip">
                      {fac.category}
                    </span>
                  </div>

                  <h4 className="te-facility-title-pro">{fac.title}</h4>
                  <p className="te-facility-desc-pro">{fac.shortDesc}</p>

                  <Link to="/facilities" className="te-facility-action-row text-decoration-none">
                    <span>View Facility Details</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/facilities" className="btn btn-te-primary">
              <span>View All 10 Campus Facilities</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          8. SECTION B: DARK BLUE FEATURE SECTION ("WHY CHOOSE US" COMPLETE REDESIGN)
          ==================================================================== */}
      <section className="te-dark-feature-section">
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <SectionHeading 
            badge="The Educators Distinction"
            badgeType="gold"
            title="Why Discerning Parents"
            titleAccent="Choose Our Campus"
            description="Rooted in the renowned Beaconhouse educational heritage, our campus harmonizes academic rigor with moral grounding."
            center={true}
            theme="dark"
          />

          <div className="row g-4">
            {/* Card 1: Flagship */}
            <div className="col-lg-4 col-md-6">
              <div className="te-rainbow-card-wrap card-delay-1">
                <div className="te-dark-card-pro featured">
                  <span className="te-dark-card-badge gold">FLAGSHIP</span>
                  <div className="te-dark-icon-wrap gold">
                    <Award size={28} />
                  </div>
                  <h4 className="te-dark-card-title">Beaconhouse Educational Lineage</h4>
                  <p className="te-dark-card-desc">
                    Backed by Pakistan's premier educational network with 25 years of proven excellence in teaching methodologies, standardized curricula, and quality audit benchmarks.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Solar Campus */}
            <div className="col-lg-4 col-md-6">
              <div className="te-rainbow-card-wrap card-delay-2">
                <div className="te-dark-card-pro">
                  <span className="te-dark-card-badge blue">INFRASTRUCTURE</span>
                  <div className="te-dark-icon-wrap blue">
                    <Sun size={28} />
                  </div>
                  <h4 className="te-dark-card-title">Solar Powered Green Campus</h4>
                  <p className="te-dark-card-desc">
                    Our solar infrastructure guarantees uninterrupted class focus, well-lit spaces, and comfortable ventilation without disruption from seasonal load shedding.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Sports & Lawns */}
            <div className="col-lg-4 col-md-6">
              <div className="te-rainbow-card-wrap card-delay-3">
                <div className="te-dark-card-pro">
                  <span className="te-dark-card-badge green">ATHLETICS</span>
                  <div className="te-dark-icon-wrap green">
                    <Compass size={28} />
                  </div>
                  <h4 className="te-dark-card-title">Expansive Sports & Grounds</h4>
                  <p className="te-dark-card-desc">
                    Unlike cramped urban buildings, our campus features a wide green sports field, open air assembly grounds, and dedicated pre-school play structures.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Character & Islamic Values */}
            <div className="col-lg-4 col-md-6">
              <div className="te-rainbow-card-wrap card-delay-4">
                <div className="te-dark-card-pro">
                  <span className="te-dark-card-badge purple">ETHICS</span>
                  <div className="te-dark-icon-wrap purple">
                    <HeartHandshake size={28} />
                  </div>
                  <h4 className="te-dark-card-title">Character & Moral Values</h4>
                  <p className="te-dark-card-desc">
                    We balance contemporary academic rigor with strong moral etiquette, empathy, self-discipline, and deep reverence for Islamic cultural traditions.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5: Sibling Discounts */}
            <div className="col-lg-4 col-md-6">
              <div className="te-rainbow-card-wrap card-delay-5">
                <div className="te-dark-card-pro">
                  <span className="te-dark-card-badge cyan">SCHOLARSHIP</span>
                  <div className="te-dark-icon-wrap cyan">
                    <Sparkles size={28} />
                  </div>
                  <h4 className="te-dark-card-title">Generous Sibling Discounts</h4>
                  <p className="te-dark-card-desc">
                    We support family education by offering 10% to 25% monthly tuition fee discounts for 2nd, 3rd, and 4th biological siblings from the same family.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 6: Child Safety Protocols */}
            <div className="col-lg-4 col-md-6">
              <div className="te-rainbow-card-wrap card-delay-6">
                <div className="te-dark-card-pro">
                  <span className="te-dark-card-badge rose">SECURITY</span>
                  <div className="te-dark-icon-wrap rose">
                    <ShieldCheck size={28} />
                  </div>
                  <h4 className="te-dark-card-title">Strict Child Safety Protocols</h4>
                  <p className="te-dark-card-desc">
                    CCTV monitored campus, trained gate security, multi-stage purified drinking water, and hygienic washroom upkeep ensure your child's complete well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          9. PHOTO GALLERY SHOWCASE (REAL CAMPUS PHOTOGRAPHY)
          ==================================================================== */}
      <section className="py-5 bg-subtle">
        <div className="container py-4">
          <SectionHeading 
            badge="Campus Moments"
            badgeType="blue"
            title="School Life &"
            titleAccent="Visual Gallery"
            description="Explore authentic views of our campus architecture, outdoor play areas, leadership, and student celebrations."
          />

          <div className="row g-3">
            {galleryPhotos.slice(0, 6).map((photo, idx) => (
              <div key={photo.id} className="col-lg-4 col-md-6">
                <div 
                  className="te-gallery-item"
                  onClick={() => openLightbox(idx)}
                >
                  <img 
                    src={photo.src} 
                    alt={photo.alt} 
                    className="te-gallery-img"
                    onError={(e) => {
                      if (photo.fallback) {
                        e.target.onerror = null;
                        e.target.src = photo.fallback;
                      }
                    }}
                  />
                  <div className="te-gallery-overlay">
                    <span className="badge bg-warning text-dark align-self-start mb-1" style={{ fontSize: "0.72rem" }}>
                      {photo.category}
                    </span>
                    <strong className="text-white small mb-1">{photo.title}</strong>
                    <span className="small text-light-50 d-inline-flex align-items-center gap-1">
                      <Eye size={12} /> Click to enlarge
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link to="/gallery" className="btn btn-te-outline">
              <span>View Full Campus Gallery</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          10. SECTION C: RECENT CIRCULARS & NOTICES (COMPLETE REDESIGN)
          ==================================================================== */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <SectionHeading 
            badge="Official Notices"
            badgeType="gold"
            title="Recent School Circulars &"
            titleAccent="Announcements"
            description="Stay updated with school announcements, admission notices, and schedules in English and Urdu."
          />

          <div className="row g-4">
            {circulars.slice(0, 3).map((circ) => {
              const badgeClass = circ.category.toLowerCase().includes("admission") 
                ? "admissions" 
                : circ.category.toLowerCase().includes("fee") 
                  ? "fee" 
                  : "general";

              return (
                <div key={circ.id} className="col-lg-4 col-md-6">
                  <div 
                    className="te-circular-card-pro"
                    onClick={() => setSelectedCircular(circ)}
                  >
                    <div className="te-circular-header-row">
                      <span className={`te-circular-badge ${badgeClass}`}>
                        {circ.category}
                      </span>
                      <span className="te-circular-date-chip">
                        <Calendar size={13} className="text-primary" />
                        <span>{circ.date}</span>
                      </span>
                    </div>

                    <h4 className="te-circular-title-pro">
                      {circ.titleEn}
                    </h4>

                    <p className="te-circular-body-pro">
                      {circ.bodyEn.slice(0, 115)}...
                    </p>

                    {/* Styled Urdu Preview Box */}
                    <div className="te-circular-urdu-box">
                      <p className="te-circular-urdu-text">
                        {circ.titleUr}
                      </p>
                    </div>

                    <div className="te-circular-footer-row">
                      <span className="te-circular-cta-text">
                        <span>Read Circular (Urdu/Eng)</span>
                        <ArrowRight size={15} />
                      </span>
                      <span className="badge bg-light text-secondary border small">
                        Official Notice
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-5">
            <Link to="/news-circulars" className="btn btn-te-outline px-4 py-2">
              <span>View All Circulars & Announcements</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          11. SECTION D: ADMISSIONS CTA & FEE SECTION (NEON GLASS REDESIGN — IMAGE 4)
          ==================================================================== */}
      <section className="te-neon-admissions-section">
        {/* Subtle Bottom Neon Wave Curves */}
        <div className="te-neon-bottom-waves">
          <svg viewBox="0 0 1440 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-100 h-100" preserveAspectRatio="none">
            <path d="M0 160C240 60 480 200 720 120C960 40 1200 180 1440 100V220H0V160Z" fill="url(#neonWaveGrad1)" opacity="0.25"/>
            <path d="M0 180C300 100 600 240 900 150C1200 60 1350 170 1440 140V220H0V180Z" fill="url(#neonWaveGrad2)" opacity="0.35"/>
            <defs>
              <linearGradient id="neonWaveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#13D7FF"/>
                <stop offset="50%" stopColor="#9858FF"/>
                <stop offset="100%" stopColor="#238BFF"/>
              </linearGradient>
              <linearGradient id="neonWaveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9858FF"/>
                <stop offset="100%" stopColor="#13D7FF"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center g-4">
            {/* Left Column (Approx 55% width): Admissions Overview & Fee Cards */}
            <div className="col-lg-7">
              {/* Admissions Open Badge */}
              <div className="mb-2">
                <div className="te-neon-pill-badge">
                  <GraduationCap size={15} className="text-warning" />
                  <span>Admissions Open 2026 – 2027</span>
                </div>
              </div>

              {/* Main Headline */}
              <div className="position-relative mb-2">
                <h2 className="te-neon-headline">
                  Secure Your Child's{" "}
                  <span className="te-neon-gradient-text">Bright Educational</span>{" "}
                  Future Today
                </h2>
                {/* Gold Accent Curve Underline */}
                <div className="te-neon-gold-curve"></div>
              </div>

              {/* Refined Admissions Description */}
              <p className="te-neon-description mb-3">
                Registrations are now open from Pre-School (Playgroup, Nursery, Prep) to Matriculation. 
                Visit our campus on Main GT Road, Baigpur to obtain the prospectus and complete registration.
              </p>

              {/* Two Premium Floating Glass Fee Cards (side-by-side) */}
              <div className="row g-2 mb-3">
                {/* Card 01 — Registration */}
                <div className="col-sm-6">
                  <div className="te-neon-fee-card violet-glow">
                    <div className="te-neon-card-icon-badge violet">
                      <FileText size={18} />
                    </div>
                    <div className="te-neon-fee-label">One-Time Registration</div>
                    <div className="te-neon-fee-amount">
                      PKR {feeStructure.registrationFee.toLocaleString()}
                    </div>
                    <div className="te-neon-fee-sub">
                      Payable at initial prospectus submission
                    </div>
                  </div>
                </div>

                {/* Card 02 — Tuition */}
                <div className="col-sm-6">
                  <div className="te-neon-fee-card cyan-glow">
                    <div className="te-neon-card-icon-badge gold">
                      <Coins size={18} />
                    </div>
                    <div className="te-neon-fee-label">Monthly Tuition Fee</div>
                    <div className="te-neon-fee-amount">
                      PKR {feeStructure.monthlyFee.toLocaleString()}
                    </div>
                    <div className="te-neon-fee-sub">
                      Up to 25% sibling discounts apply
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <button 
                  onClick={() => setIsAdmissionModalOpen(true)}
                  className="btn te-btn-neon-gold"
                  type="button"
                >
                  <GraduationCap size={16} />
                  <span>Apply for Admission</span>
                  <ArrowRight size={15} />
                </button>

                <Link to="/admissions" className="btn te-btn-neon-blue">
                  <FileText size={15} />
                  <span>View Fee Structure & Sibling Discounts</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right Column (Approx 45% width): Signature Floating Neon Glass Assistance Panel */}
            <div className="col-lg-5">
              <div className="te-neon-panel-wrap">
                {/* Animated Ambient Neon Backlight Halo */}
                <div className="te-neon-backlight-halo"></div>

                <div className="te-neon-glass-panel">
                  {/* Folded Neon Corner Ribbon as seen in Image 4 */}
                  <div className="te-neon-folded-ribbon"></div>

                  {/* Top Status Header */}
                  <div className="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom border-secondary border-opacity-25">
                    <span className="te-neon-active-badge">
                      <span className="te-neon-green-dot"></span>
                      <span>Admissions Desk Active</span>
                    </span>
                    <span className="te-neon-session-text">
                      <Calendar size={13} className="text-cyan me-1" />
                      <span>{schoolInfo.currentSession}</span>
                    </span>
                  </div>

                  {/* Panel Heading */}
                  <h3 className="te-neon-panel-title mb-1">
                    Need Immediate <span className="text-cyan">Assistance?</span>
                  </h3>
                  <p className="te-neon-panel-desc mb-3">
                    Our admissions office is ready to answer questions regarding syllabus, admission tests, 
                    seat availability, transport routes, and required admission documents.
                  </p>

                  {/* 3 Interactive Contact Cards */}
                  <div className="d-flex flex-column gap-2 mb-3">
                    {/* Helpline */}
                    <a href={`tel:${schoolInfo.phone}`} className="te-neon-contact-card blue text-decoration-none">
                      <div className="te-neon-icon-box blue">
                        <Phone size={16} />
                      </div>
                      <div className="flex-grow-1">
                        <div className="te-neon-contact-label">Official Direct Helpline</div>
                        <div className="te-neon-contact-value">{schoolInfo.phone}</div>
                      </div>
                      <div className="te-neon-arrow-btn">
                        <Phone size={13} />
                      </div>
                    </a>

                    {/* Location */}
                    <div className="te-neon-contact-card gold">
                      <div className="te-neon-icon-box gold">
                        <MapPin size={16} />
                      </div>
                      <div className="flex-grow-1">
                        <div className="te-neon-contact-label">Campus Physical Location</div>
                        <div className="te-neon-contact-value">{schoolInfo.shortAddress}</div>
                      </div>
                      <div className="te-neon-arrow-btn">
                        <ArrowRight size={13} />
                      </div>
                    </div>

                    {/* Visiting Hours */}
                    <div className="te-neon-contact-card cyan">
                      <div className="te-neon-icon-box cyan">
                        <Clock size={16} />
                      </div>
                      <div className="flex-grow-1">
                        <div className="te-neon-contact-label">Office Visiting Hours</div>
                        <div className="te-neon-contact-value">Mon – Sat: 7:45 AM – 2:00 PM</div>
                      </div>
                      <div className="te-neon-arrow-btn">
                        <ArrowRight size={13} />
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Button */}
                  <a 
                    href={`https://wa.me/${schoolInfo.whatsapp}?text=Assalam-o-Alaikum,%20I%20am%20inquiring%20about%20admissions%20at%20The%20Educators%20Prime%20Campus%20Baigpur.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn te-btn-neon-whatsapp w-100"
                  >
                    <MessageSquare size={16} />
                    <span>Chat on WhatsApp Admissions Desk</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          12. CAMPUS LOCATION & VISITING STRIP
          ==================================================================== */}
      <section className="py-4 bg-white border-top">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div className="d-flex align-items-center gap-3">
              <div className="bg-primary-subtle text-primary p-2 rounded-3">
                <MapPin size={22} />
              </div>
              <div>
                <strong className="d-block text-dark small">Prime Location on Main GT Road</strong>
                <span className="text-muted small">{schoolInfo.address}</span>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <Link to="/contact" className="btn btn-sm btn-te-outline fw-semibold">
                <span>View Google Map & Directions</span>
                <ArrowRight size={14} className="ms-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

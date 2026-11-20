import React from "react";
import { Link } from "react-router-dom";
import { Quote, Award, CheckCircle2, ArrowRight, GraduationCap, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { leadership, schoolInfo } from "../data/schoolData";
import { useSchool } from "../context/SchoolContext";

export default function ChairmanMessagePage() {
  const { setIsAdmissionModalOpen } = useSchool();
  const ceo = leadership.ceo;

  return (
    <div>
      <PageHeader 
        badge="Executive Leadership"
        title="From the Chairman's Desk"
        subtitle="A vision for building strong character, unlocking potential, and shaping future leaders at The Educators Prime Campus Baigpur."
        breadcrumbs={[
          { label: "Leadership", link: "/about" },
          { label: "CEO Message", active: true }
        ]}
      />

      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row g-5 align-items-center">
            {/* Left: Signature Portrait */}
            <div className="col-lg-5">
              <div className="te-portrait-frame-pro shadow-lg">
                <img 
                  src={ceo.image} 
                  alt={ceo.name} 
                  className="te-portrait-img ceo"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = ceo.imageFallback;
                  }}
                />

                <div className="te-portrait-badge">
                  <h4 className="fw-bold text-white mb-0">{ceo.name}</h4>
                  <div className="text-warning fw-semibold">{ceo.designation}</div>
                  <small className="text-light-50">{ceo.school}</small>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-3 bg-light border text-center">
                <span className="badge bg-warning text-dark mb-1">Official Executive Office</span>
                <p className="small text-muted mb-0">
                  Leading strategic governance, academic quality benchmarking, and institutional growth.
                </p>
              </div>
            </div>

            {/* Right: Full Verified Message with Required Hover Animation & Soft Aura */}
            <div className="col-lg-7">
              <div className="te-rainbow-aura-wrap">
                <div className="te-chairman-card-pro">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <Quote size={36} className="te-quote-icon mb-0" />
                      <span className="text-uppercase fw-bold text-primary small" style={{ letterSpacing: "0.07em" }}>
                        Executive Address
                      </span>
                    </div>
                    <span className="badge bg-warning text-dark px-3 py-1 fw-bold small">
                      CEO Message
                    </span>
                  </div>

                  <h2 className="fw-bold mb-4" style={{ color: "var(--te-navy-dark)", fontSize: "2.1rem" }}>
                    {ceo.heading}
                  </h2>

                  <div className="te-chairman-text-pro mb-4">
                    {ceo.paragraphs.map((para, idx) => (
                      <p key={idx} className="mb-3 text-secondary" style={{ fontSize: "1.08rem", lineHeight: "1.85" }}>
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="p-3 rounded-3 bg-light border-start border-4 border-warning mb-4">
                    <strong className="text-dark d-block mb-1">Guiding Commitment:</strong>
                    <p className="text-muted small mb-0 fst-italic">
                      "{ceo.quote}"
                    </p>
                  </div>

                  {/* Core Leadership Pillars */}
                  <h5 className="fw-bold text-dark mb-3">Our Three Pillars of Academic Leadership:</h5>
                  <div className="row g-3 mb-4">
                    <div className="col-md-4">
                      <div className="te-pillar-badge h-100">
                        <div className="text-primary mb-2">
                          <Award size={24} />
                        </div>
                        <strong className="d-block text-dark small mb-1">Character Building</strong>
                        <span className="text-muted" style={{ fontSize: "0.78rem" }}>
                          Instilling truth, moral discipline, and ethical consciousness.
                        </span>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="te-pillar-badge h-100">
                        <div className="text-warning mb-2">
                          <Sparkles size={24} />
                        </div>
                        <strong className="d-block text-dark small mb-1">Unlocking Potential</strong>
                        <span className="text-muted" style={{ fontSize: "0.78rem" }}>
                          Encouraging creativity, scientific curiosity, and confidence.
                        </span>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="te-pillar-badge h-100">
                        <div className="text-success mb-2">
                          <ShieldCheck size={24} />
                        </div>
                        <strong className="d-block text-dark small mb-1">Future Leaders</strong>
                        <span className="text-muted" style={{ fontSize: "0.78rem" }}>
                          Cultivating responsibility and excellence that go hand in hand.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-top d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div>
                      <h5 className="fw-bold text-dark mb-0">{ceo.name}</h5>
                      <div className="text-primary fw-semibold small">{ceo.designation}</div>
                      <small className="text-muted">{schoolInfo.name}</small>
                    </div>

                    <button 
                      onClick={() => setIsAdmissionModalOpen(true)}
                      className="btn btn-te-gold"
                    >
                      <GraduationCap size={18} />
                      <span>Apply for Admission</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross link to Director Message */}
      <section className="py-4 bg-subtle border-top">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div>
              <strong className="text-dark d-block">Looking for Director's Message?</strong>
              <span className="text-muted small">Read Dr. Rimsha Sufyan's student-centric academic message.</span>
            </div>
            <Link to="/leadership/director" className="btn btn-te-outline btn-sm fw-semibold">
              <span>View Director's Address</span>
              <ArrowRight size={14} className="ms-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { Quote, Heart, Sparkles, CheckCircle2, ArrowRight, GraduationCap, Users, Sun } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { leadership, schoolInfo } from "../data/schoolData";
import { useSchool } from "../context/SchoolContext";

export default function DirectorMessagePage() {
  const { setIsAdmissionModalOpen } = useSchool();
  const director = leadership.director;

  return (
    <div>
      <PageHeader 
        badge="Academic Guidance"
        title="From the Director's Desk"
        subtitle="Nurturing every child's potential to shine with confidence, responsibility, and academic excellence."
        breadcrumbs={[
          { label: "Leadership", link: "/about" },
          { label: "Director's Message", active: true }
        ]}
      />

      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row g-5 align-items-center">
            {/* Left: Message Panel with Selective Soft Aura */}
            <div className="col-lg-7 order-2 order-lg-1">
              <div className="te-rainbow-aura-wrap">
                <div className="te-director-card-pro">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <Quote size={36} className="te-quote-icon text-primary mb-0" />
                      <span className="text-uppercase fw-bold text-warning small" style={{ letterSpacing: "0.07em" }}>
                        Director's Official Address
                      </span>
                    </div>
                    <span className="badge bg-primary text-white px-3 py-1 fw-bold small">
                      Academic Vision
                    </span>
                  </div>

                  <h2 className="fw-bold mb-4" style={{ color: "var(--te-navy-dark)", fontSize: "2.1rem" }}>
                    {director.heading}
                  </h2>

                  <div className="te-chairman-text-pro mb-4">
                    {director.paragraphs.map((para, idx) => (
                      <p key={idx} className="mb-3 text-secondary" style={{ fontSize: "1.08rem", lineHeight: "1.85" }}>
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="p-3 rounded-3 bg-light border-start border-4 border-primary mb-4">
                    <strong className="text-dark d-block mb-1">Director's Call to Action:</strong>
                    <p className="text-primary fw-bold fs-5 mb-0">
                      "{director.quote}"
                    </p>
                  </div>

                  {/* Director's Educational Focus */}
                  <h5 className="fw-bold text-dark mb-3">Our Core Commitments to Every Child:</h5>
                  <div className="row g-3 mb-4">
                    <div className="col-md-4">
                      <div className="te-pillar-badge h-100">
                        <div className="text-primary mb-2">
                          <Heart size={24} />
                        </div>
                        <strong className="d-block text-dark small mb-1">Individual Care</strong>
                        <span className="text-muted" style={{ fontSize: "0.78rem" }}>
                          Recognizing and cherishing each child's unique talents and learning style.
                        </span>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="te-pillar-badge h-100">
                        <div className="text-warning mb-2">
                          <Sparkles size={24} />
                        </div>
                        <strong className="d-block text-dark small mb-1">Confidence Building</strong>
                        <span className="text-muted" style={{ fontSize: "0.78rem" }}>
                          Inspiring young minds to speak boldly, think independently, and innovate.
                        </span>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="te-pillar-badge h-100">
                        <div className="text-success mb-2">
                          <Sun size={24} />
                        </div>
                        <strong className="d-block text-dark small mb-1">Bright Futures</strong>
                        <span className="text-muted" style={{ fontSize: "0.78rem" }}>
                          Equipping students with values to become successful, ethical leaders.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-top d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div>
                      <h5 className="fw-bold text-dark mb-0">{director.name}</h5>
                      <div className="text-warning fw-semibold small">{director.designation}</div>
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

            {/* Right: Director Portrait Frame */}
            <div className="col-lg-5 order-1 order-lg-2">
              <div className="te-director-portrait-frame shadow-lg">
                <img 
                  src={director.image} 
                  alt={director.name} 
                  className="te-portrait-img director"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = director.imageFallback;
                  }}
                />

                <div className="te-portrait-badge">
                  <h4 className="fw-bold text-white mb-0">{director.name}</h4>
                  <div className="text-warning fw-semibold">{director.designation}</div>
                  <small className="text-light-50">{director.school}</small>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-3 bg-light border text-center">
                <span className="badge bg-primary text-white mb-1">Directorate of Academic Affairs</span>
                <p className="small text-muted mb-0">
                  Overseeing student enrichment, classroom excellence, holistic development, and parental partnership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross link to CEO Message */}
      <section className="py-4 bg-subtle border-top">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div>
              <strong className="text-dark d-block">Looking for Chairman / CEO's Message?</strong>
              <span className="text-muted small">Read Abu Sufyan Virk's institutional leadership message.</span>
            </div>
            <Link to="/leadership/chairman" className="btn btn-te-outline btn-sm fw-semibold">
              <span>View Chairman's Address</span>
              <ArrowRight size={14} className="ms-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

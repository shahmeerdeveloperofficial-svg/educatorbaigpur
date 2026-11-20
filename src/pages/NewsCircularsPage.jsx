import React, { useState } from "react";
import { Calendar, Tag, FileText, ArrowRight, BookOpen, Globe } from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import { useSchool } from "../context/SchoolContext";
import { schoolInfo } from "../data/schoolData";

export default function NewsCircularsPage() {
  const { circulars, setSelectedCircular } = useSchool();
  const [filterCat, setFilterCat] = useState("All");

  const categories = ["All", "Admissions", "Fee Policy", "General"];

  const filteredCirculars = filterCat === "All"
    ? circulars
    : circulars.filter(c => c.category === filterCat);

  return (
    <div>
      <PageHeader 
        badge="Official Announcements"
        title="School News, Events & Circulars"
        subtitle="Stay fully informed with academic notices, session announcements, and circulars in English and Urdu."
        breadcrumbs={[{ label: "News & Circulars", active: true }]}
      />

      <section className="py-4 bg-light border-bottom">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div className="d-flex align-items-center gap-2">
              <span className="small fw-bold text-muted text-uppercase">Filter:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`btn btn-sm px-3 py-1 rounded-pill fw-semibold ${
                    filterCat === cat ? "btn-te-primary shadow-sm" : "btn-outline-secondary"
                  }`}
                  onClick={() => setFilterCat(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="small text-muted d-inline-flex align-items-center gap-1">
              <Globe size={14} className="text-primary" />
              <span>Bilingual: English & Urdu Displayed</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row g-4">
            {filteredCirculars.map((circ) => {
              const badgeClass = circ.category.toLowerCase().includes("admission") 
                ? "admissions" 
                : circ.category.toLowerCase().includes("fee") 
                  ? "fee" 
                  : "general";

              return (
                <div key={circ.id} className="col-lg-6">
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

                    <h4 className="te-circular-title-pro" style={{ fontSize: "1.3rem" }}>
                      {circ.titleEn}
                    </h4>

                    <p className="te-circular-body-pro">
                      {circ.bodyEn}
                    </p>

                    {/* Styled Urdu preview box */}
                    <div className="te-circular-urdu-box">
                      <div className="te-circular-urdu-text mb-1" style={{ fontSize: "1.15rem" }}>
                        {circ.titleUr}
                      </div>
                      <div className="small text-secondary te-urdu-text" style={{ fontSize: "0.95rem" }}>
                        {circ.bodyUr.slice(0, 110)}...
                      </div>
                    </div>

                    <div className="te-circular-footer-row">
                      <span className="te-circular-cta-text">
                        <span>Open Full Circular & Print</span>
                        <ArrowRight size={16} />
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

          <div className="mt-5 p-4 rounded-4 bg-subtle border text-center">
            <h5 className="fw-bold text-dark mb-2">Parent Notification Notice</h5>
            <p className="text-muted small mb-3 max-w-600 mx-auto">
              Circulars are distributed through official parents' communication groups and published on this noticeboard. 
              For queries, contact campus administration during working hours.
            </p>
            <a href={`tel:${schoolInfo.phone}`} className="btn btn-te-outline btn-sm fw-bold">
              Call Administrative Helpline: {schoolInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

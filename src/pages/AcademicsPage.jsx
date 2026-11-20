import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Layers, 
  Compass,
  FileCheck
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import { academicPrograms, schoolInfo } from "../data/schoolData";
import { useSchool } from "../context/SchoolContext";

export default function AcademicsPage() {
  const { setIsAdmissionModalOpen } = useSchool();
  const [activeTab, setActiveTab] = useState("all");

  const filteredPrograms = activeTab === "all" 
    ? academicPrograms 
    : academicPrograms.filter(p => p.id === activeTab);

  return (
    <div>
      <PageHeader 
        badge="Beaconhouse Standard Curricula"
        title="Academic Programs & Curricula"
        subtitle="A continuum of structured, progressive learning from Early Childhood to BISE Board Matriculation."
        breadcrumbs={[{ label: "Academics", active: true }]}
      />

      {/* Filter Tabs */}
      <section className="py-4 bg-light border-bottom">
        <div className="container">
          <div className="d-flex align-items-center justify-content-center flex-wrap gap-2">
            <button 
              className={`btn btn-sm px-3 py-2 rounded-pill fw-semibold ${
                activeTab === "all" ? "btn-te-primary shadow-sm" : "btn-outline-secondary"
              }`}
              onClick={() => setActiveTab("all")}
            >
              All Academic Levels
            </button>
            <button 
              className={`btn btn-sm px-3 py-2 rounded-pill fw-semibold ${
                activeTab === "preschool" ? "btn-te-primary shadow-sm" : "btn-outline-secondary"
              }`}
              onClick={() => setActiveTab("preschool")}
            >
              Pre-School & Montessori
            </button>
            <button 
              className={`btn btn-sm px-3 py-2 rounded-pill fw-semibold ${
                activeTab === "primary" ? "btn-te-primary shadow-sm" : "btn-outline-secondary"
              }`}
              onClick={() => setActiveTab("primary")}
            >
              Primary (Grades 1-5)
            </button>
            <button 
              className={`btn btn-sm px-3 py-2 rounded-pill fw-semibold ${
                activeTab === "middle" ? "btn-te-primary shadow-sm" : "btn-outline-secondary"
              }`}
              onClick={() => setActiveTab("middle")}
            >
              Middle (Grades 6-8)
            </button>
            <button 
              className={`btn btn-sm px-3 py-2 rounded-pill fw-semibold ${
                activeTab === "secondary" ? "btn-te-primary shadow-sm" : "btn-outline-secondary"
              }`}
              onClick={() => setActiveTab("secondary")}
            >
              Secondary / Matric
            </button>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row g-5">
            {filteredPrograms.map((prog, idx) => (
              <div key={prog.id} className="col-12">
                <div 
                  className="p-4 p-lg-5 rounded-4 border shadow-sm"
                  style={{
                    background: idx % 2 === 0 ? "#FFFFFF" : "var(--te-bg-subtle)",
                    borderLeft: "6px solid var(--te-navy-primary)"
                  }}
                >
                  <div className="row align-items-center g-4">
                    <div className="col-lg-5">
                      <div className="rounded-4 overflow-hidden shadow-sm" style={{ height: "280px" }}>
                        <img 
                          src={prog.image} 
                          alt={prog.name} 
                          className="w-100 h-100 object-fit-cover"
                        />
                      </div>
                    </div>

                    <div className="col-lg-7">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="badge bg-primary text-white">{prog.badge}</span>
                        <span className="small text-muted">{prog.grades}</span>
                      </div>

                      <h3 className="fw-bold text-dark mb-3">{prog.name}</h3>
                      <p className="lead text-secondary mb-3" style={{ fontSize: "1.05rem" }}>
                        {prog.summary}
                      </p>

                      <div className="row g-2 mb-4">
                        {prog.features.map((feat, i) => (
                          <div key={i} className="col-sm-6">
                            <div className="d-flex align-items-center gap-2">
                              <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                              <span className="small text-dark fw-medium">{feat}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="d-flex align-items-center gap-3">
                        <button 
                          onClick={() => setIsAdmissionModalOpen(true)}
                          className="btn btn-te-gold btn-sm px-3 py-2 fw-bold"
                        >
                          <GraduationCap size={16} />
                          <span>Apply for {prog.name}</span>
                        </button>

                        <Link to="/admissions" className="btn btn-outline-secondary btn-sm fw-semibold">
                          <span>View Fee Breakdown</span>
                          <ArrowRight size={14} className="ms-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology & Academic Standards */}
      <section className="py-5 bg-subtle">
        <div className="container py-4">
          <SectionHeading 
            badge="Pedagogical Excellence"
            badgeType="gold"
            title="The Educators Academic"
            titleAccent="Methodology"
            description="Our structured teaching framework combines student curiosity with rigorous assessment."
          />

          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="p-4 rounded-4 bg-white border h-100 text-center shadow-sm">
                <div className="p-3 rounded-circle bg-primary-subtle text-primary d-inline-flex mb-3">
                  <BookOpen size={28} />
                </div>
                <h5 className="fw-bold text-dark mb-2">Concept-First Learning</h5>
                <p className="text-muted small mb-0">
                  Moving away from rote memorization toward deep conceptual clarity and practical application.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="p-4 rounded-4 bg-white border h-100 text-center shadow-sm">
                <div className="p-3 rounded-circle bg-warning-subtle text-warning d-inline-flex mb-3">
                  <Compass size={28} />
                </div>
                <h5 className="fw-bold text-dark mb-2">Bilingual Proficiency</h5>
                <p className="text-muted small mb-0">
                  Daily focus on English speaking, reading, writing alongside rich Urdu linguistic expression.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="p-4 rounded-4 bg-white border h-100 text-center shadow-sm">
                <div className="p-3 rounded-circle bg-success-subtle text-success d-inline-flex mb-3">
                  <FileCheck size={28} />
                </div>
                <h5 className="fw-bold text-dark mb-2">Continuous Assessment</h5>
                <p className="text-muted small mb-0">
                  Weekly quizzes, monthly reviews, term exams, and parent-teacher alignment on student progress.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="p-4 rounded-4 bg-white border h-100 text-center shadow-sm">
                <div className="p-3 rounded-circle bg-info-subtle text-info d-inline-flex mb-3">
                  <Award size={28} />
                </div>
                <h5 className="fw-bold text-dark mb-2">BISE Matric Preparation</h5>
                <p className="text-muted small mb-0">
                  Dedicated coaching, past papers solving, and mock exams for outstanding board results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions CTA Strip */}
      <section className="py-4 bg-primary text-white">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div>
              <h4 className="fw-bold text-white mb-1">Admissions Open for Session 2026-2027</h4>
              <span className="text-light-50 small">Limited seats available across all grades. Sibling discounts apply.</span>
            </div>
            <button 
              onClick={() => setIsAdmissionModalOpen(true)}
              className="btn btn-warning fw-bold px-4 py-2"
            >
              Enroll Your Child Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

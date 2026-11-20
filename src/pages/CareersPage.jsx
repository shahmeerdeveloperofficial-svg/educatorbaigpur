import React, { useState } from "react";
import { Briefcase, MapPin, Clock, GraduationCap, CheckCircle2, Send, MessageSquare } from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import { schoolInfo } from "../data/schoolData";
import { useSchool } from "../context/SchoolContext";

export default function CareersPage() {
  const { careers } = useSchool();
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicant, setApplicant] = useState({ name: "", phone: "", qualification: "", experience: "" });
  const [applied, setApplied] = useState(false);

  const handleApply = (e) => {
    e.preventDefault();
    if (!applicant.name || !applicant.phone) return;

    const waMsg = encodeURIComponent(
      `Assalam-o-Alaikum Administration,\n` +
      `Job Application for: ${selectedJob.title}\n` +
      `• Applicant: ${applicant.name}\n` +
      `• Phone: ${applicant.phone}\n` +
      `• Qualification: ${applicant.qualification}\n` +
      `• Experience: ${applicant.experience}\n` +
      `I am interested in joining The Educators Prime Campus Baigpur faculty.`
    );
    window.open(`https://wa.me/${schoolInfo.whatsapp}?text=${waMsg}`, "_blank");
    setApplied(true);
  };

  return (
    <div>
      <PageHeader 
        badge="Join Our Faculty"
        title="Careers & Opportunities"
        subtitle="Shape future leaders. Join a passionate team of educators at The Educators Prime Campus Baigpur."
        breadcrumbs={[{ label: "Careers", active: true }]}
      />

      <section className="py-5 bg-white">
        <div className="container py-4">
          <SectionHeading 
            badge="Teaching Opportunities"
            badgeType="blue"
            title="Current Openings for"
            titleAccent="Passionate Teachers"
            description="We welcome qualified, creative, and student-focused teachers to join our growing campus community."
          />

          <div className="row g-4">
            {careers.map((job) => (
              <div key={job.id} className="col-lg-4 col-md-6">
                <div className="p-4 rounded-4 border bg-subtle h-100 d-flex flex-column justify-content-between shadow-sm">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="badge bg-success-subtle text-success border border-success-subtle">
                        {job.status}
                      </span>
                      <span className="small text-muted">{job.type}</span>
                    </div>

                    <h4 className="fw-bold text-dark mb-2" style={{ fontSize: "1.2rem" }}>
                      {job.title}
                    </h4>
                    <span className="text-primary small fw-semibold d-block mb-3">
                      Department: {job.department}
                    </span>

                    <p className="text-muted small mb-3">
                      {job.description}
                    </p>

                    <div className="p-3 rounded-3 bg-white border mb-3 small">
                      <div className="mb-1 text-dark">
                        <strong>Qualification:</strong> {job.qualification}
                      </div>
                      <div className="text-dark">
                        <strong>Experience:</strong> {job.experience}
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      setSelectedJob(job);
                      setApplied(false);
                    }}
                    className="btn btn-te-primary btn-sm w-100 py-2 fw-semibold"
                  >
                    Apply for this Position
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Teacher Benefits */}
          <div className="mt-5 p-4 p-md-5 rounded-4 bg-light border">
            <h4 className="fw-bold text-dark mb-3">Why Teach at The Educators Prime Campus?</h4>
            <div className="row g-3">
              <div className="col-md-4">
                <div className="d-flex align-items-start gap-2">
                  <CheckCircle2 size={18} className="text-success flex-shrink-0 mt-1" />
                  <div>
                    <strong className="d-block small text-dark">Beaconhouse Professional Growth</strong>
                    <span className="text-muted small">Standardized curriculum training and continuous professional development.</span>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="d-flex align-items-start gap-2">
                  <CheckCircle2 size={18} className="text-success flex-shrink-0 mt-1" />
                  <div>
                    <strong className="d-block small text-dark">Respectful Campus Culture</strong>
                    <span className="text-muted small">Supportive leadership and a collaborative peer community.</span>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="d-flex align-items-start gap-2">
                  <CheckCircle2 size={18} className="text-success flex-shrink-0 mt-1" />
                  <div>
                    <strong className="d-block small text-dark">Modern Facilities</strong>
                    <span className="text-muted small">Solar-powered classrooms, IT resources, and well-equipped environment.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div 
          className="position-fixed inset-0 d-flex align-items-center justify-content-center p-3"
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(7, 23, 44, 0.8)",
            backdropFilter: "blur(6px)",
            zIndex: 1060
          }}
          onClick={() => setSelectedJob(null)}
        >
          <div 
            className="bg-white rounded-4 shadow-lg p-4"
            style={{ maxWidth: "480px", width: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h5 className="fw-bold text-dark mb-0">Apply: {selectedJob.title}</h5>
                <small className="text-muted">{selectedJob.department}</small>
              </div>
              <button 
                onClick={() => setSelectedJob(null)} 
                className="btn btn-sm btn-light border rounded-circle"
              >
                ✕
              </button>
            </div>

            {applied ? (
              <div className="text-center py-3">
                <CheckCircle2 size={40} className="text-success mb-2" />
                <h5 className="fw-bold text-dark">Application Launched!</h5>
                <p className="text-muted small mb-3">
                  Your application has been routed to our WhatsApp hiring desk.
                </p>
                <button onClick={() => setSelectedJob(null)} className="btn btn-outline-secondary btn-sm">
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleApply}>
                <div className="mb-2">
                  <label className="form-label small fw-semibold text-dark">Full Name *</label>
                  <input 
                    type="text" 
                    className="form-control form-control-sm"
                    placeholder="Your name"
                    value={applicant.name}
                    onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                    required
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label small fw-semibold text-dark">Mobile / WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    className="form-control form-control-sm"
                    placeholder="0300-1234567"
                    value={applicant.phone}
                    onChange={(e) => setApplicant({ ...applicant, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label small fw-semibold text-dark">Highest Qualification</label>
                  <input 
                    type="text" 
                    className="form-control form-control-sm"
                    placeholder="e.g. MA English / B.Sc / B.Ed"
                    value={applicant.qualification}
                    onChange={(e) => setApplicant({ ...applicant, qualification: e.target.value })}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold text-dark">Teaching Experience</label>
                  <input 
                    type="text" 
                    className="form-control form-control-sm"
                    placeholder="e.g. 2 years at city school"
                    value={applicant.experience}
                    onChange={(e) => setApplicant({ ...applicant, experience: e.target.value })}
                  />
                </div>

                <button 
                  type="submit"
                  className="btn btn-success btn-sm w-100 py-2 d-flex align-items-center justify-content-center gap-2 fw-bold"
                >
                  <MessageSquare size={16} />
                  <span>Send Application via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

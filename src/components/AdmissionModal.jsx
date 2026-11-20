import React, { useState } from "react";
import { X, Send, CheckCircle2, MessageSquare, Phone, GraduationCap } from "lucide-react";
import { schoolInfo } from "../data/schoolData";
import { useSchool } from "../context/SchoolContext";

export default function AdmissionModal() {
  const { isAdmissionModalOpen, setIsAdmissionModalOpen, addInquiry } = useSchool();
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    studentName: "",
    grade: "Pre-School (Playgroup/Nursery/Prep)",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  if (!isAdmissionModalOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone) return;

    // Save to context & localStorage
    addInquiry(formData);

    // Prepare WhatsApp URL
    const waText = encodeURIComponent(
      `Assalam-o-Alaikum Admission Team,\n` +
      `I would like to inquire about admission at The Educators Prime Campus, Baigpur.\n\n` +
      `• Parent/Guardian: ${formData.parentName}\n` +
      `• Contact: ${formData.phone}\n` +
      `• Student Name: ${formData.studentName || "N/A"}\n` +
      `• Desired Class: ${formData.grade}\n` +
      `• Message: ${formData.message || "Please share admission test date and details."}`
    );
    const url = `https://wa.me/${schoolInfo.whatsapp}?text=${waText}`;
    setWhatsappUrl(url);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      parentName: "",
      phone: "",
      studentName: "",
      grade: "Pre-School (Playgroup/Nursery/Prep)",
      message: ""
    });
    setIsAdmissionModalOpen(false);
  };

  return (
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
      onClick={handleReset}
    >
      <div 
        className="bg-white rounded-4 shadow-lg overflow-hidden"
        style={{ maxWidth: "540px", width: "100%", maxHeight: "90vh", display: "flex", flexDirection: "column" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div 
          className="p-4 text-white position-relative"
          style={{ background: "linear-gradient(135deg, #0B2545 0%, #133E70 100%)" }}
        >
          <button 
            onClick={handleReset}
            className="btn btn-sm btn-light position-absolute top-0 end-0 m-3 rounded-circle p-1"
            aria-label="Close"
          >
            <X size={18} />
          </button>
          
          <div className="d-flex align-items-center gap-2 mb-2">
            <span className="te-badge gold mb-0">Admissions 2026-2027</span>
          </div>
          <h4 className="fw-bold text-white mb-1">Online Admission Inquiry</h4>
          <p className="small text-light-50 mb-0">
            Submit your inquiry to connect directly with the campus administration.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-4 overflow-y-auto flex-grow-1">
          {submitted ? (
            <div className="text-center py-4">
              <div 
                className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3 bg-success-subtle text-success"
                style={{ width: "64px", height: "64px" }}
              >
                <CheckCircle2 size={36} />
              </div>

              <h4 className="fw-bold text-dark mb-2">Inquiry Registered!</h4>
              <p className="text-muted small mb-4">
                Thank you, <strong>{formData.parentName}</strong>. Your inquiry has been saved. 
                For immediate assistance, you can also send this inquiry directly to our Admissions Desk on WhatsApp.
              </p>

              <div className="d-flex flex-column gap-2 mb-3">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-success py-2 d-flex align-items-center justify-content-center gap-2 fw-semibold"
                >
                  <MessageSquare size={18} />
                  <span>Send via WhatsApp to Campus Desk</span>
                </a>

                <button 
                  onClick={handleReset} 
                  className="btn btn-outline-secondary py-2"
                >
                  Done & Close
                </button>
              </div>

              <div className="small text-muted mt-3">
                Or call directly: <a href={`tel:${schoolInfo.phone}`} className="fw-bold text-dark">{schoolInfo.phone}</a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label small fw-semibold text-dark">
                  Parent / Guardian Full Name <span className="text-danger">*</span>
                </label>
                <input 
                  type="text" 
                  name="parentName"
                  className="form-control"
                  placeholder="e.g. Muhammad Aslam"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="row g-2 mb-3">
                <div className="col-md-6">
                  <label className="form-label small fw-semibold text-dark">
                    Contact Mobile Number <span className="text-danger">*</span>
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="form-control"
                    placeholder="0300-1234567"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-semibold text-dark">
                    Student Full Name
                  </label>
                  <input 
                    type="text" 
                    name="studentName"
                    className="form-control"
                    placeholder="Child's name"
                    value={formData.studentName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label small fw-semibold text-dark">
                  Class / Grade Applying For
                </label>
                <select 
                  name="grade"
                  className="form-select"
                  value={formData.grade}
                  onChange={handleChange}
                >
                  <option value="Pre-School (Playgroup/Nursery/Prep)">Pre-School (Playgroup / Nursery / Prep)</option>
                  <option value="Primary School (Classes 1 - 5)">Primary School (Classes 1 - 5)</option>
                  <option value="Middle School (Classes 6 - 8)">Middle School (Classes 6 - 8)</option>
                  <option value="Secondary / Matric (Class 9 - 10)">Secondary / Matric (Classes 9 - 10)</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="form-label small fw-semibold text-dark">
                  Any Specific Question / Remarks (Optional)
                </label>
                <textarea 
                  name="message"
                  className="form-control"
                  rows={3}
                  placeholder="Inquire about timings, transport routes, fee schedule, or sibling discounts..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="btn btn-te-gold w-100 py-2 d-flex align-items-center justify-content-center gap-2 fw-bold"
              >
                <Send size={18} />
                <span>Submit Admission Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

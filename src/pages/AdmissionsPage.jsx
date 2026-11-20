import React, { useState } from "react";
import { 
  FileText, 
  Download, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle, 
  Calendar, 
  Clock, 
  Send, 
  Phone, 
  AlertCircle,
  FileCheck,
  GraduationCap,
  Users
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import FeeCalculator from "../components/FeeCalculator";
import { feeStructure, schoolInfo } from "../data/schoolData";
import { useSchool } from "../context/SchoolContext";

export default function AdmissionsPage() {
  const { admissionsOpen, addInquiry } = useSchool();
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    studentName: "",
    grade: "Pre-School (Playgroup/Nursery/Prep)",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone) return;

    addInquiry(formData);

    const waText = encodeURIComponent(
      `Assalam-o-Alaikum Admissions Desk,\n` +
      `I am submitting an admission inquiry for The Educators Prime Campus Baigpur.\n\n` +
      `• Parent Name: ${formData.parentName}\n` +
      `• Contact: ${formData.phone}\n` +
      `• Student Name: ${formData.studentName || "N/A"}\n` +
      `• Desired Class: ${formData.grade}\n` +
      `• Question/Notes: ${formData.message || "Please inform regarding test and enrollment process."}`
    );
    setWhatsappUrl(`https://wa.me/${schoolInfo.whatsapp}?text=${waText}`);
    setSubmitted(true);
  };

  return (
    <div>
      <PageHeader 
        badge="Session 2026-2027"
        title="Admissions & Fee Schedule"
        subtitle="Transparent admission guidelines, official fee schedule, sibling discounts, and online registration."
        breadcrumbs={[{ label: "Admissions", active: true }]}
      />

      {/* Status Bar */}
      <div className="bg-light border-bottom py-3">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div className="d-flex align-items-center gap-2">
              <span className={`badge ${admissionsOpen ? "bg-success" : "bg-danger"}`}>
                {admissionsOpen ? "Admissions Open" : "Admissions Closed"}
              </span>
              <span className="small text-muted fw-semibold">Academic Session {feeStructure.session}</span>
            </div>

            <div className="d-flex align-items-center gap-3">
              <a 
                href={feeStructure.pdfUrl} 
                download
                className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-1"
                title="Download Official Fee Structure PDF"
              >
                <Download size={14} />
                <span>Download Fee PDF</span>
              </a>
              <a href={`tel:${schoolInfo.phone}`} className="small text-dark fw-bold d-none d-sm-inline">
                Admissions Helpline: {schoolInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row g-5">
            {/* Left Col: Fee Schedule & Sibling Discounts */}
            <div className="col-lg-7">
              <div id="fee-structure" className="te-fee-card mb-5">
                <div className="te-fee-header">
                  <div className="te-badge gold mb-2">Approved by Directorate</div>
                  <h3 className="fw-bold text-white mb-1">Official Fee Structure & Charges</h3>
                  <small className="text-light-50">Academic Session {feeStructure.session}</small>
                </div>

                <div className="p-0">
                  <table className="te-fee-table">
                    <thead>
                      <tr>
                        <th>Fee Particulars</th>
                        <th>Amount (PKR)</th>
                        <th>Frequency</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>Registration Fee</strong>
                          <div className="text-muted small">Payable at initial prospectus submission</div>
                        </td>
                        <td>
                          <span className="fw-bold text-primary fs-5">
                            PKR {feeStructure.registrationFee.toLocaleString()}
                          </span>
                        </td>
                        <td><span className="badge bg-light text-dark border">One-time</span></td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Admission Fee</strong>
                          <div className="text-muted small">Payable upon enrollment confirmation</div>
                        </td>
                        <td>
                          <span className="fw-bold text-primary fs-5">
                            PKR {feeStructure.admissionFee.toLocaleString()}
                          </span>
                        </td>
                        <td><span className="badge bg-light text-dark border">One-time</span></td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Monthly Tuition Fee</strong>
                          <div className="text-muted small">Base monthly rate (sibling discounts apply)</div>
                        </td>
                        <td>
                          <span className="fw-bold text-primary fs-5">
                            PKR {feeStructure.monthlyFee.toLocaleString()}
                          </span>
                        </td>
                        <td><span className="badge bg-success-subtle text-success border">Monthly</span></td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Annual Charges</strong>
                          <div className="text-muted small">Facility maintenance, IT & educational resources</div>
                        </td>
                        <td>
                          <span className="fw-bold text-primary fs-5">
                            PKR {feeStructure.annualCharges.toLocaleString()}
                          </span>
                        </td>
                        <td><span className="badge bg-light text-dark border">Annual (Yearly)</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Sibling Discounts Table */}
                <div className="p-4 bg-light border-top">
                  <h5 className="fw-bold text-dark mb-2">Approved Sibling Discount Policy</h5>
                  <p className="text-muted small mb-3">
                    {feeStructure.siblingPolicyNote}
                  </p>

                  <div className="row g-2 mb-3">
                    {feeStructure.siblingDiscount.map((s, idx) => (
                      <div key={idx} className="col-sm-6">
                        <div className="p-2 rounded bg-white border">
                          <div className="d-flex justify-content-between align-items-center">
                            <strong className="small text-dark">{s.child}</strong>
                            <span className="badge bg-primary text-white">
                              {s.discountPercent === 0 ? "Standard" : `${s.discountPercent}% Off`}
                            </span>
                          </div>
                          <span className="text-muted small d-block" style={{ fontSize: "0.78rem" }}>
                            {s.note}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Important Notes */}
                  <div className="p-3 rounded-3 bg-white border">
                    <strong className="small text-dark d-block mb-2">Important Financial Regulations:</strong>
                    <ul className="mb-0 small text-muted ps-3">
                      {feeStructure.importantNotes.map((note, i) => (
                        <li key={i} className="mb-1">{note}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Admission Procedure Steps */}
              <div className="mb-5">
                <h3 className="fw-bold text-dark mb-3">Step-by-Step Admission Procedure</h3>
                <div className="d-flex flex-column gap-3">
                  <div className="p-3 rounded-3 border bg-subtle d-flex align-items-start gap-3">
                    <div className="badge bg-primary text-white p-2 px-3 fs-6">1</div>
                    <div>
                      <strong className="text-dark d-block">Prospectus & Registration</strong>
                      <p className="text-muted small mb-0">
                        Visit the school office to obtain the admission form and syllabus guidelines, or submit an inquiry online.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-3 border bg-subtle d-flex align-items-start gap-3">
                    <div className="badge bg-primary text-white p-2 px-3 fs-6">2</div>
                    <div>
                      <strong className="text-dark d-block">Assessment / Diagnostic Evaluation</strong>
                      <p className="text-muted small mb-0">
                        Informal readiness interaction for Pre-School; age-appropriate written diagnostic test in English, Urdu, and Mathematics for Primary & Middle classes.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-3 border bg-subtle d-flex align-items-start gap-3">
                    <div className="badge bg-primary text-white p-2 px-3 fs-6">3</div>
                    <div>
                      <strong className="text-dark d-block">Document Verification & Fee Challan</strong>
                      <p className="text-muted small mb-0">
                        Submit certified copies of child's B-Form, photographs, father's CNIC, and deposit admission dues.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-3 border bg-subtle d-flex align-items-start gap-3">
                    <div className="badge bg-primary text-white p-2 px-3 fs-6">4</div>
                    <div>
                      <strong className="text-dark d-block">Enrollment & Orientation</strong>
                      <p className="text-muted small mb-0">
                        Receive student ID, booklist, uniform guidelines, class timetable, and welcome package.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Required Documents Checklist */}
              <div className="p-4 rounded-4 border bg-subtle">
                <h4 className="fw-bold text-dark mb-3 d-flex align-items-center gap-2">
                  <FileCheck size={22} className="text-primary" />
                  <span>Required Documents Checklist</span>
                </h4>
                <p className="text-muted small mb-3">
                  Please provide the following verified documents at the time of admission:
                </p>
                <div className="d-flex flex-column gap-2">
                  {feeStructure.requiredDocuments.map((doc, idx) => (
                    <div key={idx} className="p-2 rounded bg-white border d-flex align-items-center gap-2">
                      <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                      <span className="small text-dark fw-medium">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Interactive Calculator & Inquiry Form */}
            <div className="col-lg-5">
              {/* Fee Calculator */}
              <FeeCalculator />

              {/* Online Admission Inquiry Form */}
              <div className="mt-4 p-4 rounded-4 border bg-white shadow-sm">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="badge bg-primary text-white">Online Portal</span>
                </div>
                <h4 className="fw-bold text-dark mb-2">Admission Inquiry Form</h4>
                <p className="text-muted small mb-3">
                  Have questions regarding classes or dates? Submit your inquiry directly to our Admissions Desk.
                </p>

                {submitted ? (
                  <div className="p-3 rounded-3 bg-success-subtle border border-success-subtle text-center">
                    <CheckCircle2 size={36} className="text-success mb-2" />
                    <h5 className="fw-bold text-dark mb-1">Inquiry Registered!</h5>
                    <p className="text-muted small mb-3">
                      Thank you! Our admission representative will contact you shortly.
                    </p>
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success btn-sm w-100 fw-bold"
                    >
                      Connect on WhatsApp
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                      <label className="form-label small fw-semibold text-dark">Parent Name *</label>
                      <input 
                        type="text" 
                        name="parentName"
                        className="form-control form-control-sm"
                        placeholder="Your name"
                        value={formData.parentName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-2">
                      <label className="form-label small fw-semibold text-dark">Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        className="form-control form-control-sm"
                        placeholder="0300-1234567"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-2">
                      <label className="form-label small fw-semibold text-dark">Student Name</label>
                      <input 
                        type="text" 
                        name="studentName"
                        className="form-control form-control-sm"
                        placeholder="Child's name"
                        value={formData.studentName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-2">
                      <label className="form-label small fw-semibold text-dark">Applying Grade</label>
                      <select 
                        name="grade"
                        className="form-select form-select-sm"
                        value={formData.grade}
                        onChange={handleChange}
                      >
                        <option value="Pre-School (Playgroup/Nursery/Prep)">Pre-School (Playgroup/Nursery/Prep)</option>
                        <option value="Primary (Classes 1 - 5)">Primary (Classes 1 - 5)</option>
                        <option value="Middle (Classes 6 - 8)">Middle (Classes 6 - 8)</option>
                        <option value="Secondary / Matric (Class 9 - 10)">Secondary / Matric (Classes 9 - 10)</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label small fw-semibold text-dark">Notes / Inquiries</label>
                      <textarea 
                        name="message"
                        className="form-control form-control-sm"
                        rows={2}
                        placeholder="Transport inquiry, siblings, etc."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="btn btn-te-primary btn-sm w-100 py-2 fw-bold"
                    >
                      <Send size={14} className="me-1" />
                      Submit Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

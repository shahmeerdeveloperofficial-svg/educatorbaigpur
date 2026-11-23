import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Navigation,
  ExternalLink,
  ShieldCheck,
  Globe
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import { schoolInfo } from "../data/schoolData";

export default function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone) return;

    const waMsg = encodeURIComponent(
      `Assalam-o-Alaikum Administration,\n` +
      `Contact Inquiry from Website:\n` +
      `• Name: ${contactForm.name}\n` +
      `• Phone: ${contactForm.phone}\n` +
      `• Email: ${contactForm.email || "N/A"}\n` +
      `• Topic: ${contactForm.subject}\n` +
      `• Message: ${contactForm.message || "Please contact me regarding school information."}`
    );
    window.open(`https://wa.me/${schoolInfo.whatsapp}?text=${waMsg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div>
      <PageHeader 
        badge="Connect with Us"
        title="Contact Campus Administration"
        subtitle="We welcome parent visits, admission queries, and community inquiries Near Jogiwala Stop, Baigpur, Main Road Sheikhupura-Gujranwala, Nowshera Virkan."
        breadcrumbs={[{ label: "Contact Us", active: true }]}
      />

      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row g-5">
            {/* Left: Contact Info Cards */}
            <div className="col-lg-5">
              <span className="te-badge blue mb-2">Campus Information</span>
              <h3 className="fw-bold text-dark mb-4">Get in Touch with Our Administration</h3>

              <div className="d-flex flex-column gap-3 mb-4">
                {/* Address */}
                <div className="p-3 rounded-3 border bg-subtle d-flex align-items-start gap-3">
                  <div className="p-2 rounded-circle bg-primary text-white flex-shrink-0 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <strong className="d-block text-dark small mb-1">Campus Physical Address</strong>
                    <p className="text-muted small mb-0">
                      {schoolInfo.address}
                    </p>
                    <span className="badge bg-warning text-dark mt-2" style={{ fontSize: "0.72rem" }}>
                      Landmark: Near Jogiwala Stop, Nowshera Virkan
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-3 rounded-3 border bg-subtle d-flex align-items-start gap-3">
                  <div className="p-2 rounded-circle bg-warning text-dark flex-shrink-0 mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <strong className="d-block text-dark small mb-1">Official Helpline</strong>
                    <a href={`tel:${schoolInfo.phone}`} className="fs-5 fw-bold text-primary text-decoration-none">
                      {schoolInfo.phone}
                    </a>
                    <span className="text-muted small d-block">Available during school office hours</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-3 rounded-3 border bg-subtle d-flex align-items-start gap-3">
                  <div className="p-2 rounded-circle bg-success text-white flex-shrink-0 mt-1">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <strong className="d-block text-dark small mb-1">WhatsApp Admissions Desk</strong>
                    <a 
                      href={`https://wa.me/${schoolInfo.whatsapp}?text=Assalam-o-Alaikum,%20I%20am%20inquiring%20about%20admissions.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-success fw-bold small d-inline-flex align-items-center gap-1"
                    >
                      <span>+92 300 1199494</span>
                      <ExternalLink size={14} />
                    </a>
                    <span className="text-muted small d-block">Instant response for prospectus & fee queries</span>
                  </div>
                </div>

                {/* Hours */}
                <div className="p-3 rounded-3 border bg-subtle d-flex align-items-start gap-3">
                  <div className="p-2 rounded-circle bg-info text-white flex-shrink-0 mt-1">
                    <Clock size={20} />
                  </div>
                  <div>
                    <strong className="d-block text-dark small mb-1">Visiting & Office Timings</strong>
                    <p className="text-muted small mb-0">
                      {schoolInfo.officeHours}
                    </p>
                  </div>
                </div>

                {/* Social Media Channels */}
                <div className="p-3 rounded-3 border bg-subtle d-flex align-items-start gap-3">
                  <div className="p-2 rounded-circle bg-primary text-white flex-shrink-0 mt-1">
                    <Globe size={20} />
                  </div>
                  <div>
                    <strong className="d-block text-dark small mb-1">Official Social Media Platforms</strong>
                    <div className="d-flex align-items-center gap-3 mt-1">
                      <a 
                        href={schoolInfo.socialLinks.facebook} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary fw-semibold small d-inline-flex align-items-center gap-1 text-decoration-none"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        <span>Facebook</span>
                        <ExternalLink size={12} />
                      </a>
                      <span className="text-muted">|</span>
                      <a 
                        href={schoolInfo.socialLinks.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-danger fw-semibold small d-inline-flex align-items-center gap-1 text-decoration-none"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <span>Instagram</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Campus Building View Card */}
              <div className="rounded-4 overflow-hidden shadow-sm border">
                <img 
                  src="/assets/images/school-front-panoramic.webp" 
                  alt="School Campus Baigpur" 
                  className="w-100 object-fit-cover"
                  style={{ height: "200px" }}
                />
                <div className="p-3 bg-light">
                  <small className="text-muted d-block">
                    Located conveniently Near Jogiwala Stop, Baigpur on Main Road Sheikhupura-Gujranwala, Nowshera Virkan.
                  </small>
                </div>
              </div>
            </div>

            {/* Right: Contact Form & Map Guidance */}
            <div className="col-lg-7">
              <div className="p-4 p-md-5 rounded-4 border bg-white shadow-sm mb-5">
                <h4 className="fw-bold text-dark mb-2">Send an Official Message</h4>
                <p className="text-muted small mb-4">
                  Fill in your details below. You can send this directly to our official WhatsApp helpline 
                  or request an administrative callback.
                </p>

                {submitted ? (
                  <div className="p-4 rounded-3 bg-success-subtle border border-success-subtle text-center">
                    <CheckCircle2 size={44} className="text-success mb-2" />
                    <h5 className="fw-bold text-dark mb-1">Message Ready / Sent!</h5>
                    <p className="text-muted small mb-3">
                      Thank you, <strong>{contactForm.name}</strong>. Our administrative desk has received your request.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="btn btn-outline-secondary btn-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold text-dark">
                          Your Full Name <span className="text-danger">*</span>
                        </label>
                        <input 
                          type="text" 
                          className="form-control"
                          placeholder="e.g. Tariq Mehmood"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold text-dark">
                          Phone / WhatsApp <span className="text-danger">*</span>
                        </label>
                        <input 
                          type="tel" 
                          className="form-control"
                          placeholder="0300-1199494"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold text-dark">
                          Email Address (Optional)
                        </label>
                        <input 
                          type="email" 
                          className="form-control"
                          placeholder="parent@example.com"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold text-dark">
                          Inquiry Subject
                        </label>
                        <select 
                          className="form-select"
                          value={contactForm.subject}
                          onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        >
                          <option value="Admission Inquiry">Admission Inquiry</option>
                          <option value="Fee Structure & Sibling Discount">Fee Structure & Sibling Discount</option>
                          <option value="School Transport Routes">School Transport Routes</option>
                          <option value="Campus Tour Request">Campus Tour Request</option>
                          <option value="General Administration">General Administration</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label small fw-semibold text-dark">
                        Message / Questions
                      </label>
                      <textarea 
                        className="form-control"
                        rows={4}
                        placeholder="Write your query or message here..."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      ></textarea>
                    </div>

                    <div className="d-flex gap-2">
                      <button 
                        type="submit"
                        className="btn btn-te-primary flex-grow-1 py-2 fw-bold d-flex align-items-center justify-content-center gap-2"
                      >
                        <Send size={16} />
                        <span>Submit Message to WhatsApp</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Map Guide Block */}
              <div className="p-4 rounded-4 border bg-subtle">
                <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                  <div className="d-flex align-items-center gap-2">
                    <Navigation size={20} className="text-primary" />
                    <strong className="text-dark">How to Reach Campus</strong>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=The+Educators+Prime+Campus+Baigpur+Jogiwala+Stop+Nowshera+Virkan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink size={14} />
                  </a>
                </div>

                <p className="text-muted small mb-3">
                  The campus is situated prominently <strong>Near Jogiwala Stop, Baigpur</strong> on 
                  <strong> Main Road Sheikhupura-Gujranwala, Nowshera Virkan</strong>, easily accessible via public transport, private cars, 
                  and our dedicated school pick-and-drop vans.
                </p>

                <div 
                  className="rounded-3 border overflow-hidden position-relative bg-dark text-white p-4 text-center d-flex flex-column align-items-center justify-content-center"
                  style={{ minHeight: "180px", background: "linear-gradient(135deg, #0B2545 0%, #133E70 100%)" }}
                >
                  <MapPin size={36} className="text-warning mb-2" />
                  <h5 className="fw-bold text-white mb-1">The Educators Prime Campus</h5>
                  <span className="small text-light-50 mb-3">Near Jogiwala Stop, Baigpur, Main Road Sheikhupura-Gujranwala, Nowshera Virkan</span>
                  <a 
                    href="https://maps.google.com/?q=The+Educators+Prime+Campus+Baigpur+Jogiwala+Stop+Nowshera+Virkan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-warning fw-bold px-3"
                  >
                    Get Driving Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

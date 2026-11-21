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
  ShieldCheck
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

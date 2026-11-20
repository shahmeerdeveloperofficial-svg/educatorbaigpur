import React, { useState } from "react";
import { 
  Lock, 
  Unlock, 
  PlusCircle, 
  Trash2, 
  FileText, 
  Briefcase, 
  Users, 
  ToggleLeft, 
  ToggleRight, 
  CheckCircle2, 
  Calendar,
  AlertCircle,
  Eye,
  Phone,
  MessageSquare
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import { useSchool } from "../context/SchoolContext";
import { schoolInfo } from "../data/schoolData";

export default function AdminPage() {
  const { 
    admissionsOpen, 
    setAdmissionsOpen, 
    circulars, 
    addCircular, 
    deleteCircular, 
    careers, 
    addCareer, 
    deleteCareer,
    inquiries 
  } = useSchool();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinCode, setPinCode] = useState("");
  const [pinError, setPinError] = useState("");

  // New Circular Form
  const [circForm, setCircForm] = useState({
    titleEn: "",
    titleUr: "",
    bodyEn: "",
    bodyUr: "",
    category: "General"
  });

  // New Career Form
  const [jobForm, setJobForm] = useState({
    title: "",
    department: "Primary Section",
    type: "Full Time",
    experience: "1-2 Years Experience",
    qualification: "Graduation / B.Ed",
    description: ""
  });

  const [activeTab, setActiveTab] = useState("admissions");
  const [successMsg, setSuccessMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (pinCode === "educators2026" || pinCode === "1234") {
      setIsAuthenticated(true);
      setPinError("");
    } else {
      setPinError("Invalid Admin PIN. Use 'educators2026' or 1-Click Demo Login.");
    }
  };

  const handleDemoLogin = () => {
    setIsAuthenticated(true);
    setPinError("");
  };

  const handleAddCircular = (e) => {
    e.preventDefault();
    if (!circForm.titleEn || !circForm.bodyEn) return;
    addCircular(circForm);
    setCircForm({
      titleEn: "",
      titleUr: "",
      bodyEn: "",
      bodyUr: "",
      category: "General"
    });
    setSuccessMsg("New circular published successfully!");
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  const handleAddCareer = (e) => {
    e.preventDefault();
    if (!jobForm.title) return;
    addCareer(jobForm);
    setJobForm({
      title: "",
      department: "Primary Section",
      type: "Full Time",
      experience: "1-2 Years Experience",
      qualification: "Graduation / B.Ed",
      description: ""
    });
    setSuccessMsg("New job vacancy posted successfully!");
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  return (
    <div>
      <PageHeader 
        badge="Staff Portal"
        title="School Administrative Control"
        subtitle="Manage dynamic notices, circulars in English & Urdu, admission session status, and job postings."
        breadcrumbs={[{ label: "Staff Admin", active: true }]}
      />

      <section className="py-5 bg-light">
        <div className="container py-4">
          {!isAuthenticated ? (
            /* Login Box */
            <div className="row justify-content-center">
              <div className="col-md-5">
                <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border text-center">
                  <div className="p-3 rounded-circle bg-primary-subtle text-primary d-inline-flex mb-3">
                    <Lock size={32} />
                  </div>
                  <h4 className="fw-bold text-dark mb-1">Staff Administration Login</h4>
                  <p className="text-muted small mb-4">
                    Enter the authorized security PIN to access the dynamic dashboard.
                  </p>

                  <form onSubmit={handleLogin} className="mb-3">
                    <div className="mb-3">
                      <input 
                        type="password"
                        className="form-control form-control-lg text-center"
                        placeholder="Enter PIN (educators2026)"
                        value={pinCode}
                        onChange={(e) => setPinCode(e.target.value)}
                        required
                      />
                    </div>

                    {pinError && (
                      <div className="alert alert-danger py-2 small mb-3">
                        {pinError}
                      </div>
                    )}

                    <button type="submit" className="btn btn-te-primary w-100 py-2 fw-bold mb-2">
                      <Unlock size={16} className="me-1" />
                      Sign In to Admin Portal
                    </button>
                  </form>

                  <button 
                    onClick={handleDemoLogin}
                    className="btn btn-outline-secondary btn-sm w-100"
                    type="button"
                  >
                    Quick 1-Click Demo Login (Staff Preview)
                  </button>

                  <div className="small text-muted mt-3" style={{ fontSize: "0.75rem" }}>
                    Standard PIN code: <code>educators2026</code>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Authenticated Admin Dashboard */
            <div>
              {/* Dashboard Navigation & Logout */}
              <div className="bg-white p-3 rounded-4 border shadow-sm mb-4 d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <button 
                    className={`btn btn-sm fw-semibold ${activeTab === "admissions" ? "btn-te-primary" : "btn-light border"}`}
                    onClick={() => setActiveTab("admissions")}
                  >
                    <ToggleRight size={16} className="me-1" />
                    Admissions & Inquiries ({inquiries.length})
                  </button>
                  <button 
                    className={`btn btn-sm fw-semibold ${activeTab === "circulars" ? "btn-te-primary" : "btn-light border"}`}
                    onClick={() => setActiveTab("circulars")}
                  >
                    <FileText size={16} className="me-1" />
                    Circulars & Notices ({circulars.length})
                  </button>
                  <button 
                    className={`btn btn-sm fw-semibold ${activeTab === "careers" ? "btn-te-primary" : "btn-light border"}`}
                    onClick={() => setActiveTab("careers")}
                  >
                    <Briefcase size={16} className="me-1" />
                    Job Vacancies ({careers.length})
                  </button>
                </div>

                <button 
                  onClick={() => setIsAuthenticated(false)}
                  className="btn btn-sm btn-outline-danger fw-semibold"
                >
                  Lock / Logout
                </button>
              </div>

              {successMsg && (
                <div className="alert alert-success d-flex align-items-center gap-2 py-2 mb-4">
                  <CheckCircle2 size={18} />
                  <span>{successMsg}</span>
                </div>
              )}

              {/* Tab 1: Admissions Control & Inquiries */}
              {activeTab === "admissions" && (
                <div className="row g-4">
                  <div className="col-lg-5">
                    <div className="bg-white p-4 rounded-4 border shadow-sm mb-4">
                      <h5 className="fw-bold text-dark mb-3">Admission Session Status</h5>
                      <div className="d-flex align-items-center justify-content-between p-3 rounded-3 bg-light border mb-3">
                        <div>
                          <strong className="d-block text-dark">Current Admissions Status:</strong>
                          <span className={`badge ${admissionsOpen ? "bg-success" : "bg-danger"}`}>
                            {admissionsOpen ? "Open for Session 2026-2027" : "Closed"}
                          </span>
                        </div>
                        <button 
                          onClick={() => setAdmissionsOpen(!admissionsOpen)}
                          className={`btn btn-sm ${admissionsOpen ? "btn-warning" : "btn-success"} fw-bold`}
                        >
                          {admissionsOpen ? "Set to Closed" : "Set to Open"}
                        </button>
                      </div>
                      <small className="text-muted d-block">
                        Toggling this status updates the website topbar announcement and hero badges immediately.
                      </small>
                    </div>

                    <div className="bg-white p-4 rounded-4 border shadow-sm">
                      <h6 className="fw-bold text-dark mb-2">School Contact Sync</h6>
                      <ul className="list-unstyled small text-muted mb-0">
                        <li className="mb-1"><strong>Phone:</strong> {schoolInfo.phone}</li>
                        <li className="mb-1"><strong>WhatsApp:</strong> +{schoolInfo.whatsapp}</li>
                        <li className="mb-1"><strong>Address:</strong> {schoolInfo.shortAddress}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="bg-white p-4 rounded-4 border shadow-sm">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="fw-bold text-dark mb-0">
                          Parent Inquiries Received ({inquiries.length})
                        </h5>
                        <small className="text-muted">Saved from online forms</small>
                      </div>

                      {inquiries.length === 0 ? (
                        <div className="p-4 rounded-3 bg-light text-center text-muted small">
                          No inquiries submitted yet. Forms submitted by parents on the Admissions page or Modal will appear here!
                        </div>
                      ) : (
                        <div className="d-flex flex-column gap-3">
                          {inquiries.map((inq) => (
                            <div key={inq.id} className="p-3 rounded-3 border bg-light">
                              <div className="d-flex justify-content-between align-items-center mb-1">
                                <strong className="text-dark">{inq.parentName}</strong>
                                <span className="small text-muted">{inq.date}</span>
                              </div>
                              <div className="small text-primary fw-semibold mb-1">
                                Class: {inq.grade} • Student: {inq.studentName || "Not specified"}
                              </div>
                              {inq.message && (
                                <p className="text-secondary small mb-2 fst-italic">
                                  "{inq.message}"
                                </p>
                              )}
                              <div className="d-flex gap-2">
                                <a 
                                  href={`tel:${inq.phone}`} 
                                  className="btn btn-sm btn-outline-primary py-1 px-2 d-inline-flex align-items-center gap-1 small"
                                >
                                  <Phone size={12} /> Call: {inq.phone}
                                </a>
                                <a 
                                  href={`https://wa.me/92${inq.phone.replace(/[^0-9]/g, '').slice(-10)}?text=Assalam-o-Alaikum,%20regarding%20your%20admission%20inquiry%20at%20The%20Educators%20Prime%20Campus.`}
                                  target="_blank"
                                  rel="noopener noreferrer" 
                                  className="btn btn-sm btn-outline-success py-1 px-2 d-inline-flex align-items-center gap-1 small"
                                >
                                  <MessageSquare size={12} /> WhatsApp
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Circulars Management */}
              {activeTab === "circulars" && (
                <div className="row g-4">
                  {/* Add Circular Form */}
                  <div className="col-lg-5">
                    <div className="bg-white p-4 rounded-4 border shadow-sm">
                      <h5 className="fw-bold text-dark mb-3">Publish New Circular</h5>
                      <form onSubmit={handleAddCircular}>
                        <div className="mb-2">
                          <label className="form-label small fw-semibold">Category</label>
                          <select 
                            className="form-select form-select-sm"
                            value={circForm.category}
                            onChange={(e) => setCircForm({ ...circForm, category: e.target.value })}
                          >
                            <option value="General">General Notice</option>
                            <option value="Admissions">Admissions</option>
                            <option value="Fee Policy">Fee Policy</option>
                            <option value="Examination">Examination</option>
                            <option value="Events">School Events</option>
                          </select>
                        </div>

                        <div className="mb-2">
                          <label className="form-label small fw-semibold">English Title *</label>
                          <input 
                            type="text" 
                            className="form-control form-control-sm"
                            placeholder="e.g. Winter Vacation Notice"
                            value={circForm.titleEn}
                            onChange={(e) => setCircForm({ ...circForm, titleEn: e.target.value })}
                            required
                          />
                        </div>

                        <div className="mb-2">
                          <label className="form-label small fw-semibold">English Body Text *</label>
                          <textarea 
                            className="form-control form-control-sm"
                            rows={3}
                            placeholder="Details of the announcement..."
                            value={circForm.bodyEn}
                            onChange={(e) => setCircForm({ ...circForm, bodyEn: e.target.value })}
                            required
                          ></textarea>
                        </div>

                        <div className="mb-2">
                          <label className="form-label small fw-semibold">عنوان برائے اردو نوٹس (Urdu Title)</label>
                          <input 
                            type="text" 
                            className="form-control form-control-sm text-end"
                            placeholder="مثال: تعطیلات کا اعلان"
                            value={circForm.titleUr}
                            onChange={(e) => setCircForm({ ...circForm, titleUr: e.target.value })}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label small fw-semibold">تفصیل برائے اردو نوٹس (Urdu Body)</label>
                          <textarea 
                            className="form-control form-control-sm text-end"
                            rows={3}
                            placeholder="نوٹس کی تفصیلات یہاں درج کریں..."
                            value={circForm.bodyUr}
                            onChange={(e) => setCircForm({ ...circForm, bodyUr: e.target.value })}
                          ></textarea>
                        </div>

                        <button type="submit" className="btn btn-te-primary btn-sm w-100 py-2 fw-bold">
                          <PlusCircle size={14} className="me-1" />
                          Publish Circular
                        </button>
                      </form>
                    </div>
                  </div>

                  {/* List Circulars */}
                  <div className="col-lg-7">
                    <div className="bg-white p-4 rounded-4 border shadow-sm">
                      <h5 className="fw-bold text-dark mb-3">Active Circulars ({circulars.length})</h5>
                      <div className="d-flex flex-column gap-3">
                        {circulars.map((circ) => (
                          <div key={circ.id} className="p-3 rounded-3 border bg-light d-flex justify-content-between align-items-start gap-2">
                            <div>
                              <div className="d-flex align-items-center gap-2 mb-1">
                                <span className="badge bg-primary text-white">{circ.category}</span>
                                <small className="text-muted">{circ.date}</small>
                              </div>
                              <h6 className="fw-bold text-dark mb-1">{circ.titleEn}</h6>
                              <p className="text-muted small mb-1">{circ.bodyEn.slice(0, 80)}...</p>
                              {circ.titleUr && (
                                <div className="small text-secondary te-urdu-text">{circ.titleUr}</div>
                              )}
                            </div>
                            <button 
                              onClick={() => deleteCircular(circ.id)}
                              className="btn btn-sm btn-outline-danger p-1"
                              title="Delete Circular"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Careers Management */}
              {activeTab === "careers" && (
                <div className="row g-4">
                  {/* Add Career Form */}
                  <div className="col-lg-5">
                    <div className="bg-white p-4 rounded-4 border shadow-sm">
                      <h5 className="fw-bold text-dark mb-3">Post New Job Vacancy</h5>
                      <form onSubmit={handleAddCareer}>
                        <div className="mb-2">
                          <label className="form-label small fw-semibold">Job Title *</label>
                          <input 
                            type="text" 
                            className="form-control form-control-sm"
                            placeholder="e.g. Urdu & Islamiat Faculty"
                            value={jobForm.title}
                            onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
                            required
                          />
                        </div>

                        <div className="mb-2">
                          <label className="form-label small fw-semibold">Department</label>
                          <select 
                            className="form-select form-select-sm"
                            value={jobForm.department}
                            onChange={(e) => setJobForm({ ...jobForm, department: e.target.value })}
                          >
                            <option value="Early Years / Pre-School">Early Years / Pre-School</option>
                            <option value="Primary Section">Primary Section</option>
                            <option value="Middle Section">Middle Section</option>
                            <option value="Secondary / Matric">Secondary / Matric</option>
                            <option value="Administration / Office">Administration / Office</option>
                          </select>
                        </div>

                        <div className="mb-2">
                          <label className="form-label small fw-semibold">Qualification</label>
                          <input 
                            type="text" 
                            className="form-control form-control-sm"
                            placeholder="e.g. MA Urdu / B.Ed"
                            value={jobForm.qualification}
                            onChange={(e) => setJobForm({ ...jobForm, qualification: e.target.value })}
                          />
                        </div>

                        <div className="mb-2">
                          <label className="form-label small fw-semibold">Experience</label>
                          <input 
                            type="text" 
                            className="form-control form-control-sm"
                            placeholder="e.g. Minimum 2 years"
                            value={jobForm.experience}
                            onChange={(e) => setJobForm({ ...jobForm, experience: e.target.value })}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label small fw-semibold">Job Description</label>
                          <textarea 
                            className="form-control form-control-sm"
                            rows={3}
                            placeholder="Key responsibilities and skills required..."
                            value={jobForm.description}
                            onChange={(e) => setJobForm({ ...jobForm, description: e.target.value })}
                          ></textarea>
                        </div>

                        <button type="submit" className="btn btn-te-primary btn-sm w-100 py-2 fw-bold">
                          <PlusCircle size={14} className="me-1" />
                          Post Job Vacancy
                        </button>
                      </form>
                    </div>
                  </div>

                  {/* List Careers */}
                  <div className="col-lg-7">
                    <div className="bg-white p-4 rounded-4 border shadow-sm">
                      <h5 className="fw-bold text-dark mb-3">Current Active Positions ({careers.length})</h5>
                      <div className="d-flex flex-column gap-3">
                        {careers.map((job) => (
                          <div key={job.id} className="p-3 rounded-3 border bg-light d-flex justify-content-between align-items-start gap-2">
                            <div>
                              <div className="d-flex align-items-center gap-2 mb-1">
                                <span className="badge bg-success text-white">{job.status}</span>
                                <small className="text-muted">{job.type}</small>
                              </div>
                              <h6 className="fw-bold text-dark mb-1">{job.title}</h6>
                              <div className="small text-primary mb-1">{job.department}</div>
                              <p className="text-muted small mb-1">{job.description}</p>
                              <small className="text-muted d-block">
                                <strong>Requires:</strong> {job.qualification} • {job.experience}
                              </small>
                            </div>
                            <button 
                              onClick={() => deleteCareer(job.id)}
                              className="btn btn-sm btn-outline-danger p-1"
                              title="Delete Vacancy"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

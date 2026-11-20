import React, { useState } from "react";
import { X, Printer, Calendar, Tag, Globe, Share2 } from "lucide-react";
import { useSchool } from "../context/SchoolContext";
import { schoolInfo } from "../data/schoolData";

export default function CircularModal() {
  const { selectedCircular, setSelectedCircular } = useSchool();
  const [langTab, setLangTab] = useState("both"); // "both", "en", "ur"

  if (!selectedCircular) return null;

  const handlePrint = () => {
    window.print();
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
      onClick={() => setSelectedCircular(null)}
    >
      <div 
        className="bg-white rounded-4 shadow-lg overflow-hidden"
        style={{ maxWidth: "680px", width: "100%", maxHeight: "90vh", display: "flex", flexDirection: "column" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div 
          className="p-3 px-4 border-bottom d-flex align-items-center justify-content-between"
          style={{ backgroundColor: "var(--te-bg-subtle)" }}
        >
          <div className="d-flex align-items-center gap-2">
            <span className="badge bg-primary text-white">{selectedCircular.category}</span>
            <span className="small text-muted d-inline-flex align-items-center gap-1">
              <Calendar size={14} /> {selectedCircular.date}
            </span>
          </div>

          <div className="d-flex align-items-center gap-2">
            <button 
              onClick={handlePrint} 
              className="btn btn-sm btn-outline-secondary d-none d-sm-inline-flex align-items-center gap-1"
              title="Print Circular"
            >
              <Printer size={14} />
              <span>Print</span>
            </button>
            <button 
              onClick={() => setSelectedCircular(null)}
              className="btn btn-sm btn-light border rounded-circle p-1"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Language Selector */}
        <div className="px-4 py-2 bg-light border-bottom d-flex align-items-center justify-content-between">
          <small className="fw-semibold text-muted text-uppercase" style={{ fontSize: "0.75rem" }}>
            Display Mode:
          </small>
          <div className="btn-group btn-group-sm" role="group">
            <button 
              className={`btn ${langTab === "both" ? "btn-primary" : "btn-outline-secondary"}`}
              onClick={() => setLangTab("both")}
            >
              Bilingual (Both)
            </button>
            <button 
              className={`btn ${langTab === "en" ? "btn-primary" : "btn-outline-secondary"}`}
              onClick={() => setLangTab("en")}
            >
              English
            </button>
            <button 
              className={`btn ${langTab === "ur" ? "btn-primary" : "btn-outline-secondary"}`}
              onClick={() => setLangTab("ur")}
            >
              اردو (Urdu)
            </button>
          </div>
        </div>

        {/* Circular Content */}
        <div className="p-4 overflow-y-auto flex-grow-1">
          {/* School official heading */}
          <div className="text-center pb-3 mb-4 border-bottom">
            <img 
              src="/assets/images/logo-educators-main-transparent.png" 
              alt="The Educators" 
              style={{ height: "48px" }}
              className="mx-auto mb-2" 
            />
            <h5 className="fw-bold text-dark mb-0">{schoolInfo.name}</h5>
            <small className="text-muted">{schoolInfo.tagline} • Official Campus Circular</small>
          </div>

          {/* English Section */}
          {(langTab === "both" || langTab === "en") && (
            <div className="mb-4">
              <h5 className="fw-bold text-dark mb-2">
                {selectedCircular.titleEn}
              </h5>
              <p className="text-muted" style={{ lineHeight: "1.8" }}>
                {selectedCircular.bodyEn}
              </p>
            </div>
          )}

          {/* Urdu Section */}
          {(langTab === "both" || langTab === "ur") && (
            <div className={`p-3 rounded-3 ${langTab === "both" ? "bg-light border" : ""}`}>
              <div className="te-urdu-title mb-2">
                {selectedCircular.titleUr}
              </div>
              <div className="te-urdu-text text-dark">
                {selectedCircular.bodyUr}
              </div>
            </div>
          )}

          {/* Signoff */}
          <div className="mt-4 pt-3 border-top d-flex justify-content-between align-items-center text-muted small">
            <div>
              <strong>Administration</strong><br />
              {schoolInfo.shortName}
            </div>
            <div className="text-end">
              <span>Helpline: {schoolInfo.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

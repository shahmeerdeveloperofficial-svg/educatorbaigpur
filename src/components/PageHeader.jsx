import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home, Camera } from "lucide-react";

export default function PageHeader({ 
  badge, 
  title, 
  subtitle, 
  breadcrumbs = [],
  bgImage
}) {
  const location = useLocation();

  // Route-specific authentic school photography matching every navbar button
  const routeBgMap = {
    "/about": "/assets/images/school-entrance-building.webp",
    "/academics": "/assets/images/school-campus-angle.webp",
    "/facilities": "/assets/images/school-lawn-playground.webp",
    "/admissions": "/assets/images/school-entrance-building.webp",
    "/gallery": "/assets/images/school-playarea-slides.webp",
    "/news-circulars": "/assets/images/school-front-panoramic.webp",
    "/contact": "/assets/images/school-entrance-building.webp",
    "/leadership/chairman": "/assets/images/school-front-panoramic.webp",
    "/leadership/director": "/assets/images/school-front-panoramic.webp",
    "/careers": "/assets/images/school-campus-angle.webp"
  };

  const activeBg = bgImage || routeBgMap[location.pathname] || "/assets/images/school-front-panoramic.webp";

  return (
    <div 
      className="position-relative text-white te-page-header-banner d-flex align-items-center"
      style={{
        minHeight: "440px",
        padding: "4.5rem 0 5rem 0",
        background: `linear-gradient(90deg, rgba(6, 17, 38, 0.85) 0%, rgba(6, 17, 38, 0.55) 45%, rgba(6, 17, 38, 0.15) 75%, rgba(6, 17, 38, 0.05) 100%), linear-gradient(0deg, rgba(6, 17, 38, 0.72) 0%, transparent 40%), url(${activeBg}) center 35% / cover no-repeat`,
        borderBottom: "4px solid var(--te-gold)",
        overflow: "hidden"
      }}
    >
      {/* Decorative ambient gold glow on top-right */}
      <div 
        className="position-absolute"
        style={{
          top: "-60px",
          right: "-60px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(197, 155, 39, 0.22) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1
        }}
      ></div>

      <div className="container position-relative py-3" style={{ zIndex: 2 }}>
        {/* Frosted Glass Header Card for maximum text readability and stunning photo exposure */}
        <div 
          className="p-4 p-md-4 p-lg-5 rounded-4 te-page-header-card"
          style={{
            background: "rgba(6, 17, 38, 0.62)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255, 255, 255, 0.22)",
            boxShadow: "0 22px 55px rgba(0, 0, 0, 0.45)",
            maxWidth: "760px"
          }}
        >
          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb" className="mb-3">
            <ol className="breadcrumb mb-0 small" style={{ opacity: 0.95 }}>
              <li className="breadcrumb-item">
                <Link to="/" className="text-white text-decoration-none d-inline-flex align-items-center gap-1 fw-semibold">
                  <Home size={14} className="text-warning" /> Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, idx) => (
                <li 
                  key={idx} 
                  className={`breadcrumb-item ${crumb.active ? "active text-warning fw-bold" : ""}`}
                  aria-current={crumb.active ? "page" : undefined}
                >
                  {crumb.link ? (
                    <Link to={crumb.link} className="text-white text-decoration-none fw-semibold">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-warning fw-bold">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {badge && (
            <div className="mb-2">
              <span className="te-badge gold" style={{ fontSize: "0.78rem", letterSpacing: "0.06em" }}>
                {badge}
              </span>
            </div>
          )}

          <h1 
            className="fw-bold text-white mb-2" 
            style={{ 
              fontSize: "2.6rem", 
              letterSpacing: "-0.02em",
              textShadow: "0 3px 14px rgba(0,0,0,0.65)" 
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <p 
              className="text-light mb-0 lead" 
              style={{ 
                maxWidth: "680px", 
                fontSize: "1.08rem", 
                opacity: 0.92, 
                lineHeight: "1.65",
                textShadow: "0 2px 8px rgba(0,0,0,0.55)" 
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Genuine Campus Visual Credit Tag */}
      <div 
        className="position-absolute d-none d-md-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill"
        style={{
          bottom: "16px",
          right: "24px",
          background: "rgba(6, 17, 38, 0.72)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.22)",
          fontSize: "0.76rem",
          color: "#FFFFFF",
          zIndex: 3
        }}
      >
        <Camera size={13} className="text-warning" />
        <span>Actual Campus Photograph • Prime Campus Baigpur</span>
      </div>
    </div>
  );
}

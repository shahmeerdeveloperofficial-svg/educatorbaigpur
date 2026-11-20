import React from "react";

export default function SectionHeading({ 
  badge, 
  badgeType = "blue", 
  title, 
  titleAccent, 
  description, 
  center = true,
  theme = "light" // "light" or "dark"
}) {
  const isDark = theme === "dark";

  return (
    <div className={`te-section-header ${center ? "text-center" : ""} ${isDark ? "theme-dark" : ""}`}>
      {badge && (
        <div className="te-eyebrow-wrap">
          <span className={`te-badge-pro ${badgeType} ${isDark ? "on-dark" : ""}`}>
            <span className="te-badge-dot"></span>
            <span>{badge}</span>
          </span>
        </div>
      )}

      <h2 className={`te-section-title-pro ${isDark ? "text-white" : ""}`}>
        {title} {titleAccent && <span className="accent-gold">{titleAccent}</span>}
      </h2>

      {description && (
        <p className={`te-section-desc-pro ${isDark ? "text-light-subtle" : ""}`}>
          {description}
        </p>
      )}

      <div className={`te-luxury-divider ${center ? "mx-auto" : ""}`}>
        <span className="divider-line left"></span>
        <span className="divider-diamond"></span>
        <span className="divider-line right"></span>
      </div>
    </div>
  );
}

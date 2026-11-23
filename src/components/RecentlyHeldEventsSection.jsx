import React from "react";
import { Link } from "react-router-dom";
import { 
  Trophy, 
  Calendar, 
  Award, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Image as ImageIcon,
  ExternalLink
} from "lucide-react";
import { recentlyHeldEvents } from "../data/eventsData";
import { galleryPhotos } from "../data/galleryData";
import { useSchool } from "../context/SchoolContext";

export default function RecentlyHeldEventsSection() {
  const { openLightbox } = useSchool();

  const featuredEvent = recentlyHeldEvents.find(e => e.id === "speech-debate-2026") || recentlyHeldEvents[0];
  const otherEvents = recentlyHeldEvents.filter(e => e.id !== featuredEvent.id);

  // Helper to find matching photo index in galleryPhotos for opening in full lightbox
  const handlePhotoClick = (photoSrc) => {
    const idx = galleryPhotos.findIndex(p => p.src === photoSrc);
    if (idx !== -1) {
      openLightbox(idx);
    } else {
      // Fallback: find first event photo or open at 0
      openLightbox(0);
    }
  };

  return (
    <section className="te-events-section" id="recent-events">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-750 mx-auto mb-5">
          <div className="d-inline-flex align-items-center gap-2 te-badge gold mb-2">
            <Sparkles size={14} />
            <span>Campus Life & Co-Curricular Excellence</span>
          </div>
          <h2 className="display-6 fw-bold mb-3 text-dark">
            Recently Held Events & <span className="text-primary">Student Milestones</span>
          </h2>
          <p className="text-muted" style={{ fontSize: "1.05rem", lineHeight: "1.75" }}>
            At The Educators Prime Campus Baigpur, education extends beyond the classroom into regional oratory 
            championships, sports festivals, standardized assessments, and life-skill workshops.
          </p>
        </div>

        {/* Featured Milestone Banner: 23rd Annual Speech & Debate Competition */}
        {featuredEvent && (
          <div className="te-events-featured-banner">
            <div className="row g-4 align-items-center">
              {/* Left Column: Event Information & Accolades */}
              <div className="col-lg-6">
                <div className="te-events-badge-pill">
                  <Trophy size={14} />
                  <span>{featuredEvent.tag}</span>
                </div>

                <h3 className="te-events-featured-title">
                  {featuredEvent.title}
                </h3>

                <div className="d-flex align-items-center gap-3 text-white-50 small mb-3">
                  <span className="d-flex align-items-center gap-1">
                    <Calendar size={14} className="text-warning" />
                    <span>{featuredEvent.date}</span>
                  </span>
                  <span>•</span>
                  <span className="text-info fw-semibold">The Educators Regional Cluster</span>
                </div>

                <p className="te-events-featured-desc">
                  {featuredEvent.summary}
                </p>

                {/* Accolades List */}
                <ul className="te-events-highlights-list">
                  {featuredEvent.highlights.map((highlight, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={18} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <Link 
                    to="/gallery" 
                    className="btn btn-warning fw-bold px-4 py-2 d-inline-flex align-items-center gap-2"
                  >
                    <ImageIcon size={16} />
                    <span>View Debate Photo Album</span>
                  </Link>

                  <button 
                    onClick={() => handlePhotoClick("/assets/images/events/speech-debate-council.webp")}
                    type="button"
                    className="btn btn-outline-light px-3 py-2 d-inline-flex align-items-center gap-2"
                  >
                    <span>Zoom Gallery</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>

              {/* Right Column: 4-Photo Interactive Collage */}
              <div className="col-lg-6">
                <div className="te-events-photo-mosaic">
                  {featuredEvent.gallery.slice(0, 4).map((imgItem, idx) => (
                    <div 
                      key={idx} 
                      className="te-events-mosaic-item"
                      onClick={() => handlePhotoClick(imgItem.src)}
                      title={`Click to preview: ${imgItem.title}`}
                    >
                      <img 
                        src={imgItem.src} 
                        alt={imgItem.title} 
                        loading="lazy"
                      />
                      <div className="te-events-mosaic-caption">
                        {imgItem.title}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-2">
                  <small className="text-white-50" style={{ fontSize: "0.78rem" }}>
                    📷 Click any image to view in high resolution
                  </small>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Recent Events Grid */}
        <div className="row g-4 mb-5">
          {otherEvents.map((evt) => (
            <div key={evt.id} className="col-lg-4 col-md-6">
              <div className="te-events-card">
                <div className="te-events-card-media">
                  <img 
                    src={evt.coverImage} 
                    alt={evt.title} 
                    loading="lazy" 
                  />
                  <div className="te-events-card-date-badge">
                    {evt.date}
                  </div>
                  <div className="te-events-card-category-badge">
                    {evt.category}
                  </div>
                </div>

                <div className="te-events-card-body">
                  <h4 className="te-events-card-title">
                    {evt.title}
                  </h4>
                  <p className="te-events-card-text">
                    {evt.summary}
                  </p>

                  <div className="pt-3 border-top mt-auto d-flex justify-content-between align-items-center">
                    <span className="small text-muted fw-semibold">
                      {evt.tag}
                    </span>
                    <button
                      onClick={() => handlePhotoClick(evt.coverImage)}
                      className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-1"
                      type="button"
                    >
                      <span>Photos</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Full Gallery Banner */}
        <div className="p-4 rounded-4 bg-primary text-white d-flex justify-content-between align-items-center flex-wrap gap-3 shadow-sm">
          <div className="d-flex align-items-center gap-3">
            <div className="p-3 bg-white bg-opacity-20 rounded-circle text-warning">
              <ImageIcon size={28} />
            </div>
            <div>
              <h4 className="fw-bold mb-1 text-white">Explore Our Official Campus Photo Gallery</h4>
              <p className="small text-white-50 mb-0">
                View classroom sessions, speech competitions, sports tournaments, and student activity albums.
              </p>
            </div>
          </div>

          <Link 
            to="/gallery" 
            className="btn btn-warning fw-bold px-4 py-2 d-inline-flex align-items-center gap-2"
          >
            <span>Visit Photo Gallery</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

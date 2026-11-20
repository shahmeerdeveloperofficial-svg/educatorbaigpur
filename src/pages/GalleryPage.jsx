import React, { useState } from "react";
import { Eye, Image, Sparkles } from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import { galleryPhotos, galleryCategories } from "../data/galleryData";
import { useSchool } from "../context/SchoolContext";

export default function GalleryPage() {
  const { openLightbox } = useSchool();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPhotos = selectedCategory === "All"
    ? galleryPhotos
    : galleryPhotos.filter(p => p.category === selectedCategory);

  return (
    <div>
      <PageHeader 
        badge="Authentic Campus Life"
        title="Photo Gallery & Campus Life"
        subtitle="Visual glimpses of our campus architecture, sports fields, outdoor play areas, and educational community."
        breadcrumbs={[{ label: "Gallery", active: true }]}
      />

      {/* Filter Tabs */}
      <section className="py-4 bg-light border-bottom">
        <div className="container">
          <div className="d-flex align-items-center justify-content-center flex-wrap gap-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                className={`btn btn-sm px-4 py-2 rounded-pill fw-semibold ${
                  selectedCategory === cat
                    ? "btn-te-primary shadow-sm"
                    : "btn-outline-secondary"
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row g-4">
            {filteredPhotos.map((photo, index) => {
              const originalIndex = galleryPhotos.findIndex(p => p.id === photo.id);
              return (
                <div key={photo.id} className="col-lg-4 col-md-6">
                  <div 
                    className="te-gallery-item"
                    onClick={() => openLightbox(originalIndex)}
                  >
                    <img 
                      src={photo.src} 
                      alt={photo.alt} 
                      className="te-gallery-img"
                      onError={(e) => {
                        if (photo.fallback) {
                          e.target.onerror = null;
                          e.target.src = photo.fallback;
                        }
                      }}
                    />
                    <div className="te-gallery-overlay">
                      <span className="badge bg-warning text-dark align-self-start mb-1" style={{ fontSize: "0.72rem" }}>
                        {photo.category}
                      </span>
                      <strong className="text-white small mb-1">{photo.title}</strong>
                      <p className="text-light-50 small mb-2 text-truncate">{photo.caption}</p>
                      <span className="small text-white fw-semibold d-inline-flex align-items-center gap-1">
                        <Eye size={14} className="text-warning" /> Enlarge Full View
                      </span>
                    </div>
                  </div>

                  <div className="p-2 pt-3">
                    <h6 className="fw-bold text-dark mb-1">{photo.title}</h6>
                    <small className="text-muted">{photo.caption}</small>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

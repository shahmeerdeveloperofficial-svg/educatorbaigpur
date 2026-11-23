import React, { useState, useMemo } from "react";
import { Eye, Image, Sparkles, ChevronDown, CheckCircle2 } from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import { galleryPhotos, galleryCategories } from "../data/galleryData";
import { useSchool } from "../context/SchoolContext";

const INITIAL_BATCH = 24;
const BATCH_INCREMENT = 24;

export default function GalleryPage() {
  const { openLightbox } = useSchool();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH);

  const filteredPhotos = useMemo(() => {
    return selectedCategory === "All"
      ? galleryPhotos
      : galleryPhotos.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const visiblePhotos = useMemo(() => {
    return filteredPhotos.slice(0, visibleCount);
  }, [filteredPhotos, visibleCount]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setVisibleCount(INITIAL_BATCH);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + BATCH_INCREMENT, filteredPhotos.length));
  };

  const handleShowAll = () => {
    setVisibleCount(filteredPhotos.length);
  };

  return (
    <div>
      <PageHeader 
        badge="Official Campus Archive"
        title="Photo Gallery & Campus Life"
        subtitle={`Explore our comprehensive visual archive of ${galleryPhotos.length}+ photographs featuring speech championships, sports galas, academic testing, student celebrations, and purpose-built campus architecture.`}
        breadcrumbs={[{ label: "Gallery", active: true }]}
      />

      {/* Filter Tabs & Counter Bar */}
      <section className="py-4 bg-light border-bottom sticky-top shadow-sm" style={{ top: "72px", zIndex: 100 }}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div className="d-flex align-items-center flex-wrap gap-2">
              {galleryCategories.map((cat) => {
                const count = cat === "All" 
                  ? galleryPhotos.length 
                  : galleryPhotos.filter(p => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    className={`btn btn-sm px-3 py-2 rounded-pill fw-semibold d-inline-flex align-items-center gap-2 ${
                      selectedCategory === cat
                        ? "btn-te-primary shadow-sm"
                        : "btn-outline-secondary"
                    }`}
                    onClick={() => handleCategoryChange(cat)}
                  >
                    <span>{cat}</span>
                    <span className={`badge rounded-pill ${selectedCategory === cat ? "bg-warning text-dark" : "bg-secondary text-white"}`} style={{ fontSize: "0.68rem" }}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="d-flex align-items-center gap-2">
              <span className="small text-muted fw-semibold">
                Showing <strong>{visiblePhotos.length}</strong> of <strong>{filteredPhotos.length}</strong> photos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row g-4">
            {visiblePhotos.map((photo) => {
              const originalIndex = galleryPhotos.findIndex(p => p.id === photo.id);
              return (
                <div key={photo.id} className="col-lg-4 col-md-6 col-sm-6">
                  <div 
                    className="te-gallery-item"
                    onClick={() => openLightbox(originalIndex !== -1 ? originalIndex : 0)}
                  >
                    <img 
                      src={photo.src} 
                      alt={photo.alt} 
                      className="te-gallery-img"
                      loading="lazy"
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
                        <Eye size={14} className="text-warning" /> Enlarge High Resolution
                      </span>
                    </div>
                  </div>

                  <div className="p-2 pt-3">
                    <h6 className="fw-bold text-dark mb-1 text-truncate" title={photo.title}>{photo.title}</h6>
                    <small className="text-muted d-block text-truncate" title={photo.caption}>{photo.caption}</small>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More Controls */}
          {visibleCount < filteredPhotos.length && (
            <div className="text-center mt-5 pt-3">
              <div className="d-inline-flex align-items-center gap-3 flex-wrap">
                <button
                  onClick={handleLoadMore}
                  className="btn btn-te-primary px-4 py-2 fw-bold d-inline-flex align-items-center gap-2 shadow-sm"
                  type="button"
                >
                  <ChevronDown size={18} />
                  <span>Load More Photos ({filteredPhotos.length - visibleCount} remaining)</span>
                </button>

                <button
                  onClick={handleShowAll}
                  className="btn btn-outline-secondary px-3 py-2 fw-semibold"
                  type="button"
                >
                  <span>Show All ({filteredPhotos.length})</span>
                </button>
              </div>
              <div className="mt-2 text-muted small">
                Showing {visiblePhotos.length} of {filteredPhotos.length} total photos in this category
              </div>
            </div>
          )}

          {visibleCount >= filteredPhotos.length && filteredPhotos.length > INITIAL_BATCH && (
            <div className="text-center mt-5 pt-3">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-2 bg-light rounded-pill border text-muted small">
                <CheckCircle2 size={16} className="text-success" />
                <span>All {filteredPhotos.length} photos loaded</span>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

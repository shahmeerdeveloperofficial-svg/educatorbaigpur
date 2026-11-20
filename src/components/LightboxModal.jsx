import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { galleryPhotos } from "../data/galleryData";
import { useSchool } from "../context/SchoolContext";

export default function LightboxModal() {
  const { lightboxIndex, closeLightbox, nextLightbox, prevLightbox } = useSchool();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  if (lightboxIndex === null) return null;

  const currentPhoto = galleryPhotos[lightboxIndex];
  if (!currentPhoto) return null;

  return (
    <div className="te-lightbox-backdrop" onClick={closeLightbox}>
      <div 
        className="te-lightbox-content" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={closeLightbox}
          className="btn btn-sm btn-light position-absolute rounded-circle p-2 shadow"
          style={{ top: "-18px", right: "-18px", zIndex: 1070 }}
          aria-label="Close Lightbox"
        >
          <X size={20} />
        </button>

        {/* Previous Button */}
        <button 
          onClick={prevLightbox}
          className="btn btn-light rounded-circle position-absolute start-0 top-50 translate-middle-y shadow p-2"
          style={{ zIndex: 1070, marginLeft: "-24px" }}
          aria-label="Previous Image"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Next Button */}
        <button 
          onClick={nextLightbox}
          className="btn btn-light rounded-circle position-absolute end-0 top-50 translate-middle-y shadow p-2"
          style={{ zIndex: 1070, marginRight: "-24px" }}
          aria-label="Next Image"
        >
          <ChevronRight size={24} />
        </button>

        {/* Image Display */}
        <div className="text-center">
          <img 
            src={currentPhoto.src} 
            alt={currentPhoto.alt} 
            className="te-lightbox-img"
            onError={(e) => {
              if (currentPhoto.fallback) {
                e.target.onerror = null;
                e.target.src = currentPhoto.fallback;
              }
            }}
          />
        </div>

        {/* Caption & Category */}
        <div className="bg-dark bg-opacity-75 p-3 rounded-3 mt-3 text-white border border-secondary text-center">
          <div className="d-flex align-items-center justify-content-center gap-2 mb-1">
            <span className="badge bg-warning text-dark">{currentPhoto.category}</span>
            <span className="small text-light-50">
              {lightboxIndex + 1} of {galleryPhotos.length}
            </span>
          </div>
          <h5 className="text-white mb-1">{currentPhoto.title}</h5>
          <p className="text-light-50 small mb-0">{currentPhoto.caption}</p>
        </div>
      </div>
    </div>
  );
}

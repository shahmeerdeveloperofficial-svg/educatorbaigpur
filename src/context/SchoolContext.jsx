import React, { createContext, useContext, useState, useEffect } from "react";
import { schoolInfo, initialCirculars, initialCareers } from "../data/schoolData";
import { galleryPhotos } from "../data/galleryData";

const SchoolContext = createContext();

export function SchoolProvider({ children }) {
  // Dynamic Admissions Open/Closed
  const [admissionsOpen, setAdmissionsOpen] = useState(() => {
    const saved = localStorage.getItem("te_admissions_open");
    return saved !== null ? JSON.parse(saved) : true;
  });

  // Dynamic Circulars
  const [circulars, setCirculars] = useState(() => {
    const saved = localStorage.getItem("te_circulars");
    return saved ? JSON.parse(saved) : initialCirculars;
  });

  // Dynamic Careers
  const [careers, setCareers] = useState(() => {
    const saved = localStorage.getItem("te_careers");
    return saved ? JSON.parse(saved) : initialCareers;
  });

  // Submitted Inquiries (saved locally for school review)
  const [inquiries, setInquiries] = useState(() => {
    const saved = localStorage.getItem("te_inquiries");
    return saved ? JSON.parse(saved) : [];
  });

  // Modal States
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [selectedCircular, setSelectedCircular] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Sync with LocalStorage
  useEffect(() => {
    localStorage.setItem("te_admissions_open", JSON.stringify(admissionsOpen));
  }, [admissionsOpen]);

  useEffect(() => {
    localStorage.setItem("te_circulars", JSON.stringify(circulars));
  }, [circulars]);

  useEffect(() => {
    localStorage.setItem("te_careers", JSON.stringify(careers));
  }, [careers]);

  useEffect(() => {
    localStorage.setItem("te_inquiries", JSON.stringify(inquiries));
  }, [inquiries]);

  // Add inquiry
  const addInquiry = (inquiryData) => {
    const newEntry = {
      id: "inq-" + Date.now(),
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }),
      ...inquiryData
    };
    setInquiries((prev) => [newEntry, ...prev]);
    return newEntry;
  };

  // Add circular
  const addCircular = (circularData) => {
    const newEntry = {
      id: "circ-" + Date.now(),
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }),
      status: "Active",
      ...circularData
    };
    setCirculars((prev) => [newEntry, ...prev]);
  };

  const deleteCircular = (id) => {
    setCirculars((prev) => prev.filter((c) => c.id !== id));
  };

  // Add Career
  const addCareer = (jobData) => {
    const newEntry = {
      id: "job-" + Date.now(),
      status: "Open",
      ...jobData
    };
    setCareers((prev) => [newEntry, ...prev]);
  };

  const deleteCareer = (id) => {
    setCareers((prev) => prev.filter((j) => j.id !== id));
  };

  // Lightbox handlers
  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % galleryPhotos.length);
    }
  };
  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length);
    }
  };

  return (
    <SchoolContext.Provider
      value={{
        schoolInfo,
        admissionsOpen,
        setAdmissionsOpen,
        circulars,
        addCircular,
        deleteCircular,
        careers,
        addCareer,
        deleteCareer,
        inquiries,
        addInquiry,
        isAdmissionModalOpen,
        setIsAdmissionModalOpen,
        selectedCircular,
        setSelectedCircular,
        lightboxIndex,
        openLightbox,
        closeLightbox,
        nextLightbox,
        prevLightbox
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
}

export function useSchool() {
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error("useSchool must be used within a SchoolProvider");
  }
  return context;
}

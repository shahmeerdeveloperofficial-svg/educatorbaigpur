import React from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Trophy, 
  Smile, 
  ShieldCheck, 
  Sun, 
  Droplets, 
  Sparkles, 
  HeartPulse, 
  Bus, 
  Palette,
  ArrowRight,
  GraduationCap,
  FileText,
  Award,
  Users
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import { facilitiesList, schoolInfo } from "../data/schoolData";
import { useSchool } from "../context/SchoolContext";

export default function FacilitiesPage() {
  const { setIsAdmissionModalOpen } = useSchool();

  const getIcon = (iconName) => {
    switch(iconName) {
      case "BookOpen": return <BookOpen size={28} />;
      case "Trophy": return <Trophy size={28} />;
      case "Smile": return <Smile size={28} />;
      case "ShieldCheck": return <ShieldCheck size={28} />;
      case "Sun": return <Sun size={28} />;
      case "Droplets": return <Droplets size={28} />;
      case "Sparkles": return <Sparkles size={28} />;
      case "HeartPulse": return <HeartPulse size={28} />;
      case "Bus": return <Bus size={28} />;
      case "Palette": return <Palette size={28} />;
      case "FileText": return <FileText size={28} />;
      case "Award": return <Award size={28} />;
      case "Users": return <Users size={28} />;
      default: return <Sparkles size={28} />;
    }
  };

  return (
    <div>
      <PageHeader 
        badge="State-of-the-Art Infrastructure"
        title="Campus Facilities"
        subtitle="12 purpose-built facilities engineered for health, safety, intellectual enrichment, and joyful learning."
        breadcrumbs={[{ label: "Facilities", active: true }]}
      />

      <section className="py-5 bg-white">
        <div className="container py-4">
          <SectionHeading 
            badge="World-Class Environment"
            badgeType="green"
            title="Comprehensive Facilities at"
            titleAccent="Prime Campus Baigpur"
            description="Designed in strict alignment with Beaconhouse architectural and safety benchmarks."
          />

          <div className="row g-4">
            {facilitiesList.map((facility, index) => (
              <div key={facility.id} className="col-lg-6">
                <div className="te-facility-card-pro">
                  <div className="te-facility-top-row">
                    <div className="te-facility-icon-pro">
                      {getIcon(facility.icon)}
                    </div>
                    <span className="te-facility-chip">
                      Facility #{index + 1} • {facility.category}
                    </span>
                  </div>

                  <h3 className="te-facility-title-pro" style={{ fontSize: "1.45rem" }}>
                    {facility.title}
                  </h3>
                  
                  <p className="lead text-primary fw-medium small mb-2">
                    {facility.shortDesc}
                  </p>

                  <p className="te-facility-desc-pro">
                    {facility.details}
                  </p>

                  <div className="rounded-3 overflow-hidden shadow-sm border mt-3" style={{ height: "220px" }}>
                    <img 
                      src={facility.image} 
                      alt={facility.title} 
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Environmental highlight: Solar Powered with Rainbow Aura */}
          <div className="mt-5 te-rainbow-aura-wrap">
            <div className="p-4 p-md-5 rounded-4 bg-primary text-white shadow-lg">
              <div className="row align-items-center g-4">
                <div className="col-lg-8">
                  <div className="mb-2">
                    <span className="te-badge-pro gold on-dark">
                      <span className="te-badge-dot"></span>
                      <span>Green Campus Initiative</span>
                    </span>
                  </div>
                  <h3 className="fw-bold text-white mb-2" style={{ fontSize: "1.9rem" }}>
                    Uninterrupted Solar Energy for Smooth Studies
                  </h3>
                  <p className="text-light-50 mb-0" style={{ lineHeight: "1.75" }}>
                    To preserve classroom focus throughout extreme seasons and load shedding, 
                    our campus operates a reliable independent solar power system. Students study in well-lit, 
                    comfortably ventilated rooms without academic pauses.
                  </p>
                </div>
                <div className="col-lg-4 text-lg-end">
                  <button 
                    onClick={() => setIsAdmissionModalOpen(true)}
                    className="btn btn-te-gold"
                    type="button"
                  >
                    <GraduationCap size={18} />
                    <span>Apply for Admission</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

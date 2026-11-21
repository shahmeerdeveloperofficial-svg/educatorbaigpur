import React from "react";
import { Link } from "react-router-dom";
import { 
  Award, 
  Target, 
  Eye, 
  ShieldCheck, 
  Heart, 
  Sparkles, 
  Users, 
  ArrowRight, 
  CheckCircle2,
  Building,
  GraduationCap
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import { schoolInfo, leadership } from "../data/schoolData";
import { useSchool } from "../context/SchoolContext";

export default function AboutPage() {
  const { setIsAdmissionModalOpen } = useSchool();

  return (
    <div>
      <PageHeader 
        badge="About The Educators"
        title="About Prime Campus, Baigpur"
        subtitle="A beacon of modern, value-based education established under the distinguished umbrella of Beaconhouse."
        breadcrumbs={[{ label: "About School", active: true }]}
      />

      {/* Overview Section */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="te-badge blue">Institutional Background</span>
              <h2 className="te-section-title mb-3">
                A Proud Project of <span className="text-primary">Beaconhouse</span>
              </h2>
              <div className="te-gold-divider mb-4"></div>

              <p className="lead text-dark fw-medium mb-3">
                The Educators is Pakistan's largest pre-eminent school network, extending 
                the world-class pedagogic benchmarks of Beaconhouse across the nation since 2002.
              </p>

              <p className="text-muted mb-3">
                At <strong>The Educators Prime Campus, Baigpur</strong>, we bring this prestigious educational legacy 
                directly to the students and families of Nowshera Virkan and surrounding areas. Established on a prime location Near Jogiwala Stop, 
                Baigpur (Main Road Sheikhupura-Gujranwala, Nowshera Virkan), our campus is designed as a purpose-built educational sanctuary where academic rigor, 
                moral grounding, and character formation intersect seamlessly.
              </p>

              <p className="text-muted mb-4">
                We believe that education must transcend textbooks. Our campus integrates contemporary science and 
                mathematics curricula with Islamic values, sports, art, phonics, and public speaking, 
                preparing our young learners to become confident, responsible, and visionary citizens.
              </p>

              <div className="p-3 rounded-3 bg-light border d-flex align-items-center gap-3">
                <div className="bg-warning text-dark p-2 rounded-circle flex-shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <strong className="d-block text-dark small">25 Years of Nation Building</strong>
                  <span className="text-muted small">
                    Over two decades of nurturing Pakistan's brightest minds and academic achievers.
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="position-relative">
                <div className="rounded-4 overflow-hidden shadow-lg border">
                  <img 
                    src="/assets/images/school-front-panoramic.webp" 
                    alt="The Educators Campus Baigpur, Nowshera Virkan" 
                    className="w-100 object-fit-cover"
                    style={{ minHeight: "420px" }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/images/school-front-panoramic.jpg";
                    }}
                  />
                </div>

                <div 
                  className="position-absolute bg-white p-3 rounded-3 shadow border d-none d-sm-block"
                  style={{ bottom: "20px", right: "20px", maxWidth: "260px" }}
                >
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span className="badge bg-success">Campus Highlights</span>
                  </div>
                  <strong className="d-block text-dark small">Lush Green Grounds & Solar Campus</strong>
                  <span className="text-muted" style={{ fontSize: "0.75rem" }}>
                    Equipped with modern safety and clean water infrastructure.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-5 bg-subtle">
        <div className="container py-4">
          <SectionHeading 
            badge="Guiding Philosophy"
            badgeType="gold"
            title="Our Vision &"
            titleAccent="Institutional Mission"
            description="Clear principles guiding our daily academic, ethical, and community endeavors."
          />

          <div className="row g-4">
            {/* Vision */}
            <div className="col-lg-6">
              <div className="p-4 p-md-5 rounded-4 bg-white border h-100 shadow-sm position-relative overflow-hidden">
                <div 
                  className="position-absolute top-0 end-0 p-3 opacity-10 text-primary"
                  style={{ transform: "translate(20%, -20%)" }}
                >
                  <Eye size={160} />
                </div>

                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="p-3 rounded-3 bg-primary text-white">
                    <Eye size={28} />
                  </div>
                  <h3 className="fw-bold text-dark mb-0">Our Vision</h3>
                </div>

                <div className="te-gold-divider mb-4"></div>

                <p className="text-secondary mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                  To be the standard of educational excellence in Nowshera Virkan and the surrounding region, nurturing an inclusive, 
                  disciplined, and intellectually vibrant community where every child's potential is unlocked 
                  and transformed into leadership, creativity, and purposeful contribution to society.
                </p>

                <ul className="list-unstyled mb-0 small text-muted">
                  <li className="d-flex align-items-center gap-2 mb-2">
                    <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                    <span>Unlocking innate creativity and critical thinking.</span>
                  </li>
                  <li className="d-flex align-items-center gap-2 mb-2">
                    <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                    <span>Inculcating deep moral consciousness and social responsibility.</span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                    <span>Fostering academic excellence through Beaconhouse standards.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mission */}
            <div className="col-lg-6">
              <div className="p-4 p-md-5 rounded-4 bg-white border h-100 shadow-sm position-relative overflow-hidden">
                <div 
                  className="position-absolute top-0 end-0 p-3 opacity-10 text-warning"
                  style={{ transform: "translate(20%, -20%)" }}
                >
                  <Target size={160} />
                </div>

                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="p-3 rounded-3 bg-warning text-dark">
                    <Target size={28} />
                  </div>
                  <h3 className="fw-bold text-dark mb-0">Our Mission</h3>
                </div>

                <div className="te-gold-divider mb-4"></div>

                <p className="text-secondary mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                  To provide quality education, encourage creativity, develop confidence, and instil values 
                  of integrity, discipline, and responsibility in every student. Together, we strive to nurture 
                  bright minds and build a future where excellence and strong values go hand in hand.
                </p>

                <ul className="list-unstyled mb-0 small text-muted">
                  <li className="d-flex align-items-center gap-2 mb-2">
                    <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                    <span>Student-centered teaching methodologies in modern classrooms.</span>
                  </li>
                  <li className="d-flex align-items-center gap-2 mb-2">
                    <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                    <span>Continuous assessment and personalized student mentorship.</span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                    <span>Providing safe, hygienic, and solar-powered learning facilities.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Educational Values */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <SectionHeading 
            badge="Our Pillars"
            badgeType="blue"
            title="Core Institutional"
            titleAccent="Values"
            description="The five fundamental principles that shape our school culture and student development."
          />

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="p-4 rounded-3 border h-100 bg-subtle">
                <div className="badge bg-primary text-white mb-3">01</div>
                <h5 className="fw-bold text-dark mb-2">Integrity & Honesty</h5>
                <p className="text-muted small mb-0">
                  Upholding ethical conduct, truthfulness, and moral clarity in academic work, interpersonal interactions, and life.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="p-4 rounded-3 border h-100 bg-subtle">
                <div className="badge bg-warning text-dark mb-3">02</div>
                <h5 className="fw-bold text-dark mb-2">Discipline & Respect</h5>
                <p className="text-muted small mb-0">
                  Instilling self-discipline, punctuality, respect for teachers, parents, peers, and adherence to societal norms.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="p-4 rounded-3 border h-100 bg-subtle">
                <div className="badge bg-success text-white mb-3">03</div>
                <h5 className="fw-bold text-dark mb-2">Academic Rigor</h5>
                <p className="text-muted small mb-0">
                  Pursuing deep conceptual clarity, problem solving, language mastery, and excellence in BISE Board examinations.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="p-4 rounded-3 border h-100 bg-subtle">
                <div className="badge bg-info text-white mb-3">04</div>
                <h5 className="fw-bold text-dark mb-2">Confidence & Creativity</h5>
                <p className="text-muted small mb-0">
                  Encouraging inquisitive minds through art, debates, science demonstrations, and sports activities.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="p-4 rounded-3 border h-100 bg-subtle">
                <div className="badge bg-danger text-white mb-3">05</div>
                <h5 className="fw-bold text-dark mb-2">Civic Responsibility</h5>
                <p className="text-muted small mb-0">
                  Teaching compassion, cleanliness, environmental stewardship, and patriotism as proud citizens of Pakistan.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="p-4 rounded-3 border h-100 bg-primary text-white d-flex flex-column justify-content-between">
                <div>
                  <span className="badge bg-warning text-dark mb-3">The Educators Motto</span>
                  <h4 className="fw-bold text-white mb-2">Commitment, Quality, Dedication</h4>
                  <p className="text-light-50 small mb-3">
                    These three words represent the timeless cornerstone of our daily commitment to every enrolled student.
                  </p>
                </div>
                <button 
                  onClick={() => setIsAdmissionModalOpen(true)}
                  className="btn btn-warning btn-sm fw-bold align-self-start"
                >
                  Join Our Campus
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profile Previews */}
      <section className="py-5 bg-subtle border-top">
        <div className="container py-4">
          <SectionHeading 
            badge="School Governance"
            badgeType="gold"
            title="Dedicated Campus"
            titleAccent="Leadership"
            description="Meet the visionaries directing academic excellence and student well-being at Prime Campus Baigpur."
          />

          <div className="row g-4 justify-content-center">
            {/* CEO */}
            <div className="col-lg-5 col-md-6">
              <div className="bg-white rounded-4 border p-4 shadow-sm h-100 text-center">
                <div 
                  className="rounded-4 overflow-hidden shadow mx-auto mb-3"
                  style={{ width: "200px", height: "240px", backgroundColor: "#F8FAFC" }}
                >
                  <img 
                    src={leadership.ceo.image} 
                    alt={leadership.ceo.name} 
                    className="w-100 h-100 object-fit-cover"
                    style={{ objectPosition: "center 10%" }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = leadership.ceo.imageFallback;
                    }}
                  />
                </div>
                <h4 className="fw-bold text-dark mb-1">{leadership.ceo.name}</h4>
                <div className="text-primary fw-bold small mb-2">{leadership.ceo.designation}</div>
                <p className="text-muted small mb-4" style={{ fontStyle: "italic" }}>
                  "{leadership.ceo.quote}"
                </p>
                <Link to="/leadership/chairman" className="btn btn-sm btn-outline-primary fw-semibold">
                  <span>Read CEO's Full Address</span>
                  <ArrowRight size={14} className="ms-1" />
                </Link>
              </div>
            </div>

            {/* Director */}
            <div className="col-lg-5 col-md-6">
              <div className="bg-white rounded-4 border p-4 shadow-sm h-100 text-center">
                <div 
                  className="rounded-4 overflow-hidden shadow mx-auto mb-3"
                  style={{ width: "200px", height: "240px" }}
                >
                  <img 
                    src={leadership.director.image} 
                    alt={leadership.director.name} 
                    className="w-100 h-100 object-fit-cover"
                    style={{ objectPosition: "center 15%" }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = leadership.director.imageFallback;
                    }}
                  />
                </div>
                <h4 className="fw-bold text-dark mb-1">{leadership.director.name}</h4>
                <div className="text-warning fw-bold small mb-2">{leadership.director.designation}</div>
                <p className="text-muted small mb-4" style={{ fontStyle: "italic" }}>
                  "{leadership.director.quote}"
                </p>
                <Link to="/leadership/director" className="btn btn-sm btn-outline-primary fw-semibold">
                  <span>Read Director's Full Address</span>
                  <ArrowRight size={14} className="ms-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

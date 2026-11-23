export const schoolInfo = {
  name: "The Educators Prime Campus, Baigpur",
  shortName: "The Educators Prime Campus",
  tagline: "A Project of Beaconhouse",
  motto: "Commitment, Quality, Dedication",
  celebration: "25 Years of Nation Building (2002 – 2027)",
  address: "Near Jogiwala Stop, Baigpur, Main Road Sheikhupura-Gujranwala, Nowshera Virkan",
  shortAddress: "Near Jogiwala Stop, Baigpur, Nowshera Virkan",
  phone: "0300-1199494",
  phoneInternational: "+92 300 1199494",
  whatsapp: "923001199494",
  email: "info@educatorsbaigpur.edu.pk",
  officeHours: "Monday – Saturday: 7:45 AM – 2:00 PM (Friday till 12:30 PM)",
  currentSession: "Session 2026-2027",
  admissionsOpen: true,
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/923001199494"
  }
};

export const leadership = {
  ceo: {
    name: "Abu Sufyan Virk",
    designation: "CEO / Chairman",
    school: "The Educators Prime Campus, Baigpur",
    image: "/assets/images/ceo-abu-sufyan-virk.webp",
    imageFallback: "/assets/images/ceo-abu-sufyan-virk.jpg",
    heading: "Building Character, Unlocking Potential & Shaping Future Leaders",
    quote: "Together, we strive to nurture bright minds and build a future where excellence and strong values go hand in hand.",
    paragraphs: [
      "At The Educators Prime Campus, Baigpur, we believe education is the key to building strong character, unlocking potential, and shaping future leaders.",
      "Our mission is to provide quality education, encourage creativity, develop confidence, and instil values of integrity, discipline, and responsibility in every student.",
      "Together, we strive to nurture bright minds and build a future where excellence and strong values go hand in hand."
    ],
    highlights: [
      "Character & Ethical Leadership",
      "Academic Rigor & Innovation",
      "Confidence & Responsibility"
    ]
  },
  director: {
    name: "Dr. Rimsha Sufyan",
    designation: "Director",
    school: "The Educators Prime Campus, Baigpur",
    image: "/assets/images/director-dr-rimsha-sufyan.webp",
    imageFallback: "/assets/images/director-dr-rimsha-sufyan.jpg",
    heading: "Nurturing Every Child's Unique Potential to Shine",
    quote: "Together, let us create a brighter future!",
    paragraphs: [
      "At The Educators Prime Campus, Baigpur, we believe every child has the potential to shine.",
      "Our mission is to provide quality education, nurture strong values, and inspire young minds to become confident, responsible, and successful individuals.",
      "Together, let us create a brighter future!"
    ],
    highlights: [
      "Student-Centric Care",
      "Holistic Growth & Well-being",
      "Inspiring Young Minds"
    ]
  }
};

export const feeStructure = {
  session: "2026-2027",
  registrationFee: 1500,
  admissionFee: 4000,
  monthlyFee: 4000,
  annualCharges: 4000,
  siblingDiscount: [
    { child: "1st Child", discountPercent: 0, note: "Full Monthly Fee (PKR 4,000)" },
    { child: "2nd Child", discountPercent: 10, note: "10% Discount on Monthly Fee (PKR 3,600)" },
    { child: "3rd Child", discountPercent: 15, note: "15% Discount on Monthly Fee (PKR 3,400)" },
    { child: "4th Child & beyond", discountPercent: 25, note: "25% Discount on Monthly Fee (PKR 3,000)" }
  ],
  siblingPolicyNote: "A sibling discount will be provided if all children are biological (Real siblings from the same family).",
  requiredDocuments: [
    "Photocopies of child's Birth Certificate or B-Form (NADRA issued)",
    "Three recent 1 x 1 size photographs of the child",
    "Father's / Guardian's CNIC photocopy and 1 passport-size picture"
  ],
  importantNotes: [
    "The school can review monthly fee 5% to 10% annually.",
    "All paid dues are strictly non-refundable.",
    "Annual charges will be charged every year at the start of the academic session."
  ],
  pdfUrl: "/docs/Fee_Structure_2026_2027.pdf"
};

export const academicPrograms = [
  {
    id: "preschool",
    name: "Pre-School & Early Years",
    badge: "Ages 3 – 5 Years",
    grades: "Playgroup, Nursery, Kindergarten (Prep)",
    summary: "Activity-based, joyful early childhood education fostering motor skills, phonics, curiosity, and foundational social skills.",
    features: [
      "Montessori-inspired play-based learning",
      "Dedicated colorful child-safe activity zones",
      "Phonics & early literacy foundation",
      "Creative arts, rhymes, and confidence building"
    ],
    image: "/assets/images/school-playarea-slides.webp"
  },
  {
    id: "primary",
    name: "Primary School",
    badge: "Classes 1 to 5",
    grades: "Grade 1 to Grade 5",
    summary: "Comprehensive academic foundation building language proficiency, conceptual mathematics, science exploration, and Islamic values.",
    features: [
      "Beaconhouse national standard curriculum",
      "Bilingual mastery in English & Urdu",
      "Interactive STEM concepts & mental arithmetic",
      "Sports, physical activities, and character building"
    ],
    image: "/assets/images/school-lawn-playground.webp"
  },
  {
    id: "middle",
    name: "Middle School",
    badge: "Classes 6 to 8",
    grades: "Grade 6 to Grade 8",
    summary: "Bridge to advanced secondary learning with analytical problem-solving, science labs, leadership skills, and computer literacy.",
    features: [
      "In-depth scientific inquiry & mathematics",
      "Communication & debate skill development",
      "Computer education and digital literacy",
      "Moral development & social responsibility"
    ],
    image: "/assets/images/school-entrance-building.webp"
  },
  {
    id: "secondary",
    name: "Secondary / Matriculation",
    badge: "Classes 9 & 10",
    grades: "Matriculation (Science & Arts)",
    summary: "Rigorous preparation for Board examinations with dedicated faculty mentorship, regular testing, and high academic standards.",
    features: [
      "Thorough Board exam syllabus coverage",
      "Regular assessments, grand tests, and mock exams",
      "Focus on concept clarity and top board scoring",
      "Career counseling & ethical leadership guidance"
    ],
    image: "/assets/images/school-campus-angle.webp"
  }
];

export const facilitiesList = [
  {
    id: "classrooms",
    title: "Modern Ergonomic Classrooms",
    category: "Academic Infrastructure",
    icon: "BookOpen",
    shortDesc: "Well-ventilated, solar-powered classrooms designed with ergonomic furniture for focused learning.",
    details: "Our classrooms feature abundant natural lighting, comfortable individual student desks, modern whiteboards, and high ceilings that support an active and engaging academic environment.",
    image: "/assets/images/events/midyear-exams-boys.webp"
  },
  {
    id: "exam-halls",
    title: "Standardized Examination & Assessment Halls",
    category: "Academic Quality",
    icon: "FileText",
    shortDesc: "Strict Beaconhouse standard examination spaces ensuring academic rigor, comfort, and focus.",
    details: "Mid-year and final assessments are conducted in quiet, organized, and vigilant testing halls that allow students to demonstrate their true academic potential with total integrity.",
    image: "/assets/images/events/midyear-exams-girls.webp"
  },
  {
    id: "sports-playground",
    title: "Lush Sports Ground & Athletics Arena",
    category: "Physical Fitness",
    icon: "Trophy",
    shortDesc: "Expansive green grounds for House competitions, Annual Sports Galas, cricket, and running tracks.",
    details: "Sportsmanship and physical fitness are fostered on our maintained open-air field. Annual sports galas bring together student athletes competing under House banners.",
    image: "/assets/images/events/sports-gala-champions.webp"
  },
  {
    id: "speech-debate-society",
    title: "Speech, Oratory & Debate Society",
    category: "Elocution & Leadership",
    icon: "Award",
    shortDesc: "Coaching in English and Urdu public speaking, producing regional Cluster Level Champions.",
    details: "Students receive regular mentorship in argumentative elocution, declamations, and bilingual speech, recently winning 1st Runner Up and 2nd Runner Up trophies at the 23rd Annual Cluster Level.",
    image: "/assets/images/events/speech-debate-council.webp"
  },
  {
    id: "first-aid-rescue",
    title: "Rescue 1122 Certified First Aid & Safety",
    category: "Health & Life Safety",
    icon: "HeartPulse",
    shortDesc: "Equipped medical first-aid post with staff and student scout corps trained by Rescue 1122 Punjab.",
    details: "Practical CPR drills, disaster preparedness, and medical first-aid kits ensure a prompt response to any student health concern or physical emergency.",
    image: "/assets/images/events/rescue-1122-safety-training.webp"
  },
  {
    id: "teacher-development",
    title: "Faculty Training & Pedagogy Development",
    category: "Teaching Excellence",
    icon: "Users",
    shortDesc: "Continuous teacher training in 21st-century instructional design and interactive learning.",
    details: "Our dedicated educators undergo continuous pedagogy workshops, peer reviews, and syllabus alignment sessions in accordance with Beaconhouse network benchmarks.",
    image: "/assets/images/events/teacher-training-session.webp"
  },
  {
    id: "activity-room",
    title: "Pre-School Activity Zone & Play Area",
    category: "Early Years",
    icon: "Smile",
    shortDesc: "Child-safe outdoor play equipment, slides, and sensory activity zones for Playgroup, Nursery, and Prep.",
    details: "Specially designed outdoor apparatus where our youngest learners develop physical balance, gross motor skills, teamwork, and joyful early childhood memories.",
    image: "/assets/images/school-playarea-slides.webp"
  },
  {
    id: "solar-power",
    title: "Solar Powered Green Campus",
    category: "Infrastructure",
    icon: "Sun",
    shortDesc: "Independent solar energy infrastructure ensuring 100% uninterrupted electricity for classrooms.",
    details: "To guarantee smooth academic continuity regardless of seasonal load shedding, our campus utilizes a modern rooftop solar energy system, creating an eco-friendly sanctuary.",
    image: "/assets/images/school-front-panoramic.webp"
  },
  {
    id: "transport",
    title: "Safe Pick & Drop Transport Service",
    category: "Student Services",
    icon: "Bus",
    shortDesc: "Reliable, monitored school transport vans covering Baigpur and surrounding routes on Main Road Sheikhupura-Gujranwala, Nowshera Virkan.",
    details: "Convenient campus transport with verified drivers, assigned conductors, and designated neighborhood stops ensuring students commute safely and arrive punctually.",
    image: "/assets/images/school-entrance-building.webp"
  },
  {
    id: "safety-security",
    title: "24/7 Security & CCTV Campus Surveillance",
    category: "Campus Safety",
    icon: "ShieldCheck",
    shortDesc: "High perimeter walls, monitored entrance gates, and continuous CCTV surveillance.",
    details: "The safety of every student is our primary obligation. We maintain controlled visitor access, gate guards, and round-the-clock video monitoring across the premises.",
    image: "/assets/images/school-campus-angle.webp"
  },
  {
    id: "clean-water",
    title: "Multi-Stage Purified Drinking Water Plant",
    category: "Student Health",
    icon: "Droplets",
    shortDesc: "Commercial-grade filtration plant providing 100% pure, cold, and tested drinking water.",
    details: "Regular laboratory quality testing guarantees that clean, safe, and hygienic water is accessible to students and faculty across all break periods.",
    image: "/assets/images/school-lawn-playground.webp"
  },
  {
    id: "hygiene-washrooms",
    title: "Sanitized & Modern Restrooms",
    category: "Health & Hygiene",
    icon: "Sparkles",
    shortDesc: "Separate, spotless, and continuously sanitized washrooms for boys, girls, and staff.",
    details: "Strict sanitation schedules, liquid soap dispensers, and running water are maintained by our dedicated maintenance team after every class interval.",
    image: "/assets/images/school-entrance-building.webp"
  }
];

export const initialCirculars = [
  {
    id: "circ-101",
    date: "18 November 2026",
    titleEn: "Admissions Open for Academic Session 2026-2027",
    titleUr: "تعلیمی سیشن 2026-2027 کے لیے داخلوں کا آغاز",
    bodyEn: "Admissions are officially open from Pre-School (Playgroup, Nursery, Prep) to Matriculation. Parents are invited to visit the campus for registration and prospectus.",
    bodyUr: "پری اسکول (پلے گروپ، نرسری، پریپ) سے میٹرک تک داخلے شروع ہو چکے ہیں۔ والدین سے گزارش ہے کہ پراسپیکٹس اور رجسٹریشن کے لیے اسکول تشریف لائیں۔",
    category: "Admissions",
    status: "Active"
  },
  {
    id: "circ-102",
    date: "14 November 2026",
    titleEn: "Special Sibling Discount Notice",
    titleUr: "بہن بھائیوں کے لیے خصوصی فیس رعایت کا نوٹس",
    bodyEn: "The Educators Prime Campus offers a generous sibling discount: 10% on monthly tuition fee for the 2nd child, 15% for the 3rd child, and 25% for the 4th child for real biological siblings.",
    bodyUr: "دی ایجوکیٹرز پرائم کیمپس اپنے معزز والدین کے لیے فیس میں خصوصی رعایت فراہم کر رہا ہے: دوسرے بچے کے لیے 10 فیصد، تیسرے کے لیے 15 فیصد اور چوتھے بچے کے لیے 25 فیصد رعایت لاگو ہوگی۔",
    category: "Fee Policy",
    status: "Active"
  },
  {
    id: "circ-103",
    date: "10 November 2026",
    titleEn: "Campus Visiting & Office Timings",
    titleUr: "کیمپس وزٹ اور دفتری اوقات کار",
    bodyEn: "School administrative office is open Monday to Saturday from 7:45 AM to 2:00 PM (Friday until 12:30 PM) for parent queries and campus tours.",
    bodyUr: "اسکول کا انتظامی دفتر پیر تا ہفتہ صبح 7:45 سے دوپہر 2:00 بجے تک (جمعہ کو 12:30 بجے تک) والدین کی رہنمائی اور کیمپس کے دورے کے لیے کھلا ہے۔",
    category: "General",
    status: "Active"
  }
];

export const initialCareers = [
  {
    id: "job-01",
    title: "Pre-School / Montessori Directress",
    department: "Early Years",
    type: "Full Time",
    experience: "1-2 Years Experience preferred",
    qualification: "Graduation / Montessori Diploma",
    description: "Looking for energetic, loving, and qualified female teachers with strong English communication and early childhood teaching skills.",
    status: "Open"
  },
  {
    id: "job-02",
    title: "Primary English & Science Teacher",
    department: "Primary Section",
    type: "Full Time",
    experience: "2+ Years Experience in reputed school",
    qualification: "BA/B.Sc or MA/M.Sc with B.Ed",
    description: "Dedicated educator to teach English and General Science for Classes 3 to 5 using student-centered teaching methodologies.",
    status: "Open"
  },
  {
    id: "job-03",
    title: "Secondary Mathematics & Physics Faculty",
    department: "Secondary Section (Classes 9 & 10)",
    type: "Full Time",
    experience: "3+ Years Board preparation experience",
    qualification: "M.Sc Mathematics / Physics",
    description: "Experienced instructor with proven track record in BISE matric examination results and student conceptual clarity.",
    status: "Open"
  }
];

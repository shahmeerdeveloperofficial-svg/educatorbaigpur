export const schoolInfo = {
  name: "The Educators Prime Campus, Baigpur",
  shortName: "The Educators Prime Campus",
  tagline: "A Project of Beaconhouse",
  motto: "Commitment, Quality, Dedication",
  celebration: "25 Years of Nation Building (2002 – 2027)",
  address: "Near Jogiwala Stop, Baigpur, Main GT Road, Sheikhupura, Punjab, Pakistan",
  shortAddress: "Baigpur, Main GT Road, Sheikhupura",
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
    title: "Modern Classrooms",
    category: "Academic",
    icon: "BookOpen",
    shortDesc: "Well-ventilated, well-lit, ergonomically designed classrooms equipped for modern interactive teaching.",
    details: "Our classrooms provide an inspiring atmosphere with comfortable furniture, natural lighting, audio-visual readiness, and organized study spaces tailored to each grade level.",
    image: "/assets/images/school-entrance-building.webp"
  },
  {
    id: "sports-playground",
    title: "Sports & Playground",
    category: "Campus Life",
    icon: "Trophy",
    shortDesc: "Spacious green lawn and paved grounds for outdoor sports, morning assembly, and healthy physical play.",
    details: "Physical fitness is central to our philosophy. Our campus features a lush green open field for sports, running, and physical training under teacher supervision.",
    image: "/assets/images/school-lawn-playground.webp"
  },
  {
    id: "activity-room",
    title: "Activity Room & Play Area",
    category: "Campus Life",
    icon: "Smile",
    shortDesc: "Colorful play area with climbing frames, slides, and swings specially designed for pre-school and early years.",
    details: "Safe, child-friendly outdoor play apparatus where our youngest learners cultivate gross motor coordination, sharing, teamwork, and joyful outdoor memories.",
    image: "/assets/images/school-playarea-slides.webp"
  },
  {
    id: "safety-security",
    title: "Safety & Security",
    category: "Safety",
    icon: "ShieldCheck",
    shortDesc: "24/7 campus CCTV surveillance, secure boundary walls, and dedicated security guards for peace of mind.",
    details: "The safety of our students is paramount. The campus is secured with high perimeter fencing, monitored gate security, restricted visitor access, and trained staff.",
    image: "/assets/images/school-campus-angle.webp"
  },
  {
    id: "solar-power",
    title: "Solar Powered Green Campus",
    category: "Infrastructure",
    icon: "Sun",
    shortDesc: "Independent solar energy system ensuring uninterrupted electricity for fans, lights, and learning facilities.",
    details: "To guarantee smooth academic continuity regardless of load shedding, our campus utilizes a modern solar power infrastructure, creating an eco-friendly learning environment.",
    image: "/assets/images/school-front-panoramic.webp"
  },
  {
    id: "clean-water",
    title: "Clean Drinking Water",
    category: "Health",
    icon: "Droplets",
    shortDesc: "Multi-stage purified water filtration plant providing clean, safe, and cold drinking water for all students.",
    details: "Health begins with pure water. Our filtration system undergoes routine quality checks to ensure 100% safe, hygienic drinking water for children and faculty.",
    image: "/assets/images/school-lawn-playground.webp"
  },
  {
    id: "hygiene-washrooms",
    title: "Hygiene & Modern Washrooms",
    category: "Health",
    icon: "Sparkles",
    shortDesc: "Clean, separate, well-sanitized washrooms for boys, girls, and staff with continuous cleaning cycles.",
    details: "Strict hygiene protocols are maintained daily by our housekeeping team with liquid soap, clean running water, and sanitization after every break.",
    image: "/assets/images/school-entrance-building.webp"
  },
  {
    id: "first-aid",
    title: "First Aid & Health Care",
    category: "Health",
    icon: "HeartPulse",
    shortDesc: "Equipped first-aid station and trained staff to handle emergencies and immediate medical needs.",
    details: "We maintain a well-stocked medical kit, emergency contact protocols, and staff trained in first-aid response to attend to minor cuts, fever, or health concerns promptly.",
    image: "/assets/images/school-playarea-slides.webp"
  },
  {
    id: "transport",
    title: "School Transport Facility",
    category: "Services",
    icon: "Bus",
    shortDesc: "Safe, reliable pick-and-drop transport covering Baigpur and surrounding routes on Main GT Road.",
    details: "Convenient transport service with vetted drivers and designated stops ensuring students arrive punctually and travel safely to and from home.",
    image: "/assets/images/school-front-panoramic.webp"
  },
  {
    id: "co-curricular",
    title: "Co-Curricular & Creative Activities",
    category: "Enrichment",
    icon: "Palette",
    shortDesc: "Regular speech competitions, arts exhibitions, science presentations, quiz bowls, and national celebrations.",
    details: "Education beyond textbooks: students actively participate in Iqbal Day, Pakistan Day, sports galas, drawing competitions, and Islamic value weeks.",
    image: "/assets/images/banner-25-years.webp"
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

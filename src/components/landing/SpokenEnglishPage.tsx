import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Users, Mic, Smile, CheckCircle, Sparkles, Play, ArrowRight, Heart, Star, Layout, ShieldCheck, X, Video, Volume2, BookOpen, Award, UserCheck, Globe } from "lucide-react";
import { Navbar } from "../Navbar";
import { Link } from "@tanstack/react-router";
import { ApexEdgeFooter } from "../ApexEdgeFooter";

const CUBIC_EASE = [0.16, 1, 0.3, 1] as const;

const highlightsData = [
  {
    id: "01",
    title: "Individualised Teaching",
    desc: "We provide our candidates with completely 1:1 individualised coaching facilities. Hence, you can learn at your own pace without any pressure.",
    image: "https://res.cloudinary.com/dkmr8o9p9/image/upload/v1786075581/spoken_ecrras.jpg"
  },
  {
    id: "02",
    title: "Practice-Based Learning",
    desc: "Enrolling with Apex Edge will help you experience 100% practice-based learning. Therefore, you can master the nuances of the language effectively.",
    image: "https://res.cloudinary.com/dkmr8o9p9/image/upload/v1786075604/ielts_h5hgdy.jpg"
  },
  {
    id: "03",
    title: "India's Top Tutors",
    desc: "Learn from the best in the industry. Our tutors are certified experts with years of experience in spoken English training.",
    image: "/teachers/priya.png"
  },
  {
    id: "04",
    title: "Flexible Learning",
    desc: "Schedule your classes according to your convenience. We offer early morning to late night slots to fit your busy lifestyle.",
    image: "https://res.cloudinary.com/dkmr8o9p9/image/upload/v1786075590/group_dw4fxd.jpg"
  },
  {
    id: "05",
    title: "Real-Time Practice",
    desc: "Engage in live conversations and real-world simulations to build instantaneous confidence and fluency.",
    image: "https://res.cloudinary.com/dkmr8o9p9/image/upload/v1786075583/celpip_srdty8.jpg"
  }
];

const learningStepsData = [
  {
    step: "STEP 01",
    title: "Interactive Live Sessions",
    desc: "Engage in live, dynamic group and 1:1 sessions with expert tutors.",
    icon: Video,
    color: "from-sky-500 to-blue-600",
    shadow: "shadow-sky-500/25",
    badgeBg: "bg-sky-50 text-sky-600",
    borderColor: "border-sky-200"
  },
  {
    step: "STEP 02",
    title: "Daily Speaking Practice",
    desc: "Build muscle memory with real-time daily conversational drills.",
    icon: Mic,
    color: "from-[#E05670] to-rose-600",
    shadow: "shadow-rose-500/25",
    badgeBg: "bg-rose-50 text-[#E05670]",
    borderColor: "border-rose-200"
  },
  {
    step: "STEP 03",
    title: "Pronunciation & Accent Improvement",
    desc: "Refine your phonetics, intonation, and clarity for natural speech.",
    icon: Volume2,
    color: "from-purple-500 to-indigo-600",
    shadow: "shadow-purple-500/25",
    badgeBg: "bg-purple-50 text-purple-600",
    borderColor: "border-purple-200"
  },
  {
    step: "STEP 04",
    title: "Vocabulary & Grammar Enhancement",
    desc: "Master practical words and flawless grammar structure naturally.",
    icon: BookOpen,
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/25",
    badgeBg: "bg-emerald-50 text-emerald-600",
    borderColor: "border-emerald-200"
  },
  {
    step: "STEP 05",
    title: "Public Speaking & Confidence Activities",
    desc: "Overcome hesitation with group discussions and presentation tasks.",
    icon: Award,
    color: "from-amber-500 to-orange-600",
    shadow: "shadow-amber-500/25",
    badgeBg: "bg-amber-50 text-amber-600",
    borderColor: "border-amber-200"
  },
  {
    step: "STEP 06",
    title: "Personalised Trainer Feedback",
    desc: "Receive 1:1 corrective guidance from experienced language trainers.",
    icon: UserCheck,
    color: "from-fuchsia-500 to-pink-600",
    shadow: "shadow-fuchsia-500/25",
    badgeBg: "bg-fuchsia-50 text-fuchsia-600",
    borderColor: "border-fuchsia-200"
  },
  {
    step: "STEP 07",
    title: "Practical Real-Life Communication",
    desc: "Apply your skills in interviews, office meetings, and daily life.",
    icon: Globe,
    color: "from-cyan-500 to-blue-600",
    shadow: "shadow-cyan-500/25",
    badgeBg: "bg-cyan-50 text-cyan-600",
    borderColor: "border-cyan-200"
  }
];

export function SpokenEnglishPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFBF8] text-[#2C1820] overflow-x-hidden">
      <Navbar />

      {/* Hero Section - Pinkish Creamish & White Theme */}
      <motion.section
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.85, ease: CUBIC_EASE }}
        className="relative w-full pt-28 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#FAF0EB] via-[#FDF4F0] to-[#FFF5F2] overflow-hidden"
      >
        {/* Floating Line-Art Vector Doodles */}
        {/* Rocket Line Art - Top Left */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 left-6 sm:left-16 lg:left-24 opacity-40 pointer-events-none"
        >
          <svg width="70" height="70" viewBox="0 0 64 64" fill="none" stroke="#2C1820" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M32 10C32 10 46 16 46 36C46 44 42 50 42 50L32 44L22 50C22 50 18 44 18 36C18 16 32 10 32 10Z" />
            <circle cx="32" cy="26" r="4" />
            <path d="M22 50L14 54L18 42" />
            <path d="M42 50L50 54L46 42" />
            <path d="M32 44V56" />
          </svg>
        </motion.div>

        {/* Open Book Line Art - Mid Left */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [6, -6, 6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-64 left-4 sm:left-12 lg:left-20 opacity-35 pointer-events-none hidden sm:block"
        >
          <svg width="65" height="65" viewBox="0 0 64 64" fill="none" stroke="#2C1820" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20C12 20 20 16 32 20C44 16 52 20 52 20V48C52 48 44 44 32 48C20 44 12 48 12 48V20Z" />
            <path d="M32 20V48" />
            <path d="M18 28H26" />
            <path d="M18 34H28" />
            <path d="M36 28H46" />
            <path d="M36 34H44" />
          </svg>
        </motion.div>

        {/* Hot Air Balloon Line Art - Top Right */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 right-6 sm:right-16 lg:right-28 opacity-40 pointer-events-none"
        >
          <svg width="75" height="75" viewBox="0 0 64 64" fill="none" stroke="#2C1820" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M32 8C20 8 14 18 14 28C14 36 22 42 26 44H38C42 42 50 36 50 28C50 18 44 8 32 8Z" />
            <path d="M22 28C22 18 26 10 32 10C38 10 42 18 42 28" />
            <path d="M26 44L24 50H40L38 44" />
            <rect x="26" y="50" width="12" height="8" rx="1" />
          </svg>
        </motion.div>

        {/* Geometric Triangle Line Art - Mid Right */}
        <div className="absolute top-64 right-8 sm:right-16 lg:right-24 opacity-35 pointer-events-none hidden sm:block">
          <svg width="55" height="55" viewBox="0 0 64 64" fill="none" stroke="#2C1820" strokeWidth="1.5">
            <polygon points="32,12 52,48 12,48" />
          </svg>
        </div>

        {/* Sparkles / Dashed circles */}
        <div className="absolute top-44 left-1/4 opacity-25 pointer-events-none">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2C1820" strokeWidth="1.5">
            <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
          </svg>
        </div>
        <div className="absolute top-36 right-1/3 opacity-30 pointer-events-none">
          <Sparkles className="w-6 h-6 text-[#2C1820]" />
        </div>

        {/* Hero Header Content */}
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#2C1820] tracking-tight leading-[1.12] mb-6">
              Grow your Skills to Advance <br className="hidden sm:block" />
              <span className="text-[#E05670] italic">Your Career path</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#7E5E6D] font-medium max-w-2xl mx-auto leading-relaxed mb-8">
              Educating, Inspiring, & Transforming Learners. Premier Spoken English Training for Peak Fluency & Career Success.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center mb-12">
              <Link
                to="/enroll"
                className="px-12 sm:px-16 py-4 rounded-full bg-white text-[#2C1820] font-bold text-lg sm:text-xl shadow-xl shadow-rose-200/50 hover:bg-[#2C1820] hover:text-white transition-all flex items-center justify-center gap-3 group border border-rose-100/80 min-w-[220px] sm:min-w-[260px]"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* 3 Arch Student Portrait Cards - Sleek 3-Column Layout on all screens */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="grid grid-cols-3 gap-2 sm:gap-6 lg:gap-8 max-w-4xl mx-auto items-end pt-2 sm:pt-4 px-1 sm:px-0"
          >
            {/* Left Arch Card */}
            <div className="relative group">
              <div className="rounded-t-[45px] xs:rounded-t-[70px] sm:rounded-t-[140px] rounded-b-[18px] sm:rounded-b-[40px] bg-[#FCE7F3] border-2 sm:border-4 border-white shadow-md sm:shadow-xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">
                <img
                  src="https://res.cloudinary.com/dkmr8o9p9/image/upload/v1786075602/hero_left_bpsrkk.jpg"
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute("src", "https://res.cloudinary.com/dkmr8o9p9/image/upload/v1786075581/spoken_ecrras.jpg");
                  }}
                  alt="Student Pink"
                  className="w-full h-[170px] xs:h-[220px] sm:h-[360px] md:h-[420px] object-cover object-top"
                />
              </div>
            </div>

            {/* Center Arch Card - Double Arch Outline Feature */}
            <div className="relative group">
              {/* Outer stroke accent ring */}
              <div className="absolute -inset-1 sm:-inset-3 border sm:border-2 border-[#2C1820]/25 rounded-t-[52px] xs:rounded-t-[80px] sm:rounded-t-[160px] rounded-b-[22px] sm:rounded-b-[50px] pointer-events-none" />

              <div className="rounded-t-[45px] xs:rounded-t-[70px] sm:rounded-t-[140px] rounded-b-[18px] sm:rounded-b-[40px] bg-[#E9D5FF] border-2 sm:border-4 border-white shadow-lg sm:shadow-2xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 relative z-10">
                <img
                  src="https://res.cloudinary.com/dkmr8o9p9/image/upload/v1786075601/hero_center_hrycjw.jpg"
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute("src", "https://res.cloudinary.com/dkmr8o9p9/image/upload/v1786075581/pte_dnhlne.jpg");
                  }}
                  alt="Student Purple"
                  className="w-full h-[190px] xs:h-[245px] sm:h-[390px] md:h-[450px] object-cover object-top"
                />
              </div>
            </div>

            {/* Right Arch Card */}
            <div className="relative group">
              <div className="rounded-t-[45px] xs:rounded-t-[70px] sm:rounded-t-[140px] rounded-b-[18px] sm:rounded-b-[40px] bg-[#FEF08A] border-2 sm:border-4 border-white shadow-md sm:shadow-xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">
                <img
                  src="https://res.cloudinary.com/dkmr8o9p9/image/upload/v1786075602/hero_right_jvkhj3.jpg"
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute("src", "https://res.cloudinary.com/dkmr8o9p9/image/upload/v1786075584/celpip_boy_zljcmw.jpg");
                  }}
                  alt="Student Green"
                  className="w-full h-[170px] xs:h-[220px] sm:h-[360px] md:h-[420px] object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Organic Wavy / Torn Paper Bottom Edge Transition */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-12 sm:h-20 text-[#FFFBF8] fill-current">
            <path d="M0,30 C200,90 400,-10 600,45 C800,100 1000,15 1200,50 C1340,75 1400,30 1440,40 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </motion.section>

      {/* New Spoken English Batch Banner Section - White Background & Soft Pinkish Container */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: CUBIC_EASE }}
        className="py-8 sm:py-12 px-4 sm:px-6 lg:px-12 bg-white relative z-20"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#FFF5F2] via-[#FDF0EC] to-[#FAF0EB] rounded-[2rem] sm:rounded-[3rem] p-5 sm:p-8 lg:p-10 border border-rose-100 shadow-xl shadow-rose-200/25 relative overflow-hidden grid lg:grid-cols-12 gap-6 lg:gap-10 items-center"
          >
            {/* Soft Decorative Ambient Circles */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-rose-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-52 h-52 bg-sky-50 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            {/* Left Column: Student Graphic */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-48 sm:w-60 lg:w-full max-w-[270px] aspect-square flex items-center justify-center">
                {/* Main Vibrant Blue Backdrop Circle */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#38BDF8] via-[#0284C7] to-[#0369A1] shadow-md shadow-sky-500/20" />

                {/* Floating Pink & Blue Graphic Circles */}
                <div className="absolute -top-1 -right-1 sm:top-1 sm:right-1 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#FB7185] animate-pulse" />
                <div className="absolute top-1/4 -left-2 sm:-left-3 w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-[#38BDF8]" />
                <div className="absolute bottom-5 -right-2 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-[#F43F5E]" />
                <div className="absolute bottom-2 left-6 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-[#38BDF8]" />

                {/* Student Cutout */}
                <img
                  src="https://res.cloudinary.com/dkmr8o9p9/image/upload/v1786075601/hero_center_hrycjw.jpg"
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute("src", "https://res.cloudinary.com/dkmr8o9p9/image/upload/v1786075581/spoken_ecrras.jpg");
                  }}
                  alt="Student Spoken English Batch"
                  className="relative z-10 w-[88%] h-[88%] object-cover object-top rounded-full border-4 border-white shadow-xl"
                />
              </div>
            </div>

            {/* Right Column: Compact Text & CTA */}
            <div className="lg:col-span-7 text-center lg:text-left relative z-10">
              {/* Live Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 text-[#E05670] font-bold text-xs mb-3 border border-rose-100">
                <span className="w-2 h-2 rounded-full bg-[#E05670] animate-ping" />
                <span>Live Batch Alert</span>
              </div>

              {/* Title 1 (Smaller, Compact) */}
              <h2 className="text-xl sm:text-3xl font-black text-[#1A1A1A] tracking-tight leading-tight mb-2">
                New Spoken English <br className="hidden sm:block" />
                <span>Batch Starts Today.</span>
              </h2>

              {/* Title 2 Highlighted */}
              <h3 className="text-lg sm:text-2xl font-bold text-[#0284C7] leading-snug mb-2">
                Join now and Master in English Speaking.
              </h3>

              {/* Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href="https://wa.me/918360079077?text=Hi,%20I%20want%20to%20join%20the%20New%20Spoken%20English%20Batch!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base shadow-md shadow-emerald-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2.5"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>WhatsApp Now</span>
                </a>

                <Link
                  to="/enroll"
                  className="px-6 py-3 rounded-full bg-[#1A1A1A] hover:bg-black text-white font-bold text-sm sm:text-base shadow-sm hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Interactive Step-by-Step Learning Roadmap Section (Matching User Reference Image) */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: CUBIC_EASE }}
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-white relative z-20 overflow-hidden border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-[#E05670] font-bold text-xs sm:text-sm mb-4 uppercase tracking-widest">
              <Sparkles className="w-4 h-4" /> Learning Pathway
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#2C1820] mb-4">
              How You Will <span className="text-[#E05670] italic">Master Spoken English</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#7E5E6D] font-medium max-w-2xl mx-auto">
              Our structured 7-step process designed for rapid fluency, accent refinement, and real-world confidence.
            </p>
          </div>

          {/* Desktop Circle Roadmap Flow (lg screens) - Reference infographic style */}
          <div className="hidden lg:block relative">
            {/* Horizontal connecting line through circle centers */}
            <div className="absolute top-[calc(50%-2px)] left-0 right-0 h-1 bg-gradient-to-r from-sky-300 via-rose-300 to-cyan-300 rounded-full z-0 pointer-events-none" />

            {/* 7 Step Nodes Row */}
            <div className="relative z-10 flex items-center justify-between gap-0">
              {learningStepsData.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0; // odd index = label below, even = label above

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center group flex-1"
                  >
                    {/* Top label (shown for even index) */}
                    <div className={`text-center mb-3 ${isEven ? "visible" : "invisible"} min-h-[70px] flex flex-col justify-end`}>
                      <span className={`text-xs font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${item.badgeBg} mb-1 inline-block`}>
                        {item.step}
                      </span>
                      <h4 className="text-sm font-bold text-[#1A1A1A] leading-snug px-1">
                        {item.title}
                      </h4>
                    </div>

                    {/* Large Vibrant Circle */}
                    <div className={`w-20 h-20 xl:w-24 xl:h-24 rounded-full bg-gradient-to-br ${item.color} ${item.shadow} text-white flex items-center justify-center border-4 border-white shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-rose-300/40 relative z-10`}>
                      <IconComponent className="w-5 h-5 xl:w-6 xl:h-6" />
                    </div>

                    {/* Bottom label (shown for odd index) */}
                    <div className={`text-center mt-3 ${!isEven ? "visible" : "invisible"} min-h-[70px] flex flex-col justify-start`}>
                      <span className={`text-xs font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${item.badgeBg} mb-1 inline-block`}>
                        {item.step}
                      </span>
                      <h4 className="text-sm font-bold text-[#1A1A1A] leading-snug px-1">
                        {item.title}
                      </h4>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile & Tablet Vertical Step Roadmap Flow (sm/md screens) */}
          <div className="lg:hidden relative pl-6 sm:pl-10 space-y-8">
            {/* Vertical Connecting Line */}
            <div className="absolute top-4 bottom-4 left-9 sm:left-14 w-1 bg-gradient-to-b from-sky-400 via-rose-400 to-cyan-400 rounded-full" />

            {learningStepsData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative flex items-start gap-4 sm:gap-6 group"
                >
                  {/* Circular Icon Node */}
                  <div className={`shrink-0 w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-gradient-to-br ${item.color} ${item.shadow} text-white flex items-center justify-center border-4 border-white shadow-lg relative z-10 transition-transform group-hover:scale-110`}>
                    <IconComponent className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>

                  {/* Step Card Content */}
                  <div className="flex-1 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-gray-100 shadow-md shadow-gray-200/30 group-hover:shadow-xl transition-all">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${item.badgeBg}`}>
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A]">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Benefits Card Grid Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: CUBIC_EASE }}
        className="py-24 sm:py-32 bg-[#FAF0EB]/60 border-y border-rose-100/60"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#2C1820] leading-tight">
              Why Our Online <br />
              <span className="text-[#E05670] italic">English Speaking Classes</span> <br />
              Are the Best Option for You?
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-[#7E5E6D] font-medium max-w-xl mx-auto">
              Tailored learning paths designed for effortless fluency:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                icon: Layout,
                iconBg: "bg-gradient-to-br from-[#E05670] to-rose-500",
                title: "Affiliated Trainers",
                desc: "Our trainers are certified experts with years of practical experience. They provide 1:1 personalized coaching with customized lesson plans tailored to your accent, vocabulary, and career goals.",
              },
              {
                icon: Mic,
                iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
                title: "Practice-Based Learning",
                desc: "Experience 100% practice-based learning with real-time speaking drills, live conversations, and real-world simulations that help you master the nuances of English naturally.",
              },
              {
                icon: Smile,
                iconBg: "bg-gradient-to-br from-amber-400 to-orange-500",
                title: "Flexible Scheduling",
                desc: "Enjoy maximum flexibility with 24/7 slot booking. Choose early morning or late night sessions that seamlessly integrate with your work or university schedule without any stress.",
              },
              {
                icon: ShieldCheck,
                iconBg: "bg-gradient-to-br from-emerald-400 to-teal-600",
                title: "Recognised Certification",
                desc: "Earn a prestigious fluency certificate recognized by top employers and institutions worldwide, boosting your professional resume and job interview success rate significantly.",
              },
            ].map((card, i) => {
              const CardIcon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-8 sm:p-10 border border-rose-100 shadow-lg shadow-rose-100/40 hover:shadow-2xl hover:shadow-rose-200/50 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${card.iconBg} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <CardIcon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2C1820] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#7E5E6D] leading-relaxed font-medium">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Circle Infographic Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: CUBIC_EASE }}
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#FFFBF8] overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-[#E05670] font-bold text-xs sm:text-sm mb-4 uppercase tracking-widest">
              <Sparkles className="w-4 h-4" /> Our Approach
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#2C1820] leading-tight">
              Learn by <span className="text-[#E05670] italic">Doing.</span><br className="hidden sm:block" /> Speak by Practice.
            </h2>
          </div>

          {/* Two Column: Circle Left | Points Right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ===== LEFT: Circle Infographic ===== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]">

                {/* Outermost dashed ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#E05670]/20 animate-[spin_30s_linear_infinite]" />

                {/* Second dashed ring */}
                <div className="absolute inset-6 sm:inset-8 rounded-full border-2 border-dashed border-[#E05670]/30 animate-[spin_20s_linear_infinite_reverse]" />

                {/* Solid outer ring */}
                <div className="absolute inset-10 sm:inset-14 rounded-full border-[6px] border-[#E05670]/15" />

                {/* Inner white card circle */}
                <div className="absolute inset-16 sm:inset-20 rounded-full bg-white shadow-2xl shadow-rose-200/50 border-4 border-rose-50 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#E05670] to-rose-400 flex items-center justify-center shadow-xl">
                    <Star className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                </div>

                {/* Satellite 1 — Top */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 border-4 border-white shadow-lg flex items-center justify-center">
                  <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                {/* Satellite 2 — Right */}
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#E05670] to-rose-600 border-4 border-white shadow-lg flex items-center justify-center">
                  <Mic className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                {/* Satellite 3 — Bottom */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 border-4 border-white shadow-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                {/* Satellite 4 — Left */}
                <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-violet-500 to-purple-700 border-4 border-white shadow-lg flex items-center justify-center">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

              </div>
            </motion.div>

            {/* ===== RIGHT: 4 Feature Points ===== */}
            <div className="space-y-6">
              {[
                { icon: Volume2, label: "01", title: "Listen Like a Native", desc: "Train your ears to understand real native speakers in films, conversations, and everyday dialogue.", color: "from-sky-400 to-blue-600", shadow: "shadow-sky-200" },
                { icon: Mic, label: "02", title: "Speak English Naturally", desc: "Practice real-time spoken English with expert tutors in live 1:1 and group sessions daily.", color: "from-[#E05670] to-rose-600", shadow: "shadow-rose-200" },
                { icon: BookOpen, label: "03", title: "Learn from Your Mistakes", desc: "Get instant, personalized feedback from your trainer after every speaking exercise.", color: "from-emerald-400 to-teal-600", shadow: "shadow-emerald-200" },
                { icon: Award, label: "04", title: "Track Your Level & Progress", desc: "See your fluency chart grow over time and measure yourself against real benchmarks.", color: "from-violet-500 to-purple-700", shadow: "shadow-purple-200" },
              ].map((item, i) => {
                const FeatureIcon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="flex items-start gap-5 group"
                  >
                    {/* Colored Icon Circle */}
                    <div className={`shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-lg ${item.shadow} group-hover:scale-110 transition-transform duration-300`}>
                      <FeatureIcon className="w-6 h-6" />
                    </div>

                    {/* Text */}
                    <div>
                      <p className="text-xs font-bold text-[#E05670] mb-0.5 uppercase tracking-wider">{item.label}</p>
                      <h4 className="text-lg sm:text-xl font-bold text-[#2C1820] mb-1">{item.title}</h4>
                      <p className="text-sm text-[#7E5E6D] font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}

              {/* CTA */}
              <div className="pt-4">
                <Link
                  to="/enroll"
                  className="px-8 py-3.5 rounded-full bg-[#2C1820] text-white font-bold text-base hover:bg-[#E05670] transition-colors inline-flex items-center gap-3 shadow-xl"
                >
                  <span>Join Free Trial Session</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* Video Modal Popup */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-3xl w-full relative shadow-2xl"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-2xl font-serif font-bold text-[#2C1820] mb-4">Apex Edge Spoken English Preview</h3>
              <div className="aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center relative">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Spoken English Overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ApexEdgeFooter />
    </div>
  );
}

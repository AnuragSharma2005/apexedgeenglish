import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Users, Mic, Smile, CheckCircle, Sparkles, Play, ArrowRight, Heart, Star, Layout, ShieldCheck, X } from "lucide-react";
import { Navbar } from "../Navbar";
import { Link } from "@tanstack/react-router";
import { ApexEdgeFooter } from "../ApexEdgeFooter";

const highlightsData = [
  {
    id: "01",
    title: "Individualised Teaching",
    desc: "We provide our candidates with completely 1:1 individualised coaching facilities. Hence, you can learn at your own pace without any pressure.",
    image: "/students/spoken.png"
  },
  {
    id: "02",
    title: "Practice-Based Learning",
    desc: "Enrolling with Apex Edge will help you experience 100% practice-based learning. Therefore, you can master the nuances of the language effectively.",
    image: "/students/ielts.png"
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
    image: "/students/group.png"
  },
  {
    id: "05",
    title: "Real-Time Practice",
    desc: "Engage in live conversations and real-world simulations to build instantaneous confidence and fluency.",
    image: "/students/celpip.png"
  }
];

export function SpokenEnglishPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFBF8] text-[#2C1820] overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Section - Pinkish Creamish & White Theme */}
      <section className="relative w-full pt-28 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#FAF0EB] via-[#FDF4F0] to-[#FFF5F2] overflow-hidden">
        
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
                  src="/students/hero_left.png"
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute("src", "/students/spoken.png");
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
                  src="/students/hero_center.png"
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute("src", "/students/pte.png");
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
                  src="/students/hero_right.png"
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute("src", "/students/celpip_boy.png");
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
      </section>

      {/* New Spoken English Batch Banner Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-12 bg-[#FFFBF8] relative z-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#FAF0EB] via-[#FDF4F0] to-[#FFF0F4] rounded-[2.5rem] sm:rounded-[3.5rem] p-6 sm:p-10 lg:p-12 border-2 border-rose-100/80 shadow-xl shadow-rose-200/20 relative overflow-hidden grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Background Decorative Blurs */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-rose-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-200/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            {/* Left Column: Student Avatar Graphic with Layered Dots */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-56 sm:w-72 lg:w-full max-w-[320px] aspect-square flex items-center justify-center">
                {/* Main Vibrant Blue Backdrop Circle */}
                <div className="absolute inset-2 sm:inset-4 rounded-full bg-gradient-to-br from-[#38BDF8] via-[#0284C7] to-[#0369A1] shadow-xl shadow-sky-500/25" />
                
                {/* Floating Pink & Blue Graphic Circles */}
                <div className="absolute -top-1 -right-1 sm:top-2 sm:right-2 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-[#FB7185] animate-pulse" />
                <div className="absolute top-1/4 -left-2 sm:-left-4 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-[#38BDF8]" />
                <div className="absolute bottom-6 -right-2 sm:-right-3 w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-[#F43F5E]" />
                <div className="absolute bottom-2 left-8 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-[#38BDF8]" />

                {/* Student Cutout */}
                <img
                  src="/students/hero_center.png"
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute("src", "/students/spoken.png");
                  }}
                  alt="Student Spoken English Batch"
                  className="relative z-10 w-[88%] h-[88%] object-cover object-top rounded-full border-4 border-white shadow-2xl"
                />
              </div>
            </div>

            {/* Right Column: Text & WhatsApp Call-To-Action */}
            <div className="lg:col-span-7 text-center lg:text-left relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-[#E05670] font-bold text-xs sm:text-sm mb-4 border border-rose-200">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E05670] animate-ping" />
                <span>Live Batch Alert</span>
              </div>

              {/* Title 1 */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tight leading-tight mb-3">
                New Spoken English <br className="hidden sm:block" />
                <span className="text-[#1A1A1A]">Batch Starts Today.</span>
              </h2>

              {/* Title 2 Highlighted */}
              <h3 className="text-xl sm:text-3xl font-extrabold text-[#0284C7] leading-snug mb-3">
                Join now and Master in English Speaking.
              </h3>

              {/* Seat Urgency Subtext */}
              <p className="text-sm sm:text-base text-gray-500 font-medium mb-8">
                Only <span className="font-bold text-[#E05670]">75 seats left</span> for our spoken english classes
              </p>

              {/* WhatsApp Button */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="https://wa.me/918360079077?text=Hi,%20I%20want%20to%20join%20the%20New%20Spoken%20English%20Batch!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base sm:text-lg shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>WhatsApp Now</span>
                </a>

                <Link
                  to="/enroll"
                  className="px-7 py-3.5 rounded-full bg-[#1A1A1A] hover:bg-black text-white font-bold text-base sm:text-lg shadow-md hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Interactive Section */}
      <section className="py-24 sm:py-32 bg-[#FFFBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-[#E05670] font-bold text-xs sm:text-sm mb-4 uppercase tracking-widest">
              <Sparkles className="w-4 h-4" /> Core Advantages
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#2C1820] mb-4">
              Apex Edge’s <span className="text-[#E05670] italic">Highlights</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#7E5E6D] font-medium max-w-2xl mx-auto">
              Take a sneak peek into the key features of our spoken English classes:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Tabs */}
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-visible gap-4 pb-4 sm:pb-0 no-scrollbar snap-x">
              {highlightsData.map((item, index) => (
                <motion.div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`cursor-pointer shrink-0 sm:shrink-1 snap-start p-4 sm:p-6 rounded-2xl sm:rounded-3xl border-2 transition-all duration-300 flex items-center gap-4 sm:gap-6 min-w-[220px] sm:min-w-0 ${
                    activeTab === index
                      ? "bg-white border-[#E05670] shadow-xl shadow-rose-200/30 sm:-translate-x-3"
                      : "bg-[#FAF0EB]/60 border-transparent hover:bg-white hover:border-rose-200"
                  }`}
                >
                  <span className={`text-base sm:text-xl font-black ${activeTab === index ? "text-[#E05670]" : "text-[#B89CA8]"}`}>
                    {item.id}
                  </span>
                  <h3 className={`text-base sm:text-xl font-bold ${activeTab === index ? "text-[#2C1820]" : "text-[#7E5E6D]"}`}>
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </div>

            {/* Right Content Reveal */}
            <div className="relative mt-4 lg:mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl shadow-rose-100/50 border border-rose-100 relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <img
                      src={highlightsData[activeTab].image}
                      className="w-full h-[250px] sm:h-[360px] object-cover rounded-3xl mb-8 shadow-md border-4 border-[#FFF5F2]"
                      alt="Highlight"
                    />
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E05670] text-white flex items-center justify-center font-bold text-lg sm:text-xl">
                        {highlightsData[activeTab].id.replace(/^0/, '')}
                      </div>
                      <h4 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C1820]">{highlightsData[activeTab].title}</h4>
                    </div>
                    <p className="text-base sm:text-lg text-[#6E5562] leading-relaxed font-medium">
                      {highlightsData[activeTab].desc}
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Alternating Section */}
      <section className="py-24 sm:py-32 bg-[#FAF0EB]/60 border-y border-rose-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#2C1820] leading-tight">
              Why Our Online <br />
              <span className="text-[#E05670] italic">English Speaking Classes</span> <br />
              Are the Best Option for You?
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-[#7E5E6D] font-medium max-w-xl mx-auto">
              Tailored learning paths designed for effortless fluency:
            </p>
          </div>

          <div className="space-y-28 sm:space-y-36">
            {/* Feature 1: Affiliated Trainers */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-rose-100 text-[#E05670] flex items-center justify-center shrink-0">
                    <Layout className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C1820]">Affiliated Trainers</h3>
                </div>
                <p className="text-base sm:text-lg text-[#6E5562] leading-relaxed font-medium">
                  At Apex Edge, our trainers are certified experts with years of practical experience.
                  They enhance your learning journey with 1:1 personalized coaching and customized lesson plans
                  tailored to your unique accent, vocabulary, and career goals.
                </p>
              </motion.div>
              <div className="relative">
                <div className="absolute inset-0 bg-[#E05670]/10 rounded-[3rem] rotate-3 scale-105" />
                <img
                  src="/students/group.png"
                  className="relative rounded-[3rem] w-full h-[380px] sm:h-[450px] object-cover shadow-xl border-4 border-white"
                  alt="Affiliated Trainers"
                />
              </div>
            </div>

            {/* Feature 2: Flexible Scheduling */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-[#C084FC]/15 rounded-[3rem] -rotate-3 scale-105" />
                <img
                  src="/students/ielts.png"
                  className="relative rounded-[3rem] w-full h-[380px] sm:h-[450px] object-cover shadow-xl border-4 border-white"
                  alt="Flexible Scheduling"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                    <Smile className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C1820]">Flexible Scheduling</h3>
                </div>
                <p className="text-base sm:text-lg text-[#6E5562] leading-relaxed font-medium">
                  Enjoy maximum flexibility with 24/7 slot booking. Choose early morning or late night sessions
                  that seamlessly integrate with your work or university schedule without any stress.
                </p>
              </motion.div>
            </div>

            {/* Feature 3: Recognised Certification */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C1820]">Recognised Certification</h3>
                </div>
                <p className="text-base sm:text-lg text-[#6E5562] leading-relaxed font-medium">
                  Earn a prestigious fluency certificate recognized by top employers and institutions worldwide,
                  boosting your professional resume and job interview success.
                </p>
              </motion.div>
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/10 rounded-[3rem] rotate-2 scale-105" />
                <img
                  src="/students/celpip.png"
                  className="relative rounded-[3rem] w-full h-[380px] sm:h-[450px] object-cover shadow-xl border-4 border-white"
                  alt="Recognised Certification"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Practice CTA Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#FFFBF8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#2C1820] mb-8 leading-tight">
                Learn by <span className="text-[#E05670] italic">Doing.</span> <br /> Speak by Practice.
              </h2>
              <div className="space-y-6">
                {[
                  "Daily 1-on-1 speaking practice sessions",
                  "Interactive group debates and discussions",
                  "Real-world scenario simulations",
                  "Video-based feedback from expert coaches",
                  "Lifelong access to our global community"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 text-base sm:text-lg font-semibold text-[#523B46]"
                  >
                    <div className="w-7 h-7 rounded-full bg-rose-100 text-[#E05670] flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    {item}
                  </motion.div>
                ))}
              </div>

              <Link
                to="/enroll"
                className="mt-12 px-10 py-4 rounded-full bg-[#2C1820] text-white font-bold text-lg hover:bg-[#E05670] transition-colors inline-flex items-center gap-3 shadow-xl"
              >
                <span>Join Free Trial Session</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-10">
                <img src="/students/group.png" className="rounded-[2.5rem] w-full h-[260px] object-cover shadow-lg border-2 border-rose-100" alt="study" />
                <div className="p-6 bg-[#E05670] rounded-[2.5rem] text-white shadow-lg">
                  <Smile className="w-10 h-10 mb-3" />
                  <h4 className="text-2xl font-bold mb-1">98% Satisfied</h4>
                  <p className="text-xs font-medium text-rose-100">Proven student transformation</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-[#2C1820] rounded-[2.5rem] text-white shadow-lg">
                  <MessageSquare className="w-10 h-10 mb-3 text-rose-300" />
                  <h4 className="text-2xl font-bold mb-1">24/7 Coaching</h4>
                  <p className="text-xs font-medium text-gray-300">Live feedback & practice</p>
                </div>
                <img src="/students/ielts.png" className="rounded-[2.5rem] w-full h-[260px] object-cover shadow-lg border-2 border-rose-100" alt="study" />
              </div>
            </div>
          </div>
        </div>
      </section>

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

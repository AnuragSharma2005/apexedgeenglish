import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ShieldCheck, Laptop, Globe, CheckCircle, Zap, ArrowRight, ArrowUpRight, Award, Repeat, BookOpen, Volume2, Trophy, Sparkles, Target } from "lucide-react";
import { Navbar } from "../Navbar";
import { ApexEdgeFooter } from "../ApexEdgeFooter";

const CUBIC_EASE = [0.16, 1, 0.3, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    }
  }
};

export function CELPIPPage() {
  return (
    <div className="min-h-screen bg-[#fcf0f4] overflow-x-hidden ">
      <Navbar />

      {/* Main Full-Screen Hero Fold */}
      <motion.section
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.85, ease: CUBIC_EASE }}
        className="relative w-full min-h-screen pt-24 sm:pt-28 pb-16 flex items-center justify-center bg-[#fcf0f4] overflow-hidden"
      >

        {/* Background Ripple Concentric Circles on Left Side */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <svg className="absolute -left-20 top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.14]" viewBox="0 0 600 600" fill="none">
            <circle cx="300" cy="300" r="100" stroke="#9f3e58" strokeWidth="2" />
            <circle cx="300" cy="300" r="160" stroke="#9f3e58" strokeWidth="2" />
            <circle cx="300" cy="300" r="220" stroke="#9f3e58" strokeWidth="2" />
            <circle cx="300" cy="300" r="280" stroke="#9f3e58" strokeWidth="2" />
            <circle cx="300" cy="300" r="340" stroke="#9f3e58" strokeWidth="2" />
          </svg>
        </div>

        {/* Full Height Split Background Shape for Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-0 right-0 w-full lg:w-[48%] h-full bg-[#9f3e58] z-0 rounded-bl-[120px] lg:rounded-bl-[200px] hidden lg:block"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10 py-8">
          {/* Main Fold Content Grid */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column: 3-Line Headline, Paragraph & CTA */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-6 space-y-6 text-left"
            >

              {/* 3-Line Headline styled matching reference image typography */}
              <div className="space-y-1">
                <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#9f3e58] tracking-tight leading-tight">
                  Confidence Guide
                </motion.h2>
                <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#9f3e58] tracking-tight leading-tight">
                  FOR YOUR
                </motion.h2>
                <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 tracking-tight leading-none">
                  CELPIP EXAM
                </motion.h1>
              </div>

              {/* Subtext Paragraph */}
              <motion.p variants={fadeInUp} className="text-base sm:text-lg text-slate-600 font-normal max-w-lg leading-relaxed">
                Canada's premier Paragon-aligned coaching platform. Master speaking, listening, reading and writing with real computer mock test simulations.
              </motion.p>

              {/* Action Row: CTA Button */}
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 pt-3">
                <Link
                  to="/enroll"
                  className="px-8 py-4 rounded-xl bg-[#9f3e58] hover:bg-[#862b44] text-white font-bold text-base shadow-xl shadow-[#9f3e58]/20 transition-all hover:scale-105 inline-flex items-center gap-2.5"
                >
                  Get Admission <ArrowUpRight className="w-5 h-5" />
                </Link>
              </motion.div>

            </motion.div>

            {/* Right Column: Dark Mauve Background Split + White Arch Pedestal Frame + Boy Laptop Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
              className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px]"
            >

              {/* Main Graphic Wrapper */}
              <div className="relative w-full max-w-[480px] aspect-[0.95/1]">

                {/* Floating Badge 1: Top Left */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[8%] -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-3.5 px-4 rounded-xl shadow-xl border border-rose-100 z-30 space-y-0.5 text-left max-w-[180px]"
                >
                  <p className="text-xs font-black text-slate-900">Customer Favourite</p>
                  <p className="text-[10px] text-slate-500 font-medium">Handpicked strategy for 10+ CLB target.</p>
                </motion.div>

                {/* Floating Badge 2: Top Right */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-[16%] -right-2 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 px-4 rounded-xl shadow-xl border border-rose-100 z-30 text-left"
                >
                  <p className="text-base font-black text-[#9f3e58]">10+ CLB</p>
                  <p className="text-[11px] text-slate-600 font-bold">Target Guaranteed</p>
                </motion.div>

                {/* Arched White Backing Frame */}
                <div className="absolute inset-x-6 top-8 bottom-12 rounded-t-full bg-white shadow-xl z-10" />

                {/* Boy Laptop Image Container */}
                <div className="absolute inset-x-8 top-12 bottom-16 rounded-t-full overflow-hidden z-20 shadow-2xl border-4 border-white">
                  <img
                    src="https://res.cloudinary.com/dkmr8o9p9/image/upload/v1786075584/celpip_boy_zljcmw.jpg"
                    alt="CELPIP Boy Student"
                    className="w-full h-full object-cover object-top scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#9f3e58]/30 via-transparent to-transparent" />
                </div>

                {/* White Circular 3D Pedestal Base Podium */}
                <div className="absolute bottom-4 inset-x-0 h-24 bg-white rounded-full shadow-2xl border border-rose-100 z-20 flex items-center justify-center px-6">
                  <div className="w-full h-full rounded-full border-2 border-rose-100/60 flex items-center justify-between px-8 text-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#9f3e58]" />
                      <span className="text-xs font-black uppercase tracking-wider text-slate-700">Paragon Certified</span>
                    </div>
                    <span className="text-xs font-extrabold text-[#9f3e58]">Full Mock Tests</span>
                  </div>
                </div>

                {/* Soft Bottom Curved Cutout Sweep */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#9f3e58] rounded-full z-0 pointer-events-none opacity-40 blur-xl" />

              </div>

            </motion.div>

          </div>
        </div>

      </motion.section>

      {/* SECTION 1: Who Needs CELPIP Preparation? Card */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: CUBIC_EASE }}
        className="relative w-full py-16 sm:py-24 lg:pt-36 lg:pb-28 px-4 sm:px-6 lg:px-12 bg-white"
      >
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="bg-[#fcf0f4] rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-14 shadow-2xl border-2 border-[#f3d5de] relative overflow-hidden"
          >

            {/* Top Ribbon Medal Icon */}
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#9f3e58] mb-6 shadow-md border border-rose-100">
              <Award className="w-7 h-7 stroke-[2.5]" />
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#9f3e58] mb-3 tracking-tight">
              Who Needs CELPIP Preparation?
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-700 font-medium mb-8">
              Our best CELPIP preparation program is designed for:
            </p>

            {/* Bullet Points List */}
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="space-y-4 text-slate-800 font-medium text-base sm:text-lg"
            >
              {[
                "Candidates applying for Canada Permanent Residency through Express Entry",
                "Applicants seeking Canadian citizenship who need language proof",
                "Skilled workers, nurses, engineers, and trades professionals needing CLB 7+",
                "Candidates switching from IELTS to CELPIP for a faster or easier pathway",
                "Test-takers who missed their target score on a previous attempt"
              ].map((text, idx) => (
                <motion.li key={idx} variants={fadeInUp} className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#9f3e58] mt-2 shrink-0 shadow-sm" />
                  <span>{text}</span>
                </motion.li>
              ))}
            </motion.ul>

          </motion.div>

        </div>
      </motion.section>

      {/* SECTION 2: CELPIP General vs CELPIP General LS */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: CUBIC_EASE }}
        className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#fcf0f4]"
      >
        <div className="max-w-5xl mx-auto">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 space-y-3"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1e5b94] leading-tight tracking-tight">
              CELPIP General vs CELPIP General LS — <span className="text-[#d96b27]">Which Do You Need?</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-medium max-w-xl mx-auto">
              Compare the two test formats to choose the right track for your Canadian PR or Citizenship goal.
            </p>
          </motion.div>

          {/* 2 Infographic Cards Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-stretch">

            {/* CARD 01: CELPIP General */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative group max-w-md mx-auto w-full h-full flex flex-col"
            >

              {/* Solid Blue Offset Background Box */}
              <div className="absolute inset-0 bg-[#2b6b9c] rounded-[2.5rem] transform -translate-x-3 translate-y-3.5 z-0" />

              {/* Wire SVG Line Accent */}
              <div className="absolute -top-4 -left-4 -right-2 bottom-0 pointer-events-none z-20 hidden sm:block">
                <svg className="w-full h-full" viewBox="0 0 340 340" fill="none" preserveAspectRatio="none">
                  <path d="M 12 80 A 30 30 0 0 1 42 12 L 300 12" stroke="#2b6b9c" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="12" cy="80" r="5" fill="#2b6b9c" />
                  <circle cx="300" cy="12" r="5" fill="#2b6b9c" />
                </svg>
              </div>

              {/* Main White Card Content */}
              <div className="relative z-10 bg-white border-2 border-[#2b6b9c] rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between items-center text-center shadow-xl h-full min-h-[380px] sm:min-h-[400px] hover:-translate-y-2 transition-transform duration-300">

                <div className="w-full space-y-5 flex flex-col items-center">
                  {/* Top Number 01 */}
                  <div className="w-full text-left font-black text-2xl sm:text-3xl text-[#2b6b9c] tracking-tight">
                    01
                  </div>

                  {/* Center Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#2b6b9c] flex items-center justify-center shadow-sm shrink-0">
                    <BookOpen className="w-8 h-8 stroke-[2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-[#2b6b9c] tracking-tight">
                    CELPIP General
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed px-2">
                    Required for Canadian PR and most professional immigration applications. Tests all four language skills — Listening, Reading, Writing, and Speaking. Total test duration is approximately 3 hours.
                  </p>
                </div>

                {/* Bottom Skill Badge */}
                <div className="pt-4 text-[11px] font-bold uppercase tracking-wider text-[#2b6b9c]">
                  4 Language Skills • ~3 Hours
                </div>

              </div>

            </motion.div>

            {/* CARD 02: CELPIP General LS */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative group max-w-md mx-auto w-full h-full flex flex-col"
            >

              {/* Solid Orange Offset Background Box */}
              <div className="absolute inset-0 bg-[#d96b27] rounded-[2.5rem] transform translate-x-3.5 -translate-y-3.5 z-0" />

              {/* Wire SVG Line Accent */}
              <div className="absolute top-0 -left-2 -right-4 -bottom-4 pointer-events-none z-20 hidden sm:block">
                <svg className="w-full h-full" viewBox="0 0 340 340" fill="none" preserveAspectRatio="none">
                  <path d="M 40 328 L 298 328 A 30 30 0 0 0 328 298 L 328 250" stroke="#d96b27" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="40" cy="328" r="5" fill="#d96b27" />
                  <circle cx="328" cy="250" r="5" fill="#d96b27" />
                </svg>
              </div>

              {/* Main White Card Content */}
              <div className="relative z-10 bg-white border-2 border-[#d96b27] rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between items-center text-center shadow-xl h-full min-h-[380px] sm:min-h-[400px] hover:-translate-y-2 transition-transform duration-300">

                <div className="w-full space-y-5 flex flex-col items-center">
                  {/* Center Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#d96b27] flex items-center justify-center shadow-sm shrink-0">
                    <Volume2 className="w-8 h-8 stroke-[2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-[#d96b27] tracking-tight">
                    CELPIP General LS
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed px-2">
                    Required for Canadian citizenship applications. Tests only Listening and Speaking. Total duration is approximately 1 hour 10 minutes. Our CELPIP training online covers both exam formats.
                  </p>
                </div>

                <div className="w-full flex items-center justify-between pt-4">
                  {/* Bottom Number 02 */}
                  <div className="font-black text-2xl sm:text-3xl text-[#d96b27] tracking-tight">
                    02
                  </div>

                  {/* Bottom Skill Badge */}
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#d96b27]">
                    2 Skills • ~1 Hr 10 Min
                  </div>
                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </motion.section>

      {/* SECTION 3: CELPIP Scoring System */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: CUBIC_EASE }}
        className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-[#9f3e58] text-xs font-black uppercase tracking-wider border border-rose-200">
              <Sparkles className="w-4 h-4" />
              Score Mapping & Targets
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
              CELPIP Scoring System — <span className="text-[#9f3e58]">Understanding Your Target Score</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              A clear understanding of CELPIP scoring is built into every stage of our best CELPIP Preparation online program so you always know exactly what you are working toward.
            </p>
          </motion.div>

          {/* 4 Interactive Scoring Tier Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
          >

            {/* TIER 1: 10-12 */}
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-[#862b44] via-[#9f3e58] to-[#6b1e32] rounded-[2.5rem] p-8 text-white relative shadow-2xl flex flex-col justify-between border-2 border-rose-300/40 group hover:-translate-y-2 transition-all duration-300">
              <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                <Trophy className="w-3 h-3 fill-slate-950" />
                MAX CRS
              </div>

              <div className="space-y-6 pt-4">
                <div className="space-y-1 text-left">
                  <span className="text-xs font-extrabold text-amber-200 uppercase tracking-widest">CELPIP SCORE</span>
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    10 – 12
                  </div>
                </div>

                <div className="w-full py-2 px-3 bg-white/10 rounded-xl border border-white/20 text-xs font-bold text-rose-100 flex items-center justify-between">
                  <span>CLB Level</span>
                  <span className="text-white font-extrabold">CLB 10–12</span>
                </div>

                <div className="text-left space-y-1">
                  <span className="text-[11px] font-bold text-rose-200 uppercase tracking-wider">IMMIGRATION USE</span>
                  <p className="text-sm font-bold text-white leading-snug">
                    Maximum Express Entry CRS points
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/15 flex items-center justify-between text-xs text-rose-200 font-medium">
                <span>Highest PR Rating</span>
                <Sparkles className="w-4 h-4 text-amber-300" />
              </div>
            </motion.div>

            {/* TIER 2: 9 */}
            <motion.div variants={fadeInUp} className="bg-white rounded-[2.5rem] p-8 text-slate-900 relative shadow-xl border-2 border-rose-200 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300">
              <div className="space-y-6">
                <div className="space-y-1 text-left">
                  <span className="text-xs font-extrabold text-[#9f3e58] uppercase tracking-widest">CELPIP SCORE</span>
                  <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    9
                  </div>
                </div>

                <div className="w-full py-2 px-3 bg-rose-50 rounded-xl border border-rose-100 text-xs font-bold text-slate-700 flex items-center justify-between">
                  <span>CLB Level</span>
                  <span className="text-[#9f3e58] font-extrabold">CLB 9</span>
                </div>

                <div className="text-left space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">IMMIGRATION USE</span>
                  <p className="text-sm font-bold text-slate-800 leading-snug">
                    Ideal score for Express Entry PR
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-[#9f3e58] font-bold">
                <span>Express Entry Standard</span>
                <Target className="w-4 h-4 text-[#9f3e58]" />
              </div>
            </motion.div>

            {/* TIER 3: 7-8 */}
            <motion.div variants={fadeInUp} className="bg-white rounded-[2.5rem] p-8 text-slate-900 relative shadow-xl border-2 border-slate-200 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300">
              <div className="space-y-6">
                <div className="space-y-1 text-left">
                  <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest">CELPIP SCORE</span>
                  <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    7 – 8
                  </div>
                </div>

                <div className="w-full py-2 px-3 bg-indigo-50 rounded-xl border border-indigo-100 text-xs font-bold text-slate-700 flex items-center justify-between">
                  <span>CLB Level</span>
                  <span className="text-indigo-600 font-extrabold">CLB 7–8</span>
                </div>

                <div className="text-left space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">IMMIGRATION USE</span>
                  <p className="text-sm font-bold text-slate-800 leading-snug">
                    Minimum PR eligibility for most streams
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-indigo-600 font-bold">
                <span>Base PR Threshold</span>
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
              </div>
            </motion.div>

            {/* TIER 4: 5-6 */}
            <motion.div variants={fadeInUp} className="bg-white rounded-[2.5rem] p-8 text-slate-900 relative shadow-xl border-2 border-slate-200 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300">
              <div className="space-y-6">
                <div className="space-y-1 text-left">
                  <span className="text-xs font-extrabold text-cyan-600 uppercase tracking-widest">CELPIP SCORE</span>
                  <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    5 – 6
                  </div>
                </div>

                <div className="w-full py-2 px-3 bg-cyan-50 rounded-xl border border-cyan-100 text-xs font-bold text-slate-700 flex items-center justify-between">
                  <span>CLB Level</span>
                  <span className="text-cyan-600 font-extrabold">CLB 5–6</span>
                </div>

                <div className="text-left space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">IMMIGRATION USE</span>
                  <p className="text-sm font-bold text-slate-800 leading-snug">
                    Some provincial pathways & citizenship
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-cyan-600 font-bold">
                <span>Citizenship Target</span>
                <Globe className="w-4 h-4 text-cyan-600" />
              </div>
            </motion.div>

          </motion.div>

        </div>
      </motion.section>

      {/* 5-Step Pathway Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: CUBIC_EASE }}
        className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#f7eaee]"
      >
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-[#9f3e58] text-xs font-black uppercase tracking-wider border border-rose-200">
              <Zap className="w-4 h-4" />
              Proven 5-Step Methodology
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
              Your Path to <span className="text-[#9f3e58]">10+ CLB</span> Score
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-medium">
              A structured 5-step preparation framework designed specifically for the CELPIP exam.
            </p>
          </motion.div>

          {/* 5 Overlapping Hexagon Tag Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-5 items-stretch max-w-sm md:max-w-none mx-auto"
          >
            {[
              {
                step: "01",
                title: "Diagnostic Assessment",
                desc: "Initial CLB evaluation across Listening, Reading, Writing, & Speaking skills.",
                icon: Zap,
                bgColor: "bg-[#e63946]",
                textColor: "text-[#e63946]",
                lightBg: "bg-rose-50"
              },
              {
                step: "02",
                title: "Personalised Study Plan",
                desc: "Customized prep strategy & timeline tailored to your target CLB score.",
                icon: Target,
                bgColor: "bg-[#f77f00]",
                textColor: "text-[#f77f00]",
                lightBg: "bg-orange-50"
              },
              {
                step: "03",
                title: "Section-by-Section Training",
                desc: "In-depth module practice with proven high-scoring CELPIP templates.",
                icon: BookOpen,
                bgColor: "bg-[#8e44ad]",
                textColor: "text-[#8e44ad]",
                lightBg: "bg-purple-50"
              },
              {
                step: "04",
                title: "Unlimited Mock Tests",
                desc: "Full-length timed computer mock exams matching Paragon test interface.",
                icon: Laptop,
                bgColor: "bg-[#2a9d8f]",
                textColor: "text-[#2a9d8f]",
                lightBg: "bg-teal-50"
              },
              {
                step: "05",
                title: "Final Review & Readiness",
                desc: "1-on-1 performance review & strategic scoring blueprint before exam day.",
                icon: Repeat,
                bgColor: "bg-[#3a86ff]",
                textColor: "text-[#3a86ff]",
                lightBg: "bg-blue-50"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative flex flex-col group w-full justify-between"
              >
                {/* Top Outer Colored Pill Header Box */}
                <div className={`${item.bgColor} text-white rounded-t-[2.5rem] rounded-b-[2rem] pt-7 pb-20 px-5 text-center shadow-xl shadow-slate-300/40 relative overflow-hidden flex flex-col items-center justify-start min-h-[220px]`}>

                  {/* Step Tag */}
                  <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 text-white px-3 py-1 rounded-full mb-3 border border-white/30 backdrop-blur-xs">
                    STEP {item.step}
                  </span>

                  {/* Summary Text inside colored area */}
                  <p className="text-xs font-semibold text-white/95 leading-relaxed max-w-[200px]">
                    {item.desc}
                  </p>

                </div>

                {/* Overlapping White Chamfered Hexagon Content Card */}
                <div className="-mt-14 relative z-10 mx-2 sm:mx-3 bg-white rounded-tl-[2.2rem] rounded-br-[2.2rem] rounded-tr-md rounded-bl-md p-6 shadow-2xl border border-slate-100 flex flex-col items-center text-center space-y-3 group-hover:-translate-y-2 transition-transform duration-300 flex-1 justify-center">

                  {/* Outline Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${item.lightBg} ${item.textColor} flex items-center justify-center shadow-sm shrink-0`}>
                    <item.icon className="w-8 h-8 stroke-[1.75]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                    {item.title}
                  </h3>

                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.section>

      {/* Feature Grid Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: CUBIC_EASE }}
        className="py-24 sm:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-60 bg-rose-50 rounded-[2rem] p-6 sm:p-8 flex flex-col justify-end">
                    <Laptop className="w-8 h-8 sm:w-10 sm:h-10 text-[#9f3e58] mb-3" />
                    <h4 className="font-bold text-lg sm:text-xl text-slate-900">Computer <br /> Familiarity</h4>
                  </div>
                  <div className="h-72 bg-slate-900 rounded-[2rem] overflow-hidden shadow-lg">
                    <img src="https://res.cloudinary.com/dkmr8o9p9/image/upload/v1786075583/celpip_srdty8.jpg" className="w-full h-full object-cover" alt="CELPIP" />
                  </div>
                </div>
                <div className="space-y-4 pt-10">
                  <div className="h-72 bg-[#9f3e58] rounded-[2rem] overflow-hidden shadow-lg">
                    <img src="https://res.cloudinary.com/dkmr8o9p9/image/upload/v1786075581/spoken_ecrras.jpg" className="w-full h-full object-cover" alt="CELPIP" />
                  </div>
                  <div className="h-60 bg-amber-300 rounded-[2rem] p-6 sm:p-8 flex flex-col justify-end text-slate-950">
                    <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-slate-950 mb-3" />
                    <h4 className="font-bold text-xl">Canada PR <br /> Approved</h4>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-[#9f3e58] text-xs font-black uppercase tracking-wider mb-4 border border-rose-200">
                <ShieldCheck className="w-4 h-4" />
                Why Choose Us
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
                <span className="inline-block sm:whitespace-nowrap">Why Choose Apex Edge</span>
                <br />
                <span className="text-[#9f3e58] inline-block sm:whitespace-nowrap">for CELPIP?</span>
              </h2>
              <div className="space-y-4">
                {[
                  "Live online interactive classes",
                  "Experienced and certified trainers",
                  "Comprehensive study material",
                  "Regular mock tests with detailed feedback",
                  "Flexible learning schedules",
                  "Proven techniques to maximise your band score",
                  "Personalised mentoring and score improvement strategies",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-[#9f3e58] shrink-0">
                      <CheckCircle className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <span className="text-base sm:text-lg font-bold text-slate-800">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <Link to="/enroll" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#9f3e58] text-white font-bold text-base hover:bg-[#862b44] transition-all shadow-lg hover:scale-105">
                  Enroll For Free Demo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* Floating CTA Banner */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: CUBIC_EASE }}
        className="py-16 sm:py-24 bg-[#f7eaee]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="bg-gradient-to-br from-[#6b1e32] via-[#9f3e58] to-[#862b44] text-[#fff] rounded-[2.5rem] sm:rounded-[3.5rem] p-8 sm:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 text-center lg:text-left shadow-2xl"
          >
            <div className="relative z-10 max-w-xl">
              <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-4 leading-tight">Secure Your 10+ CLB Score Today.</h2>
              <p className="text-sm sm:text-base text-rose-100 font-medium">
                The CELPIP test evaluates everyday English scenarios. Master speaking, listening, reading and writing with top-ranked trainers.
              </p>
            </div>
            <div className="relative z-10 shrink-0 w-full lg:w-auto">
              <Link to="/enroll" className="inline-block w-full lg:w-auto px-8 sm:px-10 py-4 bg-amber-300 text-slate-950 rounded-2xl font-black text-lg hover:bg-amber-200 transition-all shadow-xl hover:scale-105">
                Enroll Today
              </Link>
            </div>
            <div className="absolute -bottom-16 -right-16 w-[340px] h-[340px] border-[36px] border-white/5 rounded-full" />
          </motion.div>
        </div>
      </motion.section>

      <ApexEdgeFooter />
    </div>
  );
}

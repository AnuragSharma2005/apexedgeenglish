import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Binary, Sparkles, CircleArrowRight, CheckCircle, ArrowRight, BrainCircuit, Mic2, FileText, Headphones, Trophy, Award, SlidersHorizontal, TrendingUp, Zap, GraduationCap, BookOpenCheck, BarChart3, Languages, UserCheck, ShieldCheck } from "lucide-react";
import { Navbar } from "../Navbar";
import { Link } from "@tanstack/react-router";
import { ApexEdgeFooter } from "../ApexEdgeFooter";

const CUBIC_EASE = [0.16, 1, 0.3, 1] as const;

const pteHighlights = [
   {
      id: "01",
      title: "AI Scoring Mastery",
      desc: "Get trained by experts who understand the Pearson AI algorithm. We teach you exactly how to score high in oral fluency and pronunciation.",
      image: "https://res.cloudinary.com/dkmr8o9p9/image/upload/v1786075581/pte_dnhlne.jpg"
   },
   {
      id: "02",
      title: "Real-Exam Software",
      desc: "Practice on a platform that mirrors the actual PTE Academic interface. No surprises on the test day—just pure performance.",
      image: "https://res.cloudinary.com/dkmr8o9p9/image/upload/v1786075583/celpip_srdty8.jpg"
   },
   {
      id: "03",
      title: "Instant AI Feedback",
      desc: "Receive immediate scores and AI-driven analytics on your speaking and writing attempts to identify areas of improvement.",
      image: "https://res.cloudinary.com/dkmr8o9p9/image/upload/v1786075590/group_dw4fxd.jpg"
   },
   {
      id: "04",
      title: "Template Library",
      desc: "Access our exclusive 'Cheat Sheet' templates for Describe Image and Retell Lecture that have helped 1000+ students get 79+ scores.",
      image: "/teachers/priya.png"
   }
];

const algorithmModules = [
   { icon: <BrainCircuit />, title: "Pattern Recognition", desc: "Our trainers decode the AI's pattern-matching logic for oral fluency.", color: "bg-red-50 text-[#d90f40]" },
   { icon: <Mic2 />, title: "Acoustic Modeling", desc: "Learn how the AI perceives clarity, pitch, and pauses in the speaking module.", color: "bg-blue-50 text-blue-600" },
   { icon: <FileText />, title: "NLP Processing", desc: "Master the keyword-based scoring used in Summarize Written Text and Essays.", color: "bg-emerald-50 text-emerald-600" },
   { icon: <Binary />, title: "Algorithm Bypass", desc: "Use our templates that are pre-validated against the latest AI scoring updates.", color: "bg-orange-50 text-orange-600" }
];

const featurePills = [
   { icon: <BrainCircuit className="w-5 h-5" />, label: "AI-Powered Scoring" },
   { icon: <Target className="w-5 h-5" />, label: "79+ Guaranteed" },
   { icon: <Mic2 className="w-5 h-5" />, label: "Speaking Mastery" },
   { icon: <Trophy className="w-5 h-5" />, label: "1000+ Success Stories" },
];

export function PTEPage() {
   const [activeTab, setActiveTab] = useState(0);
   const [activePillIndex, setActivePillIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setActivePillIndex((prev) => (prev + 1) % featurePills.length);
      }, 2500);
      return () => clearInterval(interval);
   }, []);

   return (
      <div className="min-h-screen bg-white overflow-x-hidden">
         <Navbar />

         {/* Hero Section — Inspired by Split Layout */}
         <motion.section
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.85, ease: CUBIC_EASE }}
            className="relative w-full pt-24 sm:pt-28 lg:pt-32 overflow-hidden"
         >
            {/* Top Content Row: Bold Heading Left + Description Right */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-10 sm:pb-14">
               <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-16 items-start">
                  {/* Left — Label + Big Heading */}
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.7 }}
                  >
                     <p className="text-sm sm:text-base font-bold uppercase tracking-[0.25em] text-[#d90f40] mb-4 sm:mb-6">
                        APEX EDGE ENGLISH
                     </p>
                     <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black text-[#1a1a1a] leading-[0.92] tracking-tight">
                        MASTER
                        <br />
                        <span className="text-[#1a1a1a]">PTE</span>
                        <br />
                        <span className="text-[#1a1a1a]">ACADEMIC</span>
                     </h1>
                  </motion.div>

                  {/* Right — Description + CTA */}
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.7, delay: 0.15 }}
                     className="flex flex-col justify-end h-full pt-4 lg:pt-16"
                  >
                     <p className="text-base sm:text-lg text-[#555] leading-relaxed mb-8 max-w-md font-medium">
                        Tiny adjustments in your PTE strategy can create surprising improvement. Most students don't notice what the AI algorithm penalizes. We'll help you decode it and score 79+ fast.
                     </p>
                     <Link
                        to="/enroll"
                        className="inline-flex items-center gap-3 self-start px-7 py-4 rounded-xl bg-white border-2 border-[#1a1a1a] text-[#1a1a1a] font-bold text-base hover:bg-[#1a1a1a] hover:text-white transition-all group"
                     >
                        Book a Free Call
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#1a1a1a] text-white group-hover:bg-white group-hover:text-[#1a1a1a] transition-all">
                           <ArrowRight className="w-4 h-4" />
                        </span>
                     </Link>
                  </motion.div>
               </div>
            </div>

            {/* Hero Image with Split Pinkish/White Background */}
            <div className="relative">
               {/* Split Background — Left Pinkish, Right White */}
               <div className="absolute inset-0 flex">
                  <div className="w-1/2 bg-gradient-to-br from-[#fce4ec] via-[#f8bbd0] to-[#f48fb1]" />
                  <div className="w-1/2 bg-white" />
               </div>

               {/* Decorative Geometric Shapes */}
               <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {/* Top-right rotated square */}
                  <div className="absolute -top-12 right-[42%] w-32 h-32 sm:w-48 sm:h-48 bg-[#d90f40]/8 rotate-45 rounded-xl" />
                  {/* Bottom-left decorative element */}
                  <div className="absolute bottom-10 left-[8%] w-20 h-20 sm:w-28 sm:h-28 bg-[#d90f40]/6 rotate-12 rounded-lg" />
                  {/* Mid-right accent */}
                  <div className="absolute top-1/3 right-[15%] w-16 h-16 sm:w-24 sm:h-24 border-4 border-[#d90f40]/10 rotate-45 rounded-lg" />
                  {/* Small diamond */}
                  <div className="absolute top-[20%] left-[30%] w-8 h-8 bg-[#d90f40]/10 rotate-45" />
               </div>

               {/* Image Container */}
               <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
                  <motion.div
                     initial={{ opacity: 0, y: 40, scale: 0.97 }}
                     animate={{ opacity: 1, y: 0, scale: 1 }}
                     transition={{ duration: 0.9, delay: 0.3 }}
                     className="relative w-full max-w-5xl mx-auto"
                  >
                     {/* Main Image Card */}
                     <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)] border-4 sm:border-6 border-white">
                        <img
                           src="https://res.cloudinary.com/dkmr8o9p9/image/upload/v1786076243/pte-hero-girl_ire4r4.jpg"
                           alt="PTE Academic Student at Apex Edge English"
                           className="w-full h-[320px] sm:h-[450px] lg:h-[550px] object-cover object-top"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                        {/* Floating Stats Cards */}
                        <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex justify-between items-end">
                           <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.8 }}
                              className="p-4 sm:p-5 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl"
                           >
                              <p className="text-[10px] sm:text-xs font-black text-gray-400 uppercase tracking-widest mb-1">AI Accuracy</p>
                              <p className="text-2xl sm:text-3xl font-black text-[#d90f40]">99.8%</p>
                           </motion.div>
                           <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.9 }}
                              className="p-4 sm:p-5 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl"
                           >
                              <p className="text-[10px] sm:text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Success Rate</p>
                              <p className="text-2xl sm:text-3xl font-black text-[#1a1a1a]">97%</p>
                           </motion.div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                           initial={{ opacity: 0, scale: 0 }}
                           animate={{ opacity: 1, scale: 1 }}
                           transition={{ duration: 0.5, delay: 1 }}
                           className="absolute top-6 right-6 sm:top-8 sm:right-8 w-14 h-14 sm:w-18 sm:h-18 bg-[#d90f40] rounded-full flex items-center justify-center text-white shadow-xl shadow-[#d90f40]/30"
                        >
                           <Sparkles className="w-7 h-7 sm:w-8 sm:h-8" />
                        </motion.div>
                     </div>
                  </motion.div>
               </div>
            </div>

            {/* Quick Feature Pills below hero */}
            <div className="bg-white py-8 sm:py-14">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                  {/* Desktop View (All 4 Pills in a Row) */}
                  <div className="hidden sm:flex flex-wrap justify-center gap-4 sm:gap-6">
                     {featurePills.map((item, i) => (
                        <motion.div
                           key={i}
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
                           className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#fce4ec] text-[#d90f40] font-bold text-sm border border-[#f8bbd0] hover:bg-[#d90f40] hover:text-white hover:border-[#d90f40] transition-all cursor-default"
                        >
                           {item.icon}
                           {item.label}
                        </motion.div>
                     ))}
                  </div>

                  {/* Mobile View (Auto-slider changing 1 by 1 centered in exact same spot) */}
                  <div className="sm:hidden flex justify-center items-center h-14 relative w-full overflow-hidden">
                     <AnimatePresence mode="wait">
                        <motion.div
                           key={activePillIndex}
                           initial={{ opacity: 0, y: 12, scale: 0.95 }}
                           animate={{ opacity: 1, y: 0, scale: 1 }}
                           exit={{ opacity: 0, y: -12, scale: 0.95 }}
                           transition={{ duration: 0.4 }}
                           className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-[#fce4ec] text-[#d90f40] font-bold text-sm border border-[#f8bbd0] shadow-sm text-center"
                        >
                           {featurePills[activePillIndex].icon}
                           <span>{featurePills[activePillIndex].label}</span>
                        </motion.div>
                     </AnimatePresence>
                  </div>
               </div>
            </div>
         </motion.section>

         {/* Winning Combo Section - Image 2 Style Layout */}
         <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: CUBIC_EASE }}
            className="py-20 sm:py-28 bg-[#f8f9fa] relative overflow-hidden"
         >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
               {/* Section Heading */}
               <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-20 px-1 sm:px-0">
                  <h2 className="text-[1.2rem] xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] leading-snug sm:leading-tight tracking-tight">
                     What makes
                     <br />
                     <span className="text-[#d90f40]">Apex Edge English</span> the ultimate choice for PTE preparation?
                  </h2>
               </div>

               {/* Main Grid Card Container */}
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-14 shadow-xl border border-gray-100">
                  {/* Left Column - Large Image Feature */}
                  <div className="lg:col-span-5 relative">
                     <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-4 border-[#fce4ec]">
                        <img
                           src="https://res.cloudinary.com/dkmr8o9p9/image/upload/v1786075581/pte_dnhlne.jpg"
                           alt="PTE Academic Student Strategy session"
                           className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover object-center"
                        />
                        {/* Overlay Tag */}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-md flex items-center gap-2">
                           <Award className="w-4 h-4 text-[#d90f40]" />
                           <span className="text-xs font-bold text-gray-800">Proven PTE Formula</span>
                        </div>
                     </div>
                  </div>

                  {/* Right Column - 3 Key Strategic Drivers */}
                  <div className="lg:col-span-7 space-y-6 sm:space-y-8 pl-0 lg:pl-4">
                     {[
                        {
                           num: "01",
                           title: "Expert Mentorship",
                           desc: "Individualized attention from PTE certified trainers with a proven track record of helping thousands achieve 79+ in all modules."
                        },
                        {
                           num: "02",
                           title: "Real AI Scoring Engine",
                           desc: "Practice on software calibrated to mirror Pearson's exact algorithm for real-time speech and writing feedback."
                        },
                        {
                           num: "03",
                           title: "Tailored Study Plan",
                           desc: "Personalized study schedules focusing strictly on your weak areas to maximize score improvement in minimal time."
                        }
                     ].map((item, i) => (
                        <motion.div
                           key={i}
                           initial={{ opacity: 0, x: 30 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.5, delay: i * 0.15 }}
                           className="flex gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl hover:bg-[#fce4ec]/40 transition-colors group"
                        >
                           <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#d90f40] text-white font-black text-lg sm:text-xl flex items-center justify-center shrink-0 shadow-lg shadow-[#d90f40]/20 group-hover:scale-105 transition-transform">
                              {item.num}
                           </div>
                           <div>
                              <h3 className="text-lg sm:text-xl font-extrabold text-[#1a1a1a] mb-1.5 sm:mb-2">{item.title}</h3>
                              <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </div>
            </div>
         </motion.section>

         {/* PTE Core Test Format Section - Design 1 (Infographic Cards) Style */}
         <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: CUBIC_EASE }}
            className="py-20 sm:py-28 bg-[#fce4ec]/70 relative overflow-hidden"
         >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
               {/* Header Block */}
               <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
                  {/* Color Dots Indicator */}
                  <div className="flex items-center justify-center gap-1.5 mb-8">
                     <span className="w-3 h-3 rounded-sm bg-[#ff5722]" />
                     <span className="w-3 h-3 rounded-sm bg-[#f5a623]" />
                     <span className="w-3 h-3 rounded-sm bg-[#00b4d8]" />
                     <span className="w-3 h-3 rounded-sm bg-[#2a4365]" />
                  </div>

                  <h2 className="text-3xl sm:text-5xl font-black text-[#1a1a1a] mb-5 tracking-tight">
                     PTE Core Test Format
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto">
                     The PTE Core test format is a newly launched exam module in March 2024. Here's a comprehensive format of the PTE core examination:
                  </p>
               </div>

               {/* 4 Infographic Cards Layout (Design 1 Replica) */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-6 lg:gap-x-8 pt-8">
                  {/* Card 1: Speaking */}
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.1 }}
                     whileHover={{ y: -8 }}
                     className="relative bg-white rounded-[1.8rem] sm:rounded-[2.2rem] shadow-xl shadow-gray-200/70 border border-gray-100 flex flex-col justify-between pt-20 sm:pt-20 min-h-[350px] md:min-h-0 w-[85%] max-w-[280px] md:w-full md:max-w-none mx-auto transition-all duration-300"
                  >
                     {/* Top Floating Badge with Colorful Outer Ring & Shadow */}
                     <div className="absolute -top-10 sm:-top-11 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-white border-[6px] border-[#ff5722] flex items-center justify-center shadow-[0_12px_24px_-6px_rgba(255,87,34,0.35)] z-10">
                        <Mic2 className="w-8 h-8 sm:w-9 sm:h-9 text-gray-800 stroke-[1.75]" />
                     </div>

                     {/* Card Body */}
                     <div className="px-5 sm:px-7 pb-8 text-center flex-1 flex flex-col items-center justify-center">
                        <h3 className="text-lg sm:text-xl font-black uppercase tracking-wider text-[#ff5722] mb-4">
                           SPEAKING
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed text-center">
                           In this test round, the candidate will need to give a formal introduction, read passages loudly, and describe images within a time limit of 54 to 67 minutes.
                        </p>
                     </div>

                     {/* Bottom Color Accent Bar */}
                     <div className="w-full h-3.5 sm:h-4 bg-[#ff5722] rounded-b-[1.8rem] sm:rounded-b-[2.2rem]" />
                  </motion.div>

                  {/* Card 2: Reading */}
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                     whileHover={{ y: -8 }}
                     className="relative bg-white rounded-[1.8rem] sm:rounded-[2.2rem] shadow-xl shadow-gray-200/70 border border-gray-100 flex flex-col justify-between pt-20 sm:pt-20 min-h-[350px] md:min-h-0 w-[85%] max-w-[280px] md:w-full md:max-w-none mx-auto transition-all duration-300"
                  >
                     {/* Top Floating Badge */}
                     <div className="absolute -top-10 sm:-top-11 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-white border-[6px] border-[#f5a623] flex items-center justify-center shadow-[0_12px_24px_-6px_rgba(245,166,35,0.35)] z-10">
                        <BookOpenCheck className="w-8 h-8 sm:w-9 sm:h-9 text-gray-800 stroke-[1.75]" />
                     </div>

                     {/* Card Body */}
                     <div className="px-5 sm:px-7 pb-8 text-center flex-1 flex flex-col items-center justify-center">
                        <h3 className="text-lg sm:text-xl font-black uppercase tracking-wider text-[#f5a623] mb-4">
                           READING
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed text-center">
                           In the PTE core reading test, you will need to read paragraphs and passages as provided within 29 to 30 minutes.
                        </p>
                     </div>

                     {/* Bottom Color Accent Bar */}
                     <div className="w-full h-3.5 sm:h-4 bg-[#f5a623] rounded-b-[1.8rem] sm:rounded-b-[2.2rem]" />
                  </motion.div>

                  {/* Card 3: Listening */}
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.3 }}
                     whileHover={{ y: -8 }}
                     className="relative bg-white rounded-[1.8rem] sm:rounded-[2.2rem] shadow-xl shadow-gray-200/70 border border-gray-100 flex flex-col justify-between pt-20 sm:pt-20 min-h-[350px] md:min-h-0 w-[85%] max-w-[280px] md:w-full md:max-w-none mx-auto transition-all duration-300"
                  >
                     {/* Top Floating Badge */}
                     <div className="absolute -top-10 sm:-top-11 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-white border-[6px] border-[#00b4d8] flex items-center justify-center shadow-[0_12px_24px_-6px_rgba(0,180,216,0.35)] z-10">
                        <Headphones className="w-8 h-8 sm:w-9 sm:h-9 text-gray-800 stroke-[1.75]" />
                     </div>

                     {/* Card Body */}
                     <div className="px-5 sm:px-7 pb-8 text-center flex-1 flex flex-col items-center justify-center">
                        <h3 className="text-lg sm:text-xl font-black uppercase tracking-wider text-[#00b4d8] mb-4">
                           LISTENING
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed text-center">
                           In this test round, the candidate will required to answer audio-based questions, summarize spoken tests, and write dictations within 30 to 40 minutes.
                        </p>
                     </div>

                     {/* Bottom Color Accent Bar */}
                     <div className="w-full h-3.5 sm:h-4 bg-[#00b4d8] rounded-b-[1.8rem] sm:rounded-b-[2.2rem]" />
                  </motion.div>

                  {/* Card 4: Writing */}
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.4 }}
                     whileHover={{ y: -8 }}
                     className="relative bg-white rounded-[1.8rem] sm:rounded-[2.2rem] shadow-xl shadow-gray-200/70 border border-gray-100 flex flex-col justify-between pt-20 sm:pt-20 min-h-[350px] md:min-h-0 w-[85%] max-w-[280px] md:w-full md:max-w-none mx-auto transition-all duration-300"
                  >
                     {/* Top Floating Badge */}
                     <div className="absolute -top-10 sm:-top-11 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-white border-[6px] border-[#2a4365] flex items-center justify-center shadow-[0_12px_24px_-6px_rgba(42,67,101,0.35)] z-10">
                        <FileText className="w-8 h-8 sm:w-9 sm:h-9 text-gray-800 stroke-[1.75]" />
                     </div>

                     {/* Card Body */}
                     <div className="px-5 sm:px-7 pb-8 text-center flex-1 flex flex-col items-center justify-center">
                        <h3 className="text-lg sm:text-xl font-black uppercase tracking-wider text-[#2a4365] mb-4">
                           WRITING
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed text-center">
                           In this test round, the candidate will be required to write short essays, summaries, and multiple-choice questions within a time limit of 54 to 67 minutes.
                        </p>
                     </div>

                     {/* Bottom Color Accent Bar */}
                     <div className="w-full h-3.5 sm:h-4 bg-[#2a4365] rounded-b-[1.8rem] sm:rounded-b-[2.2rem]" />
                  </motion.div>
               </div>
            </div>
         </motion.section>

         {/* PTE Band Score Chart Section */}
         <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: CUBIC_EASE }}
            className="py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50 to-[#fce4ec]/30 relative overflow-hidden"
         >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
               {/* Header */}
               <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fce4ec] text-[#d90f40] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-4 border border-[#f8bbd0]">
                     <BarChart3 className="w-4 h-4" />
                     Official Pearson Scoring Standards
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-black text-[#1a1a1a] mb-4 tracking-tight">
                     <span className="text-[#d90f40]">PTE</span> Band Score Chart
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                     The score band chart for the PTE examination is as follows:
                  </p>
               </div>

               {/* Scorecard Container - Inspired by Image 1 & Image 2 */}
               <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl shadow-gray-200/80 border-2 border-red-100 p-4 sm:p-8 lg:p-10">
                  {/* Two Main Column Banners */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-6">
                     <div className="bg-[#fcf8f8] border-2 border-[#d90f40]/20 rounded-2xl py-3.5 sm:py-4 px-4 sm:px-6 text-center shadow-sm">
                        <h3 className="text-base sm:text-2xl font-black text-[#d90f40] tracking-wide flex items-center justify-center gap-2">
                           <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                           PTE Score
                        </h3>
                     </div>
                     <div className="bg-[#fcf8f8] border-2 border-[#d90f40]/20 rounded-2xl py-3.5 sm:py-4 px-4 sm:px-6 text-center shadow-sm">
                        <h3 className="text-base sm:text-2xl font-black text-[#d90f40] tracking-wide flex items-center justify-center gap-2">
                           <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                           Proficiency Level
                        </h3>
                     </div>
                  </div>

                  {/* Rows Grid */}
                  <div className="space-y-3">
                     {[
                        { score: "86 - 90", level: "Expert", pct: 100, badgeBg: "bg-emerald-500 text-white", iconColor: "text-emerald-500" },
                        { score: "83 - 85", level: "Very Good", pct: 94, badgeBg: "bg-teal-500 text-white", iconColor: "text-teal-500" },
                        { score: "78 - 82", level: "Very Good", pct: 90, badgeBg: "bg-teal-500 text-white", iconColor: "text-teal-500" },
                        { score: "73 - 77", level: "Good", pct: 84, badgeBg: "bg-blue-500 text-white", iconColor: "text-blue-500" },
                        { score: "64 - 72", level: "Good", pct: 78, badgeBg: "bg-blue-500 text-white", iconColor: "text-blue-500" },
                        { score: "58 - 63", level: "Competent", pct: 68, badgeBg: "bg-indigo-500 text-white", iconColor: "text-indigo-500" },
                        { score: "50 - 57", level: "Competent", pct: 62, badgeBg: "bg-indigo-500 text-white", iconColor: "text-indigo-500" },
                        { score: "42 - 49", level: "Modest", pct: 52, badgeBg: "bg-amber-500 text-white", iconColor: "text-amber-500" },
                        { score: "35 - 41", level: "Modest", pct: 44, badgeBg: "bg-amber-500 text-white", iconColor: "text-amber-500" },
                        { score: "31 - 34", level: "Limited", pct: 36, badgeBg: "bg-rose-500 text-white", iconColor: "text-rose-500" },
                        { score: "0 - 30", level: "Extremely Limited", pct: 25, badgeBg: "bg-red-500 text-white", iconColor: "text-red-500" },
                     ].map((item, idx) => (
                        <motion.div
                           key={idx}
                           initial={{ opacity: 0, y: 15 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.3, delay: idx * 0.03 }}
                           whileHover={{ scale: 1.01, backgroundColor: "#fdf2f4" }}
                           className="grid grid-cols-2 gap-3 sm:gap-4 items-center p-3 sm:p-4 rounded-xl border border-gray-100 bg-white hover:border-[#d90f40]/30 transition-all duration-200 shadow-sm"
                        >
                           {/* Left Column: Score */}
                           <div className="flex items-center gap-2 sm:gap-3 justify-center px-2 py-1">
                              <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center bg-gray-50 border border-gray-200 shrink-0 ${item.iconColor}`}>
                                 <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              </div>
                              <span className="text-sm sm:text-lg font-black text-gray-800 tracking-tight">
                                 {item.score}
                              </span>
                              {/* Visual Progress Bar (Hidden on mobile) */}
                              <div className="w-20 sm:w-28 bg-gray-100 rounded-full h-2 overflow-hidden hidden lg:block ml-2">
                                 <div
                                    className={`h-full rounded-full ${item.badgeBg.split(" ")[0]}`}
                                    style={{ width: `${item.pct}%` }}
                                 />
                              </div>
                           </div>

                           {/* Right Column: Proficiency Level */}
                           <div className="flex items-center justify-center px-2 py-1">
                              <span className={`px-3 sm:px-5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-sm font-extrabold tracking-wide uppercase shadow-sm ${item.badgeBg}`}>
                                 {item.level}
                              </span>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </div>
            </div>
         </motion.section>

         {/* Eligibility Criteria for PTE Test Section - Staggered Colorful Oval Cards Layout */}
         <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: CUBIC_EASE }}
            className="py-16 sm:py-28 bg-[#f8fafc] relative overflow-hidden"
         >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
               <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 relative">

                  {/* Left Circle Hub with Red Crescent Ring (Positioned ON TOP with higher Z-Index) */}
                  <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5 }}
                     className="w-full lg:w-[440px] flex items-center justify-center shrink-0 relative z-20"
                  >
                     {/* Red Crescent Accent Backing */}
                     <div className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] rounded-full bg-[#ff2a4b] z-0" />

                     {/* Main White Circle Hub (Covers the left edge of right oval cards) */}
                     <div className="bg-white rounded-full p-6 sm:p-10 lg:p-12 shadow-2xl border-4 border-white text-center flex flex-col justify-center items-center w-[270px] h-[270px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px] relative z-10 shrink-0">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#ff2a4b] text-[10px] sm:text-xs font-black uppercase tracking-wider mb-2 sm:mb-3 border border-red-100">
                           <ShieldCheck className="w-3.5 h-3.5" />
                           Official Guide
                        </div>
                        <h2 className="text-xl sm:text-3xl font-black text-[#1a1a1a] mb-2 tracking-tight leading-tight uppercase">
                           Eligibility Criteria <br /> For <span className="text-[#ff2a4b]">PTE</span> Test
                        </h2>
                        <p className="text-[11px] sm:text-xs text-gray-500 font-medium leading-relaxed max-w-[220px] mx-auto">
                           The eligibility criteria for candidates to appear for the PTE examination are as follows:
                        </p>
                     </div>
                  </motion.div>

                  {/* Right 4 Colorful Oval Cards (Staggered on Desktop, Tucked under Circle) */}
                  <div className="w-full flex-1 flex flex-col gap-4 sm:gap-5 relative z-10 lg:-ml-28">
                     {[
                        {
                           step: "STEP 01",
                           title: "AGE",
                           desc: "To appear for the exam, the candidate must be at least 16 years old. Also, if the candidate is not an adult, they must have a written consent from the guardian.",
                           bg: "bg-[#ff2a4b]",
                           icon: UserCheck,
                           desktopOffset: "lg:translate-x-12"
                        },
                        {
                           step: "STEP 02",
                           title: "EDUCATION",
                           desc: "To sit for the PTE exam, a candidate must have completed secondary education from a recognized board or institute.",
                           bg: "bg-[#ff8c00]",
                           icon: GraduationCap,
                           desktopOffset: "lg:translate-x-24"
                        },
                        {
                           step: "STEP 03",
                           title: "IDENTIFICATION",
                           desc: "A candidate must have a valid identification card like a passport, a national ID, or a driving license to sit for this examination.",
                           bg: "bg-[#9c27b0]",
                           icon: ShieldCheck,
                           desktopOffset: "lg:translate-x-24"
                        },
                        {
                           step: "STEP 04",
                           title: "LANGUAGE PROFICIENCY",
                           desc: "If you want to appear for this test, you should have a basic proficiency in the English language.",
                           bg: "bg-[#00bfa5]",
                           icon: Languages,
                           desktopOffset: "lg:translate-x-4"
                        },
                     ].map((item, idx) => {
                        const Icon = item.icon;
                        return (
                           <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: 30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: idx * 0.08 }}
                              whileHover={{ scale: 1.01, x: 4 }}
                              className={`relative flex items-center group w-full ${item.desktopOffset}`}
                           >
                              {/* Left Solid Colored Circle Icon Badge */}
                              <div className={`w-14 h-14 sm:w-20 sm:h-20 rounded-full ${item.bg} text-white flex items-center justify-center shrink-0 shadow-lg border-4 border-white relative z-20 -mr-4 sm:-mr-6 group-hover:scale-105 transition-transform`}>
                                 <Icon className="w-7 h-7 sm:w-9 sm:h-9 text-white stroke-[2]" />
                              </div>

                              {/* Attached Right Horizontal Pill Bar */}
                              <div className={`${item.bg} text-white rounded-r-[2.5rem] rounded-l-full py-4 sm:py-5 pl-7 sm:pl-10 pr-6 sm:pr-8 flex-1 shadow-lg shadow-gray-200/60 relative z-10 transition-transform group-hover:translate-x-1`}>
                                 <h3 className="text-sm sm:text-xl font-black text-white uppercase mb-1 tracking-wide">
                                    {item.title}
                                 </h3>
                                 <p className="text-xs sm:text-sm text-white/95 font-medium leading-relaxed">
                                    {item.desc}
                                 </p>
                              </div>
                           </motion.div>
                        );
                     })}
                  </div>
               </div>
            </div>
         </motion.section>

         {/* Final CTA */}
         <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: CUBIC_EASE }}
            className="py-16 px-4 sm:px-6 lg:px-12 bg-white"
         >
            <div className="max-w-7xl mx-auto">
               <div className="bg-[#d90f40] text-white rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-16 text-center relative overflow-hidden">

                  <div className="relative z-10">
                     <h2 className="text-2xl sm:text-5xl font-black mb-6 leading-tight">
                        Your Success is Our <br />
                        <span className="opacity-60 italic">Next Project.</span>
                     </h2>

                     <p className="text-base sm:text-xl font-medium mb-8 max-w-xl mx-auto opacity-90">
                        Join the most innovative PTE coaching program in India.
                        Limited slots available for the next batch.
                     </p>

                     <Link
                        to="/enroll"
                        className="px-8 py-3 sm:px-10 sm:py-4 bg-white text-[#d90f40] rounded-2xl font-black text-base sm:text-lg hover:scale-105 transition-transform inline-flex items-center gap-3"
                     >
                        Join the Elite Batch
                        <CircleArrowRight className="w-5 h-5" />
                     </Link>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-[0.05] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-black opacity-[0.05] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
               </div>
            </div>
         </motion.section>

         <ApexEdgeFooter />
      </div>
   );
}


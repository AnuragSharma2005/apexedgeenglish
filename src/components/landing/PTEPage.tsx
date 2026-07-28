import { useState } from "react";
import { motion } from "framer-motion";
import { Target, Binary, Sparkles, CircleArrowRight, CheckCircle, ArrowRight, BrainCircuit, Mic2, FileText, Headphones, Trophy, Award, SlidersHorizontal, TrendingUp, Zap, GraduationCap, BookOpenCheck } from "lucide-react";
import { Navbar } from "../Navbar";
import { Link } from "@tanstack/react-router";
import { ApexEdgeFooter } from "../ApexEdgeFooter";

const pteHighlights = [
   {
      id: "01",
      title: "AI Scoring Mastery",
      desc: "Get trained by experts who understand the Pearson AI algorithm. We teach you exactly how to score high in oral fluency and pronunciation.",
      image: "/students/pte.png"
   },
   {
      id: "02",
      title: "Real-Exam Software",
      desc: "Practice on a platform that mirrors the actual PTE Academic interface. No surprises on the test day—just pure performance.",
      image: "/students/celpip.png"
   },
   {
      id: "03",
      title: "Instant AI Feedback",
      desc: "Receive immediate scores and AI-driven analytics on your speaking and writing attempts to identify areas of improvement.",
      image: "/students/group.png"
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

export function PTEPage() {
   const [activeTab, setActiveTab] = useState(0);

   return (
      <div className="min-h-screen bg-white overflow-x-hidden">
         <Navbar />

         {/* Hero Section — Inspired by Split Layout */}
         <section className="relative w-full pt-24 sm:pt-28 lg:pt-32 overflow-hidden">
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
                        to="/book-session"
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
                           src="/images/pte-hero-girl.png"
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
            <div className="bg-white py-10 sm:py-14">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                  <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                     {[
                        { icon: <BrainCircuit className="w-5 h-5" />, label: "AI-Powered Scoring" },
                        { icon: <Target className="w-5 h-5" />, label: "79+ Guaranteed" },
                        { icon: <Mic2 className="w-5 h-5" />, label: "Speaking Mastery" },
                        { icon: <Trophy className="w-5 h-5" />, label: "1000+ Success Stories" },
                     ].map((item, i) => (
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
               </div>
            </div>
         </section>

         {/* Winning Combo Section - Image 2 Style Layout */}
         <section className="py-20 sm:py-28 bg-[#f8f9fa] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
               {/* Section Heading */}
               <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-20 px-1 sm:px-0">
                  <h2 className="text-[1.2rem] xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] leading-snug sm:leading-tight tracking-tight">
                     What makes
                     <br />
                     <span className="text-[#d90f40]">Apex Edge English and PTE Courses</span>
                     <br />
                     a winning combo?
                  </h2>
               </div>

               {/* 3x2 Grid Cards (Image 2 style layout) */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch pt-6">
                  {/* Card 1: Global Expertise */}
                  <motion.div
                     whileHover={{ y: -6 }}
                     className="bg-white p-7 sm:p-9 rounded-[2rem] shadow-sm border border-gray-100/80 flex flex-col justify-between transition-all"
                  >
                     <div>
                        <div className="flex items-center gap-4 mb-5">
                           <div className="w-12 h-12 rounded-2xl bg-[#fce4ec] text-[#d90f40] flex items-center justify-center shrink-0">
                              <Award className="w-6 h-6" />
                           </div>
                           <h3 className="text-xl font-extrabold text-[#1a1a1a]">Global Expertise</h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                           Guiding PTE aspirants to success with years of international coaching experience and proven exam strategies.
                        </p>
                     </div>
                  </motion.div>

                  {/* Card 2: Personalised Learning (Elevated & Taller Highlighted Card on Desktop) */}
                  <motion.div
                     whileHover={{ y: -10 }}
                     className="bg-[#d90f40] text-white p-7 sm:p-9 lg:py-12 lg:px-9 lg:-translate-y-6 rounded-[2rem] shadow-2xl shadow-[#d90f40]/30 flex flex-col justify-between transition-all relative z-10"
                  >
                     <div>
                        <div className="flex items-center gap-4 mb-5">
                           <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center shrink-0">
                              <SlidersHorizontal className="w-6 h-6" />
                           </div>
                           <h3 className="text-xl font-extrabold text-white">Personalised Learning</h3>
                        </div>
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed font-medium">
                           Tailored study plans designed to target individual strengths, overcome weaknesses, and meet your target score.
                        </p>
                     </div>
                  </motion.div>

                  {/* Card 3: Real-Time Progress Tracking */}
                  <motion.div
                     whileHover={{ y: -6 }}
                     className="bg-white p-7 sm:p-9 rounded-[2rem] shadow-sm border border-gray-100/80 flex flex-col justify-between transition-all"
                  >
                     <div>
                        <div className="flex items-center gap-4 mb-5">
                           <div className="w-12 h-12 rounded-2xl bg-[#fce4ec] text-[#d90f40] flex items-center justify-center shrink-0">
                              <TrendingUp className="w-6 h-6" />
                           </div>
                           <h3 className="text-xl font-extrabold text-[#1a1a1a]">Real-Time Progress Tracking</h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                           Monitor your preparation with cutting-edge AI scoring tools for instant, objective performance feedback.
                        </p>
                     </div>
                  </motion.div>

                  {/* Card 4: Proven Score Boosting Strategies */}
                  <motion.div
                     whileHover={{ y: -6 }}
                     className="bg-white p-7 sm:p-9 rounded-[2rem] shadow-sm border border-gray-100/80 flex flex-col justify-between transition-all"
                  >
                     <div>
                        <div className="flex items-center gap-4 mb-5">
                           <div className="w-12 h-12 rounded-2xl bg-[#fce4ec] text-[#d90f40] flex items-center justify-center shrink-0">
                              <Zap className="w-6 h-6" />
                           </div>
                           <h3 className="text-xl font-extrabold text-[#1a1a1a]">Proven Score Boosting Strategies</h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                           Focused techniques and exclusive template blueprints to significantly improve your PTE section scores.
                        </p>
                     </div>
                  </motion.div>

                  {/* Card 5: Certified PTE Trainers */}
                  <motion.div
                     whileHover={{ y: -6 }}
                     className="bg-white p-7 sm:p-9 rounded-[2rem] shadow-sm border border-gray-100/80 flex flex-col justify-between transition-all"
                  >
                     <div>
                        <div className="flex items-center gap-4 mb-5">
                           <div className="w-12 h-12 rounded-2xl bg-[#fce4ec] text-[#d90f40] flex items-center justify-center shrink-0">
                              <GraduationCap className="w-6 h-6" />
                           </div>
                           <h3 className="text-xl font-extrabold text-[#1a1a1a]">Certified PTE Trainers</h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                           Learn from industry-certified experts who specialise in Pearson AI scoring algorithms and exam prep.
                        </p>
                     </div>
                  </motion.div>

                  {/* Card 6: Comprehensive Practice Resources */}
                  <motion.div
                     whileHover={{ y: -6 }}
                     className="bg-white p-7 sm:p-9 rounded-[2rem] shadow-sm border border-gray-100/80 flex flex-col justify-between transition-all"
                  >
                     <div>
                        <div className="flex items-center gap-4 mb-5">
                           <div className="w-12 h-12 rounded-2xl bg-[#fce4ec] text-[#d90f40] flex items-center justify-center shrink-0">
                              <BookOpenCheck className="w-6 h-6" />
                           </div>
                           <h3 className="text-xl font-extrabold text-[#1a1a1a]">Comprehensive Practice Resources</h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                           Access a vast library of real-exam replica practice tests and study materials designed for PTE success.
                        </p>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Algorithm Decoding Section - The "Brain" of PTE */}
         <section className="py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
               <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
                  <div className="lg:w-1/2">
                     <h2 className="text-5xl sm:text-7xl font-black text-[#1a1a1a] leading-tight mb-8">
                        The AI <br /> <span className="text-[#d90f40]">Algorithm,</span> <br /> Decoded.
                     </h2>
                     <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-xl">
                        PTE is not an English test—it's a machine processing test.
                        We don't teach you just English; we teach you how to talk
                        to the Pearson AI for maximum points.
                     </p>
                  </div>
                  <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                     {algorithmModules.map((mod, i) => (
                        <motion.div
                           key={i}
                           whileHover={{ y: -10 }}
                           className={`p-8 rounded-[2.5rem] ${mod.color} flex flex-col justify-between h-64 border-2 border-transparent hover:border-current/20 transition-all`}
                        >
                           <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                              {mod.icon}
                           </div>
                           <div>
                              <h4 className="text-xl font-black mb-2">{mod.title}</h4>
                              <p className="text-sm font-medium opacity-80">{mod.desc}</p>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </div>
            </div>
            {/* Background Decorative Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d90f40 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
         </section>

         {/* Real-Exam Simulation Showcase */}
         <section className="py-32 bg-[#1a1a1a] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
               <div className="text-center mb-20">
                  <h2 className="text-4xl sm:text-6xl font-black mb-6">Our Mock <span className="text-[#d90f40]">Interface.</span></h2>
                  <p className="text-xl text-gray-400 font-medium">Practice on a platform that's 100% identical to the real exam.</p>
               </div>

               <div className="relative group">
                  <div className="absolute inset-0 bg-[#d90f40]/20 blur-[120px] group-hover:bg-[#d90f40]/30 transition-all" />
                  <div className="relative bg-[#222] border-[12px] border-[#333] rounded-[3rem] overflow-hidden shadow-2xl">
                     <div className="bg-[#333] p-4 flex items-center gap-3">
                        <div className="flex gap-1.5">
                           <div className="w-3 h-3 rounded-full bg-red-500" />
                           <div className="w-3 h-3 rounded-full bg-yellow-500" />
                           <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="bg-black/20 rounded-md px-4 py-1 text-xs font-bold text-white/40">pte.apexedge.com/simulation</div>
                     </div>
                     <div className="p-8 sm:p-16 flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/2">
                           <div className="space-y-8">
                              <div className="flex gap-6 items-start">
                                 <div className="w-12 h-12 bg-[#d90f40] rounded-2xl flex items-center justify-center shrink-0">
                                    <Headphones className="w-6 h-6" />
                                 </div>
                                 <div>
                                    <h5 className="text-2xl font-black mb-2">Immersive Listening</h5>
                                    <p className="text-gray-400 font-medium">High-fidelity audio samples from past real exams.</p>
                                 </div>
                              </div>
                              <div className="flex gap-6 items-start">
                                 <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                                    <FileText className="w-6 h-6" />
                                 </div>
                                 <div>
                                    <h5 className="text-2xl font-black mb-2">Automated Grading</h5>
                                    <p className="text-gray-400 font-medium">Instant score report with section-wise performance analysis.</p>
                                 </div>
                              </div>
                           </div>
                           <Link to="/book-session" className="mt-12 inline-block px-10 py-5 bg-white text-black font-black text-lg rounded-2xl hover:bg-[#d90f40] hover:text-white transition-all">
                              Try Free Demo
                           </Link>
                        </div>
                        <div className="w-full md:w-1/2 relative">
                           <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
                              <img src="/students/celpip.png" className="rounded-2xl opacity-80" alt="Simulation" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Success Results - The Apex Elite */}
         <section className="py-32 bg-[#fce4ec]/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
               <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-24">
                  <div className="text-center md:text-left">
                     <h2 className="text-4xl sm:text-6xl font-black text-[#1a1a1a] mb-6 leading-tight">
                        The 79+ <span className="text-[#d90f40]">Club.</span>
                     </h2>
                     <p className="text-xl text-gray-500 font-medium max-w-xl">
                        Our results speak louder than words. Join the thousands of
                        successful candidates who achieved their dreams with us.
                     </p>
                  </div>
                  <Trophy className="w-32 h-32 text-[#d90f40] opacity-20 hidden lg:block" />
               </div>

               <div className="grid md:grid-cols-3 gap-8">
                  {[1, 2, 3].map((i) => (
                     <motion.div
                        key={i}
                        whileHover={{ y: -15 }}
                        className="bg-white p-8 rounded-[3rem] shadow-xl border border-transparent hover:border-[#d90f40]/20 transition-all"
                     >
                        <div className="flex items-center gap-4 mb-8">
                           <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden border-2 border-[#d90f40]">
                              <img src={`/teachers/${i === 1 ? 'deepika' : i === 2 ? 'shikha' : 'sneha'}.png`} className="w-full h-full object-cover" alt="Student" />
                           </div>
                           <div>
                              <h5 className="text-xl font-black text-black">Candidate Name</h5>
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Achieved in 10 Days</p>
                           </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                           <div className="p-4 bg-[#fce4ec] rounded-2xl">
                              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Overall</p>
                              <p className="text-3xl font-black text-[#d90f40]">84</p>
                           </div>
                           <div className="p-4 bg-gray-50 rounded-2xl">
                              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Speaking</p>
                              <p className="text-3xl font-black text-black">90</p>
                           </div>
                        </div>

                        <div className="flex items-center gap-2 text-[#22a45a] font-bold">
                           <CheckCircle className="w-5 h-5" />
                           <span>Verified Result</span>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Final CTA */}
         <section className="py-16 px-4 sm:px-6 lg:px-12 bg-white">
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
         </section>

         <ApexEdgeFooter />
      </div>
   );
}


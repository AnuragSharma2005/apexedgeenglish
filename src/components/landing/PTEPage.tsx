import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Zap, Target, Cpu, Binary, Sparkles, CircleArrowRight, Star, ShieldCheck, Database, CheckCircle, ArrowRight, BrainCircuit, Mic2, FileText, Headphones, Trophy, MousePointer2 } from "lucide-react";
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
      <div className="min-h-screen bg-[#fdf2e8] overflow-x-hidden">
         <Navbar />

         {/* Futuristic Hero Section */}
         <section className="relative w-full pt-24 sm:pt-32 pb-16 sm:pb-32 px-4 sm:px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
               <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
                  <motion.div
                     initial={{ opacity: 0, x: -50 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.8 }}
                     className="text-center lg:text-left"
                  >
                     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d90f40]/10 text-[#d90f40] font-black text-xs sm:text-sm mb-6 sm:mb-8 uppercase tracking-[0.2em] mx-auto lg:mx-0">
                        <Cpu className="w-4 h-4 animate-pulse" /> Decoding Pearson's AI
                     </div>
                     <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black text-[#1a1a1a] leading-[0.9] mb-8 tracking-tighter">
                        SMARTER <br /> <span className="text-[#d90f40]">SCORING.</span>
                     </h1>
                     <p className="text-lg sm:text-xl text-[#555] leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-medium">
                        Don't just practice; perform. Our AI-driven coaching 
                        synchronizes your skills with the PTE algorithm for 
                        guaranteed 79+ scores.
                     </p>

                     <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-6">
                        <Link to="/book-session" className="px-10 py-5 rounded-2xl bg-[#d90f40] text-white font-black text-lg shadow-[0_20px_40px_-10px_rgba(217,15,64,0.3)] hover:bg-black transition-all flex items-center justify-center gap-4 group">
                           Launch Mock Test <MousePointer2 className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                        <div className="flex items-center justify-center gap-4 group cursor-pointer">
                           <div className="w-14 h-14 rounded-full bg-white border-2 border-[#1a1a1a]/5 flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:text-white transition-all">
                              <Target className="w-6 h-6" />
                           </div>
                           <span className="font-bold text-lg text-[#1a1a1a]">Algorithm Blueprint</span>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 1, delay: 0.2 }}
                     className="relative"
                   >
                     <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#d90f40]/10 rounded-full blur-[100px]" />
                     <div className="relative rounded-[3rem] sm:rounded-[5rem] overflow-hidden shadow-2xl border-4 sm:border-[12px] border-white bg-white rotate-2">
                        <img
                           src="/students/pte.png"
                           alt="PTE Student"
                           className="w-full h-[400px] sm:h-[650px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                           <div className="p-4 sm:p-6 bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/50">
                              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">AI Accuracy</p>
                              <p className="text-3xl font-black text-[#d90f40]">99.8%</p>
                           </div>
                           <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#d90f40] rounded-full flex items-center justify-center text-white shadow-xl shadow-[#d90f40]/40">
                              <Sparkles className="w-8 h-8" />
                           </div>
                        </div>
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
         <section className="py-32 bg-[#fdf2e8]">
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
                              <img src={`/teachers/${i === 1 ? 'priya' : i === 2 ? 'anurag' : 'sneha'}.png`} className="w-full h-full object-cover" alt="Student" />
                           </div>
                           <div>
                              <h5 className="text-xl font-black text-black">Candidate Name</h5>
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Achieved in 10 Days</p>
                           </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                           <div className="p-4 bg-[#fdf2e8] rounded-2xl">
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
         <section className="py-24 px-4 sm:px-6 lg:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
               <div className="bg-[#d90f40] text-white rounded-[3rem] sm:rounded-[4rem] p-12 sm:p-24 text-center relative overflow-hidden">
                  <div className="relative z-10">
                     <h2 className="text-4xl sm:text-7xl font-black mb-8 leading-tight">Your Success is Our <br /> <span className="opacity-60 italic">Next Project.</span></h2>
                     <p className="text-xl sm:text-2xl font-medium mb-12 max-w-2xl mx-auto opacity-90">
                        Join the most innovative PTE coaching program in India. 
                        Limited slots available for the next batch.
                     </p>
                     <Link to="/book-session" className="px-12 py-6 bg-white text-[#d90f40] rounded-2xl font-black text-xl hover:scale-110 transition-transform inline-flex items-center gap-4">
                        Join the Elite Batch <CircleArrowRight className="w-6 h-6" />
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

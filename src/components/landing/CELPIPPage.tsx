import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ShieldCheck, Laptop, Globe, Bookmark, CircleArrowRight, Play, CheckCircle, GraduationCap, MapPin, Zap, Monitor, Rocket, Plane, Target } from "lucide-react";
import { Navbar } from "../Navbar";
import { ApexEdgeFooter } from "../ApexEdgeFooter";

export function CELPIPPage() {
  return (
    <div className="min-h-screen bg-[#fdf2e8] overflow-x-hidden font-sans">
      <Navbar />

      {/* Pathway Hero Section */}
      <section className="relative w-full pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 text-center mb-12 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-16 h-16 sm:w-24 sm:h-24 bg-[#d90f40]/10 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8"
            >
              <Plane className="w-8 h-8 sm:w-12 sm:h-12 text-[#d90f40] rotate-45" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl lg:text-8xl font-black text-[#1a1a1a] leading-tight"
            >
              Your Path to <br className="hidden sm:block" /> <span className="text-[#d90f40]">Canada</span> Starts Here.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 sm:mt-8 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-medium"
            >
              Master the CELPIP-General test with the most comprehensive 
              preparation platform in India. Designed for success.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 sm:mt-12"
            >
              <Link to="/book-session" className="px-8 sm:px-12 py-4 sm:py-6 bg-black text-white rounded-full font-black text-lg sm:text-xl hover:bg-[#d90f40] transition-all inline-flex items-center gap-4 group">
                Begin Your Pathway <CircleArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="relative">
             {/* Decorative Path Line */}
             <div className="absolute top-1/2 left-0 w-full h-[2px] bg-dashed-line opacity-20 hidden lg:block" />
             
             <div className="grid lg:grid-cols-3 gap-8 relative z-10">
                {[
                   { step: "01", title: "Assessment", desc: "Start with a diagnostic test to identify your current CLB level.", icon: Zap },
                   { step: "02", title: "Strategy", desc: "Learn unique templates and strategies for the computer-based format.", icon: Target },
                   { step: "03", title: "Simulate", desc: "Practice with full-length mock tests that mirror the real interface.", icon: Laptop }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="bg-white p-10 rounded-[3rem] shadow-xl shadow-black/5 border border-[#d90f40]/5"
                  >
                    <div className="w-16 h-16 bg-[#fdf2e8] rounded-2xl flex items-center justify-center text-[#d90f40] font-black text-2xl mb-8">
                       <item.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-black text-[#1a1a1a] mb-4">
                       <span className="text-[#d90f40] opacity-30 mr-2">{item.step}.</span>
                       {item.title}
                    </h3>
                    <p className="text-lg text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Feature Split - Different Design */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                     <div className="h-64 bg-[#fdf2e8] rounded-[2.5rem] p-8 flex flex-col justify-end">
                        <Monitor className="w-10 h-10 text-[#d90f40] mb-4" />
                        <h4 className="font-black text-xl text-black">Computer <br /> Familiarity</h4>
                     </div>
                     <div className="h-80 bg-slate-900 rounded-[2.5rem] overflow-hidden">
                        <img src="/students/celpip.png" className="w-full h-full object-cover" alt="CELPIP" />
                     </div>
                  </div>
                  <div className="space-y-4 pt-12">
                    <div className="h-80 bg-emerald-600 rounded-[2.5rem] overflow-hidden">
                        <img src="/students/spoken.png" className="w-full h-full object-cover" alt="CELPIP" />
                    </div>
                    <div className="h-64 bg-orange-500 rounded-[2.5rem] p-8 flex flex-col justify-end text-white">
                        <Globe className="w-10 h-10 text-white mb-4" />
                        <h4 className="font-black text-xl">Universal <br /> Acceptance</h4>
                    </div>
                  </div>
               </div>
            </div>
            <div className="order-1 lg:order-2">
               <h2 className="text-5xl font-black text-[#1a1a1a] mb-10 leading-tight">Why Choose <br /> <span className="text-[#d90f40]">Apex Edge</span> for CELPIP?</h2>
               <div className="space-y-8">
                  {[
                    "Pearson-aligned practice modules",
                    "Certified trainers with PR experience",
                    "Detailed CLB score mapping",
                    "Intensive feedback sessions",
                    "Access to high-scoring writing templates"
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#fdf2e8] flex items-center justify-center text-[#d90f40]">
                         <CheckCircle className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-bold text-gray-700">{item}</span>
                    </motion.div>
                  ))}
               </div>
               <Link to="/book-session" className="mt-16 inline-block text-2xl font-black text-[#d90f40] border-b-4 border-[#d90f40] pb-2 hover:translate-x-4 transition-transform">
                 See Our Results
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA - Redesigned for Mobile Visibility */}
      <section className="py-20 sm:py-32 bg-[#fdf2e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-black text-white rounded-[2.5rem] sm:rounded-[4rem] p-10 sm:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 text-center lg:text-left">
            <div className="relative z-10 max-w-xl">
               <h2 className="text-3xl sm:text-5xl font-black mb-4 sm:mb-6 leading-tight">Secure Your <br className="lg:hidden" /> 10+ CLB Score.</h2>
               <p className="text-base sm:text-xl text-gray-400 font-medium">
                 The CELPIP test evaluates you on everyday scenarios. We train you to excel 
                 at those scenarios with confidence.
               </p>
            </div>
            <div className="relative z-10 shrink-0 w-full lg:w-auto">
               <Link to="/book-session" className="inline-block w-full lg:w-auto px-10 sm:px-14 py-6 sm:py-8 bg-[#d90f40] text-white rounded-2xl sm:rounded-[2rem] font-black text-xl sm:text-2xl hover:scale-105 transition-transform shadow-[0_30px_60px_-12px_rgba(217,15,64,0.4)]">
                 Enroll Today
               </Link>
            </div>
            <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] border-[40px] border-white/5 rounded-full" />
            <div className="absolute top-10 left-1/2 w-64 h-64 bg-[#d90f40]/20 rounded-full blur-[100px]" />
          </div>
        </div>
      </section>

      <ApexEdgeFooter />
    </div>
  );
}

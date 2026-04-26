import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Briefcase, TrendingUp, BarChart3, Award, Play, Building2, Coffee, CircleArrowRight, CheckCircle2, Globe, Users, Target } from "lucide-react";
import { Navbar } from "../Navbar";
import { ApexEdgeFooter } from "../ApexEdgeFooter";

export function BusinessCommPage() {
  return (
    <div className="min-h-screen bg-[#fdf2e8] overflow-x-hidden">
      <Navbar />

      {/* Editorial Hero Section */}
      <section className="relative w-full pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-end mb-12 sm:mb-20 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:w-2/3"
            >
              <span className="text-[#d90f40] font-black text-xs sm:text-sm uppercase tracking-[0.3em] mb-4 sm:mb-6 block">Elite Professional Training</span>
              <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black text-[#1a1a1a] leading-[0.9] sm:leading-[0.85] tracking-tighter">
                LEAD THE <br className="hidden sm:block" /> <span className="text-[#d90f40]">ROOM.</span>
              </h1>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:w-1/3 lg:pb-4"
            >
              <p className="text-lg sm:text-xl text-[#555] font-medium leading-relaxed border-l-4 lg:border-l-4 border-[#d90f40] pl-6 text-left mx-auto lg:mx-0 max-w-md lg:max-w-none">
                Master the linguistic nuances of global leadership. From the boardroom to 
                the digital workspace, communicate with absolute authority.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden h-[350px] sm:h-[600px] shadow-2xl group"
          >
            <img 
              src="/students/group.png" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
              alt="Business" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 sm:p-16">
              <div className="flex flex-col sm:flex-row flex-wrap gap-8 items-center w-full justify-between">
                 <Link to="/book-session" className="w-full sm:w-auto px-10 py-5 sm:px-12 sm:py-6 bg-[#d90f40] text-white font-black text-lg sm:text-xl rounded-2xl hover:scale-105 transition-transform text-center">
                    Corporate Brochure
                 </Link>
                 <div className="flex gap-8 sm:gap-12 text-white/80 w-full sm:w-auto justify-center sm:justify-start">
                    <div className="text-center sm:text-left">
                       <p className="text-2xl sm:text-3xl font-black text-white">500+</p>
                       <p className="text-[10px] sm:text-xs uppercase font-bold tracking-widest">Executives Trained</p>
                    </div>
                    <div className="text-center sm:text-left">
                       <p className="text-2xl sm:text-3xl font-black text-white">15+</p>
                       <p className="text-[10px] sm:text-xs uppercase font-bold tracking-widest">Fortune 500 Clients</p>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid-Based Modular Content - Different from Highlights */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Feature */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              className="lg:col-span-8 bg-[#fdf2e8] rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-16 flex flex-col justify-between"
            >
              <div>
                <Award className="w-12 h-12 sm:w-16 sm:h-16 text-[#d90f40] mb-6 sm:mb-8" />
                <h3 className="text-3xl sm:text-5xl font-black text-[#1a1a1a] mb-4 sm:mb-6">Executive Presence & <br className="hidden sm:block" /> Voice Mastery</h3>
                <p className="text-lg sm:text-xl text-gray-600 font-medium max-w-xl">
                  Neutralize your accent and master the tonality that commands respect. 
                  We focus on body language, micro-expressions, and the linguistic 
                  precision required for C-suite roles.
                </p>
              </div>
              <div className="mt-8 sm:mt-12 flex flex-wrap gap-3 sm:gap-4">
                 {["Confidence", "Authority", "Precision"].map((tag) => (
                   <span key={tag} className="px-5 py-2 sm:px-6 sm:py-2 rounded-full border-2 border-[#d90f40]/20 text-[#d90f40] font-bold text-xs sm:text-sm">
                     {tag}
                   </span>
                 ))}
              </div>
            </motion.div>

            {/* Small Card 1 */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 30 }}
              className="lg:col-span-4 bg-slate-900 text-white rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 flex flex-col justify-center text-center"
            >
              <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-6" />
              <h4 className="text-2xl sm:text-3xl font-black mb-4">Negotiation Strategies</h4>
              <p className="text-slate-400 font-medium leading-relaxed text-sm sm:text-base">
                Learn the linguistic psychological triggers used in multi-million dollar deals.
              </p>
            </motion.div>

            {/* Small Card 2 */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              className="lg:col-span-4 bg-emerald-600 text-white rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 flex flex-col justify-center text-center"
            >
              <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-200 mx-auto mb-6" />
              <h4 className="text-2xl sm:text-3xl font-black mb-4">Global Etiquette</h4>
              <p className="text-emerald-100 font-medium leading-relaxed text-sm sm:text-base">
                Navigate cultural nuances in international business communication effortlessly.
              </p>
            </motion.div>

            {/* Main Feature 2 */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              className="lg:col-span-8 bg-[#fff5f5] border-2 border-[#d90f40]/10 rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-16 flex flex-col md:flex-row gap-8 sm:gap-12 items-center"
            >
              <div className="w-full md:w-1/2">
                 <h3 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mb-4 sm:mb-6 text-[#d90f40]">Digital Command Center</h3>
                 <p className="text-base sm:text-lg text-gray-600 font-medium">
                   Master the art of high-impact emails, virtual leadership on Zoom, 
                   and managing teams across Slack and Microsoft Teams with professional poise.
                 </p>
                 <Link to="/book-session" className="mt-6 sm:mt-8 inline-flex items-center gap-2 font-black text-[#d90f40] hover:gap-4 transition-all uppercase tracking-widest text-xs sm:text-sm">
                   Explore Digital Modules <CircleArrowRight className="w-5 h-5" />
                 </Link>
              </div>
              <div className="w-full md:w-1/2 h-[200px] sm:h-full rounded-2xl sm:rounded-[2rem] overflow-hidden">
                 <img src="/students/celpip.png" className="w-full h-full object-cover" alt="Digital" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll / Marquee - Totally different design */}
      <section className="py-24 bg-[#1a1a1a] overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee gap-20">
          {[
            "PRESENTATION SKILLS", "PUBLIC SPEAKING", "EMAIL ETIQUETTE", 
            "CONFLICT RESOLUTION", "LEADERSHIP COUPLING", "ACCENT NEUTRALIZATION"
          ].map((text, i) => (
            <span key={i} className="text-6xl sm:text-8xl font-black text-white/5 outline-text tracking-tighter">
              {text}
            </span>
          ))}
        </div>
      </section>

      {/* Magazine Style Outcome Section */}
      <section className="py-32 bg-[#fdf2e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-full h-full border-4 border-[#d90f40] rounded-[4rem]" />
              <img src="/students/ielts.png" className="relative z-10 rounded-[4rem] grayscale shadow-2xl" alt="Results" />
            </div>
            <div>
              <h2 className="text-6xl font-black text-[#1a1a1a] mb-12 leading-[0.9]">THE <span className="text-[#d90f40]">IMPACT.</span></h2>
              <div className="space-y-12 text-[#1a1a1a]">
                {[
                  { title: "90% Career Growth", desc: "Our alumni report immediate promotions and better job offers within 6 months." },
                  { title: "Global Confidence", desc: "Speak at international conferences without the fear of being misunderstood." },
                  { title: "Network Access", desc: "Join an elite circle of professionals and leaders from across the globe." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <h4 className="text-2xl font-black mb-2 flex items-center gap-4">
                      <span className="w-8 h-[2px] bg-[#d90f40]" /> {item.title}
                    </h4>
                    <p className="text-lg text-gray-600 font-medium pl-12">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              <Link to="/book-session" className="mt-16 inline-block px-14 py-6 bg-black text-white font-black text-xl rounded-full hover:bg-[#d90f40] transition-colors">
                Apply for Cohort
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ApexEdgeFooter />
    </div>
  );
}

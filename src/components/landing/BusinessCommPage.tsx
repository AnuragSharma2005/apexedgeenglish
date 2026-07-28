import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  TrendingUp, Award, CircleArrowRight, Globe, Mic, MessageSquare,
  Video, Star, Mail, Presentation, Users, ShieldCheck, Sparkles, Handshake
} from "lucide-react";
import { Navbar } from "../Navbar";
import { ApexEdgeFooter } from "../ApexEdgeFooter";

export function BusinessCommPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Fold - 1:1 Match of User Reference Image Design */}
      <section className="relative w-full pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">

        {/* Floating purple ring accent on far left edge */}
        <div className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4 border-purple-500/80 pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column: 3-line Headline, Paragraph & Dual Pill CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 text-left space-y-8"
            >
              {/* 3-Line Headline matching reference typography */}
              <div className="space-y-1">
                <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold text-[#0b132a] tracking-tight leading-[1.08]">
                  Engagement
                </h1>
                <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold text-[#0b132a] tracking-tight leading-[1.08]">
                  with customers
                </h1>
                <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold text-[#0b132a] tracking-tight leading-[1.08]">
                  starts here
                </h1>
              </div>

              {/* Subtitle paragraph */}
              <p className="text-base sm:text-lg text-slate-500 font-medium max-w-md leading-relaxed">
                Master modern business communication, executive presence, and customer engagement with Apex Edge's premier corporate training.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2">
                <Link
                  to="/enroll"
                  className="px-8 py-4 rounded-full bg-[#ff5500] hover:bg-[#e04b00] text-white font-bold text-base shadow-xl shadow-[#ff5500]/25 transition-all hover:scale-105 inline-flex items-center justify-center min-w-[160px]"
                >
                  Get Started
                </Link>
                {/* <Link
                  to="/enroll"
                  className="px-8 py-4 rounded-full bg-white hover:bg-slate-900 text-slate-900 hover:text-white border-2 border-slate-800 font-bold text-base transition-all inline-flex items-center justify-center min-w-[160px]"
                >
                  Book a Demo
                </Link> */}
              </div>

            </motion.div>

            {/* Right Column: Circular Composition with Floating Badges & Orbit */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="lg:col-span-6 relative flex items-center justify-center py-6 sm:py-10"
            >
              {/* Outer Orbit Canvas Container */}
              <div className="relative w-full max-w-[480px] sm:max-w-[520px] aspect-square flex items-center justify-center">

                {/* Thin Yellow Orbit Concentric Ring Path */}
                <div className="absolute inset-2 sm:inset-0 rounded-full border border-amber-300/80 pointer-events-none z-0" />
                <div className="absolute inset-8 sm:inset-6 rounded-full border border-amber-200/50 pointer-events-none z-0" />

                {/* Outer Circular Color Block Composition Frame */}
                <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full overflow-hidden shadow-2xl z-10 flex items-center justify-center border-4 border-white">

                  {/* Color Segments Background */}
                  <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                    {/* Top Left Quadrant: Coral Red */}
                    <div className="bg-[#e63946]" />
                    {/* Top Right Quadrant: Warm Yellow */}
                    <div className="bg-[#ffb703]" />
                    {/* Bottom Left Quadrant: Dark Navy */}
                    <div className="bg-[#0f172a]" />
                    {/* Bottom Right Quadrant: Warm Yellow */}
                    <div className="bg-[#ffb703]" />
                  </div>

                  {/* Business Woman Student Image */}
                  <img
                    src="/students/business_woman.png"
                    alt="Business Woman Communication"
                    className="relative z-20 w-full h-full object-cover object-center scale-105"
                  />
                </div>

                {/* --- FLOATING ORBIT BADGES & METRIC CARDS --- */}

                {/* 1. Top Left Blue Mic Icon Circle */}
                <div className="absolute top-[4%] left-[30%] sm:left-[32%] w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#2563eb] text-white flex items-center justify-center shadow-lg border-2 border-white z-30 transition-transform hover:scale-110">
                  <Mic className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* 2. Top Right Dark Navy Chat Preview Popup Card */}
                <div className="absolute top-[8%] right-[0%] sm:right-[4%] bg-[#0f172a] text-white p-2.5 px-3.5 sm:p-3 sm:px-4 rounded-2xl shadow-2xl border border-slate-700/70 z-30 flex items-center gap-3 max-w-[190px] sm:max-w-[220px]">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-amber-400 overflow-hidden shrink-0">
                    <img src="/students/celpip_boy.png" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="w-20 sm:w-24 h-2 bg-white/40 rounded-full" />
                    <div className="w-12 sm:w-14 h-1.5 bg-white/20 rounded-full" />
                  </div>
                </div>

                {/* 3. Floating Metric Card 1: Top-Left "100% Business Growth" */}
                <div className="absolute top-[36%] -left-4 sm:-left-10 bg-white/95 backdrop-blur-md p-3 px-4 rounded-2xl shadow-2xl border border-slate-100 z-40 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-950 text-white flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-slate-900 leading-tight">100% Business Growth</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span className="text-[10px] font-semibold text-slate-500">4.9 (1520 Reviews)</span>
                    </div>
                  </div>
                </div>

                {/* 4. Right Yellow Speech Bubble Circle Badge */}
                <div className="absolute top-[48%] -right-2 sm:right-[0%] w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#f59e0b] text-white flex items-center justify-center shadow-lg border-2 border-white z-30 transition-transform hover:scale-110">
                  <MessageSquare className="w-5 h-5 fill-white" />
                </div>

                {/* 5. Bottom Center Avatar Circle Badge */}
                <div className="absolute bottom-[2%] left-[48%] -translate-x-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white shadow-xl overflow-hidden z-30 bg-white">
                  <img src="/students/spoken.png" alt="Client Avatar" className="w-full h-full object-cover" />
                </div>

                {/* 6. Bottom-Left Cyan Video Camera Circle Badge */}
                <div className="absolute bottom-[16%] left-[4%] sm:left-[8%] w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#06b6d4] text-white flex items-center justify-center shadow-lg border-2 border-white z-30 transition-transform hover:scale-110">
                  <Video className="w-5 h-5" />
                </div>


              </div>
            </motion.div>

          </div>
        </div>

      </section>



      {/* Grid-Based Modular Content */}
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
                <h3 className="text-xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 text-[#d90f40] whitespace-nowrap tracking-tight">Digital Command Center</h3>
                <p className="text-base sm:text-lg text-gray-600 font-medium">
                  Master the art of high-impact emails, virtual leadership on Zoom,
                  and managing teams across Slack and Microsoft Teams with professional poise.
                </p>
                <Link to="/enroll" className="mt-6 sm:mt-8 inline-flex items-center gap-2 font-black text-[#d90f40] hover:gap-4 transition-all uppercase tracking-widest text-xs sm:text-sm">
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

      {/* Horizontal Ribbon Grid Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
            Core Communication Skills
          </h2>

          {/* Grid */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">

            {[
              "PRESENTATION SKILLS",
              "PUBLIC SPEAKING",
              "EMAIL ETIQUETTE",
              "CONFLICT RESOLUTION",
              "LEADERSHIP COUPLING",
              "ACCENT NEUTRALIZATION"
            ].map((text, i) => {

              const styles = [
                "bg-pink-500 border-l-pink-500",
                "bg-orange-500 border-l-orange-500",
                "bg-green-500 border-l-green-500",
                "bg-blue-500 border-l-blue-500",
                "bg-purple-500 border-l-purple-500",
                "bg-red-500 border-l-red-500"
              ];

              return (
                <div key={i} className="flex flex-col items-center">

                  {/* Ribbon */}
                  <div className="relative inline-block">

                    {/* Rectangle */}
                    <div className={`${styles[i].split(" ")[0]} text-white px-8 py-3 font-bold text-base`}>
                      {`0${i + 1}`}
                    </div>

                    {/* Triangle */}
                    <div
                      className={`absolute top-0 right-[-16px] w-0 h-0 
                      border-t-[24px] border-b-[24px] border-l-[16px] 
                      border-t-transparent border-b-transparent ${styles[i].split(" ")[1]}`}
                    />
                  </div>

                  {/* Dotted Line */}
                  <div className="h-12 border-l-2 border-dashed border-gray-400 mt-4"></div>

                  {/* Circle */}
                  <div className="w-16 h-16 rounded-full border-2 border-gray-400 flex items-center justify-center text-lg font-bold text-gray-600">
                    •
                  </div>

                  {/* Text */}
                  <p className="mt-4 text-base font-semibold text-gray-800 text-center max-w-[160px] leading-snug">
                    {text}
                  </p>

                </div>
              );
            })}

          </div>

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
              <h2 className="text-5xl font-black text-[#1a1a1a] mb-12 leading-[0.9]">THE <span className="text-[#d90f40]">IMPACT.</span></h2>
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
              <Link to="/enroll" className="mt-16 inline-block px-14 py-5 lg:py-4 bg-black text-white font-black text-xl rounded-full hover:bg-[#d90f40] transition-colors">
                Apply for Cohort
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hexagon Arc Timeline Infographic Section */}
      <section className="py-24 sm:py-32 bg-slate-50 text-slate-900 relative overflow-hidden">
        {/* Subtle Background Pattern & Ambient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

          {/* Section Title */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-amber-600 text-xs font-black uppercase tracking-widest border border-amber-200 shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Business Infographics
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 uppercase">
              Core Executive <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600">Competencies</span>
            </h2>

            <p className="text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              A 7-point structured learning roadmap engineered to elevate your corporate presence, leadership, and communication impact.
            </p>
          </div>

          {/* Grid Layout: Left Hexagon + Arced Badges | Right Vertical Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column: Hexagon Shape + 7 Arced Circle Badges */}
            <div className="lg:col-span-5 flex items-center justify-center relative py-6">

              {/* Main Outer Hexagon Canvas Container */}
              <div className="relative w-[320px] h-[360px] sm:w-[380px] sm:h-[420px] flex items-center justify-center">

                {/* Hexagon Box with Gradient Border */}
                <div
                  className="w-[240px] h-[270px] sm:w-[280px] sm:h-[310px] bg-white shadow-2xl p-1 relative flex flex-col items-center justify-center text-center z-10 transition-transform duration-300 hover:scale-105"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    background: "linear-gradient(135deg, #eab308, #f97316, #dc2626)",
                  }}
                >
                  {/* Inner White Content Area */}
                  <div
                    className="w-full h-full bg-white flex flex-col items-center justify-center p-6 text-center"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-500 mb-1">
                      APEX EDGE
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight uppercase mb-2">
                      INFOGRAPHIC<br />OUTCOMES
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-rose-500 rounded-full mb-2" />
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      7 Core Modules
                    </p>
                  </div>
                </div>

                {/* 7 Arced Circular Icon Badges positioned in a right semi-circle */}
                {[
                  { icon: Mic, bg: "bg-[#eab308]", pos: "top-[0%] right-[30%] sm:right-[26%]" },
                  { icon: Mail, bg: "bg-[#f59e0b]", pos: "top-[12%] right-[10%] sm:right-[6%]" },
                  { icon: Presentation, bg: "bg-[#f97316]", pos: "top-[28%] -right-[8%] sm:-right-[12%]" },
                  { icon: Users, bg: "bg-[#ea580c]", pos: "top-[46%] -right-[12%] sm:-right-[16%]" },
                  { icon: ShieldCheck, bg: "bg-[#ef4444]", pos: "top-[64%] -right-[8%] sm:-right-[12%]" },
                  { icon: TrendingUp, bg: "bg-[#dc2626]", pos: "top-[80%] right-[10%] sm:right-[6%]" },
                  { icon: Handshake, bg: "bg-[#b91c1c]", pos: "top-[92%] right-[30%] sm:right-[26%]" },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className={`absolute ${item.pos} w-11 h-11 sm:w-13 sm:h-13 rounded-full ${item.bg} text-white flex items-center justify-center shadow-xl border-2 border-white z-20 hover:scale-115 transition-transform cursor-pointer`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>
                  );
                })}

              </div>

            </div>

            {/* Right Column: 7 Point Vertical Timeline List */}
            <div className="lg:col-span-7 relative pl-4 sm:pl-8">

              {/* Continuous Vertical Timeline Connecting Line */}
              <div className="absolute left-[27px] sm:left-[43px] top-6 bottom-6 w-0.5 bg-slate-200 z-0" />

              {/* 7 Outcomes List */}
              <div className="space-y-6 sm:space-y-7 relative z-10">
                {[
                  {
                    title: "Professional verbal and written communication",
                    // desc: "Develop executive-level articulation, precise vocabulary, and compelling written expression. Eliminate ambiguity and convey complex ideas with absolute clarity.",
                    dotColor: "bg-[#eab308]",
                    textColor: "text-[#eab308]",
                  },
                  {
                    title: "Email and business correspondence",
                    // desc: "Craft persuasive emails, executive summaries, memos, and official proposals that prompt immediate action and command professional respect.",
                    dotColor: "bg-[#f59e0b]",
                    textColor: "text-[#f59e0b]",
                  },
                  {
                    title: "Presentation and public speaking skills",
                    // desc: "Deliver captivating slide decks and keynote speeches with poise, stage presence, audience engagement, and story-driven structure.",
                    dotColor: "bg-[#f97316]",
                    textColor: "text-[#f97316]",
                  },
                  {
                    title: "Meeting and interview communication",
                    // desc: "Stand out in high-stakes corporate job interviews and lead board meetings with active listening, Q&A mastery, and strategic poise.",
                    dotColor: "bg-[#ea580c]",
                    textColor: "text-[#ea580c]",
                  },
                  {
                    title: "Workplace etiquette and professional confidence",
                    // desc: "Exude boardroom poise, master non-verbal body language, and navigate diverse workplace cultural dynamics with total assurance.",
                    dotColor: "bg-[#ef4444]",
                    textColor: "text-[#ef4444]",
                  },
                  {
                    title: "Leadership communication techniques",
                    // desc: "Inspire cross-functional teams, align organizational goals, deliver constructive feedback, and execute strategic persuasion that drives growth.",
                    dotColor: "bg-[#dc2626]",
                    textColor: "text-[#dc2626]",
                  },
                  {
                    title: "Client and team interaction skills",
                    // desc: "Build enduring high-trust client partnerships, negotiate deal terms smoothly, resolve workplace conflicts, and lead international teams.",
                    dotColor: "bg-[#b91c1c]",
                    textColor: "text-[#b91c1c]",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex items-start gap-4 sm:gap-6 group"
                  >
                    {/* Node Dot on Timeline */}
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${item.dotColor} border-4 border-white shadow-md flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-125 transition-transform duration-300`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>

                    {/* Text Box */}
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-black uppercase text-slate-900 tracking-tight leading-snug group-hover:text-amber-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mt-1">
                        {/* {item.desc} */}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      <ApexEdgeFooter />
    </div>
  );
}

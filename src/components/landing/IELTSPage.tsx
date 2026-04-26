import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Headphones, BookOpen, PenTool, MessageSquare, CheckCircle2, ShieldCheck, UserCheck, GraduationCap, Zap, CircleArrowRight, Star, ArrowRight, Play, Quote, Award, Users, ThumbsUp, Clock, Search, Briefcase, Rocket, Timer, Trophy, TrendingUp, Handshake, Mail, Globe } from "lucide-react";
import { Navbar } from "../Navbar";
import { ApexEdgeFooter } from "../ApexEdgeFooter";

// Using the generated images
import studentPrep from "@/assets/student-girl.png"; // Placeholder for the hero, or I can use the absolute path if I want but let's use the workspace assets if available or just the path for now.
const heroStudent = "/students/ielts.png";
const groupStudent = "/students/group.png";

const modules = [
  {
    title: "Speaking",
    icon: <MessageSquare className="w-10 h-10" />,
    iconColor: "text-blue-500",
    bg: "bg-[#e0f2fe]", // Light Blue
    border: "border-blue-200",
    rotate: "-rotate-2",
    description: "Both IELTS Academic and General Training tests follow the same structure for the Speaking section. It is a face-to-face interview with an examiner and lasts 11-14 minutes. The interview is divided into three parts: personal introduction, discussing a specific topic, and answering broader questions. This section checks your ability to speak English fluently, coherently, and accurately.",
  },
  {
    title: "Reading",
    icon: <BookOpen className="w-10 h-10" />,
    iconColor: "text-orange-500",
    bg: "bg-[#fff7ed]", // Light Orange
    border: "border-orange-200",
    rotate: "rotate-2",
    description: "The Reading section is different in both IELTS Academic and General Training formats. In the Academic test, you will read three long, complex passages on various academic subjects. In the General Training test, the passages are more related to everyday life, such as advertisements or instructions. Both formats require answering 40 questions within 60 minutes. This section evaluates your ability to understand the main ideas, details, and the author's tone.",
  },
  {
    title: "Listening",
    icon: <Headphones className="w-10 h-10" />,
    iconColor: "text-emerald-500",
    bg: "bg-[#ecfdf5]", // Light Green
    border: "border-emerald-200",
    rotate: "-rotate-1",
    description: "The Listening section is common to both IELTS Academic and General Training exams. It consists of 40 questions based on four audio recordings. The audio includes conversations, monologues, and real-life situations. You are required to listen attentively and answer questions while the audio is played. This section lasts for 30 minutes, with an additional 10 minutes provided for transferring answers to the answer sheet.",
  },
  {
    title: "Writing",
    icon: <PenTool className="w-10 h-10" />,
    iconColor: "text-pink-500",
    bg: "bg-[#fdf2f8]", // Light Pink
    border: "border-pink-200",
    rotate: "rotate-3",
    description: "In the Writing section, both the Academic and General Training formats have two tasks. In the Academic test, Task 1 involves describing data from a graph or chart, while Task 2 requires writing a formal essay. The General Training test's Task 1 asks you to write a letter, and Task 2 is an essay on a general topic. Both tasks need to be completed within 60 minutes.",
  },
];

const eligibilityCriteria = [
  {
    title: "Age Limit",
    icon: <UserCheck className="w-8 h-8 text-[#d90f40]" />,
    description: "Anyone aged 16 years and above can appear for the IELTS exam, making it accessible for high schoolers and professionals alike.",
  },
  {
    title: "Academic Requirements",
    icon: <GraduationCap className="w-8 h-8 text-[#d90f40]" />,
    description: "There are no specific academic prerequisites. Whether you're a student or a working professional, you're eligible.",
  },
  {
    title: "Valid ID Proof",
    icon: <ShieldCheck className="w-8 h-8 text-[#d90f40]" />,
    description: "A valid passport is mandatory to register and appear for the IELTS exam globally.",
  },
];

const reasons = [
  {
    title: "Holistic Skill Development",
    icon: <TrendingUp className="w-8 h-8" />,
    description: "At Apex Edge, we strive to provide all our students with holistic skill development by improving their language proficiency, time management skills, answering methodology, and all other necessary aspects.",
    color: "#006d77", // Teal
  },
  {
    title: "Experienced Faculty",
    icon: <UserCheck className="w-8 h-8" />,
    description: "We have the most experienced 9 band IDP Certified trainers and affiliated teaching faculty to provide our students with top-quality classes. Our professionals are highly efficient in promoting a positive and productive classroom environment.",
    color: "#f4a261", // Orange
  },
  {
    title: "Specialised Online Portal",
    icon: <Briefcase className="w-8 h-8" />,
    description: "At Apex Edge we provide a specialised online portal to help students gain better proficiency in listening, reading, writing, and speaking skills to get commendable results in the IELTS examination.",
    color: "#e76f51", // Burnt Orange
  },
  {
    title: "Advanced Learning Approach",
    icon: <Handshake className="w-8 h-8" />,
    description: "We follow an advanced learning approach at Apex Edge, keeping track of the latest syllabus. Also, we offer frequent mock tests and feedback to nurture your skills better.",
    color: "#d62828", // Red
  },
  {
    title: "Complete Guidance",
    icon: <Mail className="w-8 h-8" />,
    description: "We at Apex Edge provide complete guidance for international education. So, you can get considerable assistance in processing your visa, curating documents, getting travel tickets, etc.",
    color: "#4a4e69", // Dark Purple
  },
  {
    title: "Flexible Sessions",
    icon: <Globe className="w-8 h-8" />,
    description: "We offer the most flexible class schedules for our students. Therefore, no matter if you are a full-time academic student or working professional, you can always choose classes according to your preferences at any time of the day!",
    color: "#023e8a", // Dark Blue
  },
];

export function IELTSPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Section - Exact Replica of Image 1 with Red Curved Background */}
      <section className="relative w-full pt-32 sm:pt-48 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
        {/* Red Curved Background Shape based on Image 2 scribble */}
        <div 
          className="absolute top-0 left-0 w-full h-[450px] sm:h-[600px] bg-[#d90f40] z-0" 
          style={{ 
            clipPath: 'ellipse(120% 100% at 50% 0%)' 
          }} 
        />

        {/* Decorative Doodles from Image 1 */}
        <div className="absolute top-10 left-[540%] opacity-40 pointer-events-none">
          {/* Book doodle */}
          <BookOpen className="w-10 h-10 text-gray-400 -rotate-12" />
        </div>
        <div className="absolute top-20 right-[35%] opacity-40 pointer-events-none">
          {/* Heart doodle */}
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-400 rotate-12">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
        <div className="absolute top-32 right-[15%] opacity-40 pointer-events-none">
          {/* Star doodle */}
          <Star className="w-8 h-8 text-yellow-500 rotate-45" />
        </div>
        <div className="absolute bottom-[25%] left-[45%] opacity-40 pointer-events-none">
          {/* Green scribble doodle */}
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="#2ec4b6" strokeWidth="2" className="rotate-12">
            <path d="M20,80 Q40,40 60,80 T100,20" />
          </svg>
        </div>
        <div className="absolute bottom-[10%] right-[5%] opacity-40 pointer-events-none">
          {/* Headset doodle */}
          <Headphones className="w-12 h-12 text-gray-300 -rotate-12" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-6 items-center">
          {/* Text Content - Part 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-1"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 sm:mb-8 tracking-tight">
              Your Path to IELTS <br />
              Success Start Here
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-xl font-medium">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>

            {/* Desktop Button - Hidden on Mobile */}
            <div className="hidden lg:flex flex-row items-center gap-8">
              <Link to="/book-session" className="px-10 py-4 rounded-lg bg-white text-[#d90f40] font-black text-lg shadow-lg hover:bg-gray-100 transition-all">
                Get Admission
              </Link>
            </div>
          </motion.div>

          {/* Student Image - Part 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center order-2 w-full max-w-[400px] sm:max-w-none"
          >
            {/* Red Arc Segments Frame like Image 1 */}
            <div className="relative w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] flex items-center justify-center scale-110 sm:scale-100">
              {/* Static Arc Segments */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#d90f40" strokeWidth="3" strokeDasharray="60 10 30 10 40 10" className="opacity-100" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#d90f40" strokeWidth="1" strokeDasharray="10 5" className="opacity-40" />
                {/* Thick Arc Segment */}
                <path d="M50 5 A45 45 0 0 1 95 50" fill="none" stroke="#d90f40" strokeWidth="6" strokeLinecap="round" />
                <path d="M5 50 A45 45 0 0 1 50 95" fill="none" stroke="#d90f40" strokeWidth="6" strokeLinecap="round" />
              </svg>

              <div className="relative w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] rounded-full overflow-hidden border-[10px] border-white shadow-2xl bg-gray-50 z-10">
                <img
                  src={heroStudent}
                  alt="Student"
                  className="w-full h-full object-cover scale-110 object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Mobile Button - Part 3 - Hidden on Desktop */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex lg:hidden order-3 mt-10 w-full px-4"
          >
             <Link to="/book-session" className="w-full px-10 py-5 rounded-xl bg-[#d90f40] text-white font-black text-xl shadow-xl hover:bg-[#b00c34] transition-all text-center animate-pulse-subtle">
                Get Admission
              </Link>
          </motion.div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes pulse-subtle {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
          }
          .animate-pulse-subtle {
            animation: pulse-subtle 3s ease-in-out infinite;
          }
        `}} />
      </section>

      {/* Modules Section - Redesigned to match the colorful tilted cards */}
      <section className="py-20 sm:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 sm:mb-24 text-center"
          >
            <h2 className="text-3xl sm:text-6xl font-black text-[#1a1a1a] mb-4 sm:mb-6 tracking-tight">
              Master the <span className="text-[#d90f40]">4 Modules</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 font-medium max-w-2xl mx-auto">
              Our curriculum is laser-focused on the specific skills you need for each section of the test.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-6 lg:gap-4 xl:gap-8 mt-12">
            {modules.map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: parseFloat(mod.rotate.replace('rotate-', '-').replace('rotate', '')) }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative p-6 sm:p-8 pt-16 sm:pt-16 pb-10 sm:pb-12 rounded-[2.5rem] ${mod.bg} ${mod.border} border-2 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col items-center text-center`}
              >
                {/* Circular Icon Badge */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 z-20">
                  <div className={`w-14 h-14 sm:w-18 sm:h-18 rounded-full ${mod.bg} flex items-center justify-center ${mod.iconColor}`}>
                    {mod.icon}
                  </div>
                </div>

                {/* Section Title Badge */}
                <div className="mb-8 px-8 py-2.5 rounded-full bg-white shadow-md inline-block">
                  <h3 className="text-2xl font-black text-[#1a1a1a] tracking-tight">{mod.title}</h3>
                </div>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-semibold px-2">
                  {mod.description}
                </p>

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-2 h-2 rounded-full opacity-20 bg-black/10" />
                <div className="absolute bottom-4 right-4 w-4 h-4 rounded-full opacity-10 bg-black/10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Reasons Section - Redesigned based on New Reference Image */}
      <section className="py-24 sm:py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <p className="text-[#d90f40] font-bold text-sm uppercase tracking-[0.2em] mb-4">Why Choose Us</p>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1a1a1a] mb-6 leading-tight">
              6 Reasons to Enrol in IELTS Online Training at <br />
              <span className="text-[#d90f40]">Apex Edge</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-4 xl:gap-6 px-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group flex flex-col items-center"
              >
                {/* Circular Header with Icon - Matches reference style */}
                <div
                  className="w-28 h-28 rounded-full border-[6px] border-white shadow-2xl z-20 flex items-center justify-center text-white mb-[-56px] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                  style={{ backgroundColor: reason.color }}
                >
                  <div className="opacity-90 group-hover:opacity-100 transition-opacity">
                    {reason.icon}
                  </div>
                </div>

                {/* Content Card with Sharp Pointed Bottom */}
                <div className="relative z-10 bg-white pt-20 pb-16 px-6 shadow-xl text-center h-full flex flex-col items-center clip-path-pointed-sharp min-h-[360px] border-t-4" style={{ borderTopColor: reason.color }}>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-40 italic">Business Infographic</p>
                  <h4 className="text-[13px] font-black text-[#1a1a1a] mb-5 leading-tight uppercase tracking-[0.05em] h-12 flex items-center justify-center border-b border-gray-100 pb-4 w-full">
                    {reason.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-gray-400 font-bold leading-relaxed px-2">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
          .clip-path-pointed-sharp {
            clip-path: polygon(0% 0%, 100% 0%, 100% 92%, 50% 100%, 0% 92%);
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
        `}} />
      </section>

      {/* Eligibility Section - Restored */}
      <section className="py-20 sm:py-32 bg-[#fdf2e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-6xl font-black text-[#1a1a1a] mb-4 sm:mb-6">
              Eligibility <span className="text-[#d90f40]">Criteria</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 font-medium max-w-3xl mx-auto">
              Wondering if you can take the IELTS? Here are the simple requirements to get started on your global journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
            {eligibilityCriteria.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[4rem] shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-center text-center border-2 border-transparent hover:border-[#d90f40]/5"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-[#d90f40]/5 flex items-center justify-center mb-6 sm:mb-8">
                  {item.icon}
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-[#1a1a1a] mb-4">{item.title}</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote/CTA Section - Restored */}


      {/* 8+ Band CTA Banner - Redesigned based on Image 4 */}
      {/* <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-[#d90f40] px-8 py-0 sm:px-16"
          > */}
      {/* Background elements like Image 4 */}
      {/* <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 left-10 w-20 h-full bg-white rotate-12" />
              <div className="absolute top-0 left-40 w-10 h-full bg-white rotate-12" />
            </div> */}

      {/* <div className="relative z-10 grid lg:grid-cols-[auto,1fr] gap-12 items-center"> */}
      {/* Guy on Left like Image 4 */}
      {/* <div className="relative hidden lg:block w-[400px] h-[350px]">
                <img
                  src="/students/ielts.png"
                  alt="Student"
                  className="absolute bottom-0 left-0 w-full h-[450px] object-cover object-top scale-110"
                />
              </div> */}

      {/* <div className="text-right py-12 sm:py-16">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                  Free online IELTS <br /> Real Mock tests <br />
                  <span className="text-white/90 text-2xl sm:text-4xl">with Explanation</span>
                </h2>
                <div className="flex justify-end gap-6 items-center">
                  <Link to="/book-session" className="inline-flex items-center justify-center px-12 py-5 bg-white text-[#d90f40] rounded-xl font-black text-lg sm:text-xl hover:bg-gray-50 transition-all shadow-2xl active:scale-95">
                    Take a test
                  </Link>
                </div>
              </div> */}
      {/* </div>
          </motion.div>
        </div>
      </section> */}

      {/* Girl Banner - Height reduced and fixed based on Image 2 */}
      <section className="py-6 sm:py-10 px-4 sm:px-6 lg:px-12 bg-white relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-visible rounded-3xl bg-[#d90f40] px-8 py-6 sm:px-16 sm:py-8 min-h-[160px] flex items-center"
          >
            <div className="relative z-10 grid lg:grid-cols-[1fr,350px] gap-12 items-center w-full">
              <div className="text-left">
                <h2 className="text-2xl sm:text-4xl font-black text-white mb-4 leading-tight tracking-tight">
                  Need an 8 or Above Band in IELTS? <br />
                  <span className="text-white/90">Enroll for a Demo Class!</span>
                </h2>
                <Link to="/book-session" className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#d90f40] rounded-xl font-black text-sm sm:text-base hover:bg-gray-50 transition-all shadow-xl active:scale-95">
                  Book A Free Session Now
                </Link>
              </div>

              <div className="relative hidden lg:block h-[100px]">
                {/* Fixed Image Container based on Image 2 style */}
                <div className="absolute -top-[160px] -right-[40px] w-[380px] h-[380px] z-30">
                  <div className="relative w-full h-full">
                    {/* Decorative squircle ring */}
                    <div className="absolute inset-0 border-2 border-white/20 rounded-[4rem] rotate-12 scale-95 translate-y-4" />
                    <div className="w-full h-full rounded-[4.5rem] overflow-hidden border-8 border-white shadow-2xl bg-white transform -rotate-3 hover:rotate-0 transition-all duration-700 ease-out">
                      <img
                        src="/students/group.png"
                        alt="Student"
                        className="w-full h-full object-cover scale-110 object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ApexEdgeFooter />
    </div>
  );
}

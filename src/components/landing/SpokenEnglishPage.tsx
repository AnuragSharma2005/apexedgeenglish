import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Users, Mic, Smile, CheckCircle, Sparkles, Play, CircleArrowRight, Heart, Star, Layout, ShieldCheck } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-[#fffcf5] overflow-x-hidden">
      <Navbar />

      {/* Energetic Hero Section */}
      <section className="relative w-full pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-bold text-xs sm:text-sm mb-6 sm:mb-8 uppercase tracking-widest mx-auto lg:mx-0">
                <Sparkles className="w-4 h-4" /> Speak with Confidence
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-[#1a1a1a] leading-tight mb-6 sm:mb-8">
                Your Voice, <br className="hidden sm:block" /> <span className="text-orange-500">Unleashed.</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#555] leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 font-medium">
                Master the art of conversation, neutralize your accent, and 
                build the magnetic personality that commands any room. 
                English is your superpower.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-6">
                <Link to="/book-session" className="px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-orange-500 text-white font-bold text-base sm:text-lg shadow-2xl shadow-orange-500/30 hover:bg-orange-600 transition-all flex items-center justify-center gap-3">
                  Start Talking Now <MessageSquare className="w-6 h-6" />
                </Link>
                <div className="flex items-center justify-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <Mic className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="font-bold text-base sm:text-lg text-[#1a1a1a]">Voice Assessment</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl opacity-20" />
              <div className="relative rounded-[5rem] overflow-hidden shadow-2xl border-[12px] border-white bg-white rotate-3">
                <img 
                  src="/students/spoken.png" 
                  alt="Spoken English Student" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute top-10 left-10 p-6 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-orange-100 flex items-center gap-4 animate-bounce">
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white">
                    <Heart className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <p className="font-black text-black leading-none text-xl">100%</p>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Confidence Boost</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Interactive Section - Based on Image 1 & 2 */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-6xl font-black text-[#1a1a1a] mb-4">
              Apex Edge’s <span className="text-orange-500">Highlights</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium">Take a sneak peek into the key features of our spoken English classes:</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Tabs - Mobile Scrollable / Desktop Vertical */}
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-visible gap-4 pb-4 sm:pb-0 no-scrollbar snap-x">
              {highlightsData.map((item, index) => (
                <motion.div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`cursor-pointer shrink-0 sm:shrink-1 snap-start p-4 sm:p-6 rounded-2xl sm:rounded-3xl border-2 transition-all duration-300 flex items-center gap-4 sm:gap-6 min-w-[200px] sm:min-w-0 ${
                    activeTab === index 
                    ? "bg-white border-orange-500 shadow-xl shadow-orange-500/10 sm:-translate-x-4" 
                    : "bg-gray-50 border-transparent hover:bg-white hover:border-orange-200"
                  }`}
                >
                  <span className={`text-base sm:text-xl font-black ${activeTab === index ? "text-orange-500" : "text-gray-400"}`}>
                    {item.id}
                  </span>
                  <h3 className={`text-base sm:text-2xl font-bold ${activeTab === index ? "text-black" : "text-gray-500"}`}>
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </div>

            {/* Right Content Reveal */}
            <div className="relative mt-8 lg:mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#fef9f0] rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <img 
                      src={highlightsData[activeTab].image} 
                      className="w-full h-[250px] sm:h-[400px] object-cover rounded-3xl sm:rounded-[3rem] mb-6 sm:mb-10 shadow-lg border-4 border-white"
                      alt="Highlight" 
                    />
                    <div className="flex items-center gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-lg sm:text-xl">
                        {highlightsData[activeTab].id.replace(/^0/, '')}
                      </div>
                      <h4 className="text-2xl sm:text-3xl font-black text-[#1a1a1a]">{highlightsData[activeTab].title}</h4>
                    </div>
                    <p className="text-base sm:text-xl text-gray-600 leading-relaxed font-medium">
                      {highlightsData[activeTab].desc}
                    </p>
                  </div>
                  {/* Decorative background shape */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Alternating Section - Based on Image 3, 4, 5 */}
      <section className="py-32 bg-[#fffcf5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-4xl sm:text-6xl font-black text-[#1a1a1a] leading-tight">
              Why Our Online <span className="text-orange-500">English Speaking</span> Classes <br />
              Are the Best Option for You?
            </h2>
            <p className="mt-6 text-xl text-gray-500 font-medium">The benefits of choosing our online English-speaking classes are as follows:</p>
          </div>

          <div className="space-y-40">
            {/* Feature 1: Affiliated Trainers */}
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Layout className="w-16 h-16 text-orange-500 mb-8" />
                <h3 className="text-4xl font-black text-[#1a1a1a] mb-8">Affiliated Trainers</h3>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  At Apex Edge, our trainers are not only certified but also bring years of practical 
                  experience to the table. They are dedicated to enhancing your learning experience 
                  through personalized attention and customized lesson plans. Each trainer is well-versed 
                  in the latest teaching methodologies, ensuring you receive high-quality coaching 
                  tailored to your individual needs.
                </p>
              </motion.div>
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500/10 rounded-[5rem] rotate-6 scale-105" />
                <img 
                  src="/students/group.png" 
                  className="relative rounded-[5rem] w-full h-[500px] object-cover shadow-2xl border-4 border-white [clip-path:polygon(25%_0%,100%_0%,100%_100%,0%_100%,0%_25%)]" 
                  alt="Affiliated Trainers" 
                />
              </div>
            </div>

            {/* Feature 2: Flexible Scheduling */}
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-blue-500/10 rounded-[5rem] -rotate-6 scale-105" />
                <img 
                  src="/students/ielts.png" 
                  className="relative rounded-[5rem] w-full h-[500px] object-cover shadow-2xl border-4 border-white [clip-path:polygon(0%_0%,75%_0%,100%_25%,100%_100%,0%_100%)]" 
                  alt="Flexible Scheduling" 
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <Smile className="w-16 h-16 text-blue-500 mb-8" />
                <h3 className="text-4xl font-black text-[#1a1a1a] mb-8">Flexible Scheduling</h3>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  We understand that everyone has unique schedules, which is why our online classes 
                  offer exceptional flexibility. You can book sessions at times that suit your lifestyle, 
                  whether it's early morning, late evening, or even weekends. This flexibility allows you 
                  to balance your learning with other commitments, ensuring that you receive focused 
                  attention from our trainers without feeling rushed or overwhelmed.
                </p>
              </motion.div>
            </div>

            {/* Feature 3: Recognised Certification */}
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <ShieldCheck className="w-16 h-16 text-emerald-500 mb-8" />
                <h3 className="text-4xl font-black text-[#1a1a1a] mb-8">Recognised Certification</h3>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  Upon successful completion of your course, you will receive a recognised 
                  certification from Apex Edge, which enhances your credentials and career 
                  prospects. Our certifications are acknowledged by various educational institutions 
                  and employers, making them valuable assets in your professional journey.
                </p>
              </motion.div>
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/10 rounded-[5rem] rotate-3 scale-105" />
                <img 
                  src="/students/celpip.png" 
                  className="relative rounded-[5rem] w-full h-[500px] object-cover shadow-2xl border-4 border-white [clip-path:polygon(50%_0%,100%_38%,82%_100%,18%_100%,0%_38%)]" 
                  alt="Recognised Certification" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community / Practice Section - Restored from previous step */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div>
               <h2 className="text-5xl sm:text-7xl font-black text-[#1a1a1a] mb-12 leading-tight">
                 Learn by <span className="text-orange-500">Doing.</span> <br /> Speak by Practice.
               </h2>
               <div className="space-y-8">
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
                    className="flex items-center gap-4 text-xl font-bold text-gray-700"
                   >
                     <CheckCircle className="w-8 h-8 text-green-500" />
                     {item}
                   </motion.div>
                 ))}
               </div>
               <Link to="/book-session" className="mt-16 px-12 py-6 rounded-full bg-black text-white font-black text-xl hover:bg-orange-500 transition-colors inline-block">
                 Join the Free Session
               </Link>
             </div>

             <div className="relative grid grid-cols-2 gap-6">
                <div className="space-y-6 pt-12">
                  <img src="/students/group.png" className="rounded-[3rem] w-full h-[300px] object-cover shadow-2xl" alt="study" />
                  <div className="p-8 bg-orange-500 rounded-[3rem] text-white">
                     <Smile className="w-12 h-12 mb-4" />
                     <h4 className="text-2xl font-bold mb-2">98% Satisfied</h4>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-8 bg-blue-500 rounded-[3rem] text-white">
                     <MessageSquare className="w-12 h-12 mb-4" />
                     <h4 className="text-2xl font-bold mb-2">24/7 Support</h4>
                  </div>
                  <img src="/students/ielts.png" className="rounded-[3rem] w-full h-[300px] object-cover shadow-2xl" alt="study" />
                </div>
             </div>
           </div>
        </div>
      </section>

      <ApexEdgeFooter />
    </div>
  );
}

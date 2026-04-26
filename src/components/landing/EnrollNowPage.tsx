import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Globe, 
  BookOpen, 
  ShieldCheck,
  Send
} from 'lucide-react';
import { Navbar } from '../Navbar';
import { ApexEdgeFooter } from '../ApexEdgeFooter';

const courses = [
  {
    id: 'ielts',
    name: 'IELTS Mastery',
    tag: 'Academic & General',
    price: 'Custom Plans',
    features: ['One-on-One Mentoring', 'Mock Tests', 'Writing Feedback'],
    color: '#d90f40',
    icon: Star,
  },
  {
    id: 'pte',
    name: 'PTE Precision',
    tag: 'Fast-Track',
    price: 'Custom Plans',
    features: ['AI Scoring Insight', 'Speaking Practice', 'Grammar Modules'],
    color: '#2c5aa0',
    icon: Zap,
  },
  {
    id: 'celpip',
    name: 'CELPIP Ready',
    tag: 'Canadian PR',
    price: 'Custom Plans',
    features: ['PR Targeted Training', 'Listening Skills', 'Reading Prep'],
    color: '#f59e0b',
    icon: ShieldCheck,
  },
  {
    id: 'business',
    name: 'Business Comm.',
    tag: 'Corporate Focus',
    price: 'Custom Plans',
    features: ['Email Etiquette', 'Presentation Skills', 'Meeting Prep'],
    color: '#10b981',
    icon: Globe,
  },
  {
    id: 'spoken',
    name: 'Spoken English',
    tag: 'Fluency Focus',
    price: 'Custom Plans',
    features: ['Daily Interaction', 'Confidence Building', 'Vocabulary'],
    color: '#1a1a1a',
    icon: Sparkles,
  }
];

export function EnrollNowPage() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0].id);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentCourse = courses.find(c => c.id === selectedCourse);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append('form_type', 'enroll');
    
    // GOOGLE SHEETS URL (FOR ENROLLMENT ONLY)
    const ENROLL_SHEET_URL = "https://script.google.com/macros/s/AKfycbzaB_sYHzuT7DyGHBFDU7C1Or7N7XSSUlT_Z3dJy1wjS241xSzXx3AQhwuesPJJiARs/exec"; 

    try {
      // 1. Submit to FormSubmit (Email)
      const formSubmitPromise = fetch("https://formsubmit.co/ajax/adityasharma08093@gmail.com", {
        method: "POST",
        body: formData
      });

      // 2. Submit to Google Sheets (Using URLSearchParams for better GAS compatibility)
      let googleSheetPromise: Promise<any> = Promise.resolve();
      if (ENROLL_SHEET_URL) {
        const params = new URLSearchParams();
        formData.forEach((value, key) => params.append(key, value.toString()));

        googleSheetPromise = fetch(ENROLL_SHEET_URL, {
          method: "POST",
          mode: "no-cors", // Essential for Google Apps Script
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString()
        });
      }

      await Promise.all([formSubmitPromise, googleSheetPromise]);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#fdf2e8] overflow-x-hidden pt-36">
      <Navbar />

      <div className="flex-grow">
        {/* Creative Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-12 py-20 overflow-hidden">
          {/* Animated Background Orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[#d90f40]/5 rounded-full blur-[100px] pointer-events-none"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-1/2 -right-20 w-[600px] h-[600px] bg-[#2c5aa0]/5 rounded-full blur-[120px] pointer-events-none"
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d90f40]/10 text-[#d90f40] font-black text-xs uppercase tracking-widest mb-6"
              >
                <Sparkles className="w-4 h-4" />
                Begin Your Transformation
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl sm:text-8xl font-black text-[#1a1a1a] leading-none tracking-tighter mb-8"
              >
                CHOOSE YOUR <br />
                <span className="text-[#d90f40]">FUTURE PATH.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-[#555] max-w-2xl mx-auto font-medium"
              >
                Join India's most innovative English learning platform. 
                Select a course below and take the first step towards your global dreams.
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-[1fr_450px] gap-12 items-start">
              {/* Course Selection Cards */}
              <div className="space-y-6">
                <div className="mb-8 text-left">
                  <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-widest border-l-4 border-[#d90f40] pl-4">
                    CHOOSE SUBJECT FOR ENROLLING
                  </h2>
                </div>
                {courses.map((course) => (
                  <motion.div
                    key={course.id}
                    layoutId={course.id}
                    onClick={() => {
                      setSelectedCourse(course.id);
                      if (window.innerWidth < 1024) {
                        const formElement = document.getElementById('enroll-form');
                        formElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className={`relative cursor-pointer rounded-[2.5rem] p-8 transition-all duration-500 border-2 ${
                      selectedCourse === course.id 
                      ? 'bg-white border-[#d90f40] shadow-2xl scale-[1.02]' 
                      : 'bg-white/50 border-transparent hover:bg-white/80'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div 
                          className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg"
                          style={{ backgroundColor: course.color }}
                        >
                          <course.icon className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-black text-[#1a1a1a]">{course.name}</h3>
                          <p className="text-[#666] font-bold uppercase text-xs tracking-widest mt-1">{course.tag}</p>
                        </div>
                      </div>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        selectedCourse === course.id ? 'bg-[#d90f40] text-white' : 'bg-gray-100 text-gray-400'
                      }`}>
                        <ChevronRight className="w-6 h-6" />
                      </div>
                    </div>

                    <AnimatePresence>
                      {selectedCourse === course.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-8 pt-8 border-t border-gray-100 overflow-hidden"
                        >
                          <div className="grid sm:grid-cols-3 gap-6">
                            {course.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm font-bold text-[#444]">
                                <CheckCircle2 className="w-5 h-5 text-[#2c5aa0]" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Enrollment Form */}
              <motion.div
                id="enroll-form"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-[3rem] p-10 shadow-2xl shadow-[#d90f40]/10 border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d90f40]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <h4 className="text-2xl font-black text-[#1a1a1a] mb-2">Quick Enrollment</h4>
                <p className="text-gray-500 mb-8 font-medium">For <span className="text-[#d90f40] font-bold">{currentCourse?.name}</span></p>

                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form 
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      {/* Hidden field for selected course */}
                      <input type="hidden" name="Selected Course" value={currentCourse?.name || ''} />
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <label className="space-y-2 text-sm font-black text-[#1a1a1a] uppercase tracking-widest pl-1">
                            Full Name
                            <input 
                              type="text" 
                              name="Name"
                              required
                              placeholder="Aditya Sharma"
                              className="w-full h-14 bg-gray-50 rounded-2xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#d90f40] px-6 outline-none transition-all font-medium text-[#1a1a1a]"
                            />
                          </label>
                          <label className="space-y-2 text-sm font-black text-[#1a1a1a] uppercase tracking-widest pl-1">
                            City
                            <input 
                              type="text" 
                              name="city"
                              required
                              placeholder="Chandigarh"
                              className="w-full h-14 bg-gray-50 rounded-2xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#d90f40] px-6 outline-none transition-all font-medium text-[#1a1a1a]"
                            />
                          </label>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <label className="space-y-2 text-sm font-black text-[#1a1a1a] uppercase tracking-widest pl-1">
                            Email Address
                            <input 
                              type="email" 
                              name="Email"
                              required
                              placeholder="aditya@example.com"
                              className="w-full h-14 bg-gray-50 rounded-2xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#d90f40] px-6 outline-none transition-all font-medium text-[#1a1a1a]"
                            />
                          </label>
                          <label className="space-y-2 text-sm font-black text-[#1a1a1a] uppercase tracking-widest pl-1">
                            WhatsApp Number
                            <input 
                              type="tel" 
                              name="Phone no"
                              required
                              placeholder="+91 98765 43210"
                              className="w-full h-14 bg-gray-50 rounded-2xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#d90f40] px-6 outline-none transition-all font-medium text-[#1a1a1a]"
                            />
                          </label>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <label className="space-y-2 text-sm font-black text-[#1a1a1a] uppercase tracking-widest pl-1">
                            Qualification
                            <select 
                              name="Qualification"
                              className="w-full h-14 bg-gray-50 rounded-2xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#d90f40] px-6 outline-none transition-all font-medium text-[#1a1a1a] appearance-none"
                            >
                              <option>High School (10th)</option>
                              <option>Senior Secondary (12th)</option>
                              <option>Undergraduate (UG)</option>
                              <option>Postgraduate (PG)</option>
                              <option>Working Professional</option>
                            </select>
                          </label>
                          <label className="space-y-2 text-sm font-black text-[#1a1a1a] uppercase tracking-widest pl-1">
                            Reason to Join
                            <select 
                              name="Reason"
                              className="w-full h-14 bg-gray-50 rounded-2xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#d90f40] px-6 outline-none transition-all font-medium text-[#1a1a1a] appearance-none"
                            >
                              <option>Study Abroad</option>
                              <option>Job / Work Permit</option>
                              <option>Improve Communication</option>
                              <option>Other</option>
                            </select>
                          </label>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <label className="space-y-2 text-sm font-black text-[#1a1a1a] uppercase tracking-widest pl-1">
                            English Proficiency
                            <select 
                              name="English Level"
                              className="w-full h-14 bg-gray-50 rounded-2xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#d90f40] px-6 outline-none transition-all font-medium text-[#1a1a1a] appearance-none"
                            >
                              <option>Beginner</option>
                              <option>Intermediate</option>
                              <option>Advanced</option>
                            </select>
                          </label>
                          <label className="space-y-2 text-sm font-black text-[#1a1a1a] uppercase tracking-widest pl-1">
                            Preferred Batch
                            <select 
                              name="Batch"
                              className="w-full h-14 bg-gray-50 rounded-2xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#d90f40] px-6 outline-none transition-all font-medium text-[#1a1a1a] appearance-none"
                            >
                              <option>Morning (7 AM - 10 AM)</option>
                              <option>Afternoon (1 PM - 4 PM)</option>
                              <option>Evening (6 PM - 9 PM)</option>
                            </select>
                          </label>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest pl-1">Any Specific Suggestions?</label>
                          <textarea 
                            name="Suggestion"
                            placeholder="Tell us about your goals..."
                            className="w-full h-32 bg-gray-50 rounded-3xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#d90f40] p-6 outline-none transition-all font-medium text-[#1a1a1a] resize-none"
                          ></textarea>
                        </div>

                        <div className="flex items-center gap-4 group cursor-pointer">
                          <input 
                            type="checkbox" 
                            id="consent" 
                            name="Consent to contact"
                            required
                            className="w-6 h-6 rounded-lg border-2 border-gray-200 text-[#d90f40] focus:ring-[#d90f40] cursor-pointer"
                          />
                          <label htmlFor="consent" className="text-xs font-bold text-gray-500 leading-tight">
                            I agree to be contacted by Apex Edge team via Email, WhatsApp, or Call for further enrollment details.
                          </label>
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full h-16 bg-[#1a1a1a] text-white rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-[#d90f40] transition-all shadow-xl shadow-gray-200 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Processing...
                            </>
                          ) : (
                            <>
                              Enroll Now
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>
                        <p className="text-[10px] text-center text-gray-400 mt-4 uppercase tracking-[0.2em] font-bold">
                          Expert callback within 24 hours
                        </p>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-24 h-24 bg-[#2d7f72] text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-[#2d7f72]/30">
                        <ShieldCheck className="w-12 h-12" />
                      </div>
                      <h5 className="text-3xl font-black text-[#1a1a1a] mb-4">You're on the list!</h5>
                      <p className="text-gray-500 font-medium mb-8">
                        Our head counselor will reach out to you on WhatsApp within 2 hours.
                      </p>
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="text-[#d90f40] font-black text-sm uppercase tracking-widest border-b-2 border-[#d90f40]"
                      >
                        Enroll in another course
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>


      </div>

      <ApexEdgeFooter />
    </main>
  );
}

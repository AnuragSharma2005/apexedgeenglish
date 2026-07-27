import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  Star,
  Zap,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ChevronDown,
  BookOpen,
  Trophy,
  Users
} from 'lucide-react';
import { Navbar } from '../Navbar';
import { ApexEdgeFooter } from '../ApexEdgeFooter';

export function EnrollNowPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [method, setMethod] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  const todayString = useMemo(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }, []);

  const formReady = useMemo(
    () =>
      name.trim() &&
      email.trim() &&
      phone.trim() &&
      city.trim() &&
      country.trim() &&
      selectedDate.trim() &&
      selectedCourse.trim() &&
      method.trim() &&
      acceptedTerms,
    [name, email, phone, city, country, selectedDate, selectedCourse, method, acceptedTerms]
  );

  const scrollToForm = () => {
    const element = document.getElementById("registration-form-section");
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleResetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCity("");
    setCountry("");
    setSelectedDate("");
    setSelectedCourse("");
    setMethod("");
    setSuggestion("");
    setAcceptedTerms(false);
    setIsSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formReady || isSubmitting) return;

    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append('form_type', 'enroll');

    const ENROLL_SHEET_URL = "https://script.google.com/macros/s/AKfycbzaB_sYHzuT7DyGHBFDU7C1Or7N7XSSUlT_Z3dJy1wjS241xSzXx3AQhwuesPJJiARs/exec";

    try {
      const formSubmitPromise = fetch("https://formsubmit.co/ajax/apexedgeenglish@gmail.com", {
        method: "POST",
        body: formData
      });

      let googleSheetPromise: Promise<any> = Promise.resolve();
      if (ENROLL_SHEET_URL) {
        const params = new URLSearchParams();
        formData.forEach((value, key) => params.append(key, value.toString()));

        googleSheetPromise = fetch(ENROLL_SHEET_URL, {
          method: "POST",
          mode: "no-cors",
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
    <main className="min-h-screen flex flex-col bg-[#f3dde2] overflow-x-hidden pt-28">
      <Navbar />

      <div className="flex-grow">
        {/* Modern Enrollment Hero Banner - Split-Screen Layout */}
        <section className="relative max-w-7xl mx-auto overflow-hidden px-4 sm:px-6 lg:px-12 py-8 lg:py-14">
          {/* Ambient Decorative Orbs */}
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#d90f40]/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#d90f40]/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
            {/* Left Column: Creative text content with slanted sticker badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d90f40]/10 border border-[#d90f40]/20 text-[#d90f40] font-black text-[10px] uppercase tracking-widest shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Apex Edge Admissions Open
              </div>

              <h1 className="leading-[1.1] tracking-tight uppercase select-none text-center lg:text-left">
                <span className="block text-xs sm:text-sm font-black text-gray-400 tracking-[0.25em] mb-2">
                  GREAT TUTORS.
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-7xl font-black text-[#1a1a1a]">
                  GET DESIRED
                </span>
                <span className="relative inline-block my-2">
                  <span className="absolute inset-0 bg-[#d90f40] rounded-2xl transform -rotate-1 -skew-x-3 shadow-lg shadow-[#d90f40]/20" />
                  <span className="relative text-white px-6 py-2 block font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-normal normal-case italic">
                    Right Results!
                  </span>
                </span>
                <br />
                <span className="block text-4xl sm:text-5xl lg:text-7xl font-black text-[#1a1a1a] mt-1">
                  IN ENGLISH EXAMS
                </span>
              </h1>

              <p className="text-sm sm:text-base text-gray-500 font-bold border-l-2 border-[#d90f40]/30 pl-4 leading-relaxed max-w-md">
                Enroll today in India's leading training hub for <span className="text-[#1a1a1a]">IELTS, PTE & CELPIP</span> and experience customized results-driven preparation.
              </p>


            </motion.div>

            {/* Right Column: Stacked Course Highlight Cards Deck - Static Visual Layout */}
            <div className="relative w-full max-w-[480px] h-[400px] sm:h-[450px] mx-auto mt-8 lg:mt-0 px-4 select-none">

              {/* Card 1: IELTS Mastery */}
              <div
                className="w-full bg-white rounded-3xl p-5 border border-[#d90f40]/10 shadow-xl absolute top-0 left-0 right-0 max-w-[400px] mx-auto z-30 transform rotate-2"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#d90f40]/10 text-[#d90f40] font-black text-[9px] uppercase tracking-wider">
                    IELTS Mastery
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#d90f40]/10 flex items-center justify-center text-[#d90f40]">
                    <Star className="w-4.5 h-4.5 fill-[#d90f40]" />
                  </div>
                </div>
                <h3 className="text-lg font-black text-[#1a1a1a] uppercase tracking-tight">Band 8.5+ Target</h3>
                <p className="text-xs text-gray-500 font-bold mt-1 leading-relaxed">
                  1-on-1 custom strategies, full speaking assessments & mock exam checkups daily.
                </p>
              </div>

              {/* Card 2: PTE Precision */}
              <div
                className="w-full bg-white rounded-3xl p-5 border border-blue-500/10 shadow-xl absolute top-[135px] left-0 right-0 max-w-[400px] mx-auto z-20 transform -rotate-3"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 font-black text-[9px] uppercase tracking-wider">
                    PTE Precision
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600">
                    <Zap className="w-4.5 h-4.5 fill-blue-500" />
                  </div>
                </div>
                <h3 className="text-lg font-black text-[#1a1a1a] uppercase tracking-tight">79+ Target Aim</h3>
                <p className="text-xs text-gray-500 font-bold mt-1 leading-relaxed">
                  Pearson AI algorithm scoring checkups, repeated test strategies & templates.
                </p>
              </div>

              {/* Card 3: CELPIP Ready */}
              <div
                className="w-full bg-white rounded-3xl p-5 border border-amber-500/10 shadow-xl absolute top-[270px] left-0 right-0 max-w-[400px] mx-auto z-10 transform rotate-4"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 font-black text-[9px] uppercase tracking-wider">
                    CELPIP Ready
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600">
                    <ShieldCheck className="w-4.5 h-4.5" />
                  </div>
                </div>
                <h3 className="text-lg font-black text-[#1a1a1a] uppercase tracking-tight">CLB 9+ Canadian PR</h3>
                <p className="text-xs text-gray-500 font-bold mt-1 leading-relaxed">
                  Specialized feedback pipelines, Canadian PR accent checks & mock exams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Enrollment Pointers ("important baate") */}
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-12 border-t border-[#d90f40]/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#d90f40] font-black text-xs uppercase tracking-widest pl-1">Enrollment Guidelines</span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#1a1a1a] uppercase mt-2 tracking-tight">Important Things To Know</h2>
              <p className="text-sm sm:text-base text-gray-500 font-bold max-w-xl mx-auto mt-3">Read through our core training blueprints designed to secure target scores efficiently.</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-[#f3dde2] p-8 rounded-[2rem] border border-[#d90f40]/5 flex flex-col justify-between hover:scale-[1.03] transition-all shadow-sm">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#d90f40] text-white flex items-center justify-center mb-6 shadow-md">
                    <Star className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black text-[#1a1a1a] mb-3">1-on-1 Mentoring</h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold leading-relaxed">Tailored, custom blueprints matching your modules' strengths and addressing vocabulary or grammar weaknesses directly.</p>
                </div>
              </div>

              <div className="bg-[#f3dde2] p-8 rounded-[2rem] border border-[#d90f40]/5 flex flex-col justify-between hover:scale-[1.03] transition-all shadow-sm">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#d90f40] text-white flex items-center justify-center mb-6 shadow-md">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black text-[#1a1a1a] mb-3">Evaluation Blueprint</h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold leading-relaxed">Daily writing reviews and live speaking checks graded by experienced IELTS, PTE, and CELPIP instructors.</p>
                </div>
              </div>

              <div className="bg-[#f3dde2] p-8 rounded-[2rem] border border-[#d90f40]/5 flex flex-col justify-between hover:scale-[1.03] transition-all shadow-sm">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#d90f40] text-white flex items-center justify-center mb-6 shadow-md">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black text-[#1a1a1a] mb-3">Target Batch Time</h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold leading-relaxed">Flexible morning, afternoon, and evening schedules configured to match college-going and working student routines.</p>
                </div>
              </div>

              <div className="bg-[#f3dde2] p-8 rounded-[2rem] border border-[#d90f40]/5 flex flex-col justify-between hover:scale-[1.03] transition-all shadow-sm">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#d90f40] text-white flex items-center justify-center mb-6 shadow-md">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black text-[#1a1a1a] mb-3">Premium Study Banks</h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold leading-relaxed">All-inclusive mock sheets, template packages, descriptive outlines, and exam-exact mock systems provided free.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Form Section - Boarding Pass Design */}
        <section id="registration-form-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f3dde2]">
          <div className="max-w-5xl mx-auto">

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="boarding-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Boarding Pass Ticket Container */}
                  <div className="w-full bg-white rounded-[2rem] border border-[#d90f40]/10 shadow-[0_20px_50px_rgba(217,15,64,0.05)] overflow-hidden flex flex-col md:flex-row relative">

                    {/* Decorative Background Orb */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#d90f40]/2 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    {/* Left Part: Passenger Info */}
                    <div className="flex-grow p-6 sm:p-10 space-y-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[#d90f40] font-black text-[10px] uppercase tracking-[0.2em]">Registration Pass</span>
                          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight mt-1">Enrollment Details</h2>
                          <p className="text-xs text-gray-400 font-bold mt-1">Please enter your details to enroll and secure your customized batch timing.</p>
                        </div>

                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <label className="space-y-1.5 block text-[10px] font-black text-gray-900 uppercase tracking-widest pl-1">
                          Full Name
                          <input
                            type="text"
                            name="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                            required
                            className="w-full h-12 px-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#d90f40]/30 focus:bg-white text-sm text-[#1a1a1a] font-bold transition-all placeholder-gray-500"
                          />
                        </label>

                        <label className="space-y-1.5 block text-[10px] font-black text-gray-900 uppercase tracking-widest pl-1">
                          Email Address
                          <input
                            type="email"
                            name="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your.email@company.com"
                            required
                            className="w-full h-12 px-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#d90f40]/30 focus:bg-white text-sm text-[#1a1a1a] font-bold transition-all placeholder-gray-500"
                          />
                        </label>

                        <label className="space-y-1.5 block text-[10px] font-black text-gray-900 uppercase tracking-widest pl-1">
                          WhatsApp Number
                          <input
                            type="tel"
                            name="Phone no"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+91 98765 43210"
                            required
                            className="w-full h-12 px-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#d90f40]/30 focus:bg-white text-sm text-[#1a1a1a] font-bold transition-all placeholder-gray-500"
                          />
                        </label>

                        <label className="space-y-1.5 block text-[10px] font-black text-gray-900 uppercase tracking-widest pl-1">
                          City
                          <input
                            type="text"
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Enter your city"
                            required
                            className="w-full h-12 px-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#d90f40]/30 focus:bg-white text-sm text-[#1a1a1a] font-bold transition-all placeholder-gray-500"
                          />
                        </label>

                        <label className="space-y-1.5 block text-[10px] font-black text-gray-900 uppercase tracking-widest pl-1 relative">
                          Target Country
                          <select
                            name="Country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                            className="w-full h-12 px-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#d90f40]/30 text-sm text-[#1a1a1a] font-bold transition-all appearance-none cursor-pointer pr-10"
                          >
                            <option value="" disabled>Select Country</option>
                            <option value="Canada">Canada</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Australia">Australia</option>
                            <option value="United States">United States</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Other">Other</option>
                          </select>
                          <div className="absolute right-5 bottom-3.5 pointer-events-none text-gray-900">
                            <ChevronDown className="w-3.5 h-3.5" />
                          </div>
                        </label>

                        <label className="space-y-1.5 block text-[10px] font-black text-gray-900 uppercase tracking-widest pl-1">
                          Start Date
                          <input
                            type="date"
                            name="Date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            min={todayString}
                            required
                            className={`w-full h-12 px-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#d90f40]/30 focus:bg-white text-sm font-bold transition-all cursor-pointer ${selectedDate ? 'text-[#1a1a1a]' : 'text-gray-500'}`}
                          />
                        </label>
                      </div>

                      {/* Barcode details in left footer */}
                      <div className="flex items-center gap-0.5 opacity-25 pt-4 select-none">
                        <div className="w-1 h-7 bg-black" />
                        <div className="w-0.5 h-7 bg-black" />
                        <div className="w-1.5 h-7 bg-black" />
                        <div className="w-0.5 h-7 bg-black" />
                        <div className="w-2.5 h-7 bg-black" />
                        <div className="w-1 h-7 bg-black" />
                        <div className="w-0.5 h-7 bg-black" />
                        <div className="w-1.5 h-7 bg-black" />
                        <span className="text-[9px] font-mono ml-3 tracking-widest text-[#1a1a1a]">APEX-SUCCESS-2026</span>
                      </div>
                    </div>

                    {/* Perforation dashed line with circular cutouts on borders */}
                    <div className="hidden md:block w-px border-l-2 border-dashed border-[#d90f40]/25 relative shrink-0">
                      <div className="absolute top-[-10px] left-[-11px] w-5 h-5 rounded-full bg-[#f3dde2] border border-[#d90f40]/5" />
                      <div className="absolute bottom-[-10px] left-[-11px] w-5 h-5 rounded-full bg-[#f3dde2] border border-[#d90f40]/5" />
                    </div>

                    {/* Right Part: Ticket Stub */}
                    <div className="w-full md:w-[320px] bg-gray-50/50 p-6 sm:p-10 flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-100 shrink-0">
                      <div className="space-y-4">
                        <label className="space-y-1.5 block text-[10px] font-black text-gray-900 uppercase tracking-widest pl-1 relative">
                          Choose Subject
                          <select
                            name="Selected Course"
                            value={selectedCourse}
                            onChange={(e) => setSelectedCourse(e.target.value)}
                            required
                            className="w-full h-11 px-4 rounded-xl bg-white border border-gray-100 focus:outline-none focus:border-[#d90f40]/30 text-xs text-[#1a1a1a] font-bold transition-all appearance-none cursor-pointer pr-10"
                          >
                            <option value="" disabled>Select course</option>
                            <option value="IELTS Mastery (Academic & General)">IELTS Mastery (Academic & General)</option>
                            <option value="PTE Precision (Fast-Track)">PTE Precision (Fast-Track)</option>
                            <option value="AI Scoring Insight (Speaking Practice, Grammar Modules)">AI Scoring Insight (Speaking Practice, Grammar Modules)</option>
                            <option value="CELPIP Ready (Canadian PR)">CELPIP Ready (Canadian PR)</option>
                            <option value="Business Comm. (Corporate Focus)">Business Comm. (Corporate Focus)</option>
                            <option value="Spoken English (Fluency Focus)">Spoken English (Fluency Focus)</option>
                          </select>
                          <div className="absolute right-4 bottom-3.5 pointer-events-none text-gray-900">
                            <ChevronDown className="w-3.5 h-3.5" />
                          </div>
                        </label>

                        <label className="space-y-1.5 block text-[10px] font-black text-gray-900 uppercase tracking-widest pl-1 relative">
                          Contact Method
                          <select
                            name="Contact_Method"
                            value={method}
                            onChange={(e) => setMethod(e.target.value)}
                            required
                            className="w-full h-11 px-4 rounded-xl bg-white border border-gray-100 focus:outline-none focus:border-[#d90f40]/30 text-xs text-[#1a1a1a] font-bold transition-all appearance-none cursor-pointer pr-10"
                          >
                            <option value="" disabled>Select method</option>
                            <option value="WhatsApp">WhatsApp</option>
                            <option value="Phone Call">Phone Call</option>
                            <option value="Email">Email</option>
                          </select>
                          <div className="absolute right-4 bottom-3.5 pointer-events-none text-gray-900">
                            <ChevronDown className="w-3.5 h-3.5" />
                          </div>
                        </label>

                        <label className="space-y-1.5 block text-[10px] font-black text-gray-900 uppercase tracking-widest pl-1">
                          Any suggestions?
                          <textarea
                            name="Suggestion"
                            value={suggestion}
                            onChange={(e) => setSuggestion(e.target.value)}
                            placeholder="Tell us about your goals..."
                            className="w-full h-24 p-3.5 rounded-xl bg-white border border-gray-100 focus:outline-none focus:border-[#d90f40]/30 text-xs text-[#1a1a1a] font-bold resize-none transition-all placeholder-gray-500"
                          />
                        </label>
                      </div>

                      <div className="mt-8 space-y-4">
                        <label className="flex items-start gap-2.5 text-[9px] text-gray-400 font-bold leading-tight cursor-pointer select-none">
                          <input
                            name="Consent to contact"
                            type="checkbox"
                            checked={acceptedTerms}
                            onChange={(e) => setAcceptedTerms(e.target.checked)}
                            className="mt-0.5 rounded border-gray-200 text-[#d90f40] focus:ring-[#d90f40] cursor-pointer"
                            required
                          />
                          I agree to contact from Apex Edge for enrollment details.
                        </label>

                        <button
                          type="submit"
                          disabled={!formReady || isSubmitting}
                          className="w-full h-12 rounded-xl bg-[#d90f40] text-white font-black text-xs uppercase tracking-widest hover:bg-[#b80830] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#d90f40]/10 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? "Enrolling..." : "Confirm Enrollment"}
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="boarding-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full bg-white rounded-[2rem] border border-[#d90f40]/10 shadow-[0_20px_50px_rgba(217,15,64,0.05)] p-12 text-center space-y-6 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#d90f40]/2 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                  <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-green-500 mx-auto mb-4 border border-green-100 shadow-sm animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                   <span className="inline-flex px-4 py-1.5 rounded-full bg-green-100 text-green-700 font-black text-[10px] uppercase tracking-widest">
                    Registration Confirmed
                  </span>

                  <h2 className="text-3xl font-black text-[#1a1a1a] uppercase mt-4 tracking-tight leading-none">
                    Enrolled Successfully!
                  </h2>

                  <p className="text-sm text-gray-500 font-bold max-w-sm mx-auto leading-relaxed">
                    Your enrollment details have been successfully registered. Our counselor team will reach out via preferred method within 2 hours to start your blueprint target scoring.
                  </p>

                  <div className="pt-6 border-t border-dashed border-gray-200 max-w-md mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                    <div className="space-y-1">
                      <span className="block text-[9px] text-gray-400 font-black uppercase tracking-widest">Student</span>
                      <span className="block text-xs font-black text-[#1a1a1a] uppercase truncate">{name || "Student"}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[9px] text-gray-400 font-black uppercase tracking-widest">Target Country</span>
                      <span className="block text-xs font-black text-[#1a1a1a] uppercase">{country || "Canada"}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[9px] text-gray-400 font-black uppercase tracking-widest">Start Date</span>
                      <span className="block text-xs font-black text-[#1a1a1a] uppercase">{selectedDate || "Immediate"}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[9px] text-gray-400 font-black uppercase tracking-widest">Status</span>
                      <span className="block text-xs font-black text-green-600 uppercase">Immediate</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleResetForm}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white bg-[#1a1a1a] hover:bg-[#d90f40] font-black text-[10px] uppercase tracking-widest transition-all duration-300 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Book Another Demo
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>

      <ApexEdgeFooter />
    </main>
  );
}

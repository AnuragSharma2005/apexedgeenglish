import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import studentGirl from "@/assets/student-girl.png";
import { ApexEdgeFooter } from "../ApexEdgeFooter";
import { Navbar } from "../Navbar";
import { Mail, Phone, MessageCircle, MapPin, Clock, CheckCircle2, Sparkles } from "lucide-react";

const adminEmail = "apexedge@gmail.com";
const phoneNumber = "+91 79869 01874";
const whatsappNumber = "+91 88377 35452";

export function ContactUsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [subject, setSubject] = useState("");
  const [method, setMethod] = useState("");
  const [message, setMessage] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formReady = useMemo(
    () =>
      name.trim() &&
      email.trim() &&
      phone.trim() &&
      location.trim() &&
      subject.trim() &&
      method.trim() &&
      acceptedTerms,
    [name, email, phone, location, subject, method, acceptedTerms]
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formReady || isSubmitting) return;

    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    formData.append('form_type', 'contact');
    
    // GOOGLE SHEETS URL (FOR CONTACT/INQUIRIES ONLY)
    const CONTACT_SHEET_URL = "https://script.google.com/macros/s/AKfycbw44Z6wh2WRujRvh36WnoYhXUrDN1AvcZxByIGb4gSOL6IIGznhqw06Qj8wkdda7CacNQ/exec"; 

    try {
      // Submit to both services in parallel
      const formSubmitPromise = fetch("https://formsubmit.co/ajax/adityasharma08093@gmail.com", {
        method: "POST",
        body: formData
      });

      // 2. Submit to Google Sheets (Using URLSearchParams for better GAS compatibility)
      let googleSheetPromise: Promise<any> = Promise.resolve();
      if (CONTACT_SHEET_URL) {
        const params = new URLSearchParams();
        formData.forEach((value, key) => params.append(key, value.toString()));
        
        googleSheetPromise = fetch(CONTACT_SHEET_URL, {
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
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setLocation("");
      setSubject("");
      setMethod("");
      setMessage("");
      setAcceptedTerms(false);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden bg-white text-xs sm:text-sm">
      <Navbar />

      <div className="flex-grow">
        {/* Premium Hero Section - IELTS Style */}
        <section className="relative w-full pt-32 sm:pt-48 pb-16 sm:pb-32 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
          {/* Red Curved Background Shape */}
          <div
            className="absolute top-0 left-0 w-full h-[450px] sm:h-[650px] bg-[#d90f40] z-0"
            style={{
              clipPath: 'ellipse(130% 100% at 50% 0%)'
            }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <span className="inline-block px-5 py-2 rounded-full bg-white/20 text-white font-black text-xs uppercase tracking-[0.2em] mb-6">
                  Direct Access
                </span>
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
                  GET IN <br />
                  <span className="text-white/80">TOUCH.</span>
                </h1>
                <p className="text-xl text-white/90 font-medium leading-relaxed mb-10 max-w-xl">
                  Have questions about IELTS, PTE, or Spoken English?
                  Our expert counselors are just a click away to guide
                  your global career path.
                </p>

                {/* Prominent Phone Number Display */}
                <div className="flex flex-col gap-6 mb-12 w-full">
                  <div className="flex items-center gap-6 p-6 bg-white rounded-[2rem] shadow-2xl border border-gray-100 max-w-md transform hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-[#d90f40] flex items-center justify-center text-white shrink-0 shadow-lg">
                      <Phone className="w-8 h-8" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-black text-[#d90f40] uppercase tracking-widest mb-1">CALL US DIRECTLY</p>
                      <p className="text-2xl sm:text-3xl font-black text-[#1a1a1a] tracking-tight">{phoneNumber}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Visual Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative flex justify-center w-full max-w-[400px] sm:max-w-none"
              >
                <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] flex items-center justify-center scale-110 sm:scale-100">
                  <svg className="absolute inset-0 w-full h-full -rotate-90 opacity-40" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="2" strokeDasharray="60 10 30 10 40 10" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="1" strokeDasharray="10 5" />
                  </svg>

                  <div className="relative w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] rounded-full overflow-hidden border-[10px] border-white shadow-2xl bg-white z-10 transform -rotate-3 hover:rotate-0 transition-all duration-700">
                    <img
                      src={studentGirl}
                      alt="Expert Guidance"
                      className="w-full h-full object-cover scale-110 object-top"
                    />
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -right-4 sm:bottom-10 sm:right-10 bg-white p-4 sm:p-6 rounded-3xl shadow-2xl z-20 flex items-center gap-4 border border-gray-100">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-[#d90f40] flex items-center justify-center text-white">
                      <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Support</p>
                      <p className="text-sm sm:text-lg font-black text-black">24/7 Active</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="bg-white py-16 px-4">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-3">
              <motion.div
                whileHover={{ y: -10 }}
                className="rounded-[2.5rem] border border-gray-100 bg-gray-50 p-10 shadow-sm transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#d90f40]/10 flex items-center justify-center text-[#d90f40] mb-8">
                  <Phone className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-black text-[#1a1a1a]">Phone Support</h2>
                <p className="mt-4 text-gray-500 font-medium leading-relaxed">Talk with our advisors directly for fast answers and course guidance.</p>
                <a href={`tel:${phoneNumber.replace(/\D/g, "")}`} className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-sm font-black text-[#d90f40] border border-gray-200 shadow-sm hover:bg-gray-50 transition">
                  Call Now
                </a>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="rounded-[2.5rem] border border-gray-100 bg-gray-50 p-10 shadow-sm transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#25d366]/10 flex items-center justify-center text-[#25d366] mb-8">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-black text-[#1a1a1a]">WhatsApp Chat</h2>
                <p className="mt-4 text-gray-500 font-medium leading-relaxed">Send us a message instantly and we’ll reply with all the details you need.</p>
                <a href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-sm font-black text-[#25d366] border border-gray-200 shadow-sm hover:bg-gray-50 transition">
                  Message Us
                </a>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="rounded-[2.5rem] border border-gray-100 bg-gray-50 p-10 shadow-sm transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-8">
                  <Mail className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-black text-[#1a1a1a]">Send an Email</h2>
                <p className="mt-4 text-gray-500 font-medium leading-relaxed">Share your questions or requirements, and we’ll respond swiftly to your inbox.</p>
                <a href={`mailto:${adminEmail}`} className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-sm font-black text-blue-500 border border-gray-200 shadow-sm hover:bg-gray-50 transition">
                  Email Us
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-[#f3dde2] py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative mx-auto max-w-262.5">
              <div className="absolute -left-8 top-1/2 z-20 hidden h-108 w-80 -translate-y-1/2 overflow-hidden rounded-sm bg-[#f1284b] shadow-[0_26px_42px_-24px_rgba(0,0,0,0.58)] lg:block">
                <img
                  src={studentGirl}
                  alt="Apex Edge contact"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="ml-auto w-full rounded-sm border border-[#ebedf0] bg-white px-5 py-8 sm:px-8 lg:min-h-104 lg:w-[94%] lg:px-12 lg:pl-64 lg:pr-12">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7a8190]">Get in Touch Form</p>
                <h2 className="mt-2 text-[32px] font-bold tracking-tight text-[#20324a]">Send us your inquiry</h2>
                <p className="mt-2 text-sm text-[#8f97a6]">Fill this form and we will get back to you soon.</p>

                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form 
                      key="contact-form"
                      onSubmit={handleSubmit} 
                      className="mt-7 space-y-5"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="space-y-2 text-sm font-semibold text-[#111827]">
                          Full Name
                          <input
                            name="Name"
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="Enter your full name"
                            className="h-12 w-full rounded-md border border-[#eceef2] bg-[#f8f9fc] px-4 text-sm text-[#1f2230] outline-none transition focus:border-[#f1284b]"
                            required
                          />
                        </label>

                        <label className="space-y-2 text-sm font-semibold text-[#111827]">
                          Email Address
                          <input
                            name="Email"
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="your.email@company.com"
                            className="h-12 w-full rounded-md border border-[#eceef2] bg-[#f8f9fc] px-4 text-sm text-[#1f2230] outline-none transition focus:border-[#f1284b]"
                            required
                          />
                        </label>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="space-y-2 text-sm font-semibold text-[#111827]">
                          Phone Number
                          <input
                            name="Phone"
                            type="tel"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            placeholder="+91 98776 53180"
                            className="h-12 w-full rounded-md border border-[#eceef2] bg-[#f8f9fc] px-4 text-sm text-[#1f2230] outline-none transition focus:border-[#f1284b]"
                            required
                          />
                        </label>

                        <label className="space-y-2 text-sm font-semibold text-[#111827]">
                          Location
                          <input
                            name="Location"
                            type="text"
                            value={location}
                            onChange={(event) => setLocation(event.target.value)}
                            placeholder="City, state or country"
                            className="h-12 w-full rounded-md border border-[#eceef2] bg-[#f8f9fc] px-4 text-sm text-[#1f2230] outline-none transition focus:border-[#f1284b]"
                            required
                          />
                        </label>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="space-y-2 text-sm font-semibold text-[#111827]">
                          Inquiry Subject
                          <select
                            name="Subject"
                            value={subject}
                            onChange={(event) => setSubject(event.target.value)}
                            className="h-12 w-full rounded-md border border-[#eceef2] bg-[#f8f9fc] px-4 text-sm text-[#1f2230] outline-none transition focus:border-[#f1284b]"
                            required
                          >
                            <option value="" disabled>Select subject</option>
                            <option value="IELTS">IELTS</option>
                            <option value="PTE">PTE</option>
                            <option value="CELPIP">CELPIP</option>
                            <option value="Business Communications">Business Communications</option>
                            <option value="Spoken English">Spoken English</option>
                          </select>
                        </label>

                        <label className="space-y-2 text-sm font-semibold text-[#111827]">
                          Preferred Contact Method
                          <select
                            name="Contact_Method"
                            value={method}
                            onChange={(event) => setMethod(event.target.value)}
                            className="h-12 w-full rounded-md border border-[#eceef2] bg-[#f8f9fc] px-4 text-sm text-[#1f2230] outline-none transition focus:border-[#f1284b]"
                            required
                          >
                            <option value="" disabled>How should we contact you?</option>
                            <option value="Phone">Phone</option>
                            <option value="WhatsApp">WhatsApp</option>
                            <option value="Email">Email</option>
                          </select>
                        </label>
                      </div>

                      <label className="space-y-2 text-sm font-semibold text-[#111827]">
                        Message
                        <textarea
                          name="Message"
                          value={message}
                          onChange={(event) => setMessage(event.target.value)}
                          placeholder="Tell us about your requirements..."
                          className="min-h-30.5 w-full rounded-md border border-[#eceef2] bg-[#f8f9fc] px-4 py-3 text-sm text-[#1f2230] outline-none transition focus:border-[#f1284b]"
                        />
                      </label>

                      <label className="flex items-center gap-3 text-sm text-[#4b5563]">
                        <input
                          name="Terms_Accepted"
                          type="checkbox"
                          checked={acceptedTerms}
                          onChange={(event) => setAcceptedTerms(event.target.checked)}
                          className="h-4 w-4 rounded border-[#d1d5db] text-[#f1284b] focus:ring-[#f1284b]"
                          required
                        />
                        I accept the terms and conditions
                      </label>

                      {formError && <p className="text-sm text-[#b91c1c]">{formError}</p>}

                      <button
                        type="submit"
                        className="inline-flex h-12 min-w-39.5 items-center justify-center rounded-full bg-[#f1284b] px-8 text-base font-semibold text-white transition hover:bg-[#db2243] disabled:cursor-not-allowed disabled:opacity-65 gap-3"
                        disabled={!formReady || isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            SENDING...
                          </>
                        ) : (
                          "SEND"
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-20 text-center"
                    >
                      <div className="w-24 h-24 bg-[#d90f40]/10 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                        <CheckCircle2 className="w-12 h-12 text-[#d90f40] relative z-10" />
                        <motion.div 
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-[#d90f40] rounded-full"
                        />
                      </div>
                      <h3 className="text-3xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tighter">Inquiry Sent!</h3>
                      <p className="text-gray-500 font-medium mb-10 max-w-xs mx-auto">
                        Thank you for reaching out. Our team will contact you within 24 hours.
                      </p>
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1a1a1a] text-white font-black text-sm uppercase tracking-widest hover:bg-[#d90f40] transition-colors"
                      >
                        <Sparkles className="w-4 h-4" />
                        Send Another Inquiry
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ApexEdgeFooter />
    </main>
  );
}

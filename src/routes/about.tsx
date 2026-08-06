import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { ApexEdgeFooter } from "../components/ApexEdgeFooter";
import { LucideQuote, LucideGraduationCap, LucideAward, LucideUsers, LucideArrowRight } from "lucide-react";

import { teachers } from "../data/teachers";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | Apex Edge - Excellence in Education" },
      { name: "description", content: "Learn more about Apex Edge, our mission, vision, and our team of expert teachers dedicated to your success." }
    ]
  })
});

function AboutPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-[#fdf2e8] overflow-x-hidden pt-36">
      <Navbar />

      <div className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-12">
          {/* Animated Background Elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -left-20 w-96 h-96 bg-[#d90f40]/5 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              x: [0, 100, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2d7f72]/5 rounded-full blur-3xl pointer-events-none"
          />

          <div className="max-w-7xl mx-auto text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-[#d90f40]/10 text-[#d90f40] font-bold text-sm mb-6 uppercase tracking-widest">
                Empowering Futures
              </span>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#1a1a1a] leading-tight mb-8">
                Redefining <span className="text-[#d90f40]">Education</span> <br className="hidden sm:block" /> for the Modern World
              </h1>
              <p className="max-w-3xl mx-auto text-lg sm:text-xl text-[#555] leading-relaxed mb-10">
                Apex Edge is more than just an institute. We are a community of dreamers,
                achievers, and educators dedicated to breaking the boundaries of traditional learning.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="tel:+918360079077"
                  className="px-10 py-3 rounded-2xl bg-white border-2 border-[#1a1a1a]/10 text-[#1a1a1a] font-bold text-lg hover:bg-white/50 transition-colors inline-block"
                >
                  Call Us
                </a>
                <Link
                  to="/enroll"
                  className="px-10 py-3 rounded-2xl bg-[#d90f40] text-white font-bold text-lg shadow-2xl shadow-[#d90f40]/30 hover:scale-105 transition-transform text-center"
                >
                  Join Our Journey
                </Link>

              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {[
              { label: "Students Success", value: "10k+", icon: <LucideUsers className="w-8 h-8 text-[#d90f40]" /> },
              { label: "Expert Faculty", value: "30+", icon: <LucideGraduationCap className="w-8 h-8 text-[#d90f40]" /> },
              { label: "Years Experience", value: "10+", icon: <LucideAward className="w-8 h-8 text-[#d90f40]" /> },
              { label: "Global Presence", value: "10+", icon: <LucideArrowRight className="w-8 h-8 text-[#d90f40]" /> },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto rounded-3xl bg-[#fdf2e8] flex items-center justify-center mb-6 group-hover:bg-[#d90f40] group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-black text-[#1a1a1a] mb-2">{stat.value}</h3>
                <p className="text-[#666] font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                  <img
                    src="/images/mission.png"
                    alt="Mission and Vision"
                    className="w-full h-[600px] object-cover hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#d90f40]/80 to-transparent" />
                  <div className="absolute bottom-12 left-12 right-12 text-white">
                    <LucideQuote className="w-12 h-12 mb-6 text-white/50" />
                    <h3 className="text-3xl font-bold leading-tight">
                      "Education is the most powerful weapon which you can use to change the world."
                    </h3>
                  </div>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#2d7f72] rounded-full flex items-center justify-center text-white text-xl font-bold p-8 text-center animate-bounce">
                  Established 2026
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl sm:text-6xl font-black text-[#1a1a1a] mb-10 leading-tight">
                  Our Mission <span className="text-[#d90f40]">is Your Success</span>
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-[#d90f40] flex-shrink-0 flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Personalized Mentorship</h4>
                      <p className="text-[#666]">We believe every student is unique. Our expert mentors provide one-on-one guidance tailored to individual goals.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-[#2d7f72] flex-shrink-0 flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Modern Pedagogy</h4>
                      <p className="text-[#666]">We use the latest tools and techniques to make learning interactive, engaging, and effective.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex-shrink-0 flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Global Standards</h4>
                      <p className="text-[#666]">Our curriculum is designed to meet international standards, ensuring our students are ready for the global stage.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Teachers Section */}
        <section id="teachers" className="relative py-32 overflow-hidden" style={{ background: "linear-gradient(135deg, #fdf2e8 0%, #fff7f0 50%, #fde8e8 100%)" }}>
          {/* Decorative background blobs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#d90f40]/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#d90f40]/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/40 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-24">
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-5 py-2 rounded-full bg-[#d90f40]/10 text-[#d90f40] font-bold text-sm uppercase tracking-widest mb-5"
              >
                Meet Our Experts
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1a1a1a] leading-tight mb-6"
              >
                The Minds Behind <span className="text-[#d90f40]">Apex Edge</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[#555] text-lg max-w-2xl"
              >
                Our teachers are not just instructors; they are mentors who are committed to your growth and success.
              </motion.p>
            </div>

            {/* Teacher Cards — Foreign Prep Style */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center max-w-7xl mx-auto items-end">
              {teachers.slice(0, 4).map((teacher, index) => (
                <motion.div
                  key={teacher.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.6, ease: "easeOut" }}
                  className="group flex flex-col items-center"
                >
                  {/* Photo — overflowing above the card */}
                  <div className="relative z-10 mb-[-48px]">
                    <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-3xl overflow-hidden shadow-2xl shadow-[#d90f40]/20 border-4 border-white group-hover:border-[#d90f40] transition-colors duration-300">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${teacher.id === "Ashish" ? "object-[center_40%]" : "object-top"}`}
                      />
                    </div>
                  </div>

                  {/* White Card Body */}
                  <div className="w-full bg-white rounded-[2rem] pt-16 pb-8 px-6 flex flex-col items-center text-center shadow-xl shadow-[#d90f40]/10 border border-[#d90f40]/10 group-hover:shadow-2xl group-hover:shadow-[#d90f40]/20 transition-all duration-300">
                    {/* Name */}
                    <h4 className="text-xl font-black text-[#1a1a1a] mb-1 group-hover:text-[#d90f40] transition-colors">
                      {teacher.name}
                    </h4>

                    {/* Certification Badge */}
                    <span className="inline-block text-[#d90f40] font-bold text-xs uppercase tracking-wider mb-5 px-3 py-1 bg-[#d90f40]/8 rounded-full">
                      {teacher.qualification}
                    </span>

                    {/* Divider */}
                    <div className="w-10 h-0.5 bg-[#d90f40]/30 rounded-full mb-5" />

                    {/* Experience */}
                    <p className="text-[#888] text-sm font-medium mb-8">
                      {teacher.experience} Experience
                    </p>

                    {/* Buttons */}
                    <div className="w-full flex flex-col gap-3">
                      {/* Get Free Demo Button */}
                      <a
                        href={`https://wa.me/918360079077?text=Hello%2C%20I%20want%20to%20book%20a%20free%20demo%20class%20with%20${encodeURIComponent(teacher.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 rounded-2xl bg-[#d90f40] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#d90f40]/30 hover:bg-[#b80d35] hover:scale-105 hover:shadow-xl hover:shadow-[#d90f40]/40 active:scale-95 transition-all duration-300 text-center block"
                      >
                        Get Free Demo
                      </a>

                      {/* View Profile Button */}
                      <Link
                        to="/teachers/$teacherId"
                        params={{ teacherId: teacher.id }}
                        className="w-full py-3 rounded-2xl bg-white border-2 border-[#d90f40] text-[#d90f40] font-bold text-sm tracking-wide hover:bg-[#d90f40] hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-[#d90f40]/30 active:scale-95 transition-all duration-300 text-center block"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto bg-[#d90f40] rounded-[3rem] p-10 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-[#d90f40]/40"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <h2 className="text-4xl sm:text-5xl font-black mb-6 relative z-10 leading-tight">
              Ready to Elevate
              <br className="sm:hidden" />
              Your Future?
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8 relative z-10">
              Join Apex Edge today and experience education like never before.
              Book your free demo session now!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <button onClick={() => navigate({ to: "/enroll" })} className="px-8 py-3 sm:px-10 sm:py-4 rounded-3xl bg-white text-[#d90f40] font-black text-base sm:text-lg hover:scale-105 transition-transform">
                Book Free Session
              </button>
              <Link to="/contact-us" className="px-8 py-3 sm:px-10 sm:py-4 rounded-3xl bg-transparent border-2 border-white/30 text-white font-black text-base sm:text-lg hover:bg-white/10 transition-colors">
                Contact Support
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
      <ApexEdgeFooter />
    </div>
  );
}

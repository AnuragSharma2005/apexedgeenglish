import { createFileRoute, Link } from "@tanstack/react-router";
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
              <button className="px-10 py-5 rounded-2xl bg-[#d90f40] text-white font-bold text-lg shadow-2xl shadow-[#d90f40]/30 hover:scale-105 transition-transform">
                Join Our Journey
              </button>
              <button className="px-10 py-5 rounded-2xl bg-white border-2 border-[#1a1a1a]/10 text-[#1a1a1a] font-bold text-lg hover:bg-white/50 transition-colors">
                Our Story
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {[
            { label: "Students Success", value: "15K+", icon: <LucideUsers className="w-8 h-8 text-[#d90f40]" /> },
            { label: "Expert Faculty", value: "50+", icon: <LucideGraduationCap className="w-8 h-8 text-[#d90f40]" /> },
            { label: "Years Experience", value: "10+", icon: <LucideAward className="w-8 h-8 text-[#d90f40]" /> },
            { label: "Global Presence", value: "12+", icon: <LucideArrowRight className="w-8 h-8 text-[#d90f40]" /> },
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
                  src="/teachers/anurag.png"
                  alt="Mission"
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
                Established 2014
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
      <section className="py-32 bg-[#1a1a1a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[#d90f40] font-bold tracking-widest uppercase text-sm mb-4 block"
              >
                Meet Our Experts
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl sm:text-7xl font-black leading-tight"
              >
                The Minds Behind <br /> <span className="text-[#d90f40]">Apex Edge</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg max-w-sm mb-4"
            >
              Our teachers are not just instructors; they are mentors who are committed to your growth and success.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -20 }}
                className="group relative bg-[#222] rounded-[2.5rem] overflow-hidden border border-white/5"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h4 className="text-2xl font-black mb-1 group-hover:text-[#d90f40] transition-colors">{teacher.name}</h4>
                  <p className="text-gray-400 text-sm mb-6">{teacher.qualification}</p>

                  <Link
                    to="/teachers/$teacherId"
                    params={{ teacherId: teacher.id }}
                    className="inline-flex items-center gap-2 text-[#d90f40] font-bold text-sm overflow-hidden"
                  >
                    <span className="translate-x-0 group-hover:translate-x-2 transition-transform duration-300">VIEW PROFILE</span>
                    <LucideArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-4 transition-transform duration-500" />
                  </Link>
                </div>

                <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-45 group-hover:rotate-0">
                  <LucideGraduationCap className="w-6 h-6 text-[#d90f40]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-[#d90f40] rounded-[4rem] p-12 sm:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-[#d90f40]/40"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <h2 className="text-4xl sm:text-6xl font-black mb-8 relative z-10">Ready to Elevate Your Future?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 relative z-10">
            Join Apex Edge today and experience education like never before.
            Book your free demo session now!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <button className="px-12 py-6 rounded-3xl bg-white text-[#d90f40] font-black text-xl hover:scale-105 transition-transform">
              Book Free Session
            </button>
            <button className="px-12 py-6 rounded-3xl bg-transparent border-2 border-white/30 text-white font-black text-xl hover:bg-white/10 transition-colors">
              Contact Support
            </button>
          </div>
        </motion.div>
      </section>

      </div>
      <ApexEdgeFooter />
    </div>
  );
}

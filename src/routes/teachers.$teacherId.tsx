import { createFileRoute, useParams, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { teachers } from "../data/teachers";
import { Navbar } from "../components/Navbar";
import { ApexEdgeFooter } from "../components/ApexEdgeFooter";
import { LucideArrowLeft, LucideCheckCircle2, LucideAward, LucideBriefcase, LucideStar } from "lucide-react";

export const Route = createFileRoute("/teachers/$teacherId")({
  component: TeacherDetailPage,
  head: ({ params }) => {
    const teacher = teachers.find((t) => t.id === params.teacherId);
    return {
      meta: [
        { title: `${teacher?.name || "Teacher"} - Apex Edge` },
        { name: "description", content: `Learn more about ${teacher?.name}, an expert at Apex Edge.` }
      ]
    };
  }
});

function TeacherDetailPage() {
  const { teacherId } = useParams({ from: "/teachers/$teacherId" });
  const teacher = teachers.find((t) => t.id === teacherId);

  if (!teacher) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fdf2e8]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Teacher not found</h1>
          <Link to="/about" className="text-[#d90f40] font-bold">Return to About Page</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdf2e8] overflow-x-hidden">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 text-[#d90f40] font-bold group"
          >
            <LucideArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            BACK TO ABOUT
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left: Image Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-black/10 border-8 border-white">
              <img 
                src={teacher.image} 
                alt={teacher.name} 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute top-6 right-6">
                <div className="w-16 h-16 bg-[#d90f40] rounded-2xl flex items-center justify-center text-white shadow-xl rotate-12">
                   <LucideStar className="w-8 h-8 fill-current" />
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-black/5 text-center">
                <LucideBriefcase className="w-8 h-8 text-[#d90f40] mx-auto mb-4" />
                <h4 className="text-2xl font-black text-[#1a1a1a]">{teacher.experience}</h4>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Experience</p>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-black/5 text-center">
                <LucideAward className="w-8 h-8 text-[#2d7f72] mx-auto mb-4" />
                <h4 className="text-2xl font-black text-[#1a1a1a]">Expert</h4>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Status</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Details */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-[#d90f40]/10 text-[#d90f40] font-bold text-sm mb-6 uppercase tracking-widest">
                {teacher.specialization}
              </span>
              <h1 className="text-5xl sm:text-7xl font-black text-[#1a1a1a] mb-6 leading-tight">
                {teacher.name}
              </h1>
              <h3 className="text-2xl font-bold text-[#d90f40] mb-8">{teacher.qualification}</h3>
              
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white mb-12">
                <p className="text-xl text-[#444] leading-relaxed">
                  {teacher.bio}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-black text-[#1a1a1a] mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-[#d90f40] rounded-full" />
                    Key Skills
                  </h4>
                  <ul className="space-y-4">
                    {teacher.skills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-3 text-lg text-[#555] font-medium">
                        <LucideCheckCircle2 className="w-6 h-6 text-[#20a55a]" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl font-black text-[#1a1a1a] mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-[#2d7f72] rounded-full" />
                    Achievements
                  </h4>
                  <ul className="space-y-4">
                    {teacher.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-3 text-lg text-[#555] font-medium">
                        <LucideStar className="w-6 h-6 text-[#f59e0b] fill-[#f59e0b]" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-16 flex flex-wrap gap-6">
                <button className="px-10 py-5 rounded-2xl bg-[#d90f40] text-white font-bold text-lg shadow-2xl shadow-[#d90f40]/30 hover:scale-105 transition-transform">
                  Book a Session with {teacher.name.split(' ')[0]}
                </button>
                <button className="px-10 py-5 rounded-2xl bg-white border-2 border-[#1a1a1a]/10 text-[#1a1a1a] font-bold text-lg hover:bg-white/50 transition-colors">
                  Check Schedule
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <ApexEdgeFooter />
    </div>
  );
}

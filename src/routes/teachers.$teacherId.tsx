import { createFileRoute, useParams, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { teachers } from "../data/teachers";
import { Navbar } from "../components/Navbar";
import { ApexEdgeFooter } from "../components/ApexEdgeFooter";
import { LucideArrowLeft, LucideAward, LucideBriefcase, LucideStar, LucideZap, LucideTrophy } from "lucide-react";

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

const skillColors = [
  { bg: "bg-[#d90f40]/10", text: "text-[#d90f40]", border: "border-[#d90f40]/25", dot: "bg-[#d90f40]" },
  { bg: "bg-[#2d7f72]/10", text: "text-[#2d7f72]", border: "border-[#2d7f72]/25", dot: "bg-[#2d7f72]" },
  { bg: "bg-[#7c3aed]/10", text: "text-[#7c3aed]", border: "border-[#7c3aed]/25", dot: "bg-[#7c3aed]" },
  { bg: "bg-[#ea580c]/10", text: "text-[#ea580c]", border: "border-[#ea580c]/25", dot: "bg-[#ea580c]" },
];

const achievementAccents = ["#d90f40", "#2d7f72", "#7c3aed"];
const achievementIcons = ["🥇", "🎖️", "✨"];

function TeacherDetailPage() {
  const { teacherId } = useParams({ from: "/teachers/$teacherId" });
  const teacher = teachers.find((t) => t.id === teacherId);
  const navigate = useNavigate();

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
    <div className="min-h-screen overflow-x-hidden" style={{ background: "linear-gradient(160deg, #fdf2e8 0%, #fff8f5 60%, #fde8ee 100%)" }}>
      <Navbar />

      <div className="relative pt-32 sm:pt-36 pb-0 overflow-hidden">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#d90f40]/6 rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2d7f72]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

          {/* Back link */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-6 sm:mb-10">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[#d90f40] font-bold text-sm group bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-[#d90f40]/20 hover:bg-[#d90f40] hover:text-white transition-all duration-300"
            >
              <LucideArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to About
            </Link>
          </motion.div>

          {/* ── MOBILE: Hero photo strip (only on mobile) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="block lg:hidden mb-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-[#d90f40]/15 border-4 border-white">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full object-cover aspect-[3/4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h1 className="text-2xl font-black text-white mb-0.5">{teacher.name}</h1>
                <span className="text-white/80 text-sm font-medium">{teacher.qualification}</span>
              </div>
              <div className="absolute top-4 right-4 bg-[#d90f40] rounded-xl px-2.5 py-1.5 shadow-lg">
                <LucideStar className="w-4 h-4 text-white fill-white" />
              </div>
            </div>

            {/* Mobile: Stats row */}
            <div className="mt-4">
              <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-black/5">
                <LucideBriefcase className="w-5 h-5 text-[#d90f40] mx-auto mb-1.5" />
                <p className="text-lg font-black text-[#1a1a1a]">{teacher.experience}</p>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-0.5">Experience</p>
              </div>
            </div>

            {/* Mobile: CTA Buttons */}
            <div className="flex flex-col gap-3 mt-4">
              <button
                onClick={() => navigate({ to: "/enroll" })}
                className="w-full py-3.5 rounded-2xl bg-white border-2 border-[#d90f40] text-[#d90f40] font-bold text-base hover:bg-[#d90f40] hover:text-white active:scale-95 transition-all duration-300 text-center"
              >
                Get Free Demo
              </button>
            </div>
          </motion.div>

          {/* ── DESKTOP: Two column grid ── */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* ── LEFT column (desktop only) ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:flex lg:col-span-4 flex-col gap-6 lg:justify-between"
            >
              <div className="relative">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#d90f40]/15 border-4 border-white">
                  <img src={teacher.image} alt={teacher.name} className="w-full object-cover aspect-[3/4]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h1 className="text-3xl font-black text-white mb-1">{teacher.name}</h1>
                    <span className="text-white/80 text-sm font-medium">{teacher.qualification}</span>
                  </div>
                  <div className="absolute top-5 right-5 bg-[#d90f40] rounded-2xl px-3 py-2 shadow-xl">
                    <LucideStar className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[2.5rem] border-2 border-dashed border-[#d90f40]/20 -z-10" />
              </div>

              <div className="mt-10">
                <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-black/5 hover:shadow-md transition-shadow">
                  <LucideBriefcase className="w-6 h-6 text-[#d90f40] mx-auto mb-2" />
                  <p className="text-xl font-black text-[#1a1a1a]">{teacher.experience}</p>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Experience</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-6">
                <button
                  onClick={() => navigate({ to: "/enroll" })}
                  className="w-full py-4 rounded-2xl bg-[#d90f40] text-white font-bold text-base shadow-xl shadow-[#d90f40]/30 hover:bg-[#b80d35] hover:scale-[1.02] active:scale-95 transition-all duration-300 text-center"
                >
                  Get Free Demo
                </button>
              </div>
            </motion.div>

            {/* ── RIGHT: Details column (both mobile & desktop) ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-8 flex flex-col gap-5 sm:gap-8"
            >
              {/* Teacher Name */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1a1a] leading-tight">
                {teacher.name}
              </h1>

              {/* Specialization chip */}
              <span className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-[#d90f40]/10 text-[#d90f40] font-bold text-xs sm:text-sm uppercase tracking-widest border border-[#d90f40]/20">
                <LucideZap className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                {teacher.specialization}
              </span>

              {/* About */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm border border-black/5">
                <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3 sm:mb-4">About</h2>
                <div className="space-y-3 sm:space-y-4">
                  {teacher.bio.split("\n\n").map((para, i) => (
                    <p key={i} className="text-sm sm:text-base text-[#444] leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>

              {/* Expertise */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm border border-black/5">
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <LucideZap className="w-4 h-4 sm:w-5 sm:h-5 text-[#d90f40]" />
                  <h2 className="text-sm sm:text-base font-black text-[#1a1a1a] uppercase tracking-wider">Expertise</h2>
                </div>
                <div className="flex flex-col sm:flex-wrap sm:flex-row gap-2 sm:gap-3">
                  {teacher.skills.map((skill, i) => {
                    const c = skillColors[i % skillColors.length];
                    return (
                      <span
                        key={i}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold border w-full sm:w-auto justify-center sm:justify-start ${c.bg} ${c.text} ${c.border}`}
                      >
                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`} />
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm border border-black/5">
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <LucideTrophy className="w-4 h-4 sm:w-5 sm:h-5 text-[#f59e0b]" />
                  <h2 className="text-sm sm:text-base font-black text-[#1a1a1a] uppercase tracking-wider">Highlights</h2>
                </div>
                <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3">
                  {teacher.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-0 sm:text-center p-4 sm:p-5 rounded-2xl border-2 hover:scale-[1.02] transition-transform duration-300"
                      style={{
                        borderColor: achievementAccents[i % achievementAccents.length] + "30",
                        background: achievementAccents[i % achievementAccents.length] + "08"
                      }}
                    >
                      <span className="text-2xl sm:text-3xl sm:mb-3 flex-shrink-0">{achievementIcons[i % achievementIcons.length]}</span>
                      <p
                        className="text-sm font-bold leading-snug"
                        style={{ color: achievementAccents[i % achievementAccents.length] }}
                      >
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>

      <div className="h-12 sm:h-20" />
      <ApexEdgeFooter />
    </div>
  );
}

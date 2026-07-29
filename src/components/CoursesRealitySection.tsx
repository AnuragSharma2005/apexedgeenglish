import { useEffect,useRef, useState, type TouchEvent } from "react";
import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { BookOpenCheck, MonitorPlay, Presentation, ScanText, ArrowRight, Baby } from "lucide-react";

type CourseCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  number: string;
  arrowPosition: "top" | "bottom";
  to: string;
};

const courses: CourseCard[] = [
  {
    title: "IELTS Online Course",
    description:
      "With our online course on IELTS, you will get all the tools and resources needed to improve your IELTS score. Our expert guidance will ensure you are well-prepared for the exam with structured lessons and practice tests.",
    icon: MonitorPlay,
    accent: "#2cb7c7",
    number: "01",
    arrowPosition: "top",
    to: "/ielts",
  },
  {
    title: "PTE Preparation Online",
    description:
      "Our PTE preparation online program is designed to help you excel in every aspect of the test. Learn at your own pace and gain the skills to secure top scores, making it the best online platform to learn English for test-takers.",
    icon: Presentation,
    accent: "#f79c45",
    number: "02",
    arrowPosition: "bottom",
    to: "/pte",
  },
  {
    title: "Spoken English Course",
    description:
      "Master the art of communication with our online Spoken English course and enhance your English speaking skills. This course will help you gain confidence in daily conversations, ensuring you are fluent and articulate in any situation.",
    icon: BookOpenCheck,
    accent: "#98125d",
    number: "03",
    arrowPosition: "top",
    to: "/spoken-english",
  },
  {
    title: "Phoenix Course",
    description:
      "A safe, trusted and friendly English education platform designed to support families and children with nurturing and expert guidance.",
    icon: Baby,
    accent: "#698c73",
    number: "04",
    arrowPosition: "bottom",
    to: "/phoenix",
  },
  {
    title: "CELPIP Preparation",
    description:
      "Prepare with focused CELPIP practice, expert feedback, and strategy-driven lessons that help you improve fluency, accuracy, and test confidence.",
    icon: ScanText,
    accent: "#e34f62",
    number: "05",
    arrowPosition: "top",
    to: "/celpip",
  },
  {
    title: "Interview English Mastery",
    description:
      "Build job-ready communication with practical interview drills, vocabulary coaching, and confidence techniques for real conversations.",
    icon: BookOpenCheck,
    accent: "#4d9b6a",
    number: "06",
    arrowPosition: "bottom",
    to: "/business-communications",
  },
];

function ChevronStack({ color, position }: { color: string; position: "top" | "bottom" }) {
  const base = position === "top" ? "top-4" : "bottom-4";
  return (
    <div className={`absolute left-4 ${base} hidden sm:flex items-center`} aria-hidden="true">
      <span className="flex -space-x-2">
        {[0, 1, 2].map((i) => (
          <span key={i} className="text-[2.6rem] leading-none font-extrabold" style={{ color }}>›</span>
        ))}
      </span>
    </div>
  );
}

function CourseCardItem({ course, index }: { course: CourseCard; index: number }) {
  const isAlternate = index % 2 === 1;
  return (
    <Link
      to={course.to}
      className="relative overflow-visible text-white shadow-[0_1px_0_rgba(17,24,39,0.05),0_14px_34px_-22px_rgba(0,0,0,0.28)] px-5 sm:px-6 pt-16 pb-6 flex flex-col hover:scale-[1.02] transition-transform h-full"
      style={{
        backgroundColor: course.accent,
        borderRadius: isAlternate ? "0.55rem 1.7rem 0.55rem 1.7rem" : "1.7rem 0.55rem 1.7rem 0.55rem",
      }}
    >
      <ChevronStack color="#ffffff" position={course.arrowPosition} />
      <div className="absolute right-5 top-4 text-[2.8rem] sm:text-[3.1rem] lg:text-[3.6rem] font-bold leading-none tracking-tight drop-shadow-[0_2px_0_rgba(0,0,0,0.2)]">
        {course.number}
      </div>
      <div className="mt-14 text-center flex flex-col flex-1">
        <h3 className="text-[1.1rem] sm:text-[1.2rem] lg:text-[1.35rem] leading-tight font-bold tracking-tight max-w-[12ch] mx-auto">
          {course.title}
        </h3>
        <p className="mt-3 text-[0.8rem] sm:text-[0.86rem] lg:text-[0.92rem] leading-6 font-medium max-w-[20ch] mx-auto text-white/92 flex-1">
          {course.description}
        </p>
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold bg-white/20 px-4 py-2 rounded-full self-center">
          Explore Course
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}

export function CoursesRealitySection() {
  // Mobile swipe state
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastDirection, setLastDirection] = useState<"next" | "prev">("next");
  const [isAnimating, setIsAnimating] = useState(false);
  const [animDirection, setAnimDirection] = useState<"next" | "prev">("next");
  const touchStartX = useRef<number | null>(null);
  const animationTimeoutRef = useRef<number | undefined>(undefined);

  // Desktop carousel state
  const VISIBLE = 5;
  const GAP = 20; // gap-5 = 1.25rem ≈ 20px
  const [startIndex, setStartIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setCardWidth((w - (VISIBLE - 1) * GAP) / VISIBLE);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const maxStart = courses.length - VISIBLE; // = 1

  const goNext = () => setStartIndex((i) => Math.min(i + 1, maxStart));
  const goPrev = () => setStartIndex((i) => Math.max(i - 1, 0));

  const translateX = -(startIndex * (cardWidth + GAP));

  const animateTo = (direction: "next" | "prev") => {
    if (isAnimating) return;
    setAnimDirection(direction);
    setIsAnimating(true);
    if (animationTimeoutRef.current !== undefined) {
      window.clearTimeout(animationTimeoutRef.current);
    }
    animationTimeoutRef.current = window.setTimeout(() => {
      setLastDirection(direction);
      setActiveIndex((current) =>
        direction === "next"
          ? (current + 1) % courses.length
          : (current - 1 + courses.length) % courses.length
      );
      setIsAnimating(false);
    }, 260);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(deltaX) < 40) return;
    if (deltaX < 0) { animateTo("next"); return; }
    animateTo("prev");
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 pb-16 lg:pb-24 font-serif">
      <div className="rounded-[2.4rem] px-4 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-384">
          <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[oklch(0.16_0.02_250)] max-w-5xl mx-auto">
            <span>
              Turn Your Dreams into Reality with <br />
              <span className="text-[#d90f40]">Apex Edge Courses</span>
            </span>
          </h2>

          <p className="mt-5 text-center text-sm sm:text-base lg:text-lg leading-relaxed text-[oklch(0.26_0.02_250)] max-w-5xl mx-auto font-medium">
            Achieve your language goals with Apex Edge, where we offer comprehensive solutions customised to your needs.
          </p>

          {/* ── MOBILE: swipe stack ── */}
          <div className="mt-10 sm:hidden">
            <div
              className="relative min-h-130"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {(() => {
                const currentCourse = courses[activeIndex];
                if (!currentCourse) return null;
                const exitX = animDirection === "next" ? -120 : 120;
                const exitRotate = animDirection === "next" ? -10 : 10;
                return (
                  <div
                    key={`current-${currentCourse.title}-${activeIndex}`}
                    className="absolute inset-x-1 top-0 z-40 transition-all duration-250 ease-out"
                    style={{
                      transform: isAnimating
                        ? `translate(${exitX}px, -4px) rotate(${exitRotate}deg) scale(0.92)`
                        : "translate(0px, 0px) rotate(0deg) scale(1)",
                      opacity: isAnimating ? 0 : 1,
                    }}
                  >
                    <CourseCardItem course={currentCourse} index={activeIndex} />
                  </div>
                );
              })()}
              {[1, 2, 3].map((offset) => {
                const index = (activeIndex + offset) % courses.length;
                const course = courses[index];
                if (!course) return null;
                const x = (lastDirection === "next" ? 11 : -11) * offset;
                const y = offset * 15;
                const scale = 1 - offset * 0.04;
                const opacity = 1 - offset * 0.2;
                const rotate = (offset % 2 === 0 ? 1 : -1) * (lastDirection === "next" ? 1 : -1) * 2;
                return (
                  <div
                    key={`${course.title}-${offset}`}
                    className="absolute inset-x-1 top-0 transition-all duration-300 ease-out"
                    style={{
                      transform: `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${scale})`,
                      zIndex: 30 - offset,
                      opacity,
                    }}
                    aria-hidden="true"
                  >
                    <CourseCardItem course={course} index={index} />
                  </div>
                );
              })}
            </div>
            <div className="mt-8 flex items-center justify-center gap-2" aria-hidden="true">
              {courses.map((course, index) => (
                <span
                  key={course.title}
                  className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-6 bg-[#d90f40]" : "w-2.5 bg-black/20"}`}
                />
              ))}
            </div>
            <p className="mt-3 text-center text-xs font-semibold tracking-wide text-black/60">
              Swipe left or right to explore courses
            </p>
          </div>

          {/* ── DESKTOP: 5 cards visible, arrows reveal 6th ── */}
          <div className="mt-14 hidden sm:block">
            <div className="relative">
              {/* Left Arrow */}
              <button
                onClick={goPrev}
                disabled={startIndex === 0}
                className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-[0_4px_24px_-6px_rgba(0,0,0,0.25)] ring-1 ring-black/8 flex items-center justify-center hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:scale-100"
                aria-label="Previous"
              >
                <svg className="w-5 h-5 text-[#333]" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Right Arrow */}
              <button
                onClick={goNext}
                disabled={startIndex >= maxStart}
                className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-[0_4px_24px_-6px_rgba(0,0,0,0.25)] ring-1 ring-black/8 flex items-center justify-center hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:scale-100"
                aria-label="Next"
              >
                <svg className="w-5 h-5 text-[#333]" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Clipped window — exactly 5 cards wide */}
              <div ref={containerRef} className="overflow-hidden">
                <div
                  className="flex gap-5 items-stretch transition-transform duration-400 ease-in-out"
                  style={{ transform: `translateX(${translateX}px)` }}
                >
                  {courses.map((course, index) => (
                    <div
                      key={course.title}
                      className="flex-none"
                      style={{ width: cardWidth > 0 ? `${cardWidth}px` : "calc(20% - 1rem)" }}
                    >
                      <CourseCardItem course={course} index={index} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

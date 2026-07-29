import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Navbar } from "../Navbar";
import { ApexEdgeFooter } from "../ApexEdgeFooter";
import { Briefcase, ShieldCheck, HeartHandshake, Award, Star, ChevronDown, Sparkles, Volume2, Users, BookOpen, Mic } from "lucide-react";

const faqData: Record<string, { q: string; a: string }[]> = {
  "General": [
    {
      q: "What is Phonics and why is it important?",
      a: "Phonics is a method for teaching reading and writing by developing learners' phonemic awareness—the ability to hear, identify, and manipulate phonemes—in order to teach the correspondence between these sounds and the spelling patterns (graphemes) that represent them. It is critical because it helps children decode words independently rather than memorising lists."
    },
    {
      q: "What age group is this program suitable for?",
      a: "Our Phonics Training Program is specially designed for young learners, typically children aged 4 to 12 years, to build strong foundational reading and speaking skills from an early age."
    },
    {
      q: "Are the trainers experienced?",
      a: "Yes, our trainers are highly experienced, certified, and caring early-childhood educators who specialise in phonetic training and child communication."
    },
    {
      q: "Do you offer demo classes?",
      a: "Yes! We offer a free interactive demo class so parents and children can experience our activity-based approach firsthand."
    }
  ],
  "Bookings & Schedule": [
    {
      q: "How are classes scheduled?",
      a: "We offer flexible slots from early morning to late evening, including weekend batches, to fit into your child's schedule."
    },
    {
      q: "What is the batch size?",
      a: "To ensure personalized attention, we maintain small batches (typically 4-6 children per batch)."
    }
  ],
  "Curriculum & Methods": [
    {
      q: "What is your teaching methodology?",
      a: "We use a systematic phonics instruction method combined with an activity-based approach. Lessons include storytelling, games, songs, picture recognition, and hands-on exercises."
    },
    {
      q: "Will my child learn spelling and grammar?",
      a: "Yes, our program focuses heavily on vocabulary building, spelling rules, and correct pronunciation alongside blending sounds."
    }
  ],
  "Safety & Progress Tracking": [
    {
      q: "How do you track child progress?",
      a: "We conduct regular interactive assessments and provide detailed feedback to parents, including video progress recordings."
    },
    {
      q: "Can parents join the live sessions?",
      a: "While we recommend children attend independently to build confidence, parents receive periodic updates and session summaries."
    }
  ],
  "Fee & Payments": [
    {
      q: "What are the payment options?",
      a: "We accept secure online bank transfers, credit/debit cards, and payment links. Fees can be paid in flexible modules."
    }
  ]
};

const generateSmallWavesPath = () => {
  let path = "M 0 40";
  const waveWidth = 40;
  const steps = 36; // 1440 / 40
  for (let i = 0; i < steps; i++) {
    const startX = i * waveWidth;
    path += ` Q ${startX + 10} 25, ${startX + 20} 40`;
    path += ` Q ${startX + 30} 55, ${startX + 40} 40`;
  }
  path += " L 1440 80 L 0 80 Z";
  return path;
};
const smallWavesPath = generateSmallWavesPath();

// Floating alphabet particle data
const floatingLetters = [
  { letter: "A", x: "8%", delay: 0, duration: 7, color: "#eba37a" },
  { letter: "B", x: "18%", delay: 1.2, duration: 9, color: "#95b09d" },
  { letter: "C", x: "28%", delay: 0.5, duration: 6, color: "#e6b85c" },
  { letter: "D", x: "72%", delay: 1.8, duration: 8, color: "#eba37a" },
  { letter: "E", x: "82%", delay: 0.3, duration: 7.5, color: "#95b09d" },
  { letter: "F", x: "92%", delay: 1, duration: 9, color: "#e6b85c" },
  { letter: "G", x: "50%", delay: 2, duration: 8.5, color: "#eba37a" },
];

// Scroll-triggered animated card component
function AnimatedCard({ children, delay = 0, direction = "up", className = "" }: { children: React.ReactNode; delay?: number; direction?: "up" | "left" | "right"; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : 0,
      x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
        delay,
      }
    }
  };
  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={isInView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

function useTransparentImage(src: string) {
  const [processedSrc, setProcessedSrc] = useState<string>(src);

  useEffect(() => {
    if (!src) return;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      const width = canvas.width;
      const height = canvas.height;
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;
      const visited = new Uint8Array(width * height);
      const queue: number[] = [];

      const push = (x: number, y: number) => {
        const idx = y * width + x;
        if (visited[idx]) return;
        visited[idx] = 1;

        const pixelStart = idx * 4;
        const r = data[pixelStart];
        const g = data[pixelStart + 1];
        const b = data[pixelStart + 2];

        if (r > 240 && g > 240 && b > 240) {
          queue.push(idx);
        }
      };

      // Push corners
      push(0, 0);
      push(width - 1, 0);
      push(0, height - 1);
      push(width - 1, height - 1);

      // Push edges to handle isolated areas
      for (let x = 0; x < width; x += 10) {
        push(x, 0);
        push(x, height - 1);
      }
      for (let y = 0; y < height; y += 10) {
        push(0, y);
        push(width - 1, y);
      }

      while (queue.length > 0) {
        const idx = queue.shift()!;
        const pixelStart = idx * 4;

        data[pixelStart + 3] = 0; // set alpha to 0 (transparent)

        const x = idx % width;
        const y = Math.floor(idx / width);

        const checkNeighbor = (nx: number, ny: number) => {
          if (nx < 0 || nx >= width || ny < 0 || ny >= height) return;
          const nIdx = ny * width + nx;
          if (visited[nIdx]) return;
          visited[nIdx] = 1;

          const np = nIdx * 4;
          const nr = data[np];
          const ng = data[np + 1];
          const nb = data[np + 2];
          const na = data[np + 3];

          // If pixel is white/near-white, traverse
          if (na > 0 && nr > 235 && ng > 235 && nb > 235) {
            queue.push(nIdx);
          }
        };

        checkNeighbor(x + 1, y);
        checkNeighbor(x - 1, y);
        checkNeighbor(x, y + 1);
        checkNeighbor(x, y - 1);
      }

      ctx.putImageData(imageData, 0, 0);
      try {
        setProcessedSrc(canvas.toDataURL("image/png"));
      } catch (e) {
        console.error("Canvas toDataURL failed", e);
      }
    };
  }, [src]);

  return processedSrc;
}

const phonicsFeatures = [
  {
    title: "Systematic Phonics Instruction",
    tag: "Methodology",
    bg: "bg-[#F8EBE1] border-[#eba37a]",
    shape: "rounded-[60%_40%_50%_50%_/_50%_50%_50%_50%]",
    icon: BookOpen,
    desc: "Structured step-by-step sound mapping that helps children decode complex letter relationships and read new words independently instead of memorising them."
  },
  {
    title: "Interactive & Play-Based Lessons",
    tag: "Engagement",
    bg: "bg-[#F7EEDC] border-[#e6b85c]",
    shape: "rounded-[30%_70%_60%_40%_/_40%_60%_40%_60%]",
    icon: Sparkles,
    desc: "Designed to match a child's natural curiosity. Dynamic word games, interactive loops, and animated soundboards keep kids engaged and excited."
  },
  {
    title: "Reading & Pronunciation Development",
    tag: "Oral Skills",
    bg: "bg-[#EAECE6] border-[#95b09d]",
    shape: "rounded-[70%_30%_40%_60%_/_60%_40%_60%_40%]",
    icon: Volume2,
    desc: "Developing clear speaking habits early. We focus heavily on correct speech articulation, voice pitch, and letter-sound associations to clear speech blocks."
  },
  {
    title: "Vocabulary & Spelling Enhancement",
    tag: "Vocabulary",
    bg: "bg-[#F7E7DC] border-[#eba37a]",
    shape: "rounded-[40%_60%_30%_70%_/_50%_40%_60%_50%]",
    icon: Award,
    desc: "By learning phonetics rules rather than cramming lists, children naturally decode spellings and quickly absorb new vocab elements in context."
  },
  {
    title: "Storytelling & Activity-Based Learning",
    tag: "Active Play",
    bg: "bg-white border-[#363B37]/30",
    shape: "rounded-[50%_50%_50%_50%_/_40%_60%_40%_60%]",
    icon: HeartHandshake,
    desc: "Dynamic activity-based exercises combining games, rhymes, and visual stories keep the lessons highly immersive, fostering a deep love for literature."
  },
  {
    title: "Confidence-Building Speaking Practice",
    tag: "Expression",
    bg: "bg-[#E5EAE3] border-[#95b09d]",
    shape: "rounded-[60%_40%_70%_30%_/_50%_50%_50%_50%]",
    icon: Mic,
    desc: "Interactive vocal drillings, classroom reader shows, and peer conversation exercises designed to remove public speaking fear and empower natural speech."
  },
  {
    title: "Small Batches & Personalised Attention",
    tag: "Care Ratio",
    bg: "bg-[#F6EBD7] border-[#e6b85c]",
    shape: "rounded-[30%_70%_50%_50%_/_50%_60%_40%_50%]",
    icon: Users,
    desc: "We maintain micro-batches of strictly 4-6 children, ensuring the trainer listens to every child speak, corrects sounds instantly, and tracks individual progress."
  },
  {
    title: "Experienced & Caring Trainers",
    tag: "Faculty",
    bg: "bg-[#F9F1EA] border-[#eba37a]/50",
    shape: "rounded-[50%_50%_60%_40%_/_60%_50%_50%_40%]",
    icon: ShieldCheck,
    desc: "Certified early-childhood pedagogy specialists who treat each child with patience and positive reinforcement, fostering an open space for mistake-free learning."
  }
];

export function PhonicsPage() {
  const [activeFaqTab, setActiveFaqTab] = useState<string>("General");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const transparentGirl = useTransparentImage("/students/phonics_girl.png");
  const transparentBaby = useTransparentImage("/students/phonics_baby.png");
  const transparentCaregiver = useTransparentImage("/students/phonics_caregiver.png");

  // Interactive Soundboard State
  const [selectedSound, setSelectedSound] = useState<string>("sh");
  const soundboardData = [
    { sound: "a", word: "Apple", description: "Short vowel sound. Open mouth wide like taking a bite!", color: "bg-[#e6b85c]/35", symbol: "🍎" },
    { sound: "ch", word: "Chair", description: "Consonant digraph. Blow quick air like a train puffing: ch-ch-ch!", color: "bg-[#eba37a]/35", symbol: "🪑" },
    { sound: "sh", word: "Ship", description: "Consonant digraph. Put finger to lips: shhh be very quiet!", color: "bg-[#95b09d]/35", symbol: "🚢" },
    { sound: "th", word: "Thumb", description: "Put tongue lightly between teeth and blow soft air outwards!", color: "bg-[#e6b85c]/35", symbol: "👍" },
    { sound: "ee", word: "Bee", description: "Long vowel sound. Pull the corners of your mouth back into a big smile!", color: "bg-[#eba37a]/35", symbol: "🐝" },
    { sound: "oo", word: "Book", description: "Short double vowel. Make a small round circle with your lips!", color: "bg-[#95b09d]/35", symbol: "📖" },
  ];

  const activeSoundDetail = soundboardData.find(item => item.sound === selectedSound) || soundboardData[2];

  // Interactive Word Builder State
  const [activeSlots, setActiveSlots] = useState<(string | null)[]>([null, null, null]);
  const handleLetterClick = (letter: string) => {
    const emptyIndex = activeSlots.indexOf(null);
    if (emptyIndex !== -1) {
      const newSlots = [...activeSlots];
      newSlots[emptyIndex] = letter;
      setActiveSlots(newSlots);
    }
  };
  const handleResetSlots = () => {
    setActiveSlots([null, null, null]);
  };


  return (
    <div className="font-Phonics bg-[#FAF8F3] min-h-screen text-[#363B37] overflow-hidden flex flex-col">
      <Navbar />

      <main className="flex-grow pb-0 relative w-full">

        {/* Hero Section Container (Cream background, grid layout, restricted height on desktop) */}
        <div
          className="relative w-full lg:min-h-[720px] flex flex-col justify-between overflow-hidden pt-28 lg:pt-36 pb-20 sm:pb-28 bg-[#FAF8F3]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(54, 59, 55, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(54, 59, 55, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          {/* Absolute Hand-Drawn Sketches / Doodles */}
          {/* Top-left Star Sketch */}
          <div className="absolute top-32 left-[8%] w-14 h-14 pointer-events-none select-none hidden md:block">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#363B37] stroke-[2.5] fill-none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M48 18 C50 14, 52 14, 54 18 C56 22, 60 35, 62 38 C64 41, 78 40, 83 40 C88 40, 88 43, 84 45 C80 47, 68 53, 66 56 C64 59, 68 73, 70 78 C72 83, 69 85, 65 82 C61 79, 52 70, 50 70 C48 70, 39 79, 35 82 C31 85, 28 83, 30 78 C32 73, 36 59, 34 56 C32 53, 20 47, 16 45 C12 43, 12 40, 17 40 C22 40, 36 41, 38 38 C40 35, 44 22, 48 18 Z" />
            </svg>
          </div>

          {/* Top-left Planet Sketch */}
          <div className="absolute top-36 left-[18%] w-16 h-16 pointer-events-none select-none hidden lg:block">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#363B37] stroke-[2.2] fill-none" strokeLinecap="round">
              {/* Main Planet Circle */}
              <path d="M50 20 C66 20, 80 34, 80 50 C80 66, 66 80, 50 80 C34 80, 20 66, 20 50 C20 34, 34 20, 50 20 Z" />
              {/* Planet details / craters */}
              <circle cx="38" cy="40" r="6" />
              <circle cx="58" cy="62" r="5" />
              <circle cx="62" cy="38" r="4" />
              <path d="M 28 62 C 30 60, 34 60, 36 63" />
              {/* Dots */}
              <circle cx="48" cy="50" r="1.5" fill="#363B37" />
              <circle cx="42" cy="65" r="1" fill="#363B37" />
            </svg>
          </div>

          {/* Mid-left Planet Sketch */}
          <div className="absolute top-64 left-[6%] w-14 h-14 pointer-events-none select-none hidden lg:block">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#363B37] stroke-[2.2] fill-none" strokeLinecap="round">
              <path d="M50 25 C63 25, 75 37, 75 50 C75 63, 63 75, 50 75 C37 75, 25 63, 25 50 C25 37, 37 25, 50 25 Z" />
              <circle cx="42" cy="42" r="4" />
              <circle cx="58" cy="54" r="5" />
              <path d="M 33 58 C 36 57, 38 60, 39 63" />
            </svg>
          </div>

          {/* Top-right Rocket Sketch */}
          <div className="absolute top-36 right-[8%] w-20 h-20 pointer-events-none select-none hidden md:block">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#363B37] stroke-[2.2] fill-none" strokeLinecap="round" strokeLinejoin="round">
              {/* Rocket body rotated */}
              <g transform="rotate(35 50 50)">
                {/* Nose cone */}
                <path d="M50 15 C54 28, 54 38, 50 45 C46 38, 46 28, 50 15 Z" />
                {/* Main Body */}
                <path d="M46 45 L54 45 L55 70 L45 70 Z" />
                {/* Fins */}
                <path d="M45 60 L38 72 L45 70 Z" />
                {/* Right Fin */}
                <path d="M55 60 L62 72 L55 70 Z" />
                {/* Window */}
                <circle cx="50" cy="53" r="3" />
                {/* Exhaust Flames */}
                <path d="M47 73 L50 85 L53 73" />
                <path d="M45 71 L47 78 L49 71" />
                <path d="M51 71 L53 78 L55 71" />
              </g>
            </svg>
          </div>

          {/* Center Content Section */}
          <div className="max-w-3xl mx-auto px-4 text-center z-20 relative flex flex-col items-center pt-4 lg:pt-8">

            {/* Header badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block border border-[#363B37]/35 text-[#363B37] text-xs sm:text-sm px-5 py-1.5 rounded-full font-semibold uppercase tracking-wider bg-white/70 shadow-sm backdrop-blur-xs cursor-default"
            >
              Phonics Training
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-center max-w-5xl mx-auto mt-7 leading-[1.12] text-[#2c312e] font-normal"
            >
              Build Strong Readers. <br className="hidden sm:inline" />
              <span className="font-semibold text-[#1c1d1c]">Confident Speakers.</span> <br className="hidden sm:inline" />
              Lifelong Learners.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-base sm:text-lg md:text-xl text-[#555E58] max-w-3xl mx-auto mt-6 leading-relaxed px-2 font-normal"
            >
              At Apex Edge English, our Phonics Training Program is specially designed for young learners to develop strong reading, pronunciation, spelling, and communication skills from an early age.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-row items-center justify-center gap-6 mt-8 sm:mt-10"
            >
              <Link
                to="/enroll"
                className="bg-[#363B37] hover:bg-[#252826] text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-medium transition duration-300 shadow-md flex items-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                Book a Free Demo Class
                <span className="text-[1.1em] font-normal">›</span>
              </Link>
              <Link
                to="/contact-us"
                className="text-[#363B37] font-semibold underline underline-offset-4 hover:text-[#1c1d1c] transition duration-300 text-sm sm:text-base cursor-pointer"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>

          {/* Central Green Blob and Dashed line behind */}
          <div className="absolute inset-x-0 bottom-[80px] h-[220px] pointer-events-none z-0 hidden md:block">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none" preserveAspectRatio="none">
              {/* Dashed line */}
              <path
                d="M 16,65 Q 32,92 48,60 T 83,72"
                className="stroke-[#363B37] stroke-[0.25]"
                strokeDasharray="1.2,1.8"
              />
            </svg>

            {/* Central Green Organic Blob */}
            <div
              className="absolute left-[48%] top-[30%] -translate-x-1/2 w-16 h-20 bg-[#9fb9a3] opacity-80 z-0"
              style={{
                borderRadius: "45% 55% 60% 40% / 50% 60% 40% 50%"
              }}
            />
          </div>

          {/* Left Kid Container */}
          <div className="absolute left-0 bottom-0 w-[38%] lg:w-[42%] xl:w-[45%] max-w-[520px] h-[90%] lg:h-[95%] flex flex-col justify-end items-start z-10 hidden sm:flex pointer-events-none select-none">
            <motion.img
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, type: "spring", stiffness: 50, delay: 0.3 }}
              src={transparentGirl}
              alt="Toddler girl with heart sunglasses"
              className="relative w-full z-10 object-contain max-h-full select-none pointer-events-none translate-x-2"
            />
          </div>

          {/* Right Kid Container */}
          <div className="absolute right-0 bottom-0 w-[40%] lg:w-[44%] xl:w-[47%] max-w-[540px] h-[90%] lg:h-[95%] flex flex-col justify-end items-end z-10 hidden sm:flex pointer-events-none select-none">
            <motion.img
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, type: "spring", stiffness: 50, delay: 0.3 }}
              src={transparentBaby}
              alt="Baby in yellow outfit"
              className="relative w-full z-10 object-contain max-h-full select-none pointer-events-none -translate-x-2"
            />
          </div>

          {/* Wavy bottom divider using SVG */}
          <div className="w-full absolute bottom-0 left-0 right-0 z-30 translate-y-[2px]">
            <svg
              viewBox="0 0 1440 80"
              className="w-full fill-[#95b09d] pointer-events-none"
              preserveAspectRatio="none"
            >
              <path d={smallWavesPath} />
            </svg>
          </div>

        </div>

        {/* Sage green section below wave */}
        <div className="w-full bg-[#95b09d] py-16 sm:py-24 px-4 text-center z-30 relative min-h-[300px] flex flex-col justify-center items-center">

          {/* Hand drawn bird sketches on top left */}
          <div className="absolute top-16 left-[8%] w-16 h-16 pointer-events-none opacity-85 select-none hidden md:block">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#2e3d33] stroke-[2.2] fill-none" strokeLinecap="round">
              {/* Bird v shape 1 */}
              <path d="M20,35 C28,30 35,35 40,42 C45,35 52,30 60,35" />
              {/* Bird v shape 2 */}
              <path d="M45,55 C51,51 56,55 60,60 C64,55 69,51 75,55" />
              {/* Bird v shape 3 */}
              <path d="M15,65 C19,62 22,65 24,68 C26,65 29,62 33,65" />
            </svg>
          </div>

          {/* Hand drawn cloud & rainbow sketches on top right */}
          <div className="absolute top-16 right-[8%] w-24 h-24 pointer-events-none opacity-85 select-none hidden md:block">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#2e3d33] stroke-[2] fill-none" strokeLinecap="round">
              {/* Cloud shape */}
              <path d="M30,55 C22,55 20,45 28,40 C28,30 38,25 45,32 C50,22 62,22 68,32 C78,32 80,42 74,48 C80,55 72,62 65,60 C62,68 45,68 38,62 C38,62 33,62 30,55 Z" />
              {/* Rainbow curves under the cloud */}
              <path d="M 36 68 C 36 78, 64 78, 64 68" strokeDasharray="3,3" />
              <path d="M 40 72 C 40 82, 60 82, 60 72" />
              <path d="M 44 76 C 44 84, 56 84, 56 76" />
            </svg>
          </div>

          {/* White organic shape on top right (smooth pebble) */}
          <div className="absolute top-10 right-[9%] w-20 h-16 opacity-90 pointer-events-none select-none hidden lg:block">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-white/90">
              <path d="M30,20 C50,5 75,15 85,35 C95,55 80,85 55,90 C30,95 10,75 15,50 C20,25 10,35 30,20 Z" />
            </svg>
          </div>

          {/* Heading under wave */}
          <div className="max-w-4xl mx-auto text-[#2e3d33]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-normal tracking-tight">
              Interactive <br />
              <span className="font-semibold">Phonics Learning</span>
            </h2>
            <p className="text-sm sm:text-base text-[#465a4c] max-w-xl mx-auto mt-4 font-normal leading-relaxed px-4">
              Our activity-based approach combines storytelling, games, songs, picture recognition, and hands-on exercises.
            </p>
          </div>

          {/* Arched service cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-7xl mx-auto mt-16 px-4 w-full z-20 relative">
            {[
              {
                title: "Storytelling & Songs",
                desc: "Activity-based approach combining stories and picture recognition to make learning enjoyable.",
                img: "/students/phonics_card_in_home.png"
              },
              {
                title: "Letter Sounds",
                desc: "Children learn the relationship between letters and sounds to read words confidently.",
                img: "/students/phonics_card_sleep.png"
              },
              {
                title: "Independent Blending",
                desc: "Blend sounds to read new words independently rather than memorising them.",
                img: "/students/phonics_card_babysitting.png"
              },
              {
                title: "Fluent Reading",
                desc: "Gain reading confidence and spelling enhancement from an early age.",
                img: "/students/phonics_card_nanny.png"
              }
            ].map((card, idx) => (
              <AnimatedCard
                key={card.title}
                delay={idx * 0.12}
                direction="up"
                className="relative group w-full"
              >
                {/* Double-bordered offset solid shadow */}
                <div className="absolute inset-0 bg-[#FAF8F3] border-[2.5px] border-[#363B37] rounded-t-full rounded-b-[2.2rem] translate-x-2.5 translate-y-2.5 z-0" />

                {/* Main arched card container */}
                <div className="relative bg-[#FAF8F3] border-[2.5px] border-[#363B37] rounded-t-full rounded-b-[2rem] p-4 text-center z-10 flex flex-col items-center h-full min-h-[420px]">

                  {/* Arched image container */}
                  <div className="w-full aspect-[4/5] rounded-t-full overflow-hidden border-[2px] border-[#363B37] bg-[#eef1ed] z-10">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out select-none pointer-events-none"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mt-5 text-[#363B37] font-Phonics tracking-tight">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#555E58] mt-2 mb-6 max-w-[22ch] leading-relaxed font-normal">
                    {card.desc}
                  </p>

                  {/* Learn More Button */}
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-auto">
                    <Link
                      to="/enroll"
                      className="bg-[#363B37] hover:bg-[#252826] text-white px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition duration-300 shadow-sm cursor-pointer border border-[#363B37] inline-block"
                    >
                      Learn More
                    </Link>
                  </motion.div>

                </div>
              </AnimatedCard>
            ))}
          </div>

        </div>

        {/* Wave Divider: Sage Green to Cream */}
        <div className="w-full relative z-30 translate-y-1">
          <svg
            viewBox="0 0 1440 80"
            className="w-full fill-[#FAF8F3] pointer-events-none"
            preserveAspectRatio="none"
          >
            <path d={smallWavesPath} />
          </svg>
        </div>

        {/* Phonics Playzone: Soundboard & Word Builder */}
        <div className="w-full bg-[#FAF8F3] py-20 px-4 sm:px-8 z-30 relative overflow-hidden flex flex-col items-center">
          {/* Animated Decorative Sparkles */}
          <motion.div
            className="absolute top-10 left-[5%] w-12 h-12 pointer-events-none hidden lg:block"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ rotate: { duration: 12, repeat: Infinity, ease: "linear" }, scale: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
          >
            <Sparkles className="w-full h-full text-[#eba37a] opacity-30" />
          </motion.div>
          <motion.div
            className="absolute bottom-10 right-[5%] w-16 h-16 pointer-events-none hidden lg:block"
            animate={{ rotate: -360, scale: [1, 1.3, 1] }}
            transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
          >
            <Sparkles className="w-full h-full text-[#e6b85c] opacity-30" />
          </motion.div>

          <AnimatedCard direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              className="inline-block bg-[#eba37a]/20 text-[#eba37a] border border-[#eba37a]/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 font-Phonics"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              Playzone
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-normal tracking-tight text-[#363B37] font-Phonics">
              Play & Learn: <span className="font-semibold text-[#1c1d1c]">Phonics Fun!</span>
            </h2>
            <p className="text-sm sm:text-base text-[#555E58] max-w-xl mx-auto mt-4 font-normal">
              Click letter sounds to practice blending, or build 3-letter words to see illustrations!
            </p>
          </AnimatedCard>

          {/* Game Dashboard Grid */}
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch z-10 relative px-4">

            {/* Column 1: Phonics Soundboard */}
            <AnimatedCard direction="left" className="lg:col-span-6 bg-white border-[2.5px] border-[#363B37] rounded-[2rem] p-6 sm:p-8 shadow-[6px_6px_0px_#363B37] flex flex-col justify-between min-h-[480px]">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#363B37] flex items-center gap-2 mb-2 font-Phonics">
                  <motion.div
                    animate={{ rotate: [0, 15, -10, 5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Volume2 className="w-6 h-6 text-[#eba37a]" />
                  </motion.div>
                  Phonics Soundboard
                </h3>
                <p className="text-sm text-[#555E58] mb-6">
                  Select a sound card to see its mouth visual guide and practice blending.
                </p>

                {/* Sounds grid */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                  {soundboardData.map((item, sIdx) => {
                    const isSelected = selectedSound === item.sound;
                    return (
                      <motion.button
                        key={item.sound}
                        onClick={() => setSelectedSound(item.sound)}
                        whileHover={{ scale: 1.07, y: -3 }}
                        whileTap={{ scale: 0.93 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20, delay: sIdx * 0.07 }}
                        className={`py-4 rounded-2xl border-2 font-bold text-lg sm:text-xl flex flex-col items-center justify-center transition-colors cursor-pointer relative overflow-hidden ${isSelected
                          ? "bg-[#363B37] border-[#363B37] text-white shadow-[2px_2px_0px_#eba37a]"
                          : "bg-[#FAF8F3] border-[#363B37] text-[#363B37] hover:bg-[#eae7df]"
                          }`}
                      >
                        {isSelected && (
                          <motion.div
                            className="absolute inset-0 bg-white/10 rounded-2xl"
                            initial={{ scale: 0, opacity: 0.6 }}
                            animate={{ scale: 3, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                          />
                        )}
                        <motion.span
                          className="text-2xl mb-1"
                          animate={isSelected ? { scale: [1, 1.3, 1], rotate: [0, 10, -5, 0] } : {}}
                          transition={{ duration: 0.4 }}
                        >{item.symbol}</motion.span>
                        <span>{item.sound}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Sound Guide Detail Card */}
              <div className="bg-[#FAF8F3] border-2 border-[#363B37] rounded-2xl p-5 relative overflow-hidden flex flex-col sm:flex-row items-center gap-5">
                {/* Waveform Visualizer on the side */}
                <div className="flex flex-col items-center sm:border-r border-[#363B37]/10 pr-0 sm:pr-5 shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#363B37] text-white flex items-center justify-center text-3xl font-bold font-Phonics shadow-inner">
                    {activeSoundDetail.sound}
                  </div>
                  {/* Small wave bars */}
                  <div className="flex gap-1 h-6 items-center justify-center mt-2.5">
                    {[1, 2, 3, 4, 5].map(bar => (
                      <motion.div
                        key={bar}
                        animate={{ height: [8, 22, 8] }}
                        transition={{ repeat: Infinity, duration: 0.5 + bar * 0.15, ease: "easeInOut" }}
                        className="w-[3px] bg-[#363B37] rounded-full"
                      />
                    ))}
                  </div>
                </div>

                {/* Detail text */}
                <div className="text-left flex-grow">
                  <span className="inline-block bg-[#95b09d]/30 text-[#2e3d33] px-2.5 py-0.5 rounded-full text-xs font-bold mb-1.5 uppercase font-Phonics">
                    Vocalization Guide
                  </span>
                  <h4 className="text-lg font-bold text-[#363B37] flex items-center gap-1.5 font-Phonics">
                    "{activeSoundDetail.sound}" as in <span className="underline decoration-[#eba37a] decoration-2">{activeSoundDetail.word}</span>
                  </h4>
                  <p className="text-sm text-[#555E58] mt-1.5 leading-relaxed font-normal">
                    {activeSoundDetail.description}
                  </p>
                </div>
              </div>

            </AnimatedCard>

            {/* Column 2: 3-Letter Word Builder */}
            <AnimatedCard direction="right" className="lg:col-span-6 bg-white border-[2.5px] border-[#363B37] rounded-[2rem] p-6 sm:p-8 shadow-[6px_6px_0px_#363B37] flex flex-col justify-between min-h-[480px]">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#363B37] flex items-center gap-2 mb-2 font-Phonics">
                  <Sparkles className="w-6 h-6 text-[#e6b85c]" />
                  3-Letter Word Builder
                </h3>
                <p className="text-sm text-[#555E58] mb-6">
                  Click the letter tiles to fill the three slots and build simple phonics words.
                </p>

                {/* Active Slots */}
                <div className="flex gap-4 justify-center mb-6">
                  {activeSlots.map((letter, idx) => (
                    <div
                      key={idx}
                      className="w-16 h-20 sm:w-20 sm:h-24 bg-[#FAF8F3] border-[2.5px] border-[#363B37] rounded-2xl flex items-center justify-center text-3xl sm:text-4xl font-bold text-[#363B37] shadow-[3px_3px_0px_#363B37] relative overflow-hidden"
                    >
                      {letter ? (
                        <motion.span
                          initial={{ scale: 0.5, y: 15 }}
                          animate={{ scale: 1, y: 0 }}
                          className="font-Phonics"
                        >
                          {letter}
                        </motion.span>
                      ) : (
                        <span className="text-[#363B37]/25 font-normal">?</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Letter Tiles */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center max-w-md mx-auto mb-6">
                  {["C", "B", "F", "A", "T", "G", "N"].map((letter) => {
                    const isUsed = activeSlots.includes(letter);
                    const isFull = activeSlots.every(slot => slot !== null);
                    return (
                      <button
                        key={letter}
                        onClick={() => handleLetterClick(letter)}
                        disabled={isUsed || isFull}
                        className={`w-12 h-14 sm:w-14 sm:h-16 rounded-xl border-2 border-[#363B37] text-xl sm:text-2xl font-bold flex items-center justify-center shadow-[2px_2px_0px_#363B37] transition-all cursor-pointer ${isUsed
                          ? "bg-[#363B37]/5 text-[#363B37]/20 border-dashed cursor-not-allowed shadow-none"
                          : isFull
                            ? "bg-[#FAF8F3]/50 text-[#363B37]/40 border-dashed cursor-not-allowed shadow-none"
                            : "bg-white hover:-translate-y-0.5 active:translate-y-0 text-[#363B37] hover:bg-[#FAF8F3]"
                          }`}
                      >
                        {letter}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Game Outcome Box */}
              <div>
                {activeSlots.some(slot => slot === null) ? (
                  <div className="bg-[#FAF8F3] border-[2px] border-dashed border-[#363B37]/40 rounded-2xl p-5 text-center min-h-[110px] flex items-center justify-center">
                    <p className="text-sm text-[#555E58] italic font-normal">
                      Click letters above to fill slots. Try building <strong className="text-[#eba37a]">CAT</strong>, <strong className="text-[#e6b85c]">BAG</strong>, or <strong className="text-[#95b09d]">FAN</strong>!
                    </p>
                  </div>
                ) : (() => {
                  const word = activeSlots.join("");
                  let matches = true;
                  let wordContent = {
                    title: "🐱 CAT!",
                    colorClass: "bg-[#e6b85c]/25 border-[#e6b85c] text-[#363B37]",
                    desc: "C - A - T blends together to make CAT! Meow! Excellent reading!"
                  };

                  if (word === "CAT") {
                    wordContent = {
                      title: "🐱 CAT!",
                      colorClass: "bg-[#e6b85c]/25 border-[#e6b85c] text-[#363B37]",
                      desc: "C - A - T blends together to make CAT! Meow! Excellent reading!"
                    };
                  } else if (word === "BAG") {
                    wordContent = {
                      title: "🎒 BAG!",
                      colorClass: "bg-[#eba37a]/25 border-[#eba37a] text-[#363B37]",
                      desc: "B - A - G blends together to make BAG! Grab your school bag!"
                    };
                  } else if (word === "FAN") {
                    wordContent = {
                      title: "💨 FAN!",
                      colorClass: "bg-[#95b09d]/25 border-[#95b09d] text-[#363B37]",
                      desc: "F - A - N blends together to make FAN! Ah, feel the cool breeze!"
                    };
                  } else {
                    matches = false;
                    wordContent = {
                      title: "🤔 TRY AGAIN",
                      colorClass: "bg-red-50 border-red-300 text-red-800",
                      desc: `"${word}" is a fun try, but it's not one of our target words. Can you build CAT, BAG, or FAN?`
                    };
                  }

                  return (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`border-2 rounded-2xl p-5 text-left min-h-[110px] flex flex-col justify-center relative ${wordContent.colorClass}`}
                    >
                      {matches && (
                        <div className="absolute top-3 right-3 flex gap-1 pointer-events-none">
                          <Sparkles className="w-5 h-5 animate-pulse text-[#eba37a]" />
                        </div>
                      )}
                      <h4 className="text-lg font-bold flex items-center gap-1.5 uppercase font-Phonics">
                        {wordContent.title}
                      </h4>
                      <p className="text-sm mt-1 leading-relaxed font-normal">
                        {wordContent.desc}
                      </p>
                    </motion.div>
                  );
                })()}

                {/* Reset button inside outcomes */}
                <div className="flex justify-end mt-4">
                  <button
                    onClick={handleResetSlots}
                    disabled={activeSlots.every(slot => slot === null)}
                    className={`px-6 py-2 rounded-full font-bold text-xs sm:text-sm border-2 border-[#363B37] cursor-pointer shadow-[2px_2px_0px_#363B37] active:translate-y-0.5 active:shadow-none transition-all ${activeSlots.every(slot => slot === null)
                      ? "bg-gray-100 text-gray-400 border-gray-300 shadow-none cursor-not-allowed"
                      : "bg-white hover:bg-[#FAF8F3] text-[#363B37]"
                      }`}
                  >
                    Clear Slots
                  </button>
                </div>
              </div>

            </AnimatedCard>

          </div>
        </div>

        {/* Wave Divider: Cream to Charcoal */}
        <div className="w-full relative z-30 translate-y-1">
          <svg
            viewBox="0 0 1440 80"
            className="w-full fill-[#363B37] pointer-events-none"
            preserveAspectRatio="none"
          >
            <path d={smallWavesPath} />
          </svg>
        </div>

        {/* Section 1: Bio Section (Charcoal) */}
        <div className="w-full bg-[#363B37] text-[#FAF8F3] py-20 px-4 sm:px-8 z-30 relative overflow-hidden flex flex-col items-center">
          {/* Yellow background organic blob behind caregiver */}
          <div
            className="absolute left-[5%] top-[15%] w-80 h-80 rounded-full filter blur-[2px] opacity-25 z-0 pointer-events-none select-none"
            style={{
              background: "radial-gradient(circle, #e6b85c 0%, #e1ad49 70%, transparent 100%)",
              clipPath: "polygon(10% 20%, 90% 10%, 100% 80%, 75% 100%, 20% 90%)",
            }}
          />

          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10 relative">
            {/* Left Column: Arched Caregiver Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-t-full overflow-hidden border-[3px] border-[#FAF8F3] shadow-xl bg-[#FAF8F3]/5">
                <img
                  src={transparentCaregiver}
                  alt="Phonics Caregiver"
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>
            </div>

            {/* Right Column: Bio details */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <h2 className="text-4xl sm:text-5xl font-normal tracking-tight mb-8">
                Phonics Training <span className="font-semibold text-white">for Kids</span>
              </h2>

              <div className="bg-[#FAF8F3] text-[#363B37] border-[2.5px] border-[#363B37] rounded-[2rem] p-6 sm:p-8 shadow-xl max-w-2xl text-base sm:text-lg space-y-6 relative">
                {/* Custom solid 3D shadow under the card */}
                <div className="absolute -inset-[2px] bg-[#FAF8F3] border-[2.5px] border-[#363B37] rounded-[2rem] -z-10 translate-x-2.5 translate-y-2.5" />

                <p className="leading-relaxed font-normal">
                  At Apex Edge English, our Phonics Training Program is specially designed for young learners to develop strong reading, pronunciation, spelling, and communication skills from an early age.
                </p>
                <p className="leading-relaxed font-normal">
                  Through fun, interactive, and engaging lessons, children learn the relationship between letters and sounds, enabling them to read words confidently rather than memorising them. Our activity-based approach combines storytelling, games, songs, picture recognition, and hands-on exercises to make learning enjoyable and effective. We create a nurturing environment where every child learns at their own pace.
                </p>
              </div>

              <Link
                to="/enroll"
                className="bg-[#FAF8F3] hover:bg-[#eae7df] text-[#363B37] border-[2.5px] border-[#363B37] px-7 py-3.5 rounded-full font-bold transition inline-flex items-center gap-2 mt-10 cursor-pointer text-sm sm:text-base shadow-[3px_3px_0px_#111] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#111]"
              >
                Book a Free Demo Class
                <span className="text-[1.1em] font-normal">›</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Wave Divider: Charcoal to Cream */}
        <div className="w-full relative z-30 translate-y-1">
          <svg
            viewBox="0 0 1440 80"
            className="w-full fill-[#FAF8F3] pointer-events-none"
            preserveAspectRatio="none"
          >
            <path d={smallWavesPath} />
          </svg>
        </div>

        {/* Section 2: Features Section (Cream) */}
        <div
          className="w-full bg-[#FAF8F3] py-24 px-4 sm:px-8 z-30 relative overflow-hidden flex flex-col items-center"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(54, 59, 55, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(54, 59, 55, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        >
          {/* Decorative Floating Letters */}
          <div className="absolute top-12 left-[5%] text-[#eba37a]/15 text-9xl font-bold select-none pointer-events-none hidden lg:block font-Phonics">
            A
          </div>
          <div className="absolute bottom-16 right-[5%] text-[#95b09d]/20 text-9xl font-bold select-none pointer-events-none hidden lg:block font-Phonics">
            B
          </div>
          <div className="absolute top-[40%] right-[3%] text-[#e6b85c]/15 text-8xl font-bold select-none pointer-events-none hidden xl:block font-Phonics">
            C
          </div>

          {/* Sparkle Heading */}
          <div className="flex items-center justify-center gap-4 max-w-4xl mx-auto text-[#363B37] text-center mb-4 relative z-10">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#363B37] shrink-0 hidden sm:block">
              <path d="M12 2 Q12 12 22 12 Q12 12 12 22 Q12 12 2 12 Q12 12 12 2 Z" />
            </svg>
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-normal tracking-tight">
              Why Choose <span className="font-semibold">Apex Edge English for Phonics?</span>
            </h2>
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#363B37] shrink-0 hidden sm:block">
              <path d="M12 2 Q12 12 22 12 Q12 12 12 22 Q12 12 2 12 Q12 12 12 2 Z" />
            </svg>
          </div>
          <p className="text-sm sm:text-base text-[#555E58] max-w-xl mx-auto text-center font-normal mb-20 relative z-10">
            Give your child the foundation of confident English reading and speech with our innovative, play-based methodologies.
          </p>

          {/* Journey Path Timeline */}
          <div className="relative max-w-5xl w-full mx-auto px-4 z-20">

            {/* Center Dashed Connection Line - animated draw */}
            <motion.div
              className="absolute top-8 bottom-8 left-4 md:left-1/2 md:-translate-x-1/2 border-l-[3px] border-dashed border-[#363B37]/20 z-0"
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {/* Steps */}
            {phonicsFeatures.map((item, idx) => {
              const isOdd = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-center justify-between w-full mb-16 last:mb-0">

                  {/* Left Side Content (Desktop Only for Odd indices) */}
                  <div className="hidden md:flex w-[45%] justify-end">
                    {isOdd && (
                      <AnimatedCard direction="left" delay={0.1}>
                        <motion.div
                          whileHover={{ scale: 1.05, rotate: -1, y: -4 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className={`relative p-8 border-[2.5px] border-[#363B37] text-left max-w-md ${item.bg} ${item.shape} shadow-[4px_4px_0px_#363B37] cursor-default`}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <motion.div
                              className="w-10 h-10 bg-white rounded-xl border-2 border-[#363B37] flex items-center justify-center shadow-[1.5px_1.5px_0px_#363B37]"
                              whileHover={{ rotate: 15 }}
                            >
                              <item.icon className="w-5 h-5 text-[#363B37]" />
                            </motion.div>
                            <span className="px-3 py-0.5 bg-white border border-[#363B37] rounded-full text-[10px] font-black uppercase tracking-wider text-[#363B37]">
                              {item.tag}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-[#363B37] font-Phonics tracking-tight mb-2">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#555E58] font-normal leading-relaxed font-sans">
                            {item.desc}
                          </p>
                        </motion.div>
                      </AnimatedCard>
                    )}
                  </div>

                  {/* Center Node / Number Dot - pulsing */}
                  <motion.div
                    className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full border-[2.5px] border-[#363B37] bg-[#FAF8F3] flex items-center justify-center z-10 shadow-[2px_2px_0px_#363B37]"
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1, type: "spring" }}
                  >
                    <span className="text-xs font-black text-[#363B37]">{idx + 1}</span>
                  </motion.div>

                  {/* Right Side Content (Desktop Even, Mobile All) */}
                  <div className="w-full md:w-[45%] flex justify-start pl-12 md:pl-0">
                    {(!isOdd || true) && (
                      <AnimatedCard direction="right" delay={0.1}>
                        <motion.div
                          whileHover={{ scale: 1.05, rotate: 1, y: -4 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className={`relative p-8 border-[2.5px] border-[#363B37] text-left max-w-md ${item.bg} ${item.shape} shadow-[4px_4px_0px_#363B37] cursor-default ${isOdd ? "md:hidden" : ""}`}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <motion.div
                              className="w-10 h-10 bg-white rounded-xl border-2 border-[#363B37] flex items-center justify-center shadow-[1.5px_1.5px_0px_#363B37]"
                              whileHover={{ rotate: -15 }}
                            >
                              <item.icon className="w-5 h-5 text-[#363B37]" />
                            </motion.div>
                            <span className="px-3 py-0.5 bg-white border border-[#363B37] rounded-full text-[10px] font-black uppercase tracking-wider text-[#363B37]">
                              {item.tag}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-[#363B37] font-Phonics tracking-tight mb-2">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#555E58] font-normal leading-relaxed font-sans">
                            {item.desc}
                          </p>
                        </motion.div>
                      </AnimatedCard>
                    )}
                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* Wave Divider: Cream to Mustard Yellow */}
        <div className="w-full relative z-30 translate-y-1">
          <svg
            viewBox="0 0 1440 80"
            className="w-full fill-[#e6b85c] pointer-events-none"
            preserveAspectRatio="none"
          >
            <path d={smallWavesPath} />
          </svg>
        </div>

        {/* Section 3: Learning Progression Roadmap (Mustard Yellow Background) */}
        <div className="w-full bg-[#e6b85c] py-20 px-4 sm:px-8 z-30 relative overflow-hidden flex flex-col items-center">

          {/* Animated background blobs */}
          {["15%", "70%", "40%"].map((left, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full opacity-20 pointer-events-none"
              style={{
                left,
                top: `${20 + i * 25}%`,
                background: ["#fff", "#363B37", "#fff"][i],
                filter: "blur(30px)",
              }}
              animate={{
                scale: [1, 1.4, 1],
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
            />
          ))}

          <AnimatedCard direction="up" className="text-[#363B37] text-center max-w-4xl mx-auto mb-16 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-normal tracking-tight">
              Our 3-Stage <span className="font-semibold">Learning Roadmap</span>
            </h2>
            <p className="text-sm sm:text-base text-[#4f4327] max-w-xl mx-auto mt-4 font-normal leading-relaxed">
              How we guide young learners from single letter sounds to confident, fluent English reading
            </p>
          </AnimatedCard>

          {/* Curriculum Progression Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl w-full mx-auto px-4 z-20 relative">
            {[
              {
                stage: "Stage 1",
                title: "Sound Foundations",
                age: "Ages 4 - 5",
                desc: "Focuses on single letter-sound recognition, phonemic sound awareness, and blending simple 3-letter words (CVC words like CAT, SUN, PIN) using interactive play cards.",
                tag: "Phonemic Mapping",
                shape: "rounded-[2rem_2rem_0.5rem_2.2rem]",
                borderRadius: "2rem 2rem 0.5rem 2.2rem"
              },
              {
                stage: "Stage 2",
                title: "Digraphs & Blends",
                age: "Ages 5 - 6",
                desc: "Grouping letters (like sh, ch, th, ee) and blending double consonants (like bl, cr, st) to read longer, multi-syllabic words independently without memorising them.",
                tag: "Sound Blending",
                shape: "rounded-[2rem_0.5rem_2rem_2rem]",
                borderRadius: "2rem 0.5rem 2rem 2rem"
              },
              {
                stage: "Stage 3",
                title: "Fluent Reading Habits",
                age: "Ages 6+",
                desc: "Focuses on phonetic spelling rules, vocabulary expansion, natural sentence structures, and reading short story passages smoothly and confidently.",
                tag: "Sentence Fluency",
                shape: "rounded-[0.5rem_2rem_2rem_2rem]",
                borderRadius: "0.5rem 2rem 2rem 2rem"
              }
            ].map((step, idx) => (
              <AnimatedCard
                key={step.title}
                delay={idx * 0.15}
                direction="up"
                className="relative group w-full h-full"
              >
                {/* 3D solid shadow */}
                <motion.div
                  className="absolute inset-0 bg-[#363B37] translate-x-2.5 translate-y-2.5 z-0"
                  style={{ borderRadius: step.borderRadius }}
                  whileHover={{ x: 14, y: 14 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />

                {/* Card container */}
                <motion.div
                  className={`relative bg-white border-[2.5px] border-[#363B37] p-8 z-10 flex flex-col justify-between h-full min-h-[280px] ${step.shape} shadow-md cursor-default`}
                  whileHover={{ x: -4, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >

                  <div>
                    {/* Header: Stage Number Badge & Tag */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <motion.span
                        className="px-3.5 py-1 bg-[#363B37] text-white border-2 border-[#363B37] rounded-full text-xs font-black uppercase tracking-wider shadow-[1.5px_1.5px_0px_#363B37]"
                        whileHover={{ scale: 1.1 }}
                      >
                        {step.stage}
                      </motion.span>
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#eba37a] border border-[#eba37a]/30 bg-[#eba37a]/10 px-2 py-0.5 rounded-md">
                        {step.age}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#363B37] font-Phonics tracking-tight mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#555E58] font-normal leading-relaxed font-sans mb-6">
                      {step.desc}
                    </p>
                  </div>

                  {/* Tag footer */}
                  <div className="flex items-center gap-1.5 pt-4 border-t border-[#363B37]/10">
                    <span className="text-xs font-bold text-[#363B37]/50">Focus:</span>
                    <span className="text-xs font-bold text-[#363B37]">{step.tag}</span>
                  </div>

                </motion.div>
              </AnimatedCard>
            ))}
          </div>

        </div>

        {/* Wave Divider: Yellow to Cream */}
        <div className="w-full relative z-30 translate-y-1">
          <svg
            viewBox="0 0 1440 80"
            className="w-full fill-[#FAF8F3] pointer-events-none"
            preserveAspectRatio="none"
          >
            <path d="M0,40 C120,70 240,70 360,40 C480,10 600,10 720,40 C840,70 960,70 1080,40 C1200,10 1320,10 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>





        {/* Section 5: Safety & Peace of Mind (Cream Background) */}
        <div className="w-full bg-[#FAF8F3] py-20 px-4 sm:px-8 z-30 relative overflow-hidden flex flex-col items-center">

          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10 relative">

            {/* Left Column: Heading and Outcomes Stickers */}
            <div className="lg:col-span-6 flex flex-col items-start text-left w-full">
              <AnimatedCard direction="left" className="w-full">
                <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-normal tracking-tight text-[#363B37] mb-4">
                  Learning <span className="font-semibold">Outcomes</span>
                </h2>
                <p className="text-sm sm:text-base text-[#555E58] font-normal mb-10 leading-relaxed max-w-xl">
                  By the end of the Phonics Training program, children will earn these valuable speech and reading milestones:
                </p>
              </AnimatedCard>

              {/* Outcomes Stickers Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-xl">
                {[
                  {
                    title: "Letter Sound Mastery",
                    desc: "Recognise letter sounds and digraphs with absolute confidence.",
                    bg: "bg-[#F8EBE1] border-[#eba37a]",
                    icon: BookOpen,
                    rot: "hover:rotate-0 -rotate-1",
                    shape: "rounded-[20px_12px_20px_12px]"
                  },
                  {
                    title: "Independent Blending",
                    desc: "Blend sounds to read new, unfamiliar words independently.",
                    bg: "bg-[#F7EEDC] border-[#e6b85c]",
                    icon: Sparkles,
                    rot: "hover:rotate-0 rotate-1.5",
                    shape: "rounded-[12px_20px_12px_20px]"
                  },
                  {
                    title: "Speech & Vocab Boost",
                    desc: "Improve articulation, pronunciation, and active word base.",
                    bg: "bg-[#EAECE6] border-[#95b09d]",
                    icon: Volume2,
                    rot: "hover:rotate-0 rotate-0.5",
                    shape: "rounded-[20px_20px_12px_12px]"
                  },
                  {
                    title: "Fluent Reading Habits",
                    desc: "Transition smoothly from sound-blending to sentence fluency.",
                    bg: "bg-[#E5EAE3] border-[#95b09d]",
                    icon: Award,
                    rot: "hover:rotate-0 -rotate-1.5",
                    shape: "rounded-[12px_12px_20px_20px]"
                  },
                  {
                    title: "Strong Spelling Skills",
                    desc: "Build phonetic spelling logic to write words accurately.",
                    bg: "bg-[#F7E7DC] border-[#eba37a]",
                    icon: BookOpen,
                    rot: "hover:rotate-0 -rotate-0.5",
                    shape: "rounded-[20px_12px_12px_20px]"
                  },
                  {
                    title: "Natural English Speech",
                    desc: "Speak and express thoughts naturally without hesitation.",
                    bg: "bg-[#F6EBD7] border-[#e6b85c]",
                    icon: Mic,
                    rot: "hover:rotate-0 rotate-1",
                    shape: "rounded-[12px_20px_20px_12px]"
                  }
                ].map((item, idx) => (
                  <AnimatedCard key={idx} delay={idx * 0.08} direction="up">
                    <motion.div
                      whileHover={{ scale: 1.07, y: -5, rotate: 0 }}
                      animate={{ rotate: parseFloat(item.rot.includes("-rotate") ? item.rot.replace(/[^0-9.-]/g, "-").split("-").pop() || "0" : item.rot.replace(/[^0-9.]/g, "")) * (item.rot.includes("-") ? -1 : 1) }}
                      transition={{ type: "spring", stiffness: 250, damping: 15 }}
                      className={`relative p-5 border-2 border-[#363B37] text-left ${item.bg} ${item.shape} shadow-[3px_3px_0px_#363B37] cursor-default`}
                    >
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <motion.div
                          className="w-8 h-8 rounded-lg bg-white border-2 border-[#363B37] flex items-center justify-center shadow-[1.5px_1.5px_0px_#363B37]"
                          whileHover={{ rotate: 20, scale: 1.1 }}
                        >
                          <item.icon className="w-4 h-4 text-[#363B37]" />
                        </motion.div>
                        <h4 className="text-sm font-bold text-[#363B37] font-Phonics tracking-tight">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[#555E58] font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  </AnimatedCard>
                ))}
              </div>
            </div>

            {/* Right Column: Arched Outdoor Safety Image */}
            <AnimatedCard direction="right" className="lg:col-span-6 flex justify-center w-full relative">
              {/* Animated backing blob */}
              <motion.div
                className="absolute right-[5%] bottom-[10%] w-64 h-64 rounded-full filter blur-[2px] opacity-40 z-0 pointer-events-none select-none"
                style={{
                  background: "radial-gradient(circle, #eba37a 0%, #e89e72 70%, transparent 100%)",
                  clipPath: "polygon(20% 10%, 95% 20%, 85% 95%, 15% 100%, 0% 70%)",
                }}
                animate={{ scale: [1, 1.15, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Animated butterflies */}
              <motion.div
                className="absolute -top-10 left-[15%] w-16 h-16 pointer-events-none select-none hidden sm:block"
                animate={{ y: [0, -10, 0], rotate: [0, 8, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#e6b85c] stroke-[2.2] fill-none opacity-85" strokeLinecap="round">
                  <path d="M20,30 C25,20 35,20 30,35 C25,50 15,40 20,30 Z" />
                  <path d="M35,35 C40,25 50,25 45,40 C40,55 30,45 35,35 Z" />
                  <path d="M60,25 C65,15 75,15 70,30 C65,45 55,35 60,25 Z" />
                </svg>
              </motion.div>

              {/* Arched image with float */}
              <motion.div
                className="relative w-full max-w-[400px] aspect-[4/5] rounded-t-full overflow-hidden border-[3px] border-[#363B37] shadow-xl bg-white z-10"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src="/students/phonics_safety_play.png"
                  alt="Children playing safely outdoor"
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </motion.div>
            </AnimatedCard>

          </div>

        </div>

        {/* Wave Divider: Cream to Sage Green */}
        <div className="w-full relative z-30 translate-y-1">
          <svg
            viewBox="0 0 1440 80"
            className="w-full fill-[#95b09d] pointer-events-none"
            preserveAspectRatio="none"
          >
            <path d={smallWavesPath} />
          </svg>
        </div>

        {/* Section 6: Right for Your Family CTA (Sage Green Background) */}
        <div className="w-full bg-[#95b09d] py-20 px-4 sm:px-8 z-30 relative overflow-hidden flex flex-col items-center">

          <div className="max-w-6xl w-full mx-auto relative z-10 px-4">

            {/* Solid 3D shadow under the card */}
            <div className="absolute inset-0 bg-[#363B37] rounded-[2.2rem] translate-x-2.5 translate-y-2.5 z-0" />

            {/* White CTA Card Container */}
            <div className="relative bg-[#FAF8F3] border-[2.5px] border-[#363B37] rounded-[2.2rem] z-10 flex flex-col md:flex-row items-stretch gap-0 overflow-hidden min-h-[380px]">

              {/* Floating Flower Doodles on Card Background */}
              <div className="absolute -left-10 -bottom-10 w-32 h-32 pointer-events-none opacity-10 select-none z-0">
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#363B37] stroke-[2] fill-none">
                  {/* Flower shape */}
                  <path d="M50,50 C40,30 20,40 30,50 C40,60 30,80 50,70 C70,80 60,60 70,50 C80,40 60,30 50,50 Z" />
                </svg>
              </div>
              <div className="absolute -right-10 -top-10 w-32 h-32 pointer-events-none opacity-10 select-none z-0">
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#363B37] stroke-[2] fill-none">
                  <path d="M50,50 C40,30 20,40 30,50 C40,60 30,80 50,70 C70,80 60,60 70,50 C80,40 60,30 50,50 Z" />
                </svg>
              </div>

              {/* Left Column: Heading, Subheading & Button */}
              <div className="flex flex-col items-start text-left max-w-xl z-10 w-full md:w-[55%] p-8 sm:p-10 md:p-12 justify-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-normal tracking-tight text-[#363B37] mb-4">
                  Is Phonics Right <span className="font-semibold">for Your Child?</span>
                </h2>
                <p className="text-sm sm:text-base text-[#555E58] font-normal mb-8 leading-relaxed">
                  Give your child the gift of confident communication and a lifelong love for learning with Apex Edge English.
                </p>

                {/* Get in Touch CTA Button */}
                <div className="relative group">
                  <Link
                    to="/enroll"
                    className="bg-[#363B37] hover:bg-[#252826] text-white px-7 py-3.5 rounded-full font-bold shadow-md inline-flex items-center gap-2 cursor-pointer text-sm sm:text-base"
                  >
                    Book a Free Demo Class
                    <span className="text-[1.1em] font-normal">›</span>
                  </Link>

                  {/* Tiny sketch loop below button */}
                  <div className="absolute -bottom-8 left-12 w-14 h-6 opacity-75 pointer-events-none select-none">
                    <svg viewBox="0 0 100 50" className="w-full h-full stroke-[#363B37] stroke-[2] fill-none" strokeLinecap="round">
                      <path d="M10,25 C30,10 50,40 70,25 C90,10 90,40 80,40 C70,40 60,20 50,25" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Column: Smiling Mother & Baby Image */}
              <div className="relative w-full md:w-[45%] min-h-[300px] md:min-h-full overflow-hidden border-t-[2.5px] md:border-t-0 md:border-l-[2.5px] border-[#363B37] flex items-stretch rounded-t-[2rem] md:rounded-t-none md:rounded-l-full z-10 bg-[#eef1ed]">
                <img
                  src="/students/phonics_cta_mother_baby.png"
                  alt="Mother holding baby"
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>

            </div>

          </div>

        </div>

        {/* Wave Divider: Sage Green to Charcoal (for footer) */}
        {/* <div className="w-full relative z-30 translate-y-1">
          <svg 
            viewBox="0 0 1440 80" 
            className="w-full fill-[#363B37] pointer-events-none" 
            preserveAspectRatio="none"
          >
            <path d="M0,40 C120,70 240,70 360,40 C480,10 600,10 720,40 C840,70 960,70 1080,40 C1200,10 1320,10 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div> */}
      </main>

      <ApexEdgeFooter />
    </div>
  );
}

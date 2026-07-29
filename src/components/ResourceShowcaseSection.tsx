import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpenCheck, BriefcaseBusiness, Languages, Mic2, ScanText, Baby } from "lucide-react";

const resources = [
  {
    title: "IELTS",
    icon: BookOpenCheck,
    to: "/ielts",
  },
  {
    title: "PTE",
    icon: ScanText,
    to: "/pte",
  },
  {
    title: "Spoken English",
    icon: Mic2,
    to: "/spoken-english",
  },
  {
    title: "Phonics",
    icon: Baby,
    to: "/phonics",
  },
  {
    title: "CELPIP",
    icon: Languages,
    to: "/celpip",
  },
  {
    title: "Business Communication",
    icon: BriefcaseBusiness,
    to: "/business-communications",
  },
  
] as const;

function ResourceCard({ title, icon: Icon, to }: (typeof resources)[number]) {
  return (
    <article className="relative flex min-h-64 sm:min-h-72 flex-col items-center justify-between rounded-xl bg-[#fff6fa] px-2 sm:px-3 lg:px-2 xl:px-2 pt-14 pb-6 text-center shadow-[0_16px_36px_-26px_rgba(18,18,22,0.35)] ring-1 ring-black/5">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 flex h-20 w-20 sm:h-22 sm:w-22 items-center justify-center rounded-[1.8rem] bg-white shadow-[0_14px_28px_-18px_rgba(0,0,0,0.42)] ring-1 ring-black/5">
        <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-[#6ba79f]" strokeWidth={1.9} />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center w-full my-auto px-1">
        <h3 className="text-base sm:text-lg lg:text-[1.05rem] xl:text-[0.95rem] 2xl:text-[1.1rem] font-bold tracking-tight leading-snug text-[oklch(0.18_0.02_250)] w-full break-words text-center">
          {title}
        </h3>
      </div>

      <Link
        to={to}
        className="mt-3 inline-flex items-center gap-1.5 text-[0.85rem] sm:text-[0.92rem] font-bold text-[#d90f40] drop-shadow-[0_0_10px_rgba(217,15,64,0.32)] transition hover:translate-x-0.5 whitespace-nowrap"
      >
        Start Now
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </article>
  );
}

export function ResourceShowcaseSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 pb-16 lg:pb-24">
      <div className="rounded-[2.5rem] bg-linear-to-b from-bg-[#fff6fa] from-0% via-[rgb(237,240,247)] via-46% to-[#fdf2e8] to-46% px-4 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-[oklch(0.16_0.02_250)] leading-tight max-w-5xl mx-auto">
              <span className="block">Find the Appropiate Resources to Get Started with</span>
              <span className="mt-2 block text-[#d90f40]">Apex Edge</span>
            </h2>
          </div>

          <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 lg:gap-3 xl:gap-3.5">
            {resources.map((resource) => (
              <ResourceCard key={resource.title} {...resource} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
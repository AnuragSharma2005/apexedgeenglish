import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  CalendarDays,
  Compass,
  Globe2,
  GraduationCap,
  PiggyBank,
  Puzzle,
  Users,
} from "lucide-react";

type Benefit = {
  title: string;
  icon: LucideIcon;
};

const benefits: Benefit[] = [
  { title: "Learn from anywhere", icon: Globe2 },
  { title: "Flexible study schedules", icon: CalendarDays },
  { title: "Fun and interactive materials", icon: Puzzle },
  { title: "Personalised learning paths", icon: Compass },
  { title: "Certified trainers at your service", icon: GraduationCap },
  { title: "Quick feedback on your progress", icon: BadgeCheck },
  { title: "Connect with fellow students", icon: Users },
  { title: "Cut costs on your learning journey", icon: PiggyBank },
];

export function OnlineLearningBenefitsSection() {
  const leftColumn = benefits.filter((_, index) => index % 2 === 0);
  const rightColumn = benefits.filter((_, index) => index % 2 === 1);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 pb-16 lg:pb-24">
      <div className="rounded-[2.5rem] px-4 py-12 sm:px-6 lg:px-8 xl:px-10 ">
        <div className="w-full">
          <h2 className="mx-auto max-w-5xl text-center text-3xl sm:text-5xl lg:text-4xl font-extrabold tracking-tight leading-tight text-[oklch(0.16_0.02_250)]">
            <span>Learn Smarter: Unlock the Benefits of Online</span>
            <span className="block mt-2 text-[#d90f40]">English Learning Classes!</span>
           
          </h2>

          <div className="mt-12 lg:mt-14">
            <div
              className="hidden md:grid w-full items-start"
              style={{ gridTemplateColumns: "repeat(8, minmax(0, 1fr))" }}
            >
              {benefits.map((item, index) => {
                const Icon = item.icon;
                const isTop = index % 2 === 0;

                return (
                  <div key={item.title} className="contents">
                    <article
                      className="flex flex-col items-center text-center"
                      style={{ gridColumn: `${index + 1} / span 1` }}
                    >
                      <div className="relative h-42 w-full">
                        <div
                          className={`absolute left-1/2 -translate-x-1/2 h-20 w-20 lg:h-22 lg:w-22 rounded-full text-white inline-flex items-center justify-center ring-4 ring-white/70 ${
                            isTop ? "top-0" : "top-22"
                          } ${
                            isTop
                              ? "bg-[#2f3876] shadow-[0_16px_35px_-24px_rgba(47,56,118,0.95)]"
                              : "bg-[#a8be72] shadow-[0_16px_35px_-24px_rgba(96,121,51,0.8)]"
                          }`}
                        >
                          <Icon className="h-9 w-9 lg:h-10 lg:w-10" strokeWidth={1.7} />
                        </div>

                        {isTop ? (
                          <>
                            <span className="absolute left-1/2 top-22 -translate-x-1/2 h-16 w-px bg-[#c8c9cf]" aria-hidden="true" />
                            <span className="absolute left-1/2 top-[9.3rem] -translate-x-1/2 h-0 w-0 border-x-1.5 border-x-transparent border-t-2 border-t-[#c8c9cf]" aria-hidden="true" />
                          </>
                        ) : (
                          <>
                            <span className="absolute left-1/2 top-[1.2rem] -translate-x-1/2 h-16 w-px bg-[#c8c9cf]" aria-hidden="true" />
                            <span className="absolute left-1/2 top-4 -translate-x-1/2 h-0 w-0 border-x-1.5 border-x-transparent border-b-2 border-b-[#c8c9cf]" aria-hidden="true" />
                          </>
                        )}
                      </div>

                      <p className="mt-3 max-w-[16ch] text-[clamp(0.9rem,0.9vw,1.1rem)] leading-tight font-bold text-[oklch(0.2_0.02_250)]">
                        {item.title}
                      </p>
                    </article>
                  </div>
                );
              })}
            </div>

            <div className="md:hidden grid grid-cols-2 gap-x-3 px-1">
              <div className="space-y-10">
                {leftColumn.map((item, index) => {
                  const Icon = item.icon;
                  const isLast = index === leftColumn.length - 1;

                  return (
                    <article key={item.title} className="flex flex-col items-center text-center">
                      <div className="h-18 w-18 rounded-full bg-[#2f3876] text-white inline-flex items-center justify-center shadow-[0_16px_34px_-24px_rgba(47,56,118,0.85)]">
                        <Icon className="h-8 w-8" strokeWidth={1.8} />
                      </div>

                      {!isLast ? (
                        <>
                          <span className="mt-2 h-12 w-px bg-[#c8c9cf]" aria-hidden="true" />
                          <span className="h-0 w-0 border-x-1.5 border-x-transparent border-t-2 border-t-[#c8c9cf]" aria-hidden="true" />
                        </>
                      ) : null}

                      <p className="mt-3 text-[0.96rem] leading-tight font-extrabold uppercase tracking-tight text-[oklch(0.18_0.02_250)]">
                        {item.title}
                      </p>
                    </article>
                  );
                })}
              </div>

              <div className="space-y-10 pt-16">
                {rightColumn.map((item, index) => {
                  const Icon = item.icon;
                  const isLast = index === rightColumn.length - 1;

                  return (
                    <article key={item.title} className="flex flex-col items-center text-center">
                      <div className="h-18 w-18 rounded-full bg-[#a8be72] text-white inline-flex items-center justify-center shadow-[0_16px_34px_-24px_rgba(96,121,51,0.8)]">
                        <Icon className="h-8 w-8" strokeWidth={1.8} />
                      </div>

                      {!isLast ? (
                        <>
                          <span className="mt-2 h-12 w-px bg-[#c8c9cf]" aria-hidden="true" />
                          <span className="h-0 w-0 border-x-1.5 border-x-transparent border-t-2 border-t-[#c8c9cf]" aria-hidden="true" />
                        </>
                      ) : null}

                      <p className="mt-3 text-[0.96rem] leading-tight font-extrabold uppercase tracking-tight text-[oklch(0.18_0.02_250)]">
                        {item.title}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

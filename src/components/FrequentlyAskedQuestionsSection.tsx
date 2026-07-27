import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What courses does Apex Edge English offer?",
    answer:
      "Apex Edge English offers comprehensive training for IELTS, CELPIP, PTE, Spoken English, Business Communication, Interview Preparation, Soft Skills, Corporate Training, and Personality Development. Our programs are designed to help learners achieve academic, professional, and career success.",
  },
  {
    question: "Are the classes conducted online or offline?",
    answer:
      "Currently, Apex Edge English offers live online classes, allowing students from across India and abroad to learn from experienced trainers. Offline classroom programs may be introduced in the future.",
  },
  {
    question: "Who can join Apex Edge English courses?",
    answer:
      "The courses at Apex Edge English are suitable for students, working professionals, job seekers, individuals planning to study or work abroad, and anyone looking to improve their English communication skills and confidence.",
  },
  {
    question: "How are the classes conducted at Apex Edge English?",
    answer:
      "Classes are conducted in a live, interactive format with concept-based teaching, regular practice sessions, mock tests, doubt-clearing sessions, personalised feedback, and structured study materials to ensure effective learning.",
  },
  {
    question: "Does Apex Edge English provide study materials and mock tests?",
    answer:
      "Yes. Every enrolled student at Apex Edge English receives comprehensive study materials, practice exercises, mock tests, and personalised performance feedback to help them prepare confidently for examinations or interviews.",
  },
  {
    question: "What makes Apex Edge English different from other institutes?",
    answer:
      "Apex Edge English focuses on personalised mentoring, practical learning, small batch sizes, experienced trainers, proven exam strategies, and continuous performance tracking. We believe in building confidence, communication skills, and language proficiency that lead to real-world success.",
  },
  {
    question: "How can I enrol in a course at Apex Edge English?",
    answer:
      "You can enrol by filling out the enquiry form on our website or by contacting Apex Edge English via phone, WhatsApp, or email. Our team will guide you through course selection, batch timings, and the admission process.",
  },
   {
    question: "Can I attend a demo session before enrolling?",
    answer:
      "Yes. Apex Edge English offers a demo session so that you can experience our teaching methodology, interact with the trainer, and choose the course that best aligns with your learning goals before enrolling.",
  },
];

export function FrequentlyAskedQuestionsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const activeFaq = faqs[activeIndex ?? 0] ?? faqs[0];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 pb-20 lg:pb-28 font-serif">
      <div className="mx-auto max-w-400 rounded-[2.4rem] px-5 py-12 sm:px-8 lg:px-10 xl:px-12">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[oklch(0.16_0.02_250)]">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] lg:items-start">
          <div className="grid gap-4">
            {faqs.map((faq, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={faq.question}
                  type="button"
                  onClick={() => setActiveIndex((current) => (current === index ? null : index))}
                  className={`group w-full rounded-[1.35rem] border px-5 py-4 text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "border-[#d90f40] bg-white"
                      : "border-[#e6e7ec] bg-white/80 hover:border-[#d90f40]/35 hover:bg-white"
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors cursor-pointer ${
                        isActive ? "bg-[#d90f40] text-white" : "bg-[#eef0f4] text-[oklch(0.22_0.02_250)]"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <span className={`text-base sm:text-[1.05rem] font-semibold leading-snug ${isActive ? "text-[oklch(0.16_0.02_250)]" : "text-[oklch(0.2_0.02_250)]"}`}>
                          {faq.question}
                        </span>
                        <span className={`text-2xl leading-none transition-transform duration-200  cursor-pointer ${isActive ? "text-[#d90f40]" : "text-[oklch(0.25_0.02_250)]"}`}>
                          {isActive ? "−" : "+"}
                        </span>
                      </div>

                      <div className={`overflow-hidden transition-all duration-300 ease-out ${isActive ? "mt-3 max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="text-sm sm:text-base leading-7 text-[oklch(0.34_0.02_250)]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <aside className="rounded-[2rem] bg-white p-6 sm:p-8 lg:p-10 lg:sticky lg:top-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d90f40]">Answer</p>
            <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-[oklch(0.16_0.02_250)] leading-tight">
              {activeFaq.question}
            </h3>

            <div className="mt-6 h-px w-full bg-[#eceef3]" />

            <p className="mt-6 text-base sm:text-lg leading-8 text-[oklch(0.32_0.02_250)]">
              {activeFaq.answer}
            </p>

            <div className="mt-8 rounded-[1.5rem] bg-[#f8f2f4] px-5 py-4">
              <p className="text-sm font-semibold text-[#d90f40]">Need more detail?</p>
              <p className="mt-2 text-sm leading-6 text-[oklch(0.34_0.02_250)]">
                Pick another question from the list on the left or ask for a custom FAQ tone and I can adjust the wording.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
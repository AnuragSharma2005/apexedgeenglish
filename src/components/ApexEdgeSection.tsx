import { useState } from "react";

export function ApexEdgeSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 py-10 lg:py-14">
      <div className="rounded-[2rem] bg-[#f9f9f9] border border-[#e5e5e5] p-6 sm:p-8 lg:p-9 xl:p-10 max-w-370 mx-auto">
        <div className="text-center">
          <h2 className="text-[1.95rem] sm:text-[2.2rem] lg:text-[2.5rem] font-bold leading-tight">
            <span className="text-[#d72646]">Experience Apex Edge English</span>
            <span className="text-[#333]"> : Your Journey Starts Here</span>
          </h2>

          <p className="mt-5 text-sm sm:text-base lg:text-[1.12rem] leading-relaxed text-[#555] max-w-[74ch] mx-auto">
            Joining Apex Edge English is smooth, structured, and focused on results. Here's how you begin:
          </p>

          <p className="mt-4 text-sm sm:text-base lg:text-[1.12rem] leading-relaxed text-[#555] max-w-[74ch] mx-auto">
            Start with a Free Demo Session. Get a first-hand experience of our teaching excellence through a complimentary demo class. Explore how we approach IELTS, CELPIP, and PTE preparation, and understand our methodology before you commit.
          </p>

          {!isExpanded && (
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              aria-expanded={isExpanded}
              className="mt-7 inline-flex items-center justify-center rounded-full border border-[#d72646] text-[#d72646] font-semibold text-base sm:text-lg px-8 py-2.5 hover:bg-[#d72646] hover:text-white transition-all duration-300"
            >
              Read More
            </button>
          )}
        </div>

        <div className={`overflow-hidden transition-all duration-500 ease-out ${isExpanded ? "max-h-1040 opacity-100 mt-7" : "max-h-0 opacity-0"}`}>
          <div className="space-y-6 px-2 py-1 text-center">
            <div>
              <h4 className="font-bold text-[#333] mb-2">
                Choose and Enrol in Your Course
              </h4>
              <p className="text-base leading-relaxed text-[#555]">
                Select the course that aligns with your goals—whether it's IELTS, CELPIP, PTE, or Spoken English. Our simple and hassle-free enrollment process ensures you can begin your journey without delays.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#333] mb-2">
                Unlock Premium Study Resources
              </h4>
              <p className="text-base leading-relaxed text-[#555]">
                Gain instant access to meticulously designed study materials, practice modules, and exam-oriented content. Every resource is curated to help you understand concepts deeply and apply them effectively.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#333] mb-2">
                Attend Live, Interactive Classes
              </h4>
              <p className="text-base leading-relaxed text-[#555]">
                Learn from experienced trainers through engaging live sessions. Benefit from personalised attention, real-time feedback, and targeted strategies to improve your performance in every module.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#333] mb-2">
                Practice with Assignments & Mock Tests
              </h4>
              <p className="text-base leading-relaxed text-[#555]">
                Strengthen your preparation with regular assignments and full-length mock tests based on actual exam formats. Evaluate your progress, identify weak areas, and refine your skills with expert feedback.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#333] mb-2">
                Track Your Progress & Achieve Your Goal
              </h4>
              <p className="text-base leading-relaxed text-[#555]">
                Monitor your improvement through consistent assessments and performance tracking. With structured guidance and accountability, you stay on the right path to achieving your desired score.
              </p>
            </div>

            <div className="border-t border-[#e5e5e5] pt-6">
              <h3 className="text-xl font-bold text-[#333] mb-4">
                Master Every Exam with Apex Edge English
              </h3>

              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-[#333] mb-2">
                    IELTS Preparation
                  </h4>
                  <p className="text-base leading-relaxed text-[#555]">
                    Build a strong foundation and master advanced techniques to achieve your target band score. Our focused training covers all four modules—Listening, Reading, Writing, and Speaking—with precision and strategy.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#333] mb-2">
                    PTE Preparation
                  </h4>
                  <p className="text-base leading-relaxed text-[#555]">
                    Crack the PTE exam with confidence through our result-driven modules. Learn smart shortcuts, time management techniques, and scoring strategies to maximise your performance in a single attempt.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#333] mb-2">
                    CELPIP Preparation
                  </h4>
                  <p className="text-base leading-relaxed text-[#555]">
                    Excel in CELPIP with targeted practice and real exam simulations. Improve your response structure, vocabulary, and fluency to achieve high scores across all sections.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#333] mb-2">
                    Spoken English Excellence
                  </h4>
                  <p className="text-base leading-relaxed text-[#555]">
                    Enhance your communication skills with engaging and practical lessons. From everyday conversations to professional fluency, we help you speak with clarity, confidence, and impact.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#e5e5e5] pt-6">
              <p className="text-base leading-relaxed text-[#555] mb-4">
                At Apex Edge English, we don't just prepare you for an exam—we prepare you for your global future. Join us today and gain the edge you need to succeed.
              </p>

              <h3 className="text-xl font-bold text-[#333] mb-4">
                What is Apex Edge English?
              </h3>

              <p className="text-base leading-relaxed text-[#555]">
                Apex Edge English is a premium English learning platform committed to helping individuals achieve their global ambitions through expert-led training. We offer comprehensive and result-oriented courses for IELTS, CELPIP, PTE, and Spoken English, designed to meet the diverse needs of modern learners. With experienced instructors, structured study plans, and high-quality learning resources, we create a focused and supportive environment where students can build confidence, improve fluency, and achieve their desired scores. At Apex Edge English, our goal is not just to teach English—but to give you the competitive edge needed to succeed internationally.
              </p>
            </div>

            <div className="mt-7 flex justify-center">
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                aria-expanded={isExpanded}
                className="inline-flex items-center justify-center rounded-full border border-[#d72646] text-[#d72646] font-semibold text-base sm:text-lg px-8 py-2.5 hover:bg-[#d72646] hover:text-white transition-all duration-300"
              >
                Show Less
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

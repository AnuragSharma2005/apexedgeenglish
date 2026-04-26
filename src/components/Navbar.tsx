import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={`hidden sm:block bg-[#d90f40] text-white transition-all duration-300 overflow-hidden ${isScrolled ? "max-h-0 opacity-0" : "max-h-20 opacity-100"
            }`}
        >
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 h-12 flex items-center justify-between text-xs sm:text-sm font-semibold">
            <div className="hidden md:flex items-center gap-2.5 whitespace-nowrap">
              <span className="text-base" aria-hidden="true">🎁</span>
              <span>Claim FREE Demo Class & Scholarships</span>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-4 ml-auto whitespace-nowrap">
              <a
                href="mailto:Email@gmail.com"
                className="hover:opacity-85 transition"
              >
                Email@gmail.com
              </a>
              <span className="hidden sm:inline-block h-5 w-px bg-white/45" />
              <a href="tel:+917986901874" className="hover:opacity-85 transition">
                +91 79869 01874
              </a>
            </div>
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 pt-0 sm:pt-1">
          <div
            className={`mx-auto flex items-center justify-between transition-all duration-300 ${isScrolled
              ? "mt-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#eed7df] shadow-[0_10px_30px_-24px_rgba(20,20,40,0.45)]"
              : "-mt-1 rounded-b-[1.65rem] bg-white border border-[#f0f0f0] shadow-[0_18px_28px_-22px_rgba(0,0,0,0.35)]"
              } px-4 sm:px-6 lg:px-8 py-3.5`}
          >
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <img
                src={logo}
                alt="Apex Edge logo"
                className="h-10 w-10 sm:h-11 sm:w-11 object-contain"
              />
              <span className="text-[#d90f40] font-extrabold tracking-tight text-base sm:text-lg lg:text-xl">Apex Edge</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-base xl:text-lg font-semibold text-[oklch(0.2_0.02_250)]">
              <Link to="/" className="hover:text-[#d90f40] transition">Home</Link>
              <div 
                className="relative group"
                onMouseLeave={() => setIsCoursesDropdownOpen(false)}
              >
                <button
                  onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
                  onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                  className="hover:text-[#d90f40] transition inline-flex items-center gap-2 py-2"
                >
                  Online Courses
                  <svg className={`w-4 h-4 transition-transform ${isCoursesDropdownOpen ? "rotate-180" : ""}`} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M3.2 5.5L8 10.3l4.8-4.8H3.2z" />
                  </svg>
                </button>
                {isCoursesDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-72 bg-[#f5e8ec] rounded-2xl shadow-xl border border-[#e5d5e0] p-4 z-50 space-y-2"
                    onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                  >
                    {[
                      { to: "/ielts", label: "IELTS", color: "#d72646", short: "IELTS" },
                      { to: "/pte", label: "PTE", color: "#2c5aa0", short: "PTE" },
                      { to: "/celpip", label: "CELPIP", color: "#f59e0b", short: "CELPIP" },
                      { to: "/business-communications", label: "Business Communications", color: "#10b981", short: "BUS." },
                      { to: "/spoken-english", label: "Spoken English", color: "#f59e0b", short: "SE" },
                    ].map((item) => (
                      <Link 
                        key={item.to}
                        to={item.to} 
                        onClick={() => setIsCoursesDropdownOpen(false)}
                        className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white transition cursor-pointer group/item"
                      >
                        <div 
                          className="w-11 h-11 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0 transition-transform group-hover/item:scale-110"
                          style={{ backgroundColor: item.color }}
                        >
                          {item.short}
                        </div>
                        <span className="text-base font-semibold text-[#333]">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/" className="hover:text-[#d90f40] transition">Results</Link>
              <Link to="/about" className="hover:text-[#d90f40] transition">About Us</Link>
              <Link to="/contact-us" className="hover:text-[#d90f40] transition">Contact Us</Link>
            </nav>

            <Link 
              to="/enroll"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-[#d90f40] text-white px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold shadow-[0_10px_20px_-16px_rgba(217,15,64,0.9)] hover:opacity-90 transition whitespace-nowrap"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-3.5 3.6-6 8-6s8 2.5 8 6" />
              </svg>
              Enroll Now
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              className="inline-flex sm:hidden h-11 w-11 items-center justify-center rounded-lg bg-[#d90f40] text-white shadow-[0_10px_20px_-16px_rgba(217,15,64,0.9)]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] sm:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/25"
        />

        <aside
          className={`absolute inset-y-0 left-0 w-[84%] max-w-[20rem] bg-white shadow-[0_20px_40px_-22px_rgba(0,0,0,0.35)] px-5 py-5 transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Apex Edge logo" className="h-9 w-9 object-contain" />
              <span className="text-[#d90f40] font-extrabold tracking-tight text-2xl">Apex Edge</span>
            </div>

            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white text-xs"
            >
              ✕
            </button>
          </div>

          <button className="mt-6 w-full rounded-xl bg-[#d90f40] py-3.5 text-white text-lg font-semibold">
            Book a Free Session
          </button>

          <nav className="mt-7 space-y-5 text-xl font-semibold text-[oklch(0.2_0.02_250)]">
            <Link to="/" className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#d90f40]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Home</span>
            </Link>
            <div>
              <button
                onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
                className="w-full text-left flex items-center gap-3 hover:text-[#d90f40] transition"
              >
                <svg className="w-5 h-5 text-[#d90f40]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-3.5 3.6-6 8-6s8 2.5 8 6" />
                </svg>
                <span>Online Courses</span>
                <svg className={`w-5 h-5 ml-auto transition-transform ${isCoursesDropdownOpen ? "rotate-180" : ""}`} viewBox="0 0 16 16" fill="currentColor">
                  <path d="M3.2 5.5L8 10.3l4.8-4.8H3.2z" />
                </svg>
              </button>
              {isCoursesDropdownOpen && (
                <div className="mt-4 bg-[#f5e8ec] rounded-2xl p-4 space-y-3">
                  <Link to="/ielts" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition">
                    <div className="w-10 h-10 bg-[#d72646] rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                      IELTS
                    </div>
                    <span className="text-base font-semibold text-[#333]">IELTS</span>
                  </Link>
                  <Link to="/pte" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition">
                    <div className="w-10 h-10 bg-[#2c5aa0] rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                      PTE
                    </div>
                    <span className="text-base font-semibold text-[#333]">PTE</span>
                  </Link>
                  <Link to="/celpip" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition">
                    <div className="w-10 h-10 bg-[#f59e0b] rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                      CELPIP
                    </div>
                    <span className="text-base font-semibold text-[#333]">CELPIP</span>
                  </Link>
                  <Link to="/business-communications" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition">
                    <div className="w-10 h-10 bg-[#10b981] rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                      BUS.
                    </div>
                    <span className="text-base font-semibold text-[#333]">Business Communications</span>
                  </Link>
                  <Link to="/spoken-english" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition">
                    <div className="w-10 h-10 bg-[#f59e0b] rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                      SE
                    </div>
                    <span className="text-base font-semibold text-[#333]">Spoken English</span>
                  </Link>
                </div>
              )}
            </div>
            <Link to="/" className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#d90f40]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
              <span>Results</span>
            </Link>
            <Link to="/about" className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#d90f40]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>About Us</span>
            </Link>
            <Link to="/contact-us" className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#d90f40]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Contact Us</span>
            </Link>
          </nav>

          <div className="mt-8 border-t border-black/10 pt-7">
            <Link to="/enroll" className="block w-full rounded-xl bg-[#d90f40] py-3.5 text-center text-white text-lg font-semibold">
              Enroll Now
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}

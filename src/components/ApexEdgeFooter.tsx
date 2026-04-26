import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import image from "@/assets/image.png";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Teachers", href: "/about#teachers" },
];

const supportLinks = [
  { label: "Book Session", href: "/book-session" },
  { label: "IELTS", href: "/ielts" },
  { label: "PTE", href: "/pte" },
  { label: "CELPIP", href: "/celpip" },
  { label: "Business Comm.", href: "/business-communications" },
  { label: "Spoken English", href: "/spoken-english" },
];

const socialLinks = [
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "YouTube", icon: Youtube, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
];

export function ApexEdgeFooter() {
  return (
    <footer className="w-full pt-2 sm:pt-6">
      <div className="relative overflow-hidden bg-[linear-gradient(135deg,#c90f3b_0%,#d90f40_45%,#a70e35_100%)] text-white shadow-[0_-20px_50px_-34px_rgba(96,8,34,0.55)]">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute -left-24 -top-20 h-56 w-56 rounded-full bg-white/12 blur-3xl" />
          <div className="absolute right-0 top-14 h-44 w-44 rounded-full bg-[#ff8c61]/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-28 w-28 rounded-full bg-[#fbd45c]/15 blur-2xl" />
        </div>

        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-12"
        />

        <div className="relative px-3 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-12 xl:px-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)_minmax(0,0.85fr)_minmax(0,0.95fr)] lg:gap-10">
            <div className="col-span-2 max-w-md lg:col-span-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-white/80 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.24em]">
                Apex Edge
              </div>

              <h2 className="mt-3 text-[1.15rem] font-extrabold leading-tight tracking-tight sm:mt-5 sm:text-4xl">
                Learn with a footer that still feels like part of the story.
              </h2>

              <p className="mt-2.5 max-w-sm text-[0.72rem] leading-5 text-white/78 sm:mt-4 sm:text-base sm:leading-7">
                Structured coaching, real guidance, and a cleaner path toward better
                scores. Use this space to jump back into the right program or reach the
                team directly.
              </p>

              <div className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
                <Link
                  to="/book-session"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-white px-3 py-2 text-[0.72rem] font-semibold text-[#c90f3b] transition hover:-translate-y-px hover:bg-white/92 sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
                >
                  Book a Free Session
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Link>
                <a
                  href="mailto:info@apexedge.in"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/18 bg-white/8 px-3 py-2 text-[0.72rem] font-semibold text-white transition hover:bg-white/14 sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
                >
                  <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Email the Team
                </a>
              </div>
            </div>

            <div className="col-span-1">
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-white/55 sm:text-xs sm:tracking-[0.24em]">
                Explore
              </p>
              <ul className="mt-3 space-y-1.5 text-[0.72rem] sm:mt-5 sm:space-y-3 sm:text-base">
                {exploreLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-white/82 transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1">
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-white/55 sm:text-xs sm:tracking-[0.24em]">
                Support
              </p>
              <ul className="mt-3 space-y-1.5 text-[0.72rem] sm:mt-5 sm:space-y-3 sm:text-base">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-white/82 transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-white/55 sm:text-xs sm:tracking-[0.24em]">
                Contact
              </p>

              <ul className="mt-3 space-y-2 text-[0.72rem] text-white/84 sm:mt-5 sm:space-y-4 sm:text-base">
                <li className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#f6cb3f] sm:h-4 sm:w-4" />
                  <div>
                    <p>+91 98769 01874</p>
                    <p className="text-white/58">Admission helpline</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#f6cb3f] sm:h-4 sm:w-4" />
                  <div>
                    <p>+91 98788 70737</p>
                    <p className="text-white/58">Free demo class</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#f6cb3f] sm:h-4 sm:w-4" />
                  <div>
                    <p>Online-first coaching</p>
                    <p className="text-white/58">Accessible anywhere in India</p>
                  </div>
                </li>
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-white/18 sm:h-11 sm:w-11"
                    >
                      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-4 border-t border-white/12 pt-3 text-[0.65rem] text-white/60 sm:mt-8 sm:pt-5 sm:text-xs">
            <p className="text-center sm:text-left">© 2026 Apex Edge. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
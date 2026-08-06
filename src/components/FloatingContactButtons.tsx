import { type SVGProps } from "react";
import { Mail, PhoneCall } from "lucide-react";
import { ENV } from "@/lib/env";

/* ✅ Clean WhatsApp Icon */
function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.52 3.48A11.8 11.8 0 0012.03 0C5.4 0 .07 5.33.07 11.96c0 2.11.55 4.16 1.6 5.97L0 24l6.2-1.62a11.94 11.94 0 005.83 1.48h.01c6.63 0 11.96-5.33 11.96-11.96 0-3.2-1.25-6.21-3.48-8.42zM12.04 21.5c-1.8 0-3.55-.48-5.08-1.38l-.36-.21-3.68.96.98-3.59-.23-.37a9.45 9.45 0 01-1.45-5.05c0-5.23 4.26-9.5 9.5-9.5 2.54 0 4.93.99 6.72 2.78a9.45 9.45 0 012.78 6.72c0 5.23-4.26 9.5-9.5 9.5zm5.4-7.1c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.36.23-.66.08-.3-.15-1.26-.46-2.4-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.33.45-.5.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.94-2.23-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.04-1.06 2.54 0 1.5 1.08 2.95 1.23 3.15.15.2 2.13 3.25 5.17 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.44.25-.71.25-1.32.18-1.44-.07-.12-.27-.2-.57-.35z"/>
    </svg>
  );
}

/* ✅ Contact Actions */
const contactActions = [
  {
    label: "Call",
    href: `tel:${ENV.CONTACT_PHONE.replace(/\s+/g, "")}`,
    icon: PhoneCall,
    bg: "bg-[#d90f40] hover:bg-[#c50e3a]",
    aria: "Call",
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${ENV.WHATSAPP_NUMBER.replace(/\D/g, "")}`,
    icon: WhatsAppIcon,
    bg: "bg-[#25d366] hover:bg-[#1ebd5a]",
    aria: "Chat on WhatsApp",
  },
  {
    label: "Email",
    href: `mailto:${ENV.CONTACT_EMAIL}`,
    icon: Mail,
    bg: "bg-[#2563eb] hover:bg-[#1d4ed8]",
    aria: "Email",
  },
];

/* ✅ Floating Buttons Component */
export function FloatingContactButtons() {
  return (
    <div className="fixed right-6 bottom-8 z-50 flex flex-col items-end gap-3 sm:right-8 sm:bottom-10">
      {contactActions.map((action) => {
        const Icon = action.icon;

        return (
          <a
            key={action.label}
            href={action.href}
            target="_blank"
            rel="noreferrer"
            aria-label={action.aria}
            className={`group relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 ${action.bg} hover:-translate-y-1`}
          >
            {/* Icon */}
            <Icon className="h-6 w-6" />

            {/* Tooltip */}
            <span className="pointer-events-none absolute right-full mr-3 hidden min-w-[6.5rem] rounded-full bg-black px-3 py-1 text-xs font-semibold text-white shadow-md group-hover:block">
              {action.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
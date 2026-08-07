/**
 * Environment configuration for Apex Edge English.
 * Values are loaded from environment variables (VITE_*) with fallback defaults.
 */

export const ENV = {
  ENROLL_SHEET_URL:
    (import.meta.env.VITE_ENROLL_SHEET_URL as string) ||
    "https://script.google.com/macros/s/AKfycbwhAPDRLyK5GlqgYTa0CIQVWR_uBBLGTT086QB2AE06Y3AAgKigkR05eUL8sKmXtxDR/exec",
  CONTACT_SHEET_URL:
    (import.meta.env.VITE_CONTACT_SHEET_URL as string) ||
    "https://script.google.com/macros/s/AKfycbwQYHSnoeqPhqaLRxeMzihw3pWaYj2TmttAJTdPtNg5l3KHHPwj8XylawFvOzK094Pd/exec",
  FORMSUBMIT_EMAIL:
    (import.meta.env.VITE_FORMSUBMIT_EMAIL as string) ||
    "apexedgeenglish@gmail.com",
  CONTACT_EMAIL:
    (import.meta.env.VITE_CONTACT_EMAIL as string) ||
    "apexedgeenglish@gmail.com",
  CONTACT_PHONE:
    (import.meta.env.VITE_CONTACT_PHONE as string) ||
    "+91 83600 79077",
  WHATSAPP_NUMBER:
    (import.meta.env.VITE_WHATSAPP_NUMBER as string) ||
    "918360079077",
  ADMIN_EMAIL:
    (import.meta.env.VITE_ADMIN_EMAIL as string) ||
    "admin@apexedge.com",
  ADMIN_PASSWORD:
    (import.meta.env.VITE_ADMIN_PASSWORD as string) ||
    "apexedge@123",
};

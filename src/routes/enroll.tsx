import { createFileRoute } from "@tanstack/react-router";
import { EnrollNowPage } from "../components/landing/EnrollNowPage";

export const Route = createFileRoute("/enroll")({
  component: EnrollNowPage,
  head: () => ({
    meta: [
      { title: "Enroll Now | Apex Edge - Start Your Journey" },
      { name: "description", content: "Enroll in our premium IELTS, PTE, and Spoken English courses. Start your journey with Apex Edge today." }
    ]
  })
});

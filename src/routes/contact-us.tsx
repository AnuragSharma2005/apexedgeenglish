import { createFileRoute } from "@tanstack/react-router";
import { ContactUsPage } from "../components/landing/ContactUsPage";

export const Route = createFileRoute("/contact-us")({
  component: ContactUsPage,
});

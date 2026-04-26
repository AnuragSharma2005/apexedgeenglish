import { createFileRoute } from "@tanstack/react-router";
import { BusinessCommPage } from "../components/landing/BusinessCommPage";

export const Route = createFileRoute("/business-communications")({
  component: BusinessCommPage,
});

import { createFileRoute } from "@tanstack/react-router";
import { PTEPage } from "../components/landing/PTEPage";

export const Route = createFileRoute("/pte")({
  component: PTEPage,
});

import { createFileRoute } from "@tanstack/react-router";
import { CELPIPPage } from "../components/landing/CELPIPPage";

export const Route = createFileRoute("/celpip")({
  component: CELPIPPage,
});

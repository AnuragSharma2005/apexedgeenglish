import { createFileRoute } from "@tanstack/react-router";
import { PhonicsPage } from "../components/landing/PhonicsPage";

export const Route = createFileRoute("/phonics")({
  component: PhonicsPage,
});

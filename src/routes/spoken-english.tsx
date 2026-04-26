import { createFileRoute } from "@tanstack/react-router";
import { SpokenEnglishPage } from "../components/landing/SpokenEnglishPage";

export const Route = createFileRoute("/spoken-english")({
  component: SpokenEnglishPage,
});

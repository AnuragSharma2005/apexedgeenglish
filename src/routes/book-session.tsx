import { createFileRoute } from "@tanstack/react-router";
import { BookSessionPage } from "../components/landing/BookSessionPage";

export const Route = createFileRoute("/book-session")({
  component: BookSessionPage,
});

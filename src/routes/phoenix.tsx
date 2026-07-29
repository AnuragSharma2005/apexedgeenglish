import { createFileRoute } from "@tanstack/react-router";
import { PhoenixPage } from "../components/landing/PhoenixPage";

export const Route = createFileRoute("/phoenix")({
  component: PhoenixPage,
});

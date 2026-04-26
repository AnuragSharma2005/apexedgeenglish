import { createFileRoute } from "@tanstack/react-router";
import { IELTSPage } from "../components/landing/IELTSPage";

export const Route = createFileRoute("/ielts")({
  component: IELTSPage,
});

import { createFileRoute } from "@tanstack/react-router";
import LoginPage from "@/features/login/components/login-page";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return <LoginPage />;
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_features/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>This should be our home page</div>;
}

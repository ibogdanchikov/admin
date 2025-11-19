import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_features/my-feature")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_features/my-feature"!</div>;
}

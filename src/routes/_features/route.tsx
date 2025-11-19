import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_features")({
  component: RouteComponent,
  beforeLoad: ({ location }) => {
    const authenticated = false;
    if (!authenticated) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
});

function RouteComponent() {
  return (
    <>
      <div>This is a feature wrapped in a layout</div>
      <header>Feature start</header>
      <Outlet />
      <footer>Feature end</footer>
    </>
  );
}

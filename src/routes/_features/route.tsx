import {
  createFileRoute,
  Outlet,
  redirect,
  useNavigate,
} from "@tanstack/react-router";
import { Button } from "@/components/ui/button.tsx";

export const Route = createFileRoute("/_features")({
  component: RouteComponent,
  beforeLoad: ({ location }) => {
    const authenticated = localStorage.getItem("token") != null;
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
  const navigate = useNavigate({ from: "/" });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.removeItem("token");
    await navigate({ to: "/login" });
  };

  return (
    <>
      <div>This is a feature wrapped in a layout</div>
      <header>Feature start</header>
      <Outlet />
      <footer>Feature end</footer>
      <form onSubmit={handleSubmit}>
        <Button type="submit">Logout</Button>
      </form>
    </>
  );
}

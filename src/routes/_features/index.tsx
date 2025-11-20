import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchMe } from "@/features/login/api/api.ts";

export const Route = createFileRoute("/_features/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["me"],
    queryFn: () => fetchMe(),
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      Welcome back, {data.firstName} {data.lastName}!
    </div>
  );
}

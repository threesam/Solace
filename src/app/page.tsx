import Home from "@/components/home";

export default async function Page() {
  const response = await fetch("http://localhost:3000" + "/api/advocates");
  const { data: advocates } = await response.json();

  if (!advocates) {
    return <div>No data found</div>;
  }

  return <Home advocates={advocates} />;
}

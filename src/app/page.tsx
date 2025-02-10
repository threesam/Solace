import Home from "@/components/home";

const BASE_URL = "http://localhost:3000";

export default async function Page() {
  const response = await fetch(BASE_URL + "/api/advocates");
  const { data: advocates } = await response.json();

  if (!advocates) {
    return <div>No data found</div>;
  }

  return <Home advocates={advocates} />;
}

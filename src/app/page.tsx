import App from "@/components/App";

export const dynamic = "force-static";
export const revalidate = 60;
export default function Home() {
  return (
    <>
      <App />
    </>
  );
}

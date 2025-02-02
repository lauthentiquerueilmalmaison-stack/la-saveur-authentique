import App from "@/components/App";

export const dynamic = "force-static";
export const revalidate = 5;
export default function Home() {
  return (
    <>
      <App />
    </>
  );
}

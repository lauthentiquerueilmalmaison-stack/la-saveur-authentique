import App from "@/components/App";
import ReactLenis from "lenis/react";
export default function Home() {
  return (
    <ReactLenis root options={{ autoRaf: true }}>
      <div>
        <App />
      </div>
    </ReactLenis>
  );
}

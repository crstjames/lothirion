import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import router from "./router";

// Wait for the router to be ready before rendering
async function prepareApp() {
  // Initialize the router
  await router.load();

  // Render the app
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

prepareApp();

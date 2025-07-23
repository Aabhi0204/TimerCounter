import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TimerCounter from "./TimerCounter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimerCounter />
  </StrictMode>
);

import React, { Placeholder } from "react";
import "./lib/index.css";
import App from "./App.solution";
import { unstable_createRoot } from "react-dom";

unstable_createRoot(document.getElementById("root")).render(
  <Placeholder delayMs={1000} fallback={<div>Loading...</div>}>
    <App />
  </Placeholder>
);

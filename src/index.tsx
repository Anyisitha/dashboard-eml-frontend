import React from "react";
import ReactDOM from "react-dom/client";
/** Local Modules */
import ReportWebVitals from "reportWebVitals";
import App from "App";

const root: HTMLElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(<App />);

ReportWebVitals();
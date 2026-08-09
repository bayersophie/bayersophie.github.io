import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import "./index.css";

import App from "./App";
import ProjectPage from "./pages/ProjectPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />

        <Route path="/en" element={<App language="en" />} />

        <Route path="/de" element={<App language="de" />} />

        <Route
          path="/en/projects/:id"
          element={<ProjectPage language="en" />}
        />

        <Route
          path="/de/projects/:id"
          element={<ProjectPage language="de" />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
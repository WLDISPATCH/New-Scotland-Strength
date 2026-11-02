import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import ServicesPage from "./pages/ServicesPage";

export default function App() {
  const { pathname, search, hash } = useLocation();

  // Canonical URLs end in "/" (that is what the per-page HTML files are served at).
  if (pathname !== "/" && !pathname.endsWith("/")) {
    return <Navigate replace to={`${pathname}/${search}${hash}`} />;
  }

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/" element={<AboutPage />} />
        <Route path="/services/" element={<ServicesPage />} />
        <Route path="/results/" element={<ResultsPage />} />
        <Route path="/faq/" element={<FaqPage />} />
        <Route path="/contact/" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

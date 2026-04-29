import "./App.scss";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { lazy } from "react";

const MainLayout = lazy(() => import("./Components/MainLayout/MainLayout"));
const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("./Pages/AboutPage/AboutPage"));
const ContactsPage = lazy(() => import("./Pages/ContactsPage/ContactsPage"));
const DirectionDetailPage = lazy(
  () => import("./Pages/DirectionDetailPage/DirectionDetailPage"),
);
const DirectionsPage = lazy(
  () => import("./Pages/DirectionsPage/DirectionsPage"),
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/directions" element={<DirectionsPage />} />
          <Route path="/directions/:slug" element={<DirectionDetailPage />} />
          <Route path="/contact" element={<ContactsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

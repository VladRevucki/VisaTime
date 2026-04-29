import "./App.scss";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { MainLayout } from "./Components/MainLayout/MainLayout";
import { HomePage } from "./Pages/HomePage/HomePage";
import { AboutPage } from "./Pages/AboutPage/AboutPage";
import { ContactsPage } from "./Pages/ContactsPage/ContactsPage";
import { DirectionsPage } from "./Pages/DirectionsPage/DirectionsPage";
import { DirectionDetailPage } from "./Pages/DirectionDetailPage/DirectionDetailPage";

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

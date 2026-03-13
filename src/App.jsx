import "./App.scss";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { MainLayout } from "./Components/MainLayout/MainLayout";
import { Header } from "./Pages/Header/Header";
import { HomePage } from "./Pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/directions" element={<Header />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

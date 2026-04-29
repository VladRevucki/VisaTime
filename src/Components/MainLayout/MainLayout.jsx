import cls from "./MainLayout.module.scss";
import { lazy, Suspense } from "react";
import { Outlet } from "react-router";
import { Loader } from "../Loader/Loader";

const Header = lazy(() => import("../../Pages/Header/Header"));
const Footer = lazy(() => import("../Footer/Footer"));

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={cls.mainWrapper}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;

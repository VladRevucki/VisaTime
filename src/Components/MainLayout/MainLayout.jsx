import { Suspense } from "react";
import cls from "./MainLayout.module.scss";
import { Outlet } from "react-router";
import { Header } from "../../Pages/Header/Header";
import { Loader } from "../Loader/Loader";
import { Footer } from "../Footer/Footer";

export const MainLayout = () => {
  return (
    <>
      <div className={cls.mainLayout}>
        <Header />
        <div className={cls.mainWrapper}>
          <main className={cls.main}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </main>
          <div className={cls.footer}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

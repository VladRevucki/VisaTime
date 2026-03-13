import { Suspense } from "react";
import cls from "./MainLayout.module.scss";
import { Outlet } from "react-router";
import { Header } from "../../Pages/Header/Header";
import { Loader } from "../Loader/Loader";

export const MainLayout = () => {
  const currentYear = new Date().getFullYear();

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
          <footer className={cls.footer}>
            VisaTime | {currentYear} <br />
            by Vladislav Revutski
          </footer>
        </div>
      </div>
    </>
  );
};

import cls from "./HomePage.module.scss";

import { SectionOne } from "../../Components/SectionOne/SectionOne";

export const HomePage = () => {
  return (
    <div className={cls.home_wrapper}>
      <section className={cls.section_first}>
        <SectionOne />
      </section>
    </div>
  );
};

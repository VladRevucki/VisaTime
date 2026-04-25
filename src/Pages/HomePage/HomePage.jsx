import cls from "./HomePage.module.scss";

import { Directions } from "../../Components/Directions/Directions";
import { SectionOne } from "../../Components/SectionOne/SectionOne";
import { Steps } from "../../Components/Steps/Steps";
import { FAQ } from "../../Components/FAQ/FAQ";

export const HomePage = () => {
  return (
    <>
      <SectionOne />
      <Directions />
      <Steps />
      <FAQ />
    </>
  );
};

import cls from "./HomePage.module.scss";

import SectionOne from "../../Components/SectionOne/SectionOne";
import Directions from "../../Components/Directions/Directions";
import Steps from "../../Components/Steps/Steps";
import FAQ from "../../Components/FAQ/FAQ";

const HomePage = () => {
  return (
    <>
      <SectionOne />
      <Directions />
      <Steps />
      <FAQ />
    </>
  );
};

export default HomePage;

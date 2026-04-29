import cls from "./Steps.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { steps } from "../../data";

const Steps = () => {
  return (
    <section id="steps" className={cls.section}>
      <div className={cls.steps_wrapper}>
        <div className={cls.section_head}>
          <h2>Как проходит оформление</h2>
          <p>
            Прозрачный процесс без скрытых этапов и непредсказуемых расходов.
          </p>
        </div>

        <div className={cls.steps_container}>
          {steps.map(({ num, title, text }, i) => (
            <article key={num} className={cls.step_card}>
              <span className={cls.step_num}>{num}</span>
              <h3>{title}</h3>
              <p className={cls.step_text}>{text}</p>
              {i < steps.length - 1 && (
                <div className={cls.step_arrow} aria-hidden="true">
                  <FaArrowRightLong />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;

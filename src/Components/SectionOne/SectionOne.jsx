import cls from "./SectionOne.module.scss";
import { metrics } from "../../data";

export const SectionOne = () => {
  return (
    <div className={cls.section_wrapper}>
      <div className={cls.section_container}>
        <p className={cls.tag}>
          Оформление виз с гарантией корректных документов
        </p>
        <h1 className={cls.title}>Визы без стресса и бесконечных очередей</h1>
        <p className={cls.subtitle}>
          Берём на себя проверку анкет, сбор пакета документов, запись в визовый
          центр и сопровождение до результата.
        </p>
        <div className={cls.btn_wrapper}>
          <a className={`${cls.btn} ${cls.btn_outline}`} href="#contact">
            Рассчитать стоимость
          </a>
          <a className={cls.btn} href="#steps">
            Смотреть этапы
          </a>
        </div>
        <ul className={cls.metrics}>
          {metrics.map(({ value, label }) => (
            <li className={cls.metric} key={label}>
              <span>{value}</span>
              <div>{label}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

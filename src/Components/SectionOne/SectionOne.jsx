import cls from "./SectionOne.module.scss";
import { metrics } from "../../data";
import { Link } from "react-router-dom";

export const SectionOne = () => {
  return (
    <div className={cls.section_wrapper}>
      <div className={cls.section_container}>
        <p className={cls.tag}>
          Оформление виз с гарантией корректных документов
        </p>
        <h2>Визы без стресса и бесконечных очередей</h2>
        <p className={cls.subtitle}>
          Берём на себя проверку анкет, сбор пакета документов, запись в визовый
          центр и сопровождение до результата.
        </p>
        <div className={cls.btn_wrapper}>
          <Link to="/contact" className={`${cls.btn} ${cls.btn_outline}`}>
            Рассчитать стоимость
          </Link>
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

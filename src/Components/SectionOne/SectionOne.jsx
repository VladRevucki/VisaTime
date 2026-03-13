import cls from "./SectionOne.module.scss";

const metrics = [
  { value: "5 лет", label: "на рынке" },
  { value: "7 000+", label: "оформленных виз" },
  { value: "95%", label: "одобрений" },
];

export const SectionOne = () => {
  return (
    <div className={cls.section_wrapper}>
      <p className="tag">Оформление виз с гарантией корректных документов</p>
      <h1>Визы без стресса и бесконечных очередей</h1>
      <p className="subtitle">
        Берём на себя проверку анкет, сбор пакета документов, запись в визовый
        центр и сопровождение до результата.
      </p>
      <div className="hero-actions">
        <a className="btn" href="#contact">
          Рассчитать стоимость
        </a>
        <a className="btn btn-outline" href="#steps">
          Смотреть этапы
        </a>
      </div>
      <ul className="hero-metrics">
        {metrics.map(({ value, label }) => (
          <li key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

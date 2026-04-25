import cls from "./DirectionsPage.module.scss";
import { destinations, tabs, allDestinations } from "../../data";
import { useState } from "react";
import { Link } from "react-router-dom";

export const DirectionsPage = () => {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? allDestinations : (destinations[active] ?? []);

  const categoryLabel = {
    schengen: "Шенген",
    uk: "Великобритания",
    usa: "США",
  };

  return (
    <section id="directions" className={cls.section}>
      <p className={cls.directions}>Направления</p>
      <div className={cls.section_head}>
        <h2>Оформляем визы в 12 стран</h2>
        <p>
          Выберите страну, узнайте требования и оставьте заявку на консультацию.
        </p>
      </div>

      <div className={cls.tabs} aria-label="Направления виз">
        <button
          className={`${cls.tab} ${active === "all" ? cls.active : ""}`}
          onClick={() => setActive("all")}
        >
          Все
        </button>
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            className={`${cls.tab} ${active === key ? cls.active : ""}`}
            aria-selected={active === key}
            onClick={() => setActive(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={cls.cards}>
        {filtered.map((item) => (
          <Link
            key={item.slug}
            to={`/directions/${item.slug}`}
            className={cls.country_card}
          >
            <div className={cls.country_card_header}>
              <h2>{item.country}</h2>
              <span className={cls.country_category}>
                {categoryLabel[item.category]}
              </span>
            </div>
            <p className={cls.country_price}>{item.price}</p>
            <ul>
              {item.terms.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <span className={cls.card_btn}>Подробнее →</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

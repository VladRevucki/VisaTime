import cls from "./Directions.module.scss";
import { destinations, tabs } from "../../data";
import { useState } from "react";

export const Directions = () => {
  const [active, setActive] = useState("schengen");

  return (
    <section id="directions" className={cls.section}>
      <div className={cls.section_head}>
        <h2>Популярные направления</h2>
        <p>Выберите страну и получите список требований в течение 15 минут.</p>
      </div>

      <div className={cls.tabs} aria-label="Направления виз">
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
        {destinations[active].map((item) => (
          <CountryCard key={item.country} {...item} />
        ))}
      </div>
    </section>
  );
};

const CountryCard = ({ country, price, terms }) => {
  return (
    <article className={cls.country_card}>
      <div className={cls.country_card_header}>
        <h3>{country}</h3>
      </div>
      <p className={cls.country_price}>{price}</p>
      <ul>
        {terms.map((term) => (
          <li key={term}>{term}</li>
        ))}
      </ul>
      <a className={cls.card_btn} href="#contact">
        Оформить
      </a>
    </article>
  );
};

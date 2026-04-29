import { Link } from "react-router-dom";
import cls from "./AboutPage.module.scss";
import { aboutStats } from "../../data";

const AboutPage = () => {
  return (
    <section className={cls.section}>
      <div className={cls.about_head}>
        <p className={cls.about_text}>О нас</p>
        <h1>VisaTime — 1 год на рынке</h1>
        <p>
          Мы — команда специалистов с опытом в визовом сопровождении. За каждой
          заявкой стоит живой человек, а не автоматизированный шаблон.
        </p>
      </div>

      <div className={cls.about_stats}>
        {aboutStats.map(({ v, l }) => (
          <div key={l} className={cls.about_stat}>
            <h3>{v}</h3>
            <p>{l}</p>
          </div>
        ))}
      </div>

      <div className={cls.about_footer}>
        <h2>Готовы оформить визу?</h2>
        <p>Оставьте заявку — ответим в течение 15 минут в рабочее время.</p>
        <div className={cls.about_footer_links}>
          <Link to="/contact" className={cls.about_btn_contact}>
            Написать нам
          </Link>
          <Link to="/directions" className={cls.about_btn_directions}>
            Все направления
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

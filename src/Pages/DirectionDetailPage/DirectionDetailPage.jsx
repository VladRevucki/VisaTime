import cls from "./DirectionDetailPage.module.scss";
import { allDestinations } from "../../data";
import { Link, useParams } from "react-router-dom";
import Form from "../../Components/Form/Form";

const DirectionDetailPage = () => {
  const { slug } = useParams();
  const item = allDestinations.find((d) => d.slug === slug);

  if (!item) {
    return (
      <section className={cls.section_404}>
        <h1>Направление не найдено</h1>
        <p>Такой страны нет в нашем каталоге.</p>
        <Link to="/directions" className={cls.section_404_link}>
          Все направления
        </Link>
      </section>
    );
  }

  return (
    <section className={cls.section}>
      <div className={cls.breadcrumb}>
        <Link to="/">Главная</Link>
        <span>/</span>
        <Link to="/directions">Направления</Link>
        <span>/</span>
        <span className={cls.breadcrumb_country}>{item.country}</span>
      </div>

      <div className={cls["detail-hero"]}>
        <h1>{item.country}</h1>
        <p>{item.description}</p>
        <div className={cls["detail-wrapper"]}>
          <div className={cls["detail"]}>
            <span className={cls["detail_label"]}>Стоимость услуг</span>
            <strong>{item.price}</strong>
          </div>
          <div className={cls["detail"]}>
            <span className={cls["detail_label"]}>Срок оформления</span>
            <strong>{item.processing}</strong>
          </div>
          <div className={cls["detail"]}>
            <span className={cls["detail_label"]}>Срок действия</span>
            <strong>{item.validity}</strong>
          </div>
          <div className={cls["detail"]}>
            <span className={cls["detail_label"]}>Консульский сбор</span>
            <strong>{item.consularFee}</strong>
          </div>
        </div>
      </div>

      <div className={cls["detail-body"]}>
        <div className={cls["detail-docs"]}>
          <h2>Список документов</h2>
          <ul className={cls["doc-list"]}>
            {item.docs.map((doc) => (
              <li key={doc}>
                <span>✓</span>
                {doc}
              </li>
            ))}
          </ul>
          <p className={cls["doc-note"]}>
            * Конкретный пакет документов уточняется на консультации в
            зависимости от вашей ситуации.
          </p>
        </div>

        <aside className={cls["detail-aside"]}>
          <div className={cls["aside-card"]}>
            <h3>Получить консультацию</h3>
            <p>
              Ответим на вопросы о визе в {item.country} бесплатно в течение 15
              минут.
            </p>
            <a href="#contact">Оставить заявку</a>
          </div>
        </aside>
      </div>

      <div id="contact" className={cls.form}>
        <Form prefill={item.country} />
      </div>
    </section>
  );
};

export default DirectionDetailPage;

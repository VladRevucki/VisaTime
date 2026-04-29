import Form from "../../Components/Form/Form";
import cls from "./ContactsPage.module.scss";

const ContactsPage = () => {
  return (
    <div className={cls["page-wrap"]}>
      <div className={cls["page-hero"]}>
        <p className={cls.contacts}>Контакты</p>
        <h1>Свяжитесь с нами</h1>
        <p className={cls.subtitle}>
          Ответим на вопросы, подберём направление и рассчитаем стоимость в
          течение 15 минут.
        </p>
      </div>

      <div className={cls["contact-grid"]}>
        <div className={cls["contact-info"]}>
          <div className={cls["contact-block"]}>
            <span className={cls["contact-icon"]}>📞</span>
            <div>
              <strong>Телефон</strong>
              <a href="tel:+375290000000">+375 (29) 000-00-00</a>
              <span>Пн–Пт, 9:00–19:00</span>
            </div>
          </div>
          <div className={cls["contact-block"]}>
            <span className={cls["contact-icon"]}>✉️</span>
            <div>
              <strong>Email</strong>
              <a href="mailto:info@visatime.by">info@visatime.by</a>
              <span>Ответ в течение 2 часов</span>
            </div>
          </div>
          <div className={cls["contact-block"]}>
            <span className={cls["contact-icon"]}>📍</span>
            <div>
              <strong>Офис</strong>
              <span>Минск, ул. Немига, 12, офис 301</span>
              <span>Пн–Пт, 9:00–18:00</span>
            </div>
          </div>
        </div>

        <div className={cls["contact-form"]}>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;

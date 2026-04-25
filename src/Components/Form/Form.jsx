import { useState } from "react";
import cls from "./Form.module.scss";

const Form = ({ prefill = "" }) => {
  const initial = { name: "", phone: "", destination: prefill, comment: "" };
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Введите имя";
    if (!form.phone.trim()) e.phone = "Введите телефон";
    if (!form.destination) e.destination = "Выберите направление";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = validate();
    if (Object.keys(val).length) {
      setErrors(val);
      setStatus("error");
      return;
    }
    setStatus("success");
    setForm(initial);
    setErrors({});
  };

  return (
    <div className={cls["lead-grid"]}>
      <div className={cls["lead-info"]}>
        <span className={cls.tag}>Бесплатная консультация</span>
        <h2>Получите персональный план оформления визы</h2>
        <p>
          Оставьте контакты, и менеджер свяжется с вами в течение 15 минут в
          рабочее время.
        </p>
        <ul className={cls["lead-perks"]}>
          <li>✔ Проверка шансов на одобрение</li>
          <li>✔ Чек-лист документов бесплатно</li>
          <li>✔ Подбор ближайшей даты записи</li>
        </ul>
        <div className={cls["lead-contacts"]}>
          <a href="tel:+375290000000">+375 (29) 000-00-00</a>
          <a href="mailto:info@visaflow.by">info@visaflow.by</a>
        </div>
      </div>

      <form className={cls["lead-form"]} noValidate onSubmit={handleSubmit}>
        {status === "success" && (
          <div className={cls["form-success"]}>
            <span>🎉</span>
            <div>
              <strong>Заявка принята!</strong>
              <p>Менеджер свяжется с вами в ближайшее время.</p>
            </div>
          </div>
        )}

        <label>
          Имя
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={form.name}
            onChange={handleChange}
            className={errors.name ? cls["input-error"] : ""}
          />
          {errors.name && (
            <span className={cls["field-error"]}>{errors.name}</span>
          )}
        </label>

        <label>
          Телефон
          <input
            type="tel"
            name="phone"
            placeholder="+375 (__) ___-__-__"
            value={form.phone}
            onChange={handleChange}
            className={errors.phone ? cls["input-error"] : ""}
          />
          {errors.phone && (
            <span className={cls["field-error"]}>{errors.phone}</span>
          )}
        </label>

        <label>
          Направление
          <select
            name="destination"
            value={form.destination}
            onChange={handleChange}
            className={errors.destination ? cls["input-error"] : ""}
          >
            <option value="">Выберите страну/визу</option>
            <optgroup label="Шенген">
              <option>Польша</option>
              <option>Италия</option>
              <option>Испания</option>
              <option>Германия</option>
              <option>Франция</option>
              <option>Чехия</option>
            </optgroup>
            <optgroup label="Другие направления">
              <option>Великобритания</option>
              <option>США</option>
            </optgroup>
          </select>
          {errors.destination && (
            <span className={cls["field-error"]}>{errors.destination}</span>
          )}
        </label>

        <label>
          Комментарий <span className={cls.optional}>(необязательно)</span>
          <textarea
            name="comment"
            placeholder="Дополнительная информация о поездке..."
            value={form.comment}
            onChange={handleChange}
            rows={3}
          />
        </label>

        <button className={cls.btn} type="submit">
          Отправить заявку →
        </button>

        <p className={cls["form-note"]}>
          Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
        </p>
      </form>
    </div>
  );
};

export default Form;

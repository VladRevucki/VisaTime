import cls from "./FAQ.module.scss";
import { faqs } from "../../data";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const FaqItem = ({ q, a, open, onToggle }) => {
  return (
    <>
      <button
        className={`${cls.faq_summary} ${open ? cls.faq_summary_open : ""}`}
        onClick={onToggle}
      >
        {q}
        {open ? <FaMinus /> : <FaPlus />}
      </button>
      <div className={`${cls.faq_wrapper}${open ? cls.faq_wrapper_open : ""}`}>
        <div className={cls.faq_content}>
          {open && <p className={cls.faq_answer}>{a}</p>}
        </div>
      </div>
    </>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className={cls.section}>
      <div className={cls.section_wrapper}>
        <div className={cls.section_head}>
          <h2>Частые вопросы</h2>
          <p>Ответы на самые популярные вопросы об оформлении виз.</p>
        </div>
        <div className={cls.faq_list}>
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              {...item}
              open={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

import cls from "./FAQ.module.scss";
import { faqs } from "../../data";
import { useState } from "react";

const FaqItem = ({ q, a, open, onToggle }) => {
  return (
    <div className={`faq-item${open ? " faq-open" : ""}`}>
      <button className="faq-summary" onClick={onToggle} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq-icon">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="faq-body">{a}</p>}
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="section section-soft">
      <div className="container faq-wrap">
        <div className="section-head">
          <div>
            <h2>Частые вопросы</h2>
            <p>Ответы на самые популярные вопросы об оформлении виз.</p>
          </div>
        </div>
        <div className="faq-list">
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

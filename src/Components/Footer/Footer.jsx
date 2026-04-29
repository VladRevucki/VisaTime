import { Link } from "react-router-dom";
import cls from "./Footer.module.scss";
import { navLinks } from "../../data";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cls["site-footer"]}>
      <div className={cls["footer-inner"]}>
        <div className={cls["footer-brand"]}>
          <Link className={cls.brand} to="/">
            ✈ VisaTime
          </Link>
          <p>Профессиональное оформление виз с 2025 года.</p>
        </div>

        <nav className={cls["footer-nav"]} aria-label="Footer navigation">
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </nav>

        <div className={cls["footer-contacts"]}>
          <a href="tel:+375290000000">+375 (29) 000-00-00</a>
          <span>Минск, ул. Немига, 12</span>
        </div>
      </div>

      <div className={cls["footer-bottom"]}>
        <div>
          VisaTime | {currentYear} <br />
          by Vladislav Revutski
        </div>
      </div>
    </footer>
  );
};

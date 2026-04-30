import cls from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { navLinks } from "../../data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cls.footer_wrapper}>
      <div className={cls.footer_inner}>
        <div className={cls.footer_brand}>
          <Link className={cls.brand} to="/">
            ✈ VisaTime
          </Link>
          <p>Профессиональное оформление виз с 2025 года.</p>
        </div>

        <nav className={cls.footer_nav} aria-label="Footer navigation">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className={cls.footer_contacts}>
          <a href="tel:+375290000000">+375 (29) 000-00-00</a>
          <span>Минск, ул. Немига, 12</span>
        </div>
      </div>

      <div className={cls.footer_bottom}>
        <div>
          VisaTime | {currentYear} <br />
          by Vladislav Revutski
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import cls from "./Footer.module.scss";
import { navLinks } from "../../data";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link className="brand" to="/">
            ✈ VisaTime
          </Link>
          <p>Профессиональное оформление виз с 2017 года.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="footer-contacts">
          <a href="tel:+375290000000">+375 (29) 000-00-00</a>
          <a href="mailto:info@visaflow.by">info@visaflow.by</a>
          <span>Минск, ул. Немига, 12</span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          VisaTime | {currentYear} <br />
          by Vladislav Revutski
        </div>
      </div>
    </footer>
  );
};

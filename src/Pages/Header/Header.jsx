import cls from "./Header.module.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { destinations } from "../../data";
import { useEffect, useRef, useState } from "react";
import { ButtonCustom } from "../../Components/ButtonCustom/ButtonCustom";

const dropdownGroups = [
  {
    label: "Шенген",
    items: destinations.schengen.map(({ slug, country, price }) => ({
      slug,
      country,

      price,
    })),
  },
  {
    label: "Великобритания",
    items: destinations.uk.map(({ slug, country, price }) => ({
      slug,
      country,

      price,
    })),
  },
  {
    label: "США",
    items: destinations.usa.map(({ slug, country, price }) => ({
      slug,
      country,

      price,
    })),
  },
];

export const Header = () => {
  const navigate = useNavigate();
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef(null);
  const timerRef = useRef(null);

  const closeDrop = () => {
    timerRef.current = setTimeout(() => setDropOpen(false), 180);
  };
  const openDrop = () => {
    clearTimeout(timerRef.current);
    setDropOpen(true);
  };

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinks = [
    { to: "/directions", label: "Направления" },
    { to: "/about", label: "О нас" },
    { to: "/contact", label: "Контакты" },
  ];

  return (
    <div className={cls.header}>
      <div className={cls.header_wrapper}>
        <button onClick={() => navigate("/")}>
          <img
            className={cls.header_logo}
            src="../../../assets/img/logo.png"
            alt="logo"
          />
        </button>
        <nav className={cls.nav_wrapper}>
          <div
            className={cls["nav-drop-wrap"]}
            ref={dropRef}
            onMouseEnter={openDrop}
            onMouseLeave={closeDrop}
          >
            <button
              className={cls["nav-drop-trigger"]}
              onClick={() => setDropOpen((prev) => !prev)}
            >
              Виза в Европу
              <span className={cls["nav-drop-arrow"]}>▾</span>
            </button>
            {dropOpen && <VisaDropdown onClose={() => setDropOpen(false)} />}
          </div>

          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `${cls.nav_link} ${isActive ? cls["active"] : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <ButtonCustom>Оставить заявку</ButtonCustom>
      </div>
    </div>
  );
};

function VisaDropdown({ onClose }) {
  return (
    <div className={cls["nav-dropdown"]}>
      <div className={cls["nav-dropdown-inner"]}>
        {dropdownGroups.map(({ label, items }) => (
          <div key={label} className={cls["nav-dropdown-group"]}>
            <span className={cls["nav-dropdown-label"]}>{label}</span>
            {items.map(({ slug, country, price }) => (
              <Link
                key={slug}
                to={`/directions/${slug}`}
                className={cls["nav-dropdown-item"]}
                onClick={onClose}
              >
                <span className={cls["nav-dropdown-country"]}>{country}</span>
                <span className={cls["nav-dropdown-price"]}>{price}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className={cls["nav-dropdown-footer"]}>
        <Link
          to="/directions"
          className={cls["nav-dropdown-all"]}
          onClick={onClose}
        >
          Все направления
        </Link>
      </div>
    </div>
  );
}

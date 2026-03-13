import cls from "./Header.module.scss";
import { NavLink } from "react-router-dom";

import {} from "react";

export const Header = () => {
  return (
    <div className={cls.header_wrapper}>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "menu-item-active" : "menu-item"
          }
          end
        >
          Главная
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "menu-item-active" : "menu-item"
          }
          end
        >
          Виза в Европу
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "menu-item-active" : "menu-item"
          }
          end
        >
          Другие визы
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "menu-item-active" : "menu-item"
          }
          end
        >
          Контакты
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "menu-item-active" : "menu-item"
          }
          end
        >
          О нас
        </NavLink>
      </nav>
    </div>
  );
};

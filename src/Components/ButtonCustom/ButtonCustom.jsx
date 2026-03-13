import { memo } from "react";
import cls from "./ButtonCustom.module.scss";

export const ButtonCustom = memo(({ onClick, children }) => {
  return (
    <button className={`${cls.btn}`} onClick={onClick}>
      {children}
    </button>
  );
});

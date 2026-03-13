import { memo } from "react";
import cls from "./Button.module.scss";

export const Button = memo(({ onClick, children }) => {
  return (
    <button className={`${cls.btn}`} onClick={onClick}>
      {children}
    </button>
  );
});

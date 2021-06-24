import { ButtonHTMLAttributes } from "react";
import "../style/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutLine?: boolean;
};

export function Button({ isOutLine = false, ...props }: ButtonProps) {
  return (
    <button className={`button ${isOutLine ? "outlined" : ""}`} {...props} />
  );
}

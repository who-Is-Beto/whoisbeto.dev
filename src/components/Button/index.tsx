import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

type TButtons = "primary" | "secondary";

const Button: React.FC<{
  children: React.ReactNode;
  type?: TButtons;
  href?: string | null;
  blank?: boolean;
}> = ({ children, type = "primary", href = null, blank = false }): JSX.Element => {
  return (
    <>
      {!href && !blank && <button className={`button button--${type}`}>{children}</button>}

      {href && !blank && (
        <Link className={`button button--${type}`} to={href}>
          {children}
        </Link>
      )}

      {href && blank && (
        <a className={`button button--${type}`} href={href} target="_blank">
          {children}
        </a>
      )}
    </>
  );
};

export default Button;

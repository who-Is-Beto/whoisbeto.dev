import React from "react";
import "./Input.css";

type TInputTypes = "email" | "textarea" | "text";

const Input: React.FC<{
  type: TInputTypes;
  inputValue: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  name: string;
  label?: string;
  placeholder: string;
}> = ({ type, label, inputValue, onChange, name, placeholder }): JSX.Element => {
  return (
    <>
      {type === "textarea" ? (
        <label className="input__container">
          <span className="input__label">{label}</span>
          <textarea
            className="input"
            placeholder={placeholder}
            name={name}
            value={inputValue || ""}
            onChange={onChange}
          />
        </label>
      ) : (
        <label className="input__container">
          <span className="input__label">{label}</span>
          <input
            className="input"
            placeholder={placeholder}
            name={name}
            value={inputValue || ""}
            onChange={onChange}
            type={type}
          />
        </label>
      )}
    </>
  );
};

export default Input;

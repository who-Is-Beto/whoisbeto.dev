import React from "react";
import Input from "../Input";
import Button from "../Button";
import { BiMailSend } from "react-icons/bi";
import useForm from "../../hooks/useForm";
import "./From.css";

const Form: React.FC = (): JSX.Element => {
  const url = "http://localhost:3001/api/send";
  const { values, handleChange } = useForm();

  const handleSubmit = async (event: React.SyntheticEvent): Promise<void> => {
    event.preventDefault();
    const response = await fetch(url, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*"
      },
      body: JSON.stringify(values)
    });
  };

  return (
    <form className="form__container" onSubmit={handleSubmit}>
      <div className="form__fields">
        <Input
          onChange={handleChange}
          placeholder="Juan"
          name="name"
          type="text"
          inputValue={values.name}
          label="Name"
        />
        <Input
          placeholder="your.email@gmail.com"
          name="email"
          type="email"
          inputValue={values.email}
          onChange={handleChange}
          label="Email"
        />
        <Input
          onChange={handleChange}
          placeholder="Subject"
          name="subject"
          type="text"
          inputValue={values.subject}
          label="Subject"
        />
        <Input
          placeholder="Message"
          onChange={handleChange}
          name="message"
          type="textarea"
          inputValue={values.message}
          label="Message"
        />
      </div>
      <Button type="primary">
        Send <BiMailSend size="1.5rem" />
      </Button>
    </form>
  );
};

export default Form;

import React from "react";
import Input from "../Input";
import Button from "../Button";
import { BiMailSend } from "react-icons/bi";
import useForm from "../../hooks/useForm";

import "./From.css";
import validations from "./validations";
import { toast, ToastContainer } from "react-toastify";

const Form: React.FC = (): JSX.Element => {
  const url = "https://mailer-production.up.railway.app/api/send";
  const { values, handleChange, handleValidate, formErrors } = useForm({
    name: "",
    email: "",
    message: "",
    subject: ""
  });

  const handleSubmit = async (event: React.SyntheticEvent): Promise<void> => {
    event.preventDefault();

    handleValidate(validations);

    if (Object.keys(formErrors).length === 0) {
      console.log("GREAT");
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(values)
      });
      if (response.status === 201) {
        toast("🦄 Wow so easy!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
      } else {
        toast("Unexpected error :c", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
      }
    }
  };

  return (
    <form className="form__container" onSubmit={handleSubmit}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="form__fields">
        <Input
          onChange={handleChange}
          placeholder="Juan"
          name="name"
          type="text"
          inputValue={values.name}
          label="Name"
        />
        {formErrors.name && <small style={{ color: "red" }}>{formErrors.name?.message}</small>}
        <Input
          placeholder="your.email@gmail.com"
          name="email"
          type="email"
          inputValue={values.email}
          onChange={handleChange}
          label="Email"
        />
        {formErrors.email && <small style={{ color: "red" }}>{formErrors.email?.message}</small>}
        <Input
          onChange={handleChange}
          placeholder="Subject"
          name="subject"
          type="text"
          inputValue={values.subject}
          label="Subject"
        />
        {formErrors.subject && (
          <small style={{ color: "red" }}>{formErrors.subject?.message}</small>
        )}
        <Input
          placeholder="Message"
          onChange={handleChange}
          name="message"
          type="textarea"
          inputValue={values.message}
          label="Message"
        />
        {formErrors.message && (
          <small style={{ color: "red" }}>{formErrors.message?.message}</small>
        )}
      </div>
      {formErrors.userData && (
        <small style={{ color: "red" }}>{formErrors.userData?.message}</small>
      )}
      <Button type="primary">
        Send <BiMailSend size="1.5rem" />
      </Button>
    </form>
  );
};

export default Form;

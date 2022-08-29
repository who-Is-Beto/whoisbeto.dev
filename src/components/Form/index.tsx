import React from "react";
import Input from "../Input";
import Button from "../Button";
import { BiMailSend } from "react-icons/bi";
import useForm from "../../hooks/useForm";
import validations from "./validations";
import { ToastContainer } from "react-toastify";
import { WindMillLoading } from "react-loadingg";
import "react-toastify/dist/ReactToastify.css";
import "./From.css";

const Form: React.FC = (): JSX.Element => {
  const url = "http://localhost:3001/api/send";
  const { values, handleChange, handleSubmit, formErrors, isSubmit } = useForm(
    {
      name: "",
      email: "",
      message: "",
      subject: ""
    },
    validations,
    url
  );

  return (
    <>
      {!isSubmit && (
        <form className="form__container" onSubmit={handleSubmit}>
          <ToastContainer
            theme="colored"
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            style={{ borderRadius: "0.5rem" }}
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
            {formErrors.name?.message && (
              <small style={{ color: "red" }}>{formErrors.name?.message}</small>
            )}
            <Input
              placeholder="your.email@gmail.com"
              name="email"
              type="email"
              inputValue={values.email}
              onChange={handleChange}
              label="Email"
            />
            {formErrors.email?.message && (
              <small style={{ color: "red" }}>{formErrors.email?.message}</small>
            )}
            <Input
              onChange={handleChange}
              placeholder="Subject"
              name="subject"
              type="text"
              inputValue={values.subject}
              label="Subject"
            />
            {formErrors.subject?.message && (
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
            {formErrors.message?.message && (
              <small style={{ color: "red" }}>{formErrors.message?.message}</small>
            )}
          </div>
          {formErrors.userData?.message && (
            <small style={{ color: "red" }}>{formErrors.userData?.message}</small>
          )}
          <Button type="primary">
            Send <BiMailSend size="1.5rem" />
          </Button>
        </form>
      )}
      {Object.keys(formErrors).length === 0 && isSubmit && (
        <WindMillLoading color="#00e0ab" size="large" />
      )}
    </>
  );
};

export default Form;

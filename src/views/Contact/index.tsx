import React from "react";
import Form from "../../components/Form";
import "./Contact.css";

const Contact: React.FC = (): JSX.Element => {
  return (
    <div className="page">
      <h2 className="contact__title">Contact</h2>

      <Form />
    </div>
  );
};

export default Contact;

import { useState } from "react";
import validateValues from "who-fields-validator";

const useForm = (formInitialState?: { [key: string]: any }) => {
  const [state, setState] = useState<{ [key: string]: any }>(formInitialState || {});
  const [formErrors, setformErrors] = useState<{ [key: string]: any }>({});

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleValidate = (validations?: TFieldValidations[]): void => {
    const { haveErrors, errors } = validateValues(state, validations);
    if (haveErrors) {
      console.log(errors, haveErrors);
      setformErrors(errors);
    }
  };

  return { values: state, handleChange, handleValidate, formErrors };
};

export default useForm;

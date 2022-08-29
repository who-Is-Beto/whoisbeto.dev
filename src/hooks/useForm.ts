import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import validateValues from "who-fields-validator";

const useForm = (
  formInitialState: { [key: string]: any },
  validations: TFieldValidations[],
  url: string
) => {
  const [formValues, setFormValues] = useState<{ [key: string]: any }>(formInitialState || {});
  const [formErrors, setFormErrors] = useState<{ [key: string]: any }>({});
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    event.persist();
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
    delete formErrors[event.target.name];
  };

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    setFormErrors(validateValues(formValues, validations).errors);
    if (Object.keys(validateValues(formValues, validations).errors).length === 0) {
      setIsSubmit(true);
    }
  };

  const sendData = async (): Promise<void> => {
    try {
      const requestOptions = {
        url,
        method: "post",
        data: formValues
      };
      await axios({
        ...requestOptions
      });
      setFormValues(formInitialState);
      toast.success("🦄 Message sended!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    } catch (error) {
      toast.error("Unexpected error! try again later :c", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }
    setIsSubmit(false);
  };

  useEffect((): void => {
    if (isSubmit) {
      sendData();
    }
  }, [formErrors, isSubmit]);

  return { values: formValues, handleChange, handleSubmit, formErrors, isSubmit };
};

export default useForm;

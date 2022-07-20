import { useState } from "react";

const useForm = () => {
  const [state, setState] = useState<{ [key: string]: any }>({});

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return { values: state, handleChange };
};

export default useForm;

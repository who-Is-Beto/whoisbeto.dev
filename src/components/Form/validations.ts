const validations = [
  {
    key: "name",
    validations: {
      required: { condition: true, message: "fielded required" },
      minLength: { condition: 3, message: "field must to be 3 length" },
      maxLength: { condition: 30, message: "field must to be 30 length" }
    }
  },
  {
    key: "email",
    validations: {
      required: { condition: true, message: "email is required" },
      validEmail: { condition: true, message: "email must be a valid email" }
    }
  },
  {
    key: "subject",
    validations: {
      minLength: { condition: 5, message: "field must to be 5 length" },
      required: { condition: true, message: "fielded required" },
      maxLength: { condition: 50, message: "field must to be 50 length" }
    }
  },
  {
    key: "message",
    validations: {
      required: { condition: true, message: "fielded required" },
      minLength: { condition: 20, message: "field must to be 20 length" },
      maxLength: { condition: 500, message: "field must to be 500 length" }
    }
  }
];

export default validations;

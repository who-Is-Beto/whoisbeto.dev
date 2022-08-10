const validations = [
  {
    key: "name",
    validations: {
      required: { condition: true, message: "fielded required" },
      minLength: { condition: 2, message: "field must to be 2 length" },
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
      required: { condition: true, message: "fielded required" },
      maxLength: { condition: 50, message: "field must to be 50 length" }
    }
  },
  {
    key: "message",
    validations: {
      required: { condition: true, message: "fielded required" },
      maxLength: { condition: 500, message: "field must to be 30 length" }
    }
  }
];

export default validations;

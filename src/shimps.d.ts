type TProjectImage = {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
};

type TTechnology = {
  _key: string;
  _type: string;
  technologyLink: string;
  technologyName: string;
};

declare interface IProject {
  image: TProjectImage;
  name: string;
  projectLink: string;
  description: string;
  repoLink: string;
  technologies: TTechnology[];
}

declare type TFieldValidationsOption = {
  condition: string | boolean | number | ((value1: any) => unknown);
  message: string;
};

declare type TValidationOptions = {
  minLength?: TFieldValidationsOption;
  maxLength?: TFieldValidationsOption;
  required?: TFieldValidationsOption;
  validEmail?: TFieldValidationsOption;
  validName?: TFieldValidationsOption;
  ValidPassWord?: TFieldValidationsOption;
  customValidation?: TFieldValidationsOption;
  validTelephone?: TFieldValidationsOption;
  equalTo?: TFieldValidationsOption;
};

declare type TFieldValidations = {
  key: string;
  validations?: TValidationOptions;
};

declare module "react-loadingg";

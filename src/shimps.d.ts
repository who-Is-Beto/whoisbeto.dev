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

declare module "react-loadingg";

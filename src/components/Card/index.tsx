import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdWebAsset } from "react-icons/md";
import { getImageSrc } from "../../utils/getImageSrc";
import Button from "../Button";
import "./Card.css";

const Card: React.FC<{
  project: IProject;
}> = ({ project }): JSX.Element => {
  const style = {
    color: "black",
    size: "2rem",
    display: "flex",
    alignItems: "center"
  };
  return (
    <div className="card">
      <img
        className="card__image"
        src={getImageSrc(project.image.asset._ref)}
        alt={project.name}
        loading={"lazy"}
      />
      <div className="card__info">
        <h3 className="card__info__title green-text ">{project.name}</h3>
        <p className="card__info__detail">{project.description}</p>
        <div className="card__info__technologies green-text">
          {project.technologies.map(
            (technology): JSX.Element => (
              <a
                key={technology._key}
                className="green-text"
                href={technology.technologyLink}
                target="_blank"
              >
                {technology.technologyName}
              </a>
            )
          )}
        </div>
        <div className="card__buttons">
          <a href={project.projectLink} target="_blank">
            <Button type="primary">
              <span>
                <MdWebAsset color="black" scale={4} style={style} />
              </span>
              See the project
            </Button>
          </a>
          <a href={project.repoLink} target="_blank">
            <Button type="secondary">
              <span
                style={{
                  color: "black"
                }}
              >
                <AiFillGithub />
              </span>
              See the code
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import { IWorks } from "../../shimps";
import { getImageSrc } from "../../utils/getImageSrc";
import "../Card/Card.css";

const WorkCard: React.FC<{
  work: IWorks;
}> = ({ work }): JSX.Element => {
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
        src={getImageSrc(work.image.asset._ref)}
        alt={work.Company}
        loading={"lazy"}
      />
      <div className="card__info">
        <h3 className="card__info__title green-text ">{work.Company}</h3>
        <h4 className="card__position">
          <span className="green-text">-</span> {work.position}{" "}
          <span className="green-text">-</span>{" "}
        </h4>
        <p className="card__info__detail">{work.description}</p>
      </div>
      <p>{work.timeWorked}</p>
      <a className="green-text" href={work.websiteLink} target="_blank">
        website
      </a>
    </div>
  );
};

export default WorkCard;

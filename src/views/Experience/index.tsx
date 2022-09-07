import React from "react";
import Card from "../../components/Card";
import WorkCard from "../../components/workCard";
import { useProjects } from "../../hooks/useProjects";
import { WindMillLoading } from "react-loadingg";
import "./Experience.css";
import { IProject, IWorks } from "../../shimps";
import { useWorks } from "../../hooks/useWorks";

const Experience: React.FC = (): JSX.Element => {
  const { data, isLoading } = useProjects();
  const { data: works, isLoading: workLoading } = useWorks();
  return (
    <div className="page">
      {isLoading && workLoading ? (
        <WindMillLoading color="#00e0ab" size="large" />
      ) : (
        <>
          <h2 className="experience__title">Work Experience</h2>
          <div className="experience">
            {works?.map(
              (work: IWorks): JSX.Element => (
                <WorkCard key={work.Company} work={work} />
              )
            )}
          </div>
          <h2 className="experience__title">Personal Projects</h2>
          <div className="experience">
            {data?.map(
              (project: IProject): JSX.Element => (
                <Card key={project.name} project={project} />
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Experience;

import React from "react";
import Card from "../../components/Card";
import { useProjects } from "../../hooks/useProjects";
import { WindMillLoading } from "react-loadingg";
import "./Experience.css";

const Experience: React.FC = (): JSX.Element => {
  const { data, isLoading } = useProjects();
  return (
    <div className="page">
      {isLoading ? (
        <WindMillLoading color="#00e0ab" size="large" />
      ) : (
        <>
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

import {} from "react";
import sanityClient from "../sanity-react/src/client";
import useSWR from "swr";

const projectsQuery = `
*[_type == 'projects']{
  name,
  projectLink,
  repoLink,
  technologies,
  image,
  description
}`;

export const useProjects = () => {
  const { data, error } = useSWR<IProject[]>(projectsQuery, (query) => sanityClient.fetch(query));
  return {
    data,
    error,
    isLoading: !data && !error
  };
};

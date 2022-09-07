import sanityClient from "../sanity-react/src/client";
import useSWR from "swr";
import { IWorks } from "../shimps";

const worksQuery = `
*[_type == 'Works']{
  Company,
  image,
  websiteLink,
  position,
  timeWorked,
  description
}`;

export const useWorks = () => {
  const { data, error } = useSWR<IWorks[]>(worksQuery, (query) => sanityClient.fetch(query));
  return {
    data,
    error,
    isLoading: !data && !error
  };
};

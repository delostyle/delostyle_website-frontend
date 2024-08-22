import React from "react";
import { useQuery } from "react-query";
import { getAllProject } from "../../../../utils/api";

const useProject = () => {
  const { data, isError, isLoading, refetch } = useQuery(
    "getAllProject", // queryKey
    getAllProject, // queryFn
    {
      refetchOnWindowFocus: false,
    }
  );
  console.log(data, "data");
  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};

export default useProject;
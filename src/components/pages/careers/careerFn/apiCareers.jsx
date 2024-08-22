import React from "react";
import { useQuery } from "react-query";
import { getAllCareers } from "../../../utils/api";

const useCareer = () => {
  const { data, isError, isLoading, refetch } = useQuery(
    "getAllCareers", // queryKey
    getAllCareers, // queryFn
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

export default useCareer;
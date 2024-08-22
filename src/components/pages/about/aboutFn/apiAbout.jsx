import React from "react";
import { useQuery } from "react-query";
import { getAllAbout } from "../../../utils/api";

const useAbout = () => {
  const { data, isError, isLoading, refetch } = useQuery(
    "getAllAbout", // queryKey
    getAllAbout, // queryFn
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

export default useAbout;
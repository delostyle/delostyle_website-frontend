import React from "react";
import { useQuery } from "react-query";
import { getAllHome } from "../../../utils/api";

const useHome = () => {
  const { data, isError, isLoading, refetch } = useQuery(
    "getAllHome", // queryKey
    getAllHome, // queryFn
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

export default useHome;
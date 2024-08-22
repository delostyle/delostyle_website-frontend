import React from "react";
import { useQuery } from "react-query";
import { getAllHiring } from "../../../../utils/api";
const useHiring = () => {
  const { data, isError, isLoading, refetch } = useQuery(
    "getAllHiring", // queryKey
    getAllHiring, // queryFn
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

export default useHiring;
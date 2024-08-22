import React from "react";
import { useQuery } from "react-query";
import { getAllClients } from "../../../utils/api";

const useClient = () => {
  const { data, isError, isLoading, refetch } = useQuery(
    "getAllClients", // queryKey
    getAllClients, // queryFn
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

export default useClient;
import React from "react";
import { useQuery } from "react-query";
import { getAllService} from "../../../utils/api";

const useService = () => {
  const { data, isError, isLoading, refetch } = useQuery(
    "getAllService", // queryKey
    getAllService, // queryFn
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

export default useService;
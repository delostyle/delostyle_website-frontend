import { getAllContact } from "../../../utils/api";
import { useQuery } from "react-query";

const UseContact = ()=>{
const {data, isError, isLoading, refetch} = useQuery(
    "getAllContact",
    getAllContact,
    {
        refetchOnWindowFocus:false
    }
);
console.log(data, "data");
return{
    data,
    isError,
    isLoading,
    refetch
};
};

export default UseContact;

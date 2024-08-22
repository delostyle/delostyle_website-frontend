import React from "react";
import bulbIcon from "../../images/bulbIcon.png"
import dottedBg from "../../images/dottedBg.png"
import RequirementProcessCommon from "../RequirementProcess/RequirementProcessCommon";
import useCareer from "../careers/careerFn/apiCareers";

 
export default function CareerWork(){
  
  const {data,isError , isLoading} = useCareer()
    return(
      <>
        <RequirementProcessCommon data={data} loading={isLoading} />
      </>

    )
}
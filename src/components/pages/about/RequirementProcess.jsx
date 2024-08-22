import React from "react";
import bulbIcon from "../../images/bulbIcon.png"
import dottedBg from "../../images/dottedBg.png"
import "./about.css"
import RequirementProcessCommon from "../RequirementProcess/RequirementProcessCommon";
import useAbout from "../about/aboutFn/apiAbout";

export default function RequirementProcess(){
  const {data,isError , isLoading} = useAbout()
 
    return(
      <>
        <RequirementProcessCommon data1={data} loading={isLoading} />
      </>
  
    )
}

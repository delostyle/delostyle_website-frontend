import React from "react";
import bulbIcon from "../../images/bulbIcon.png";
import dottedBg from "../../images/dottedBg.png";
import "./team.css";
import RequirementProcessCommon from "../RequirementProcess/RequirementProcessCommon";

export default function RequirementProcess({teamData}) {
  return (
   <>
    <RequirementProcessCommon teamData={teamData}/>
   </>
  );
}

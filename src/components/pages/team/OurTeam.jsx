import React, { useState, useEffect } from "react";
import Navbar from "../../navbar/Navbar";
import TeamBanner from "./TeamBanner";
import Testimonial from "./Testimonial";
import TeamBanner2 from "./TeamBanner2";
import RequirementProcess from "./RequirementProcess";
import Newsletter from "../newsletter/Newsletter";
import SocialUpdates from "../socialUpdates/SocialUpdates";
import Footer from "../footer/Footer";
import { getAllTeam } from "../../../components/utils/api";
import RequirementProcessCommon from "../RequirementProcess/RequirementProcessCommon";

export default function OurTeam() {
  const [teamData, setTeamData] = useState({});

  useEffect(() => {
    const Data = async () => {
      try {
        let res = await getAllTeam();
        console.log(res, "dddddddddddsankh");
        setTeamData(res);
      } catch (err) {
        console.log(err);
      }
    };
    Data();
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar/>
      <TeamBanner teamData={teamData} />
      <Testimonial />
      <TeamBanner2 teamData={teamData} />
      <RequirementProcess teamData={teamData} />
      <Newsletter />
      <SocialUpdates />
      <Footer />
    </div>
  );
}

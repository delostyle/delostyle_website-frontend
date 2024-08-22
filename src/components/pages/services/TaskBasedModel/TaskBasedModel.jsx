import React, { useState, useEffect } from "react";
import Navbar from "../../../navbar/Navbar";
import Newsletter from "../../newsletter/Newsletter";
import SocialUpdates from "../../socialUpdates/SocialUpdates";
import Footer from "../../footer/Footer";
import TaskSolution from "./TaskSolution";
import TaskGrid from "./TaskGrid";
import WhyTS from "./WhyTS";
import KnowTS from "./KnowTS";
import TsApproach from "./TsApproach";
import TsEmpower from "./TsEmpower";
import TsWorks from "./TsWorks";
import TsOperation from "./TsOperation";
import { getTaskModel } from "../../../utils/api";

export default function TaskBasedModel() {
  const [taskModel, setTaskModel] = useState({});

  useEffect(() => {
    const Data = async () => {
      try {
        let res = await getTaskModel();
        console.log(res, "ddddddddddd");
        setTaskModel(res);
      } catch (err) {
        console.log(err);
      }
    };
    Data();
  }, []);
  return (
    <>
      <Navbar />
      <TaskSolution taskModel={taskModel} />
      <TaskGrid taskModel={taskModel} />
      <WhyTS taskModel={taskModel} />
      <KnowTS taskModel={taskModel} />
      <TsApproach taskModel={taskModel} />
      <TsEmpower taskModel={taskModel} />
      <TsWorks taskModel={taskModel} />
      <TsOperation taskModel={taskModel} />
      <Newsletter />
      <SocialUpdates />
      <Footer />
    </>
  );
}

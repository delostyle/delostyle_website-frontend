import React from "react";
import Navbar from "../../navbar/Navbar";
import AboutBanner from "./AboutBanner";
import Newsletter from "../newsletter/Newsletter";
import SocialUpdates from "../socialUpdates/SocialUpdates";
import Footer from "../footer/Footer";
import "./about.css"
import OurVision from "./OurVision";
import YearProgress from "./YearProgress";
import OperationalProcess from "./OperationProcess";
import WhoAreWe from "./WhoAreWe";
import WeWorkTogether from "./WeWorkTogether";
import TechDriven from "./TechDriven";
import CreateSolution from "./CreateSolution";
import OurMission from "./OurMission";
import OurWork from "./OurWork";
import Priority from "./Priority";
import RequirementProcess from "./RequirementProcess";
import useAbout from "./aboutFn/apiAbout";


export default function About (){
    const { data, isError, isLoading, refetch} = useAbout()
    console.log(data, "about data")
    console.log(isError, "here is the error")
    console.log(isLoading, "here is the loader")
    
    return(
        
        <div className="overflow-hidden">

            <Navbar />
            <AboutBanner data={data} loading={isLoading}/>
            <OurVision data={data} loading={isLoading}/>
            <YearProgress/>
            <OperationalProcess data={data} loading={isLoading}/>
            <WhoAreWe data={data} loading={isLoading}/>
            <WeWorkTogether data={data} loading={isLoading}/>
            <TechDriven data={data} loading={isLoading}/>
            <CreateSolution data={data} loading={isLoading}/>
            <OurMission data={data} loading={isLoading}/>
            <OurWork data={data} loading={isLoading}/>
            <Priority data={data} loading={isLoading} />
            <RequirementProcess data={data} loading={isLoading}/>
            <Newsletter data={data} loading={isLoading}/>
            <SocialUpdates data={data} loading={isLoading}/>
            <Footer/> 
        </div>
    )
}

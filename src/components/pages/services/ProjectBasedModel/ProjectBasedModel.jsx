import React from "react";
import Navbar from "../../../navbar/Navbar";
import Newsletter from "../../newsletter/Newsletter";
import SocialUpdates from "../../socialUpdates/SocialUpdates";
import Footer from "../../footer/Footer";
import PbmSolution from "./PbmSolution";
import PbmGrid from "./PbmGrid";
import WhyPBM from "./WhyPBM";
import KnowPbm from "./KnowPbm";
import PbmApproach from "./PbmApproach";
import PbmEmpower from "./PbmEmpower";
import PbmWorks from "./PbmWorks";
import PbmOperation from "./PbmOperation";
import useProject from "./projectFn/ProjectBased";

export default function ProjectBasedModel(){
    const { data, isError, isLoading, refetch} = useProject()
    return(
        <>
        <Navbar/>
        <PbmSolution data ={data} loading={isLoading}/>
        <PbmGrid/>
        <WhyPBM data ={data} loading={isLoading}/>
        <KnowPbm data ={data} loading={isLoading}/>
        <PbmApproach />
        <PbmEmpower data ={data} loading={isLoading}/>
        <PbmWorks data ={data} loading={isLoading}/>
        <PbmOperation data ={data} loading={isLoading}/>
        <Newsletter/>
        <SocialUpdates/>
        <Footer/>


        </>
    )
}
import React,{useEffect, useState} from "react";
import Navbar from "../../../navbar/Navbar";
import Newsletter from "../../newsletter/Newsletter";
import SocialUpdates from "../../socialUpdates/SocialUpdates";
import Footer from "../../footer/Footer";
import HySolution from "./HySolution";
import HyGrid from "./HyGrid";
import WhyHy from "./WhyHy";
import KnowHy from "./KnowHy";
import HyApproach from "./HyApproach";
import HyWorks from "./HyWorks";
import HyEmpower from "./HyEmpower";
import HyOperation from "./HyOperation";
import { getAllHybridmodel } from "../../../utils/api";

export default function HybridModel(){
    const [hybrid_data,setHybrid_data]=useState({})
 useEffect(()=>{
    const Data=async()=>{
        try{
let res=await getAllHybridmodel()


setHybrid_data(res)
// console.log(res,'ddddddddddd');

        }catch(err){
            console.log(err);
            
        }
    }
    Data()
 },[])
//  console.log(hybrid_data,"hybrid_data");
 
    return(
        <>
        <Navbar/>
        <HySolution hybrid_data={hybrid_data.hySolutionData}/>
        <HyGrid hybrid_data={hybrid_data.hyGridData}/>
        <WhyHy hybrid_data={hybrid_data.whyHyData}/>
        <KnowHy hybrid_data={hybrid_data.knowHyData}/>
        <HyApproach hybrid_data={hybrid_data.hyApproachData}/>
        <HyEmpower hybrid_data={hybrid_data.hyEmpowerData}/>
        <HyWorks hybrid_data={hybrid_data.hyWorksData}/> 
        <HyOperation hybrid_data={hybrid_data.hyOperationData}/>
        <Newsletter hybrid_data={hybrid_data}/>
        <SocialUpdates />
        <Footer/>


        </>
    )
}
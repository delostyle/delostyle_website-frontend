import React, { useState,useEffect } from "react";
import Navbar from "../../../navbar/Navbar";
import Newsletter from "../../newsletter/Newsletter";
import SocialUpdates from "../../socialUpdates/SocialUpdates";
import Footer from "../../footer/Footer";
import HourSolution from "./HourSolution";
import HourGrid from "./HourGrid";
import WhyHM from "./WhyHM";
import KnowHM from "./KnowHM";
import HmApproach from "./HmApproach";
import HmEmpower from "./HmEmpower";
import HmWorks from "./HmWorks";
import HmOperational from "./HmOperational";
import { getHourModel } from "../../../utils/api";

export default function HourModel(){

    const [hourModel,setHourModel] =useState({})

    useEffect(()=>{
        const Data=async()=>{
            try{
    let res=await getHourModel()
    console.log(res,'ddddddddddd');
    setHourModel(res)
            }catch(err){
                console.log(err);
                
            }
        }
        Data()
     },[])
     
    return(
        <>
        <Navbar/>
        <HourSolution hourModel={hourModel}/>
        <HourGrid hourModel={hourModel}/>
        <WhyHM hourModel={hourModel}/>
        <KnowHM hourModel={hourModel}/>
        <HmApproach hourModel={hourModel}/>
        <HmEmpower hourModel={hourModel}/>
        <HmWorks hourModel={hourModel}/>
        <HmOperational hourModel={hourModel}/>
        <Newsletter />
        <SocialUpdates/>
        <Footer/>


        </>
    )
}
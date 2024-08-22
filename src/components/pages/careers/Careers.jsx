import React from "react";
import Navbar from "../../navbar/Navbar";
import Newsletter from "../newsletter/Newsletter"
import SocialUpdates from "../socialUpdates/SocialUpdates"
import Footer from "../footer/Footer"
import CareerBanner from "./CareerBanner";
import CareerConsulting from "./CareerConsulting";
import ImageGrid from "./ImageGrid";
import CareerForm from "./CareerForm";
import CareerWork from "./CareerWork";
import useCareer from "./careerFn/apiCareers";




export default function Careers(){
    const { data, isError, isLoading, refetch} = useCareer()
    console.log(isLoading, "is load")
    return(
        <div className="overflow-hidden">
        <Navbar/>
        <CareerBanner data ={data} loading={isLoading}/>
        <CareerConsulting data ={data} loading={isLoading}/>
        <ImageGrid data ={data} loading={isLoading}/>
        <CareerForm data ={data} loading={isLoading}/>
        <CareerWork data ={data} loading={isLoading}/>
        <Newsletter/>
        <SocialUpdates/>
        <Footer/>
        </div>
        
    )
}
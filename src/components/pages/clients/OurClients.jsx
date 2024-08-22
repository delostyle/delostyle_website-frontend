import React from "react";
import Navbar from "../../navbar/Navbar";
import ClientsBanner from "./ClientsBanner";
import ClientBenifits from "./ClientBenifits";
import OurVision from "./OurClientVision";
import OurClientWork from "./OurClientWork";
import Newsletter from "../newsletter/Newsletter"
import SocialUpdates from "../socialUpdates/SocialUpdates"
import Footer from "../footer/Footer"
import useClient from "./clientFn/apiClient";



export default function OurClients(){
    const { data, isError, isLoading, refetch} = useClient()
   

    return(
        <div className="overflow-hidden">
        <Navbar/>
        <ClientsBanner data ={data} loading={isLoading}/>
        <ClientBenifits data ={data} loading={isLoading}/>
        <OurVision data ={data} loading={isLoading}/>
        <OurClientWork data ={data} loading={isLoading}/>
        <Newsletter/>
        <SocialUpdates/>
        <Footer/>
        </div>
        
    )
}
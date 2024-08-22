import React from "react";
import Navbar from "../../navbar/Navbar";
import Newsletter from "../newsletter/Newsletter"
import SocialUpdates from "../socialUpdates/SocialUpdates"
import Footer from "../footer/Footer"
import CaseBanner from "./CaseBanner";
import ProjectList from "./ProjectList";




export default function CaseStudies(){

    return(
        <div className="overflow-hidden">
        <Navbar/>
        <CaseBanner/>
        <ProjectList/>
        <Newsletter/>
        <SocialUpdates/>
        <Footer/>
     
        </div>
        
    )
}
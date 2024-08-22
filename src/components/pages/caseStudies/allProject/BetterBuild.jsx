import React from "react";
import Navbar from "../../../navbar/Navbar";
import Newsletter from "../../newsletter/Newsletter";
import SocialUpdates from "../../socialUpdates/SocialUpdates";
import Footer from "../../footer/Footer";
import ProjectBetterBuild from "./ProjectBetterBuild";





export default function BetterBuild(){

    return(
        <>
        <Navbar/>
        <ProjectBetterBuild/>
        <Newsletter/>
        <SocialUpdates/>
        <Footer/>
        </>
        
    )
}
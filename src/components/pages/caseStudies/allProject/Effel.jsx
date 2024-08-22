import React from "react";

import Navbar from "../../../navbar/Navbar";
import Newsletter from "../../newsletter/Newsletter";
import SocialUpdates from "../../socialUpdates/SocialUpdates";
import Footer from "../../footer/Footer";
import ProjectEffel from "./ProjectEffel";





export default function Effel(){

    return(
        <>
        <Navbar/>
        <ProjectEffel/>
        <Newsletter/>
        <SocialUpdates/>
        <Footer/>
        </>
        
    )
}
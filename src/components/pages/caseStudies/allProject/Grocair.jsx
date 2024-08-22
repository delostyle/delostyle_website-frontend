import React from "react";
import Navbar from "../../../navbar/Navbar";
import Newsletter from "../../newsletter/Newsletter";
import SocialUpdates from "../../socialUpdates/SocialUpdates";
import Footer from "../../footer/Footer";
import ProjectGroCair from "./ProjectGroCair";






export default function Grocair(){

    return(
        <>
        <Navbar/>
        <ProjectGroCair/>
        <Newsletter/>
        <SocialUpdates/>
        <Footer/>
        </>
        
    )
}
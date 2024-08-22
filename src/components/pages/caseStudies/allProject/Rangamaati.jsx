import React from "react";
import Navbar from "../../../navbar/Navbar";
import Newsletter from "../../newsletter/Newsletter";
import SocialUpdates from "../../socialUpdates/SocialUpdates";
import Footer from "../../footer/Footer";
import ProjectRangamaati from "./ProjectRangamaati";



export default function Rangamaati(){

    return(
        <>
        <Navbar/>
        <ProjectRangamaati/>
        <Newsletter/>
        <SocialUpdates/>
        <Footer/>
        </>
        
    )
}
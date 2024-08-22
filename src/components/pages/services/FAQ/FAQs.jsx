import React from "react";
import Navbar from "../../../navbar/Navbar";
import Footer from "../../footer/Footer";
import Newsletter from "../../newsletter/Newsletter";
import SocialUpdates from "../../socialUpdates/SocialUpdates";
import Questions from "./Questions";
import Queries from "./Queries";
import CommonQuestion from "./CommonQuestion";


export default function FAQ(){

    return(
        <>
        <Navbar/>
        <Questions/>
        <Queries/>
        <CommonQuestion/>
        <Newsletter/>
        <SocialUpdates/>
        <Footer/>
        </>
    )
}
import React from "react";
import Navbar from "../../../navbar/Navbar";
import Footer from "../../footer/Footer";
import Newsletter from "../../newsletter/Newsletter";
import SocialUpdates from "../../socialUpdates/SocialUpdates";
import Form from "./Form";


export default function GetQuote(){

    return(
        <>
        <Navbar/>
        <Form/>
        <Newsletter/>
        <SocialUpdates/>
        <Footer/>
        </>
    )
}
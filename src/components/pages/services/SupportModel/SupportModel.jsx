import React, { useEffect, useState } from "react";
import Navbar from "../../../navbar/Navbar";
import Newsletter from "../../newsletter/Newsletter";
import SocialUpdates from "../../socialUpdates/SocialUpdates";
import Footer from "../../footer/Footer";
import SmSolution from "./SmSolution";
import SmGrid from "./SmGrid";
import WhySm from "./WhySm";
import KnowSM from "./KnowSM";
import SmApproach from "./SmApproach";
import SmEmpower from "./SmEmpower";
import SmWorks from "./SmWorks";
import SmOperation from "./SmOperation";
import { getsupport } from "../../../utils/api";


export default function SupportModel() {

    const[supportData,setsupportData] = useState({})

    useEffect(() => {
        const Data = async () => {
            try {
                let res = await getsupport()
                setsupportData(res)
                console.log(supportData, 'ddddddddddd');

            } catch (err) {
                console.log(err);

            }
        }
        Data()
    }, [])

    return (
        <>
            <Navbar />
            <SmSolution supportData={supportData}/>
            <SmGrid/>
            <WhySm supportData={supportData}/>
            <KnowSM supportData={supportData}/>
            <SmApproach supportData={supportData}/>
            <SmEmpower supportData={supportData}/>
            <SmWorks supportData={supportData}/>
            <SmOperation supportData={supportData}/>
            <Newsletter/>
            <SocialUpdates />
            <Footer />


        </>
    )
}
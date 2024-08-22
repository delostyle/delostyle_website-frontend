import React, { useState, useEffect } from "react";
import Navbar from "../../../navbar/Navbar";
import Newsletter from "../../newsletter/Newsletter";
import SocialUpdates from "../../socialUpdates/SocialUpdates";
import Footer from "../../footer/Footer";
import DhmSolution from "./DhmSolution";
import IconGrid from "./IconGrid";
import WhyDHM from "./WhyDHM";
import KnowUsBetter from "./KnowUsBetter";
import ApproachGrid from "./ApproachGrid";
import Empower from "./Empower";
import HowItWorks from "./HowItWorks";
import OperationalPro from "./OperationPro";

import { getAllHiring } from "../../../utils/api";

export default function DataHiringModel() {
    const [supportData, setSupportData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await getAllHiring();
                setSupportData(res);
                setIsLoading(false);  
                console.log(res, 'Fetched Data');
            } catch (err) {
                console.error(err);
                setIsLoading(false);  
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <DhmSolution data={supportData} loading={isLoading} />
            <IconGrid/>
            <WhyDHM data={supportData} loading={isLoading} />
            <KnowUsBetter data={supportData} loading={isLoading} />
            <ApproachGrid />
            <Empower data={supportData} loading={isLoading} />
            <HowItWorks data={supportData} loading={isLoading} />
            <OperationalPro data={supportData} loading={isLoading} />
            <Newsletter />
            <SocialUpdates />
            <Footer />
        </>
    );
}

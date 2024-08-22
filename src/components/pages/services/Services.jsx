import React, { useState, useEffect } from "react";
import Navbar from "../../navbar/Navbar";
import Newsletter from "../newsletter/Newsletter";
import SocialUpdates from "../socialUpdates/SocialUpdates";
import Footer from "../footer/Footer";
import ServicesBanner from "./ServicesBanner";
import TypeOfService from "./TypeOfService";
import ServicesBanner2 from "./ServicesBanner2";
import Process from "./Process";
import OurExpert from "./OurExpert";
import ConsultingPro from "./ConsultingPro";
import { getAllService } from "../../utils/api";

export default function Services() {
    const [serviceData, setServiceData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await getAllService();
                setServiceData(res);
                setIsLoading(false); // Set loading to false once data is fetched
            } catch (err) {
                console.error(err);
                setIsError(true); // Set error if the API call fails
                setIsLoading(false); // Set loading to false even in case of error
            }
        };

        fetchData();
    }, []);

    return (
        <div className="overflow-hidden">
            <Navbar />
            <ServicesBanner data={serviceData} loading={isLoading} />
            <TypeOfService data={serviceData} loading={isLoading} />
            <ServicesBanner2 data={serviceData} loading={isLoading} />
            <Process data={serviceData} loading={isLoading} />
            <OurExpert data={serviceData} loading={isLoading} />
            <ConsultingPro data={serviceData} loading={isLoading} />
            <Newsletter />
            <SocialUpdates />
            <Footer />
        </div>
    );
}

import React from "react";
import Navbar from "../../navbar/Navbar";
import bulbIcon from "../../images/bulbIcon.png"
import blogBorder from "../../images/blogBorder.png"
import sideBorder from "../../images/sideBorder.png"
import dottedBg from "../../images/dottedBg.png"
import ContactForm from "./ContactForm";
import Newsletter from "../newsletter/Newsletter";
import SocialUpdates from "../socialUpdates/SocialUpdates";
import Footer from "../footer/Footer";
import OurWork from "./OurWork";
import UseContact from "./contactFn/apiContact";
import ContactOut from "./Contactout";


export default function Contact(){
    
    const { data, isError, isLoading, refetch} = UseContact()
    return(
        <>
            <Navbar/>

       
             {/* <div className="flex flex-row  mt-20" style={{height: "900px", overflow: "hidden"}}>
                    <div className="h-full mt-10 " style={{width: "200px", marginLeft:"0px"}}>
                        <img src={sideBorder} alt="side-border" className="left-0 top-0 h-full"/>
                    </div>
                    <div className="relative flex items-center mt-10 justify-center flex-col mb-5 p-20 mx-5 " >
                        <img 
                            src={blogBorder} 
                            alt="blog-border-left" 
                            className="absolute left-0 top-0 " 
                            style={{width: "248px", height: "213px"}} 
                        />
                        <div className="flex mx-20">
                            <div className="h-full overflow-hidden flex-1">
                                <div className="flex justify-start mb-5">
                                    <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />
                                    <h2 className="text-orange-500 text-xl mb-2 overflow-hidden" style={{ fontSize: "20px" }}>CONTACT</h2>
                                </div>
                                <div className="overflow-hidden mb-1" style={{ width: "1000px", height: "170px" }}>
                                    <p className="overflow-hidden font-bold text-ellipsis text-9xl " style={{ fontSize: "46px",color:"#2E2E2E" }}>
                                        How Can You Contact Out Us?
                                    </p>
                                    <p className="mt-5" style={{ fontSize: "20px",color:"#777777" }}>
                                        Reach out to us in the nearest office.
                                    </p>
                                    <p className="text-gray-600 font-bold mt-5" style={{ fontSize: "46px",color:"#00274D" }}>
                                        +91 6291 095 253
                                    </p>
                                </div>
                                  
                              
                                <div className="flex mt-10 justify-start gap-8">
    <div className="card-box bg-white-200 bg-opacity-75 shadow-md border border-gray-300 p-5 rounded-lg overflow-hidden" style={{ width: "320px", height: "320px" }}>
        <h3 className="font-bold mb-3" style={{color:"#00274D"}}>Headquarter</h3>
        <h2 className="text-xl font-bold mb-3" style={{color:"#FF6600"}}>Kasba</h2>
        <p style={{color:"#777777" }} className="p-2">1409, Rajdanga Block, BF-38, Shantipally, 1st Floor, Shantipally, Sector B, East Kolkata Twp, Kolkata, West Bengal 700107</p>
        <h3 className="font-bold mb-1" style={{color:"#00274D"}}>Working Hours</h3>
        <p style={{color:"#777777"}}>Monday - Friday<br/>10 am to 6 pm IST</p>
    </div>
    <div className="card-box bg-white-200 bg-opacity-75 shadow-md border border-gray-300 p-5 rounded-lg" style={{ width: "320px", height: "320px" }}>
        <h3 className="font-bold mb-3" style={{color:"#00274D"}}>Corporate Office</h3>
        <h2 className="text-xl font-bold mb-3" style={{color:"#FF6600"}}>Saltlake</h2>
        <p style={{color:"#777777"}} className="mb-9">Unit 17B Globsyn Crystals Block EP SaltLake 4th Floor Sector V Kolkata - 700091</p>
        <h3 className="font-bold mb-1" style={{color:"#00274D"}}>Working Hours</h3>
        <p style={{color:"#777777"}}>Monday - Friday<br/>10 am to 6 pm IST</p>
    </div>
</div>

                            </div>
                            
                            <div className="absolute right-[240px] top-[200px]">
                                <img src={dottedBg} alt="side-dotted" style={{ width: "96px", height: "288px" }} />
                            </div>

                            
                        </div>
                        <img 
                            src={blogBorder} 
                            alt="blog-border-right " 
                            className="absolute right-[120px] bottom-0 transform rotate-180" 
                            style={{width: "248px", height: "213px"}} 
                        />
                    </div>
            </div> */}
            <ContactOut data ={data} loading={isLoading}/>
            <ContactForm  data ={data} loading={isLoading}/>
            <OurWork  data ={data} loading={isLoading}/>
            <Newsletter/>
            <SocialUpdates  data ={data} loading={isLoading}/>
            <Footer/>
        </>
    )
}

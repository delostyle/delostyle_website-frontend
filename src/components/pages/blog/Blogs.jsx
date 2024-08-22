import React from "react"
import Navbar from "../../navbar/Navbar"
import Newsletter from "../newsletter/Newsletter"
import SocialUpdates from "../socialUpdates/SocialUpdates"
import Blogpg from "./Blogpg"
 
export default function Blogs()
{
    return(
        <>        
            <Blogpg></Blogpg>
            <Newsletter/>
            <SocialUpdates/>
            <Newsletter/>
          
        </>
    )
}
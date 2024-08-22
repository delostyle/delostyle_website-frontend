import React, { useState } from 'react'
import Navbar from '../../navbar/Navbar';
import Banner from '../banner/Banner';
import FeedBack from '../feedback/Feedback';
import Consulting from '../consulting/ConsultingSteps';
import WhatWeDo from '../whatWeDo/WhatWeDo';
import Technology from '../technology/Technology';
import SocialUpdates from '../socialUpdates/SocialUpdates';
import Newsletter from '../newsletter/Newsletter';
import Footer from '../footer/Footer';
import "../../Style.css"
import useHome from './homeFn/apiHome';



const Home = () => {
  const { data, isError, isLoading, refetch} = useHome()
  console.log(isLoading, "is load")
  return (
    <div className='overflow-hidden'>
      <div className="delostyle-container">
        <Navbar/>
        <div className="text-3xl">
         <Banner data ={data} loading={isLoading}/>
         <FeedBack data ={data} loading={isLoading}/>
         <Consulting data ={data} loading={isLoading}/>
          <WhatWeDo data ={data} loading={isLoading}/>
          <Technology data ={data} loading={isLoading}/>
          <Newsletter/>
          <SocialUpdates/>
        
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home;
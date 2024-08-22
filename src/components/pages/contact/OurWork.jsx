import React, { useEffect,useState } from 'react';
import frontend from '../../images/frontend.png';
import desktop from '../../images/desktop.png';
import mobile from '../../images/mobile.png';
import ecom from '../../images/ecom.png';
import staff from '../../images/staff.png';
import bulbIcon from '../../images/bulbIcon.png';


const OurWork = ({data,  loading}) => {
  const [contact_WorkData, setContact_WorkData] = useState({})
  const [load, setLoading] = useState(loading)

  useEffect(()=>{
    setContact_WorkData(data?.contact_WorkData)
    setLoading(loading)
  },[data])
  return (
    <div className="flex flex-col items-center text-center p-10  rounded-lg m-5 relative z-10">
    <div className="flex mb-5">
   <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />  <h2 className="text-orange-500 text-xl mb-2" style={{fontSize:"20px"}}>OUR WORK</h2>
   </div>
 
  <h2 className="text-4xl font-bold mb-4 overflow-hidden gap-10">{load ? "We Are Eager To Find Creative And Passionate <br/> People To Join Our Development Team.":contact_WorkData?.creative}</h2>
  <p className="text-base text-gray-600 mb-6" style={{color:"#777777"}}>
  {load ? "If you are driven by innovation and thrive in a collaborative environment, we encourage you to explore opportunities with us. Join a dynamic team where your ideas can make a real impact, and together, let's create innovative solutions that shape the future.":contact_WorkData?.driven}
  </p>
  <button className="bg-orange-500 text-white py-2 px-6 rounded-full mt-5" style={{fontSize:"20px",width:"250px"}}>Apply Here</button>
</div>
  );
};

export default OurWork;

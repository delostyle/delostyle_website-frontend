import React,{useState} from 'react';
import './Form.css';
import howitwork from "../../../images/howitwork.jpg";
import bulbIcon from "../../../images/bulbIcon.png";
import quote from "../../../images/quote.png"
import { Slider, Box, styled } from '@mui/material';


const PrettoSlider = styled(Slider)({
  color: '#FF6600',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&::before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 40,
    height: 40,
    borderRadius: '50% 50% 50% 50%',
    backgroundColor: '#FF6600',
    transformOrigin: 'center left',
    transform: 'translate(50%, 25%) rotate(-45deg) scale(0)',
    '&::before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(28%, 38%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

const Form = () => {
  const [resourceCount, setResourceCount] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleResourceChange = (event, newValue) => {
    setResourceCount(newValue);
  };

  const handleDurationChange = (event, newValue) => {
    setDuration(newValue);
  };

  const totalCost = resourceCount * duration * 3000;


  const [formData, setFormData] = useState({
    phoneNumber: "",
    address: "",
    name: "",
    email: "",
    serviceDate: "",
    serviceTime: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!formData.phoneNumber || !phoneRegex.test(formData.phoneNumber))
      tempErrors.phoneNumber = "Phone number is required";
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) 
      tempErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      tempErrors.email = "Invalid email address";
    if (!formData.serviceDate) tempErrors.serviceDate = "Service date is required";
    if (!formData.serviceTime) tempErrors.serviceTime = "Service time is required";
  
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data is valid:", formData);
    
    } else {
      console.log("Form data is invalid");
    }
  };

    
  return (
    <div
      className="consulting-banner bg-cover bg-center relative flex flex-col flex-direction items-center justify-center"
      style={{ backgroundImage: `url(${howitwork})`,opacity:"0.9" }}>
      
      <div 
        className="absolute inset-0 bg-white"
        style={{ opacity: 0.8, zIndex: -10 }}
      ></div>

      <div className="lg:w-1/2 flex justify-center p-2 lg:p-12">
        <div className="text-center">
          <div className="flex mb-5  mx-6">
            <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />
            <h2 className="text-orange-500 text-lg">GET QUOTE</h2>
          </div>
          <h2 className="font-bold mb-4 whitespace-normal text-6xl leading-tight">Get A Free Quote And Take The First Step Today</h2>
          <p className="mb-4 text-[#777777]   mx-20 whitespace-normal w-[500px]">
            Take the first step towards unlocking the full potential of your business with our customized IT consulting services. Your success, our priority!
          </p>
          <p className=" mb-4 text-[#777777]">NOTE: The below calculation shows result for a month.</p>
          <img src={quote} alt="Illustration" className="mx-auto h-[620px] change-width mb-20" />
        </div>
      </div>
      
      <div className="lg:w-[578px] w-[456px] justify-center width-change lg:p-12">
        <div className="bg-white mb-10 shadow-md  overflow-hidden form-card" >
        <form className='p-5'>
      <div className="mb-4">
        <label className="text-[#00274D] font-bold" style={{ fontSize: "18px" }}>Industry</label>
        <select className="input-field mt-4">
          <option className="input-field">Select</option>
        </select>
      </div>

      <div className="main-div w-[500px]">
        <div className="mb-4 range-slider-container">
          <label className="text-[#00274D] font-bold" style={{ fontSize: "18px" }}>
            Approx number of resources
          </label>
          <div className="relative">
            <Box sx={{ width: 450 }}>
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={0}
                value={resourceCount}
                onChange={handleResourceChange}
                min={0}
                max={100}
              />
            </Box>
          </div>
        </div>
        <div className="mb-4 range-slider-container">
          <label className="text-[#00274D] font-bold" style={{ fontSize: "18px" }}>
            How long do you need these resources (months)?
          </label>
          <Box sx={{ width: 450 }}>
            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={0}
              value={duration}
              onChange={handleDurationChange}
              min={0}
              max={12}
            />
          </Box>
        </div>
      </div>

      <hr className="mt-5 border-dashed border-2 opacity-20 mx-0 bg-[#00274D] w-[100%]" />

      <div className='flex items-center justify-between h-[90px] mt-0'>
        <div className="text-left w-[70%] ml-14">
          <span className="text-xl font-bold text-[#FF6600]">Total</span>
        </div>
        <div className="text-right bg-[#FCE9DD] h-[100%] w-[30%] flex items-center justify-center mb-0">
          <span className="text-xl font-bold text-[#FF6600]">${totalCost.toLocaleString()}</span>
        </div>
      </div>
    </form>
       
          </div>
    <div className=''>
    <form onSubmit={handleSubmit}>
      <div className="bg-white p-10 rounded-lg shadow-md mb-4 lg:w-[578px] w-[456px] width-change h-[700px]">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-[#00274D] font-bold" style={{ fontSize: "18px" }}>
              Phone Number *
            </label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              className="input-field mt-2"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
          </div>
          <div>
            <label className="text-[#00274D] font-bold" style={{ fontSize: "18px" }}>
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input-field mt-2"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-[#00274D] font-bold" style={{ fontSize: "18px" }}>
              Name *
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input-field mt-2"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label className="text-[#00274D] font-bold" style={{ fontSize: "18px" }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-field mt-2"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-[#00274D] font-bold" style={{ fontSize: "18px" }}>
              Preferred Service Date
            </label>
            <input
              type="date"
              name="serviceDate"
              className="input-field mt-2"
              value={formData.serviceDate}
              onChange={handleChange}
            />
            {errors.serviceDate && <p className="text-red-500">{errors.serviceDate}</p>}
          </div>
          <div>
            <label className="text-[#00274D] font-bold" style={{ fontSize: "18px" }}>
              Preferred Service Time
            </label>
            <input
              type="time"
              name="serviceTime"
              className="input-field mt-2"
              value={formData.serviceTime}
              onChange={handleChange}
            />
            {errors.serviceTime && <p className="text-red-500">{errors.serviceTime}</p>}
          </div>
        </div>
        <div className="mb-4">
          <div>
            <label className="text-[#00274D] font-bold" style={{ fontSize: "18px" }}>
              Message
            </label>
            <textarea
              name="message"
              placeholder="Message"
              className="input-field mt-4 h-[150px]"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn-primary rounded-full w-[300px]">
          Send a Message
        </button>
      </div>
    </form>
    </div>
      </div>
    </div>
  );
};

export default Form;



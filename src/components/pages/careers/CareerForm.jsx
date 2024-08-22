import React, { useState,useEffect } from 'react';
import bulbIcon from '../../images/bulbIcon.png';
import careerForm from "../../images/careerForm.png";

const CareerForm = ({data,loading}) => {
  const [carrer_FormData, setCarrer_FormData] = useState({})
  const [load, setLoading] = useState(loading)

  useEffect(() => {
    setCarrer_FormData(data?.carrer_FormData)
    setLoading(loading)
  }, [data])
  console.log(carrer_FormData)
  console.log(load);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('');
    }
  };

  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-between bg-center bg-no-repeat bg-cover mt-10 h-auto md:h-[900px]"
      style={{
        background: 'linear-gradient(108.17deg, #00274D 32.68%, #005BB3 100.49%)',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mx-4 md:mx-20 text-white">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-start md:gap-10 p-4 md:p-5">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="flex items-center mb-5">
              <img src={bulbIcon} alt="bulb-icon" className="w-10 h-10" />
              <h2 className="text-orange-500 text-lg md:text-xl ml-3">
                LET’S WORK TOGETHER
              </h2>
            </div>
            <div className="flex flex-col items-start">
              <h1 className="text-white text-xl md:text-3xl md:w-[600px] lg:text-4xl font-bold mb-4">
              {load ? " We Are Trusted Consulting Firm" : carrer_FormData?.Trusted}
               
              </h1>
              <p className="text-base md:text-lg md:w-[500px] lg:text-xl mb-4">
              {load ? " We offer unparalleled expertise, innovative solutions, and dedicated support to help your business thrive. Join forces with us and experience the difference that true partnership makes." : carrer_FormData?.unparalleled}
               
              </p>

              <div
                className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg w-full md:w-[480px] h-auto md:h-[430px]"
              >
                <form className="space-y-4">
                  <div className="relative">
                    <input
                      type="file"
                      id="file"
                      name="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <label htmlFor="file" className="block text-base md:text-lg font-medium mb-2 text-[#00274D]">
                      Upload Your CV
                    </label>
                    <div className="relative">
                      <label
                        htmlFor="file"
                        className="bg-orange-100 cursor-pointer border-2 border-[#FF6600] py-2 px-4 text-[#FF6600] text-center rounded-full h-8 flex items-center justify-center absolute top-1/2 transform -translate-y-1/2 left-2"
                      >
                        Choose File
                      </label>
                      <input
                        type="text"
                        value={fileName}
                        placeholder='No File Chosen'
                        readOnly
                        className="bg-white border border-gray-300 rounded w-full py-2 pl-36 pr-4 text-[#FF6600] leading-tight focus:outline-none h-10"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="designation" className="block text-base md:text-lg font-medium mb-2 text-[#00274D]">
                      Designation
                    </label>
                    <select
                      id="designation"
                      name="designation"
                      className="bg-white border border-gray-300 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none"
                    >
                      <option value="">Select Designation</option>
                      <option value="developer">Developer</option>
                      <option value="designer">Designer</option>
                      <option value="manager">Manager</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="location" className="block text-base md:text-lg font-medium mb-2 text-[#00274D]">
                      Location
                    </label>
                    <select
                      id="location"
                      name="location"
                      className="bg-white border border-gray-300 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none"
                    >
                      <option value="">Select Location</option>
                      <option value="New York">New York</option>
                      <option value="London">London</option>
                      <option value="Tokyo">Tokyo</option>
                    </select>
                  </div>
                  <button
                    className="bg-orange-500 text-white py-2 px-6 rounded-full w-full md:w-auto"
                    style={{ fontSize: '18px' }}
                  >
                    Apply For Job
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 hidden lg:block lg:ml-10">
            <img src={load ? careerForm : carrer_FormData?.base64Image} alt='career-img' className="w-full h-[800px] md:h-[900px] lg:h-[900px] lg:w-[900px] lg:mx-20 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;

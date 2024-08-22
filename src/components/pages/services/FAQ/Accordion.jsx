import React, { useState } from 'react';

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div
      className={`border-b border-[#FF6600] ${isOpen ? 'bg-orange-100' : 'bg-white'} rounded-md mb-2`}
    >
      <button
        className={`w-full text-left py-4 px-5 focus:outline-none flex justify-between items-center ${isOpen ? 'bg-orange-500 text-white' : 'bg-white text-black'} rounded-md`}
        onClick={onToggle}
      >
        <span className="text-sm md:text-base">{title}</span>
        <span className="text-lg md:text-xl">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && <div className="px-5 pb-4 bg-orange-100 text-black rounded-md text-sm md:text-base">{children}</div>}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[550px] mx-auto mt-5 rounded-md shadow-lg">
      <AccordionItem
        title="1. What industries do you specialize in?"
        isOpen={openIndex === 0}
        onToggle={() => handleToggle(0)}
      >
        <p>
          We have a team of professionals who are specialized in providing support to multiple industry verticals. Our team consists of developers, designers, consultants, and support professionals from different industries. Their specialization helps us connect with industries like medical, garments, fashion, technology, construction, real estate, and many more.
        </p>
        <br />
        <p>
          In one word, we can say that you name it, and we are there with you. For any queries, feel free to connect to us at care@delostylestudio.com
        </p>
      </AccordionItem>
      <AccordionItem
        title="2. Do we really need a business plan?"
        isOpen={openIndex === 1}
        onToggle={() => handleToggle(1)}
      >
        <p>
          A business plan helps you solidify your ideas in an organized format. If you have a project roadmap ready, we suggest mapping our resources based on that. This will help you get the maximum output within a minimal interval of time.
          Our clients have achieved the best results by sharing their business plans, and we have provided high-quality resources based on their plans. However, it is not mandatory to share any plans with us. We believe we can convert your plans into reality.
        </p>
      </AccordionItem>
      <AccordionItem
        title="3. What model do you suggest?"
        isOpen={openIndex === 2}
        onToggle={() => handleToggle(2)}
      >
        <p>
          We offer the following services:
          <ul className="list-disc ml-5">
            <li>Dedicated Hiring Model</li>
            <li>Project-Based Model</li>
            <li>Hour Model</li>
            <li>Task-Based Model</li>
            <li>Support Model</li>
            <li>Hybrid Model</li>
          </ul>
        </p>
        <p>
          Each model is designed based on requirements and has its own specialty. Connect with our experts to understand each model better and select the one that fits your business goal and budget. Write to us at care@delostylestudio.com
        </p>
      </AccordionItem>
      <AccordionItem
        title="4. What type of service is covered in each model?"
        isOpen={openIndex === 3}
        onToggle={() => handleToggle(3)}
      >
        <p>
          Delostyle Studio Private Limited is a technology consulting company. We have a team of developers, designers, data analysts, online marketing experts, support experts, and more. We continuously increase our strengths and improve our skills, and are not limited to any specific technology or scope.
          Every model we offer includes all these skill sets. Let us know your requirements, and we'll suggest the best-fit solution.
        </p>
      </AccordionItem>
      <AccordionItem
        title="5. What is DHM?"
        isOpen={openIndex === 4}
        onToggle={() => handleToggle(4)}
      >
        <p>
          DHM stands for Dedicated Hiring Model. In simple words, a dedicated team of professionals will work exclusively on your project. It is a non-sharing model where the mentioned team will not work on any project other than yours.
        </p>
        <br />
        <p>
          We recommend this model for medium or large-size projects. You can even select one or two dedicated members for your project based on your project's skill requirements. The success rate for this model is more than 95%. Connect with our experts and start immediately with DHM.
        </p>
      </AccordionItem>
      <AccordionItem
        title="6. When should I use the hourly model?"
        isOpen={openIndex === 5}
        onToggle={() => handleToggle(5)}
      >
        <p>
          The hourly model is an economic option designed for you. You can select team members based on your requirements and specify the hours to be billed for each resource. You can have dedicated professionals working on your project for the billed hours and get your work done.
        </p>
        <br />
        <p>
          40 hours of availability per resource. You can book a minimum of 20 hours per week per resource and get your project rolling. You can increase the hours of availability at the beginning of every week, and you'll be billed accordingly. For more details, connect with our experts at care@delostylestudio.com
        </p>
      </AccordionItem>
      <AccordionItem
        title="7. Can we use multiple models at the same time?"
        isOpen={openIndex === 6}
        onToggle={() => handleToggle(6)}
      >
        <p>
          Yes, you can use multiple models simultaneously. However, you don't have to select individual models each time. Instead, you can choose the hybrid model and get the benefits of all the models under one roof.
        </p>
        <br />
        <p>
          The hybrid model consists of flexible plans that use a mix of all the models. Connect with our experts to learn more at care@delostylestudio.com
        </p>
      </AccordionItem>
    </div>
  );
};

export default Accordion;

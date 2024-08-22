import React, { useState } from 'react';

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className={`border-b border-[#FF6600] ${isOpen ? 'bg-orange-100' : 'bg-white'} rounded-md mb-2`}>
      <button
        className={`w-full text-left py-4 px-5 focus:outline-none flex justify-between items-center ${isOpen ? 'bg-orange-500 text-white' : 'bg-white text-black'} rounded-md`}
        onClick={onToggle}
      >
        <span>{title}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && <div className="px-5 pb-4 bg-orange-100 text-black rounded-md">{children}</div>}
    </div>
  );
};

const Accordion2 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full sm:w-[95%] md:w-[85%] lg:w-[750px] mx-4 rounded-md shadow-md">
      <AccordionItem
        title="1. How will we connect during our office hours? "
        isOpen={openIndex === 0}
        onToggle={() => handleToggle(0)}
      >
        <p>
          Our development team works during 9.30AM to 7.00PM (Indian Standard Time) Monday through Friday. However, we have our support team available round the clock to connect to our clients. Moreover, if you have queries or any important update regarding the ongoing project, then you can simply drop a mail to our email care@delostylestudio.com.
        </p>
        <br />
        <p>
          You can provide the tool that you use as a project tracker also. We continuously work on project status to get updates from our clients and provide the required update to the team before they start for the day.
        </p>
        <br />
        <p>
          Note: You might find your emails or notifications not getting monitored during Saturdays and Sundays.
        </p>
      </AccordionItem>
      <AccordionItem
        title="2. What makes your development model so special?"
        isOpen={openIndex === 1}
        onToggle={() => handleToggle(1)}
      >
        <p>Our development models are created using years of experience. Thus each model fits every business trade and budget. Each model has its own specialization and we find them fit into your requirement.</p>
        <br />
        <p>Our models are made for all business verticals and their projects. You get a team of experts in each model.</p>
      </AccordionItem>
      <AccordionItem
        title="3. What are your developers specialized in?"
        isOpen={openIndex === 2}
        onToggle={() => handleToggle(2)}
      >
        <p>We have a team of developers specialized in various technologies. Design, development, online marketing, product support, and others are our specialties. We use Agile methodology to get things delivered on time and with quality.</p>
        <br />
        <p>We work on various technologies like Node.js, React.js, Python, PHP, Angular, Ionic, Unity, Drupal, WordPress, React Native, and more.</p>
        <br />
        <p>We work on databases like MongoDB, MySQL, NoSQL, MSSQL, and more. We are also specialized in the AWS environment.</p>
        <br />
        <p>Our designers are specialized in tools like Figma, Photoshop, and other Adobe tools.</p>
        <br />
        <p>Connect with us to know more about our capabilities.</p>
      </AccordionItem>
      <AccordionItem
        title="4. Do you have a support team as well?"
        isOpen={openIndex === 3}
        onToggle={() => handleToggle(3)}
      >
        <p>We have a team of developers specialized in various technologies. Design, development, online marketing, product support, and others are our specialties. We use Agile methodology to get things delivered on time and with quality.</p>
        <br />
        <p>We work on various technologies like Node.js, React.js, Python, PHP, Angular, Ionic, Unity, Drupal, WordPress, React Native, and more.</p>
        <br />
        <p>We work on databases like MongoDB, MySQL, NoSQL, MSSQL, and more. We are also specialized in the AWS environment.</p>
        <br />
        <p>Our designers are specialized in tools like Figma, Photoshop, and other Adobe tools.</p>
        <br />
        <p>Connect with us to know more about our capabilities.</p>
      </AccordionItem>
    </div>
  );
};

export default Accordion2;

import React from 'react';
import hehe from "../../images/aboutBnner2.png"; // Your image file
import Blognav from './Blognav';
import Navbar from "../../navbar/Navbar"

const Blogpg = () => {
  const articles = new Array(12).fill({
    category: 'Business',
    title: 'Enhancing Business Efficiency: ChatGPT and SAP Integration',
    imageUrl: hehe,
  });

  return (
    <> 
    <Navbar/>
      <Blognav/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-3 md:px-20 xl:px-40 2xl:px-80">
        {articles.map((article, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-lg p-4 rounded-2xl h-[350px] w-[250px] flex flex-col">
            <img src={article.imageUrl} alt="Article" className="w-full h-1/2 object-cover rounded-2xl" />
            <div className="p-3 flex-1 flex flex-col justify-between">
              <span className="text-orange-500 text-sm mb-2 block font-semibold">{article.category}</span>
              <h3 className="text-lg font-bold mb-4">{article.title}</h3>
              <div className="flex items-center justify-center mt-auto">
                <button className="bg-orange-500 text-white rounded-2xl px-4 py-2 hover:bg-orange-600">Read Article</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default Blogpg;

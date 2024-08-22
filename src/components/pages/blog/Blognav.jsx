import React from 'react';

const Blognav = () => {
  const categories = ['All', 'Apps', 'Business', 'Consulting', 'Marketing', 'Technology'];

  return (
    <nav className="bg-gray-100 py-4 shadow-sm">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-6">
          {categories.map((category, index) => (
            <li key={index}>
              <button className={`font-bold px-4 py-2 rounded ${index === 0 ? 'bg-blue-200 text-blue-800' : 'text-blue-800'}`}>
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Blognav;

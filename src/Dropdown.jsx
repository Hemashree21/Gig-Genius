import React, { useState } from 'react';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined'; 

const CustomDropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-3/4 mt-10 md:mt-0">
      <div className="border border-black flex shadow-xl inset-0 items-center w-full justify-between px-4 py-2 rounded cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedOption ? selectedOption : 'Featured'}</span>
        <div className='border-l h-full border-gray-300'><ArrowDropDownOutlinedIcon className="ml-2 h-full" /></div>
      </div>
      {isOpen && (
        <div className="absolute mt-1 w-full border border-gray-400 bg-white rounded shadow-md z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;

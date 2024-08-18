import React from 'react';
import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai';
import { BsHouseDoor } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';

const SearchBar = () => {
  return (
    <div className="searchDiv grid gp-10 bg-greyIsh rounded-[10px] p-[3rem] w-75">
      <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px]
          bg-white p-5 shadow-lg shadow-greyIsh-700">
          <div className="flex items-center gap-2 ">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 outline-none w-full py-2"
              placeholder="Search Job Here..."
            />
            <AiOutlineCloseCircle className="text-gray-400 text-xl hover:text-blue-500 cursor-pointer" />
          </div>

          <div className="flex items-center gap-2 px-4">
            <CiLocationOn className="text-blue-500 text-xl" />
            <input
              type="text"
              className="bg-transparent text-blue-500 outline-none w-full py-2"
              placeholder="Search by company..."
            />
            <AiOutlineCloseCircle className="text-gray-400 text-xl hover:text-blue-500 cursor-pointer" />
          </div>

          <div className="flex items-center gap-2 px-4">
            <BsHouseDoor className="text-blue-500 text-xl" />
            <input
              type="text"
              className="bg-transparent text-blue-500 outline-none w-full py-2"
              placeholder="Search by location..."
            />
            <AiOutlineCloseCircle className="text-gray-400 text-xl hover:text-blue-500 cursor-pointer" />
          </div>

          <button className="bg-blue-500 text-white rounded-lg px-6 py-2 hover:bg-blue-600 cursor-pointer">
            Search
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <label htmlFor="relevance" className="text-gray-600 font-semibold">
              Sort by:
            </label>
            <select
              name=""
              id="relevance"
              className="bg-white rounded-lg px-4 py-1 cursor-pointer"
            >
              <option value="">Relevance</option>
              <option value="">Inclusive</option>
              <option value="">Starts with</option>
              <option value="">Contains</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="type" className="text-gray-600 font-semibold">
              Type:
            </label>
            <select
              name=""
              id="type"
              className="bg-white rounded-lg px-4 py-1 cursor-pointer"
            >
              <option value="">Full-Time</option>
              <option value="">Remote</option>
              <option value="">Hybrid</option>
              <option value="">Part-time</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="level" className="text-gray-600 font-semibold">
              Level:
            </label>
            <select
              name=""
              id="level"
              className="bg-white rounded-lg px-4 py-1 cursor-pointer"
            >
              <option value="">Senior</option>
              <option value="">Beginner</option>
              <option value="">Intermediate</option>
              <option value="">Advocate</option>
            </select>
            <span className="text-blue-500 cursor-pointer">Clear All</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
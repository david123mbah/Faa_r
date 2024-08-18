import React from 'react';
import { BiTimeFive } from 'react-icons/bi';

// job data 

const Data = [
  {
  id: 1,
  image: "/dbx.jpeg",
  title: "Software Engineer - React.js",
  location: "Douala, Cameroon",
  desc: "Build dynamic web applications.",
  company: "Melvora Tech",
  },
  {
  id: 2,
  image: "/mm.jpeg",
  title: "Data Scientist - Machine Learning",
  location: "Yaoundé, Cameroon",
  desc: "Leverage data to drive insights.",
  company: "Bitech Solutions",
  },
  {
  id: 3,
  image: "/mm.jpeg",
  title: "Cybersecurity Analyst",
  location: "Limbe, Cameroon",
  desc: "Protect organizations from cyber threats.",
  company: "Cyber Fortress",
  },
  {
  id: 4,
  image: "/dbx.jpeg",
  title: "Mobile App Developer - Flutter",
  location: "Buea, Cameroon",
  desc: "Create cross-platform mobile apps.",
  company: "Technovation Labs",
  },
  {
  id: 5,
  image: "/shhsdh.png",
  title: "DevOps Engineer",
  location: "Bamenda, Cameroon",
  desc: "Automate software development and deployment.",
  company: "Digicorp Solutions",
  },
  {
  id: 6,
  image: "/nnnn.jpeg",
  title: "UI/UX Designer",
  location: "Garoua, Cameroon",
  desc: "Create user-friendly and visually appealing designs.",
  company: "Creativ Studio",
  },
  {
  id: 7,
  image: "/sdndn.jpeg",
  title: "Full-Stack Developer - MERN Stack",
  location: "Maroua, Cameroon",
  desc: "Build end-to-end web applications.",
  company: "Tech Innovators",
  },
  {
  id: 8,
  image: "/nnnn.jpeg",
  title: "Network Administrator",
  location: "Bafoussam, Cameroon",
  desc: "Manage and maintain computer networks.",
  company: "Netcom Systems",
  },
  {
  id: 9,
  image: "/sdndn.jpeg",
  title: "Quality Assurance Analyst",
  location: "Ngaoundéré, Cameroon",
  desc: "Ensure software quality and reliability.",
  company: "Qualitytech",
  },
  {
  id: 10,
  image: "/mm.jpeg",
  title: "Product Manager",
  location: "Kribi, Cameroon",
  desc: "Define and execute product strategy.",
  company: "Innova Solutions",
  },
  
  
  ];


const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10 " >
        {Data.map((job) => (
          <div
            key={job.id}
            className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-grayIsh400/700 hover:shadow-lg"
          >
            <span className="flex just-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                {job.title}
              </h1>
              <span className="flex items-center text-[#ccc] gap-1">
                <BiTimeFive /> {job.time}
              </span>
            </span>
            <h6 className="text-[#ccc]">{job.location}</h6>
            <p className="text-[12px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover::text-white">
              {job.desc}
            </p>
            <div className="company flex items-center gap-2">
              <img src={job.image} alt="Company logo" className="w-[10%]" />
              <span className="text-[14px] py-[1rem] block  group-hover:text-white">
                {job.company}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <button className="border-[3px] rounded-[10px] p-[5px] w-[100px] text-[12px] semibold text-textColor hover:bg-white group-hover/ item:text-textColor group-hover:text-white">
                Show Details
              </button>
              <button className="border-[3px] rounded-[10px] p-[5px] w-[100px] text-[12px] semibold text-textColor hover:bg-white group-hover/ item:text-textColor group-hover:text-white">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
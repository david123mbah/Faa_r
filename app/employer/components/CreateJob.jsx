import React, { useState } from 'react';
import './CreateJob.css';

function CreateJob({ onClose }) {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [companyImage, setCompanyImage] = useState(null); // Handle file upload

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    console.log('Job Posting:', { jobTitle, company, jobDescription, companyImage });
    onClose(); // Close the popup
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
        <h2 className="text-2xl font-bold mb-4">Create Job Posting</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="jobTitle" className="block text-gray-700 font-bold mb-2">
              Job Title:
            </label>
            <input
              type="text"
              id="jobTitle"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="company" className="block text-gray-700 font-bold mb-2">
              Company Name:
            </label>
            <input
              type="text"
              id="jobTitle"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>


          <div className="mb-4">
            <label htmlFor="jobDescription" className="block text-gray-700 font-bold mb-2">
              Job Description:
            </label>
            <textarea
              id="jobDescription"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="companyImage" className="block text-gray-700 font-bold mb-2">
              Company Image:
            </label>
            <input
              type="file"
              id="companyImage"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setCompanyImage(e.target.files[0])}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
          >
            Create Job Posting
          </button>
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline ml-2"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateJob;
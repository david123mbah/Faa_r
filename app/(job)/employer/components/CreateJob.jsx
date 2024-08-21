import React, { useState } from "react";
import "./CreateJob.css";
import { Input } from "../../../../@/components/ui/input";
import { Textarea } from "../../../../@/components/ui/textarea";

function CreateJob({ onClose }) {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [companyImage, setCompanyImage] = useState(null); // Handle file upload

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    console.log("Job Posting:", {
      jobTitle,
      company,
      jobDescription,
      companyImage,
    });
    onClose(); // Close the popup
  };

  return (
    <div className="job-form fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg px-14 py-6 w-1/3">
        <h2 className="text-xl text-center font-bold mb-4">
          Create Job
          <br />
          Posting
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="jobTitle"
              className="block text-gray-700 font-bold mb-2"
            >
              Job Title:
            </label>
            <Input onChange={(e) => setJobTitle(e.target.value)} required />
          </div>

          <div className="mb-4">
            <label
              htmlFor="company"
              className="block text-gray-700 font-bold mb-2"
            >
              Company Name:
            </label>
            <Input onChange={(e) => setCompany(e.target.value)} required />
          </div>

          <div className="mb-4">
            <label
              htmlFor="jobDescription"
              className="block text-gray-700 font-bold mb-2"
            >
              Job Description:
            </label>
            <Textarea
              id="jobDescription"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="companyImage"
              className="block text-gray-700 font-bold mb-2"
            >
              Company Image:
            </label>
            <input
              type="file"
              id="companyImage"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setCompanyImage(e.target.files[0])}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateJob;

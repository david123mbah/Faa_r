import React, { useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import '../employer/components/CreateJob.css';

function ApplyJob({ onClose, jobId }) {
  const { userId } = useAuth();  // Get the userId from Clerk
  const [resume, setResume] = useState(null);
  const [cover_letter, setCover_letter] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('user_id', userId);
    formData.append('job_id', jobId);
    formData.append('resume', resume);
    formData.append('cover_letter', cover_letter);

    try {
      const response = await fetch('http://127.0.0.1:5000/applications/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Application submitted:', result);
        onClose();
      } else {
        console.error('Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  return (
    <div className="job-form fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg px-14 py-6 w-1/3">
        <h2 className="text-xl text-center font-bold mb-4">Apply To Job Posting</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="resume" className="block text-gray-700 font-bold mb-2">
              Resume:
            </label>
            <input
              id="resume"
              type="file"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setResume(e.target.files[0])}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cover_letter" className="block text-gray-700 font-bold mb-2">
              Cover letter:
            </label>
            <input
              type="file"
              id="cover_letter"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setCover_letter(e.target.files[0])}
            />
          </div>
          <div className='flex justify-center'>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
            >
              Submit
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
};

export default ApplyJob;

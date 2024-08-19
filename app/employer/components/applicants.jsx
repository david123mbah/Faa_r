import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using Axios for API calls

function ApplicantList({ jobId }) {
  const [applicants, setApplicants] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchApplicants = async () => {
      setIsLoading(true); // Set loading to true before fetching
      try {
        const response = await axios.get(`/api/jobs/${jobId}/applicants`); // Replace with your actual API endpoint
        setApplicants(response.data);
      } catch (error) {
        console.error('Error fetching applicants:', error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching (success or error)
      }
    };

    if (jobId) {
      fetchApplicants();
    }
  }, [jobId]);

  return (
    <div>
      <h2>Applicants for this Job</h2>
      {isLoading ? ( // Show loading message
        <p>Loading applicants...</p>
      ) : (
        <ul>
          {applicants.length > 0 ? (
            applicants.map((applicant) => (
              <li key={applicant.id}>
                <h3>{applicant.name}</h3>
                <p>Email: {applicant.email}</p>
                {/* Add other applicant details you want to display */}
              </li>
            ))
          ) : (
            <p>No applicants found for this job.</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default ApplicantList;
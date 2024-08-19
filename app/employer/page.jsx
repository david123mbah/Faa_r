"use client"

import React, { useState } from 'react';
import JobList from './components/JobList';
import CreateJob from './components/CreateJob';
import NavigationBar from './NavBar';
import './App.css';

function App() {
  const [showCreateJobPopup, setShowCreateJobPopup] = useState(false);

  const handleCreateJobClick = () => {
    setShowCreateJobPopup(true);
  };

  const handleClosePopup = () => {
    setShowCreateJobPopup(false);
  };

  return (
    
    <div className="container mx-auto p-4">
       <h2 className="text-2xl font-bold mb-4">Active Job Postings</h2>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleCreateJobClick}
      >
        Create Job Posting
      </button>

      <JobList />

      {showCreateJobPopup && (
        <CreateJob onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default App;
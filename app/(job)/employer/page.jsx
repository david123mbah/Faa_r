"use client"

import React, { useState } from 'react';
import JobList from './components/JobList';
import CreateJob from './components/CreateJob';
import './App.css';
import { PasskeyModal } from '../Components/PasskeyModal';
import { redirect } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { useAuth } from '@clerk/nextjs'

const  App = ({searchParams}) => {
  const [showCreateJobPopup, setShowCreateJobPopup] = useState(false);

  const handleCreateJobClick = () => {
    setShowCreateJobPopup(true);
  };

  const handleClosePopup = () => {
    setShowCreateJobPopup(false);
  };

  const isAdmin = searchParams?.isAdmin === "true";

  console.log(searchParams);
  const { isLoaded, userId, sessionId, getToken } = useAuth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  return (
    
    <section>
      
      <div className="container mx-auto p-4">
       <h2 className="text-2xl font-bold mb-4">Active Job Postings</h2>

      <div className='flex justify-center '><button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleCreateJobClick}
      >
        Create Job Posting
      </button></div>

      <JobList />

      {showCreateJobPopup && (
        <CreateJob onClose={handleClosePopup} />
      )}
    </div>
    </section>
  );
}

export default App;
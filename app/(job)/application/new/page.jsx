"use client"

import { useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react'

const ApplicationPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isSignedIn) {
    redirect('/sign-in')
  }
  return (
    <div>
        
        Job Application Form
    </div>
  )
}

export default ApplicationPage
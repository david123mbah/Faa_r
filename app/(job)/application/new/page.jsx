"use client"

import { useAuth, useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react'

const ApplicationPage = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth()
  
  if (!userId) {
    redirect('/sign-in')
  }
  return (
    <div>
        
        Job Application Form
    </div>
  )
}

export default ApplicationPage
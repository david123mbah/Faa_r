"use client"
import { useAuth, useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react'

const ContactPage = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth()
  
  if (!userId) {
    redirect('/sign-in')
  }
  return (
    <div>ContactPage</div>
  )
}

export default ContactPage
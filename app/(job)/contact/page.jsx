"use client"
import { useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react'

const ContactPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isSignedIn) {
    redirect('/sign-in')
  }
  return (
    <div>ContactPage</div>
  )
}

export default ContactPage
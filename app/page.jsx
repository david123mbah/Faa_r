"use client";
import React from "react";
import Jobs from "./(job)/Components/Jobs";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

//TODO: Design this page and have it be landing page of the app
const MainPage = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth()
  
  if (!userId) {
    redirect('/sign-in')
  }
  return (
    <div>
      <Jobs />
    </div>
  );
};

export default MainPage;

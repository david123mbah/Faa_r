"use client";
import React from "react";
import Jobs from "../Components/Jobs";
import { useAuth, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const HomePage = () => {
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

export default HomePage;

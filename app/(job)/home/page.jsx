"use client";
import React from "react";
import Jobs from "../Components/Jobs";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const HomePage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isSignedIn) {
    redirect("/sign-in");
  }
  return (
    <div>
      <Jobs />
    </div>
  );
};

export default HomePage;

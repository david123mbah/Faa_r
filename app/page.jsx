"use client";
import React from "react";
import Jobs from "./(job)/Components/Jobs";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

//TODO: Design this page and have it be landing page of the app
const MainPage = () => {
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

export default MainPage;

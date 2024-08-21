import React from "react";
import "./index.css";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../../../@/components/ui/button";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center p-[3rem]">
      <div className="LogoDiv">
        <h1 className="logo text-[39px] text-blueColor">
          <strong>
            <a href="/">Faa"</a>
          </strong>
          a
        </h1>
      </div>
      <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          <a href="/">Home</a>
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          <a href="/my-job">My Jobs</a>
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          <a href="/employer">Employers</a>
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          <a href="/contact">Contacts</a>
        </li>

        <li className="menulist  text-[#6f6f6f]">
          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <Button className="hover:bg-blue-700 bg-blue-700">
              <a href="/sign-in"> Get In</a>
            </Button>
          </SignedOut>
        </li>
      </div>
    </div>
  );
};

export default Navbar;

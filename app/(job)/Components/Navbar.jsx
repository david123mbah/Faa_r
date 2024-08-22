import React from "react";
import "./index.css";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../../../@/components/ui/button";

const Navbar = ({from}) => {
  return (
    <div className="navbar flex justify-between items-center p-[3rem]">
      <div className="LogoDiv">
        <h1 className={ from ? `logo text-[39px] ${from}` : "logo text-[39px] text-blueColor"}>
          <strong>
            <a href="/">Faa"</a>
          </strong>
          a
        </h1>
      </div>
      <div className="menu flex gap-8">
        <li className={ from ? `menuList  hover:text-black ${from}` : "menuList  hover:text-blueColor"}>
          <a href="/home">Home</a>
        </li>
        <li className={ from ? `menuList  hover:text-black ${from}` : "menuList  hover:text-blueColor"}>
          <a href="/my-job">My Jobs</a>
        </li>
        <li className={ from ? `menuList  hover:text-black ${from}` : "menuList  hover:text-blueColor"}>
          <a href="/employer">Employers</a>
        </li>
        <li className={ from ? `menuList  hover:text-black ${from}` : "menuList  hover:text-blueColor"}>
          <a href="/contact">Contacts</a>
        </li>

        <li className="menulist text-white">
          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <Button className="hover:bg-blue-700 bg-blue-700">
              <a href="/sign-in"> Get Started</a>
            </Button>
          </SignedOut>
        </li>
      </div>
    </div>
  );
};

export default Navbar;

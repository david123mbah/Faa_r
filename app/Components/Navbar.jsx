import React from 'react'
import './index.css'

const Navbar = () => {
  return (
    <div class="navbar flex justify-between items-center p-[3rem]">
    <div class="LogoDiv">
      <h1 class="logo text-[25px] text-blueColor">
        <strong>Job</strong> 
          Search
      </h1>
    </div>
    <div class="menu flex gap-8">
      
      <li class="menuList text-[#6f6f6f] hover:text-blueColor"><a href="">Jobs</a></li>
      <li class="menuList text-[#6f6f6f] hover:text-blueColor"><a href="/employer">Employers</a></li>
      <li class="menuList text-[#6f6f6f] hover:text-blueColor"><a href="/employer">Contacts</a></li>
      <li class="menuList text-[#6f6f6f] hover:text-blueColor"><a href="">Latest</a></li>
      <li class="menulist  text-[#6f6f6f] hover:text-blueColor"></li>
      <li class="menulist  text-[#6f6f6f] hover:text-blueColor"><a href="">logout</a></li>
      
    </div>
  </div>
  )
}

export default Navbar
import React from 'react'


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
      <li class="menuList text-[#6f6f6f] hover:text-blueColor">Jobs</li>
      <li class="menuList text-[#6f6f6f] hover:text-blueColor">Employers</li>
      <li class="menuList text-[#6f6f6f] hover:text-blueColor">Contacts</li>
      <li class="menuList text-[#6f6f6f] hover:text-blueColor">Latest</li>
      <li class="menulist  text-[#6f6f6f] hover:text-blueColor">Login</li>
      <li class="menulist  text-[#6f6f6f] hover:text-blueColor">Register</li>
      
    </div>
  </div>
  )
}

export default Navbar
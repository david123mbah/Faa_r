import React from 'react'

import './index.css'
const Footer = () => {
  return (
    <div className="footer p-[5rem] mb-4 bg-blueColor rounded-[10px] 
    gap-[8] grid grid-cols-5 m-auto-center justify-center">
         
         <div>
        <div className="logoDiv"> 
            <h1 className="logo text-[39px] text-black pb-[1.5rem]">
                <strong>Faa"</strong>a


            </h1>


        </div>
        <p className="text-black pb-[13px] opacity-70 loading-7">
            We always make our seekers and companies  find the best jobs and employers find 
            the best candidates.
        </p>
        </div>

        <div className="grid">
            

            <div className="grid gap-3">
                <li></li>

            </div>

        </div>

    </div>
  )
}

export default Footer

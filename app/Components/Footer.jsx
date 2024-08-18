import React from 'react'

const Footer = () => {
  return (
    <div className="footer p-[5rem] mb-4 bg-blueColor rounded-[10px] 
    gap-[8] grid grid-cols-5 m-auto-center justify-center">
         
         <div>
        <div className="logoDiv"> 
            <h1 className="logo text-[25px] text-white pb-[1.5rem]">
                <strong>Job</strong>Search


            </h1>


        </div>
        <p className="text-white pb-[13px] opacity-70 loading-7">
            We always make our seekers and companies  find the best jobs and employers find 
            the best candidates.
        </p>
        </div>

        <div className="grid">
            <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white" >
                Company
            </span>

            <div className="grid gap-3">
                <li></li>

            </div>

        </div>

    </div>
  )
}

export default Footer
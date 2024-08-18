 
import React from "react";


export const generateMetadata = (params) => {
  return {
    title: `job page with id ${params?.params?.id}`,
     
  };
};
const JobViewPage = (params) => {
  return  <div>

    Job View Page
  </div>
};

export default JobViewPage;

import React from "react";
import {FaSpinner} from "react-icons/fa";

const Loading = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <FaSpinner className='w-16 h-16 animate-spin' />
    </div>
  );
};

export default Loading;

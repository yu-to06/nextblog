"use client";

import React, {useEffect} from "react";

type Props = {
  reset: () => void;
  error: Error;
};

const Error: React.FC<Props> = ({reset}, error) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='bg-red-200 border-1-4 border-red-500 text-red-700 mt-4 rounded shadow-md'>
      <h3 className='font-bold mb-2'>ERRORが発生しました</h3>
      <button
        onClick={() => reset()}
        className='bg-red-600 text-white rounded px-4 py-2 hover:bg-red-500 transition duration-200'
      >
        もう一度読み込む
      </button>
    </div>
  );
};

export default Error;

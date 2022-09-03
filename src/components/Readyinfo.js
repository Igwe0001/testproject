import React from 'react'

const Readyinfo = () => {
  return (
    <div className="w-full h-[300px] flex items-center justify-center">
      <div>
        <h1 className='text-ash text-2xl font-bold'>Ready To Become A Talent On Famzer</h1>
        <div className='mt-6 mx-auto flex justify-center'>
          <button className='text-white px-6 py-4 mx-2 bg-purple rounded-md'>Enroll as Talent</button>
          <button className='text-white px-6 py-4 mx-2 bg-purple rounded-md'>Enroll as Partner</button>
        </div>
      </div>
    </div>
  );
}

export default Readyinfo
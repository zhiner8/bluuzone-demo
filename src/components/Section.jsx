import React from 'react'
import forest from "../assets/still-forest.jpg";
const Section = () => {
  return (
    <div className='h-[50vh] overflow-hidden'><img
            className=" w-full h-[100vh] object-cover"
            src={forest}
            alt="Forest background"
          />
            </div>
  )
}

export default Section
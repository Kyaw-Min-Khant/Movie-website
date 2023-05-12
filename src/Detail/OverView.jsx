import React from 'react'

const OverView = ({tagline,genres,overview}) => {
  return (
    <div className="lg:w-[600px] md:w-[500px] w-[300px]">
      <h2 className="text-xl  font-sans text-white pb-2 tracking-wider">
        {tagline}
      </h2>
      <h2 className="text-2xl text-red-800 font-semibold tracking-wider">
        Story
      </h2>
      <div className="   text-[#ffffffb3]">{overview}</div>
      <div className="">
        <h2 className="text-2xl text-red-800 font-semibold tracking-wider">
          Genres
        </h2>
        {genres?.map((item) => (
          <h2 key={item.id} className=" inline px-2   text-[#ffffffb3] ">
            {item.name}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default OverView
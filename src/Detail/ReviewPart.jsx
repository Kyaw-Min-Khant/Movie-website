import React from "react";
import Review from "./Review";
import { TbDatabaseOff } from "react-icons/tb";

const ReviewPart = ({userReview}) => {
  return (
    <div className="pt-5 lg:pl-2 pl-1 border-l-[1px] border-[#4b4d4a]">
      <h2 className="text-white text-2xl mb-5 font-semibold font-serif">
        Review
      </h2>
      <div className="w-[350px] md:h-[300px] h-[200px] flex flex-col lg:h-[400px] overflow-scroll">
        {userReview?.map((item) => (
          <Review key={item.id} {...item} />
        ))}
        <div className="mx-auto">
          {userReview?.length === 0 ? (
            <div className="">
              <TbDatabaseOff className="mt-5 text-2xl mx-auto text-[#BFCCB5] " />
              <h2 className="text-xl pt-5 text-[#BFCCB5] ">No Data Found</h2>
            </div>
          ) : (
            <hr />
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewPart;

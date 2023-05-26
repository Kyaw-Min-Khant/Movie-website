import React from "react";
import { Select, Option } from "@material-tailwind/react";

const ReponsiveDropDown = ({ setSelect }) => {
  return (
    <div>
      <div className="hidden md:block w-[200px] mt-20 mx-10">
        <Select label="Select Version">
          <Option onClick={(e) => setSelect("multi")} value="multi">
            All
          </Option>
          <Option onClick={(e) => setSelect("movie")} value="movie">
            Movie
          </Option>
          <Option onClick={(e) => setSelect("tv")} value="tv">
            Tv Show
          </Option>
          <Option onClick={(e) => setSelect("person")} value="person">
            Person
          </Option>
        </Select>
      </div>
    </div>
  );
};

export default ReponsiveDropDown;

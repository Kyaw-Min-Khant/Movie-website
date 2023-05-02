import React from "react";
import Iframe from "react-iframe";

const Youtube = ({ generateUrl }) => {
  if (generateUrl === undefined) {
    return <div className="">Loading</div>;
  } else {
    return (
      <div>
        <Iframe
          url={generateUrl}
          height="300px"
          width="100%"
          id=""
          className=""
          display="block"
          position="relative"
        />
      </div>
    );
  }
};

export default Youtube;

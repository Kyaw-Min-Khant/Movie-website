import React from "react";
import robotAnimation from "./animation.json";
import Lottie from "lottie-react-web";
const RobotAnimate = () => {
  return (
    <div>
      <Lottie
        options={{
          animationData: robotAnimation,
        }}
        loop={true}
      />
    </div>
  );
};

export default RobotAnimate;

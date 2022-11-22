import React from "react";
import Controllers from "./CardComponents/Controllers";
import Data from "./CardComponents/Data";

const Card = () => {
  return (
    <div className="bg-white shadow-md my-5 px-5  rounded w-2/4 ">
      <Data />
      <Controllers />
    </div>
  );
};

export default Card;

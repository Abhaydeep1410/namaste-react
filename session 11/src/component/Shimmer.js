import React from "react";

const Shimmer = () => {
  return (
    <div className="restaurant_list">
      {Array(10)
        .fill("")
        .map((e,key) => <div className="shimmer_card" key={key}></div>)}
    </div>
  );
};

export default Shimmer;

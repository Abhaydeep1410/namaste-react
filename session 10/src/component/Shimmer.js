import React from "react";

const Shimmer = () => {
  return (
    <div className="restaurant_list">
      {Array(10)
        .fill("")
        .map((e) => <div className="shimmer_card"></div>)}
    </div>
  );
};

export default Shimmer;

import React from "react";

const ContestCard = ({ contest }) => {
  return (
    <div>
      <div className="card rounded-none w-96 bg-base-500 shadow-lg">
        <figure>
          <img src={contest.contest_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-md">
            {contest.contest_name}
           
          </h2>
          

        </div>
      </div>
    </div>
  );
};

export default ContestCard;

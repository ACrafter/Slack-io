import React from "react";

function PercentCard(props) {
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl font-extrabold text-secondary">{props.title}</h1>
      <p className="text-sm max-w-56">{props.disc}</p>
    </div>
  );
}

export default PercentCard;

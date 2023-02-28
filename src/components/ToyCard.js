import React from "react";

function ToyCard({toyName, toyImage, toyLikes, }) {

    return (
    <div className="card">
      <h2>{toyName}</h2>
      <img
        src={toyImage}
        alt={toyName}
        className="toy-avatar"
      />
      <p>{toyLikes} Likes </p>
      <button className="like-btn">Like {"💛"}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  )
} 

export default ToyCard;

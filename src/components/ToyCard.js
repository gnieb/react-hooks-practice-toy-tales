import React from "react";

function ToyCard({toy, handleDeletedToy, toyName, toyImage, toyLikes, id, handleUpdatedToy}) {

  function handlelikeButton (e) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        likes: (toyLikes + 1)
      }),
    })
    .then(r=> r.json())
    .then(updatedToy =>   {
      handleUpdatedToy(updatedToy)
    })
  }


  function handleDonateButton (e) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    })
    .then(r => r.json())
    .then( () => handleDeletedToy(toy))
  }

    return (
    <div className="card">
      <h2>{toyName}</h2>
      <img
        src={toyImage}
        alt={toyName}
        className="toy-avatar"
      />
      <p>{toyLikes} Likes </p>
      <button onClick={handlelikeButton} className="like-btn">Like {"💛"}</button>
      <button onClick ={handleDonateButton}className="del-btn">Donate to GoodWill</button>
    </div>
  )
} 

export default ToyCard;

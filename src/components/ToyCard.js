import React, {useState}  from "react";

function ToyCard({toyName, toyImage, toyLikes, id}) {
  const [likeCount, setLikeCount] = useState(toyLikes)

  function handlelikeButton (e) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        likes: (likeCount + 1)
      }),
    })
    .then(r=> r.json())
    .then(updatedToy =>   {
      setLikeCount((likeCount) => likeCount + 1)
          console.log(id)
    })
    
  }

    return (
    <div className="card">
      <h2>{toyName}</h2>
      <img
        src={toyImage}
        alt={toyName}
        className="toy-avatar"
      />
      <p>{likeCount} Likes </p>
      <button onClick={handlelikeButton} className="like-btn">Like {"💛"}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  )
} 

export default ToyCard;

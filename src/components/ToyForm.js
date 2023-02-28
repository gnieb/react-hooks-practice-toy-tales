import React from "react";

function ToyForm({onNewToySubmit, newToyName, newToyImage, newToyLikes, handleNewToyName, handleNewToyImage}) {
function handleSubmitToy (e) {
  e.preventDefault();
  onNewToySubmit(newToy)
}

const newToy = {
  name: newToyName,
  image: newToyImage,
  likes: newToyLikes
}

  return (
    <div className="container">
      <form onSubmit={handleSubmitToy} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={handleNewToyName}
          value={newToyName}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={handleNewToyImage}
          value={newToyImage}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;

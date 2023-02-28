import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyList, handleUpdatedToy, handleDeletedToy}) {



  const displayToys = toyList.map((toy) => {
      return (
      <ToyCard 
      toy={toy}
      toyName={toy.name} 
      toyImage={toy.image} 
      toyLikes={toy.likes}
      key={toy.id}
      id={toy.id}
      handleUpdatedToy={handleUpdatedToy}
      handleDeletedToy={handleDeletedToy} />
    )
  })



  return (
    <div id="toy-collection">{displayToys}</div>
  );
}


export default ToyContainer;

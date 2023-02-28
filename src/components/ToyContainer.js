import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyList,}) {


  const displayToys = toyList.map((toy) => {
      return (
      <ToyCard 
      toyName={toy.name} 
      toyImage={toy.image} 
      toyLikes={toy.likes}
      key={toy.id}
      id={toy.id} />
    )
  })



  return (
    <div id="toy-collection">{displayToys}</div>
  );
}


export default ToyContainer;

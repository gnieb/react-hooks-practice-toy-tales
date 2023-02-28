// when components are rendered, load toys using fetch:
// 1. useEffect get fetch
// 2. get an array of toys back and set the toy array state. 
//pass the toy array to the toy container, and render the toy card



import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([]);
  const [newToyName, setNewToyName] = useState('');
  const [newToyImage, setNewToyImage] = useState('');

  function handleNewToyName (e) {
    setNewToyName(newToyName => e.target.value)
  }

  function handleNewToyImage (e) {
  setNewToyImage(newToyImage => e.target.value)
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then((response) => response.json())
    .then((toys) => {
      setToyList(toys)
    })
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function onNewToySubmit (toyObj) {
    let newToyList = [...toyList, toyObj]
    fetch("http://localhost:3001/toys",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toyObj),
    })
    .then((r) => r.json())
    .then(r => {
    setToyList(newToyList)
    })
   
  }

  function handleUpdatedToy (updatedToy) {
    const updatedToyList = toyList.map(originalToy => {
      if (originalToy.id === updatedToy.id) {
        return updatedToy
      } else {
        return originalToy
      }
    })
    setToyList(updatedToyList)
  }


  function handleDeletedToy (deletedToy) {
    const toysWithoutDeletedToy = toyList.filter((toy) => toy.id !== deletedToy.id)
    setToyList(toysWithoutDeletedToy)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm 
      onNewToySubmit={onNewToySubmit}
      newToyName={newToyName}
      newToyImage={newToyImage}
      handleNewToyName={handleNewToyName}
      handleNewToyImage={handleNewToyImage}

      /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
      toyList={toyList}
      handleUpdatedToy={handleUpdatedToy}
      handleDeletedToy={handleDeletedToy}
       />
    </>
  );
}

export default App;

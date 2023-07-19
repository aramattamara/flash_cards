import React from 'react';
import './index.css';
import {useState} from "react";

const words = [
  {
    id: 1,
    word: "kickstart",
    definition: "to make functional, productive again"
  },
  {
    id: 2,
    word: "soar",
    definition: "to rise, increase in size or volume"
  },
  {
    id: 3,
    word: "slump",
    definition: "to sink or fall heavily"
  },
  {
    id: 4,
    word: "cash flow",
    definition: "the movement of money in and out of business"
  },
  {
    id: 5,
    word: "to yield",
    definition: "to concede, to repay"
  },
  {
    id: 6,
    word: "option",
    definition: "something that offers the buyer the right, but not the obligation, to buy or sell an asset at an agreed-upon pricce at a specific time"
  },
  {
    id: 7,
    word: "industry cluster",
    definition: "a group of similar companies situated close to each other"
  },
  {
    id: 8,
    word: "niche",
    definition: "a position suitable for occupying"
  },
]

export default function App(){
  const[pairs, setPairs] = useState([])

  function handleAddPairs(pair){
    setPairs(pairs=> [...pairs, pair])
  }
  return (
      <div className="App">
        <Form onAddPairs={handleAddPairs}/>
        <FlashCards pairs={pairs}/>
      </div>
  );
}

function Form ({onAddPairs}){
  const[word, setWord] = useState()
  const[definition, setDefinition] = useState()

  function handleSubmit(e){
    if (!definition) return;
    e.preventDefault();

    const newPair = {word, definition, id: Date.now()};
    console.log(newPair)

    onAddPairs(newPair)

    setWord("")
    setDefinition("")

  }

  return <form onSubmit={handleSubmit}>
    <h3>Would you like to add new words?</h3>
    <input
        type="text"
        placeholder="word"
        value={word}
        onChange={(e)=> setWord(e.target.value)}
    />
    <input
        type="text"
        placeholder="desription"
        value={definition}
        onChange={(e)=>setDefinition(e.target.value)}
    />
    <button>Add</button>
  </form>
}

function FlashCards({pairs}){
  const [selectedId, setSelectedId] = useState(8)

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null)
  }

  return <div className="flashcards">
    {pairs.map(pair =>
        <div
            key={pair.id}
            onClick={()=>handleClick(pair.id)}
            className={pair.id === selectedId ? "selected" : ""}
        >
          <p>{pair.id === selectedId ? pair.word : pair.definition}</p>
        </div>)}
  </div>
}

import React from 'react';
import './index.css';
import {useState} from "react";

export default function App(){
  return (
      <div className="App">
        <FlashCards/>
      </div>
  );
}

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

function FlashCards(){
  const [selectedId, setSelectedId] = useState(8)

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null)
  }

  return <div className="flashcards">
    {words.map(word =>
        <div
            key={words.id}
            onClick={()=>handleClick(word.id)}
            className={word.id === selectedId ? "selected" : ""}
        >
          <p>{word.id === selectedId ? word.word : word.definition}</p>
        </div>)}
  </div>
}

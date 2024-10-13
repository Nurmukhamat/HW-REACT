import { useState } from "react";
import "./Counter.css"
export const Counter = () => {
  const [counter, setCounter] = useState(0)
  const handleClick1 = () => {
    setCounter(counter + 1)
  }
  const handleClick = () => {
    setCounter(counter - 1)
  }
  return (
    <div className="div-container"> 
      
      <h1>{counter}</h1>
      <button onClick={handleClick1} className="button-increment">inrement</button>
      <button onClick={handleClick} className="button-decrement">decrement</button>
      </div> 
  ) 
}
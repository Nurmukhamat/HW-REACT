import React, { useState } from 'react'
import "./Login.css"
export const Login = () => {
    const [value1, setValue1] =useState('')
    const [value2, setValue2] =useState('')
    const [result1, setResult1] =useState('')
    const [result2, setResult2] =useState('')
    const handleChange1 = (event) => {
     setValue1(event.target.value)
    }
    const handleChange2 = (event) => {
        setValue2(event.target.value)
    }
    const handleClick = () => {
      setResult1(value1)
      setResult2(value2)
    }
  return (
    <div className='wrap'>
        <h3>Вход</h3> <br />

        <div>
      <input type="text" onChange={handleChange1} value={value1} className='charet1'/> <br />
      <input type="text" onChange={handleChange2} value={value2} className='charet2'/> <br />
      </div>

      <button onClick={handleClick} type='submit'>Войти</button> 
      <div className='mj'>
      <p>{result1}</p>
      <p>{result2}</p>
      </div>
    </div>
  )
}



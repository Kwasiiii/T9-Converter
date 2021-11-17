import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Keyboard from 'react-simple-keyboard'
import 'react-simple-keyboard/build/css/index.css'

const T9Converter = () => {
  const [input, setInput] = useState('')
  const [result, setResult] = useState()
  const keyboard = useRef()

  useEffect(()=> {
    const getData = async() => {
      const { result } = await axios(`/api/${input}`)
      setResult(result)
    }
    getData()
  },[input])

  console.log(result)

  const change = (value)=>{
    setInput(value)
  }

  const changeInput = (e) => {
    const input = e.target.value
    setInput(input)
    keyboard.current.setInput(input)
  }
  return (
    <div className="container d-flex flex-column justify-content-center">
      <input className="userInput" type="number" value={input} onChange={changeInput}  placeholder="E.g 23" />
      <Keyboard 
        keyboardRef = {r => (keyboard.current = r)}
        theme = {'hg-theme-default hg=layout-numeric numeric-theme'}
        onChange = {change}
        disableCaretPositioning = {true}
        layout = {{
          default: ['1 2 3', '4 5 6', '7 8 9', '{//} 0 {//}', '{bksp}'],
        }} 
      />
    </div>
  )

}

export default T9Converter
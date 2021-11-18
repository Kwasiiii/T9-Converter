import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Keyboard from 'react-simple-keyboard'
import 'react-simple-keyboard/build/css/index.css'
import { Helmet } from 'react-helmet'

const T9Converter = () => {
  const [input, setInput] = useState('')
  const [result, setResult] = useState()
  const keyboard = useRef()

  useEffect(()=> {
    const getData = async() => {
      const { data } = await axios(`/api/${input}`)
      setResult(data)
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
    <div className="site-wrapper d-flex flex-column justify-content-center">
      <div>
        <Helmet>
          <title>EduMe | T9-Converter 📱 </title>
        </Helmet>
      </div>
      <div className="top">
        <h2>T-9 Converter</h2>
        <p>This tool allows you to find words using T9 predictive text.<br />You can type or click the numbers to have them display.<br />Example, given the input 23 the output should be ad, ae, ad, bd, be, bf, cd, ce, cf.</p>
      </div>
      <div className="containers d-flex flex-column justify-content-center">
        <div className="display d-flex flex-column">
          <input className="userInput" type="number" value={input} onChange={changeInput} placeholder="E.g 23" />
          {result ? <p>{result.result.map((res, i) => {
            return <span key={i}>{res}</span>
          })}</p> : console.log(input)}
        </div>
        <Keyboard
          keyboardRef={r => (keyboard.current = r)}
          theme={'hg-theme-default hg=layout-numeric numeric-theme'}
          onChange={change}
          disableCaretPositioning={true}
          layout={{
            default: ['1 2 3', '4 5 6', '7 8 9', '{//} 0 {//}', '{bksp}'],
          }} />
      </div>
    </div>
  )
}

export default T9Converter
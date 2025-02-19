import React from 'react'
import { useState, createContext, useContext } from "react";
import run from '../config/Gemini';

export const Context = createContext()
const ContextProvider = (props)=>{
    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [previousPrompt, setPreviousPrompt] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [Loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")

const onSent=async(Input)=>{
    setResultData("")
    setLoading(true)
    setShowResult(true)
    setRecentPrompt(input)
   const res = await run(input)
   setResultData(res)
   setLoading(false)
   setInput("")
   console.log(res)
}

const contextValue={
previousPrompt,
setPreviousPrompt,
onSent,
setRecentPrompt,
recentPrompt,
input,
setInput,
showResult,
setShowResult,
Loading,
setLoading,
resultData,
setResultData
}
return(
    <Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>
)
}
export default ContextProvider
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
const delayPara=(index,nextWord)=>{

}

const onSent=async(Input)=>{
    setResultData("")
    setLoading(true)
    setShowResult(true)
    setRecentPrompt(input)
    setPreviousPrompt([...recentPrompt,input])
   const res = await run(input)
   let responseArray=res.split("**")
   
   let newRes="" ;
   for (let i = 0; i < responseArray.length; i++) {
     if (i === 0 || i % 2 !== 1) {
       newRes += responseArray[i];
     } else {
       newRes += "<b>" + responseArray[i] + "</b>";
     }
   }
   
   setResultData(newRes)
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
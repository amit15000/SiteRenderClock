import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(0);
  
  useEffect(()=>{
    setTimeout(()=>{
setCount(count=>count+1)
    },1000)
  })
  return (
    <>
<div> You have logged in since {count} seconds. </div>
    </>
  )
}

export default App

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
<div className='App'> 
  <h2> You have logged in since <span>{count}</span> seconds.</h2>
  </div>
    </>
  )
}

export default App

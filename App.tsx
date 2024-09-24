import { useEffect, useRef, useState } from 'react'
import './App.css'
import Child from './Child'
// useref hook sashualebas gvadzlevs mnishvnelobebi shevinaxot
//ise rom komopnentis rerenderis dros mnishvneloba ar davkargot
//usestatic inaxavs da ar kargavs mara useref jobia gamovikenot
// exla userefar kargavs tavis mnishvnelobas ar resetdeba
//saitze tu gvinda rom ar gamochndes mashin vikenebt ogond.
//nebismier mnishvnelobas heinaxavs string objcts arrays kvela elements
function App() {
 const [show,setShow] = useState(false)
 const counter = useRef(0)
 console.log(counter)

  return (
    <>
    <button onClick={()=>setShow(!show)} >show</button>
   {show ? <Child/> : null}
    
    <button onClick={()=>{
    counter.current++
    console.log(counter)
    }
      
    }>click me </button>
  
    
    </>
  )
}

export default App

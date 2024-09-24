import { useEffect, useRef, useState } from 'react'
import './App.css'
import Child from './Child'
// useref hook sashualebas gvadzlevs mnishvnelobebi shevinaxot
//ise rom komopnentis rerenderis dros mnishvneloba ar davkargot
//usestatic inaxavs da ar kargavs mara useref jobia gamovikenot
// exla userefar kargavs tavis mnishvnelobas ar resetdeba
//saitze tu gvinda rom ar gamochndes mashin vikenebt ogond.
//nebismier mnishvnelobas heinaxavs string objcts arrays kvela elements
// kvelaze xshirad inputebi inaxeba.
//exla gavaketebt inputshi chaweril rames davakonsolebt

function App() {
 const [show,setShow] = useState(false)
 const counter = useRef(0)
 const inputRef = useRef< HTMLInputElement >(null)

  return (
    <>
    <button onClick={()=>setShow(!show)} >show</button>
   {show ? <Child/> : null}
    
    <button 

     onClick={()=>{
    counter.current++
    console.log(counter)
    console.log(inputRef.current?.value) // chvenmier    chaweili value gamoprinta
    console.log(inputRef.current?.classList) //klasi gamoprinta, tuaraak ar gamoprintavs.
    }
      
    }>click me </button>
  
    <input type="text" ref={inputRef} className='srg'
     />
    </>
  )
}

export default App

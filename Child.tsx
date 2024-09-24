import { useEffect, useState } from 'react'
import './App.css'
// useeffect ikeneba roca gvinda rame moxdes, 
//raime komponentis gaxsnis dros.amistvis vikenbt
// funqciashi vatanat rac gvinda ro moxdes,
//mere [] aq vuwert rodis gvinda ro moxdes.
function Child() {
  {/* useeffect */}
  // komponenti ro chaitvirteba mere gaketdes rame
//   const [data, setData] = useState([])
//   const fetchData = async ()=>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     const data = await response.json()
//     console.log(data)
//     setData(data)
//   }
const [counter, setCounter] = useState(0)
  useEffect(()=>{
    //fetchData()
    console.log('gaizarda 1it')
}, [counter] )
//counter roca gaeshveba mere daakonsolebs
// aq iwereba rodis ganxorcieldes esfunqcia[]exla 
// chaitvirteba es funqciaroca apptsx gaeshveba
  return (
    <>
    <h2>child</h2>
    <h2 onClick={()=>setCounter(counter +1)}>{counter}</h2>
   {/* {data.map((item)=>{
    return (
        <div key={item.id}>
            <h2>{item.title}</h2>
        </div>
    )
   })} */}
    </>
  )
}

export default Child
